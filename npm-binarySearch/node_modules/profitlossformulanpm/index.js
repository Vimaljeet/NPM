const profitLossFormulas = {
    
    profitOrLoss : (sp,cp) => {
        if(sp >= cp){ 
            return  ['profit',sp-cp];
        }
        else{
            return ['loss',cp-sp];
        }
    },

    profitOrLossPercent : (sp,cp) => {
        let temp = profitOrLoss(sp,cp);
        if(temp[0] === 'profit'){
            return ['profit%',(temp[1]*100)/cp];
        }
        else{
            return ['loss%',(temp[1]*100)/cp];
        }
    },

    sellingPriceWhenProfit : (pr,cp) => {
        return cp*(1+(pr/100));
    },

    sellingPriceWhenLoss : (ls,cp) => {
        return cp*(1-(ls/100));       
    },

    costPriceWhenProfit : (pr,sp) => {
        return sp/(1+(pr/100));
    },

    costPriceWhenLoss : (ls,sp) => {
        return sp/(1-(ls/100));
    }
}

module.exports.profitLossFormulas = profitLossFormulas;