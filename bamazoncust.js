var mysql = require("mysql");
var inquirer = require("inquirer");

// create the connection information for the sql database
var connection = mysql.createConnection({
    host: "localhost",

    // Your port; if not 3306
    port: 3306,

    // Your username
    user: "root",

    // Your password
    password: "root",
    database: "bamazondb"
});

// connect to the mysql server and sql database
connection.connect(function (err) {
    if (err) throw err;
    // run the start function after the connection is made to prompt the user
    //start();
    custBuy();
});

function custBuy() {
    // query the database for all items being auctioned
    connection.query("SELECT * FROM bamazon", function (err, results) {
        if (err) throw err;
        // once you have the items, prompt the user for which they'd like to bid on
        inquirer.prompt([
                {
                    name: "choice",
                    type: "rawlist",
                    choices: function () {
                        var choiceArray = [];
                        for (var i = 0; i < results.length; i++) {
                            var name = results[i].product_name;
                            var dept = results[i].department;
                            var cost = results[i].cost;
                            var stock = results[i].stock;
                            choiceArray.push(name + ". $" + cost + " ea. " + stock + " available. Contact " + dept + " department.");
                        }
                        return choiceArray;
                    },
                    message: "What is the ID of the item you'd like to purchase?"
                },
                {
                    name: "number",
                    type: "input",
                    message: "How many would you like to buy?"
                }
            ])
            .then(function (answer) {
                // get the information of the chosen item
                var chosenItem;
                for (var i = 0; i < results.length; i++) {
                    if (answer.choice.includes(results[i].product_name)) {
                        chosenItem = results[i];
                    };
                };

                if (chosenItem.stock > parseInt(answer.number)) {
                    connection.query(
                        "UPDATE bamazon SET ? WHERE ?",
                        [
                            {
                                stock: chosenItem.stock - answer.number
                            },
                            {
                                id: chosenItem.id
                            }
                        ],
                        function (error) {
                            if (error) throw err;
                        });
                    var totCost = answer.number * chosenItem.cost;
                    totCost = totCost.toFixed(2);

                    console.log("The total cost of this purchase was $" + totCost);
                    inquirer.prompt([{
                        name: "resume",
                        type: "confirm",
                        message: "Buy something else?"
                    }]).then(function(answer) {
                        if (answer.resume) {
                            custBuy();
                        } else {
                            console.log("Thank you for your patronage.");
                            connection.end();
                        };
                    });
                } else {
                    console.log("That item isn't available in such quantity. Please buy less or another item.");
                    custBuy();
                };
            });
    });
};