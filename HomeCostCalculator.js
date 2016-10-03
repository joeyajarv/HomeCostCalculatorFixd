/**
 *   @author Jarvenpaa, Josiah (josiahjarvenpaa@live.com)
 *   @version 0.0.1
 *   @summary Salary.js code || created: 09.20.2016
 *   @todo
 */

"use strict";
const PROMPT = require('readline-sync');

const BASE_PRICE = 50000;
const BEDROOM_PRICE = 17000;
const BATHROOM_PRICE = 12500;
const GARAGE_CAR_PRICE = 6000;

let numLot, numBedrooms, numBathrooms, numGarageCars, numTotalCost;

function main() {
    setNumLot();
    setNumBedrooms();
    setNumBathrooms();
    setNumGarageCars();
    setNumTotalCost();
    giveTotalCost();
}

main();

function setNumLot() {
    numLot = PROMPT.question(`\nPlease enter number of lot: `);
}

function setNumBedrooms() {
    numBedrooms = PROMPT.question(`\nPlease enter number of bedrooms: `);
}

function setNumBathrooms() {
    numBathrooms = PROMPT.question(`\nPlease enter number of bathrooms: `);
}

function setNumGarageCars() {
    numGarageCars = PROMPT.question(`\nPlease enter number of cars in garage: `);
}

function setNumTotalCost() {
    numTotalCost = BASE_PRICE + BEDROOM_PRICE * numBedrooms + BATHROOM_PRICE * numBathrooms + GARAGE_CAR_PRICE * numGarageCars;
}

function giveTotalCost() {
    console.log(`\nTotal house cost for lot ${numLot} is: ${numTotalCost}`);
}