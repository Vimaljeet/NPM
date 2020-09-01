# What is this?

Get all the profitLoss formulas using this handy npm module. 

# Installation 

`npm i profitLossFormulas --save` 

Then...

```
import { profitLossFormulas } from 'profitLossFormulas';

// To calculate if there is a profit or loss
let prOrLo = profitLossFormulas().profitOrLoss(sellingPrice,costPrice);
console.log(prOrLo);

// To calculate profit or loss percentage
let prOrLoPercent = profitLossFormulas().profitOrLossPercent(sellingPrice,costPrice);
console.log(prOrLoPercent);

// To calculate if there is a profit or loss
let prOrLo = profitLossFormulas().profitOrLoss(sellingPrice,costPrice);
console.log(prOrLo);

// To calculate selling price when profit occured
let sellingP = profitLossFormulas().sellingPriceWhenProfit(profit,costPrice);
console.log(sellingP); 

// To calculate selling price when loss occured
let sellingP = profitLossFormulas().sellingPriceWhenLoss(loss,costPrice);
console.log(sellingP);

// To calculate cost price when profit occured
let costP = profitLossFormulas().costPriceWhenProfit(profit,sellingPrice);
console.log(costP); 

// To calculate cost price when loss occured
let costP = profitLossFormulas().costPriceWhenLoss(loss,sellingPrice);
console.log(costP);

```
