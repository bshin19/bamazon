# BAMAZON

## Bamazon Overview
Bamazon is an app that utilizes:
+ Javascript
+ Node.JS
+ Node Inquirer
+ MySQL

Initially, it loads a list of items sold by the storefront.\
![init cmd](https://github.com/bshin19/bamazon/blob/master/images/bam1.PNG)

Inputting a number into the inquirer field updates the highlighted selection to the associated item.
![highlight](https://github.com/bshin19/bamazon/blob/master/images/bam2.PNG)

Any string provided that doesn't match the ID of an item will be discarded and the user asked to provide a new input. \
After an appropriate input is provided, the user is asked the quantity of the item they would like to buy.
![quantity cmd](https://github.com/bshin19/bamazon/blob/master/images/bam3.PNG)

![quantity cmd](https://github.com/bshin19/bamazon/blob/master/images/bam4.PNG)

The application takes the quantity provided and multiplies that by the cost of the item in the SQL database to determine the total cost of the purchase.
![cost cmd](https://github.com/bshin19/bamazon/blob/master/images/bam5.PNG)

The user is then prompted with the option to shop more. It branches based on yes/no.

If yes:
+ The application loops back to the initial ask of items to purchase. Note that the quantity of Shell Hair Pins has decreased by the three that the user selected.
![yes cmd](https://github.com/bshin19/bamazon/blob/master/images/bam6.PNG)

If no:
+ The application thanks the user for their shopping and all activites are ended.
![no cmd](https://github.com/bshin19/bamazon/blob/master/images/bam7.PNG)