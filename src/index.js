const OP = {
    "+" : (a, b) => a + b,
    "-" : (a, b) => a - b,
    "*" : (a, b) => a * b,
    "/" : (a, b) => a / b
}

function eval() {
   
    return;
}

function expressionCalculator(expr) {
    let checker = expr.split(" ").filter(e => e != "").join("");

    if ( checker.replace(/[^(]/g, "").length != checker.replace(/[^)]/g, "").length ) {
        throw new Error("ExpressionError: Brackets must be paired");
      }  
      
      if ( checker.includes("/0") ) {
          throw new Error("TypeError: Division by zero.");
      }
}

module.exports = {
    expressionCalculator
}