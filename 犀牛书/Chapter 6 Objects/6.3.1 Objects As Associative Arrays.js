// 下面两个JavaScript表达式的值相同：
object.property
object["property"]

let addr = "";
for (let i = 0; i < 4; i++) {
    addr += customer[`address${i}`] + "\n";
}

function addstock(portfolio, stockname, shares) {
    portfolio[stockname] = shares;
}


function computeValue(portfolio) {
    let total = 0.0;
    for (let stock in portfolio) { // For each stock in the portfolio:
        let shares = portfolio[stock]; // get the number of shares
        let price = getQuote(stock); // look up share price
        total += shares * price; // add stock value to total value
    }
    return total; // Return total value.
}

// ES6有map了，就可以不这么用了