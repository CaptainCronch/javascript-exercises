/*
Write a javascript program that takes in a string that 
contains a Reverse Polish Notation expression and 
returns the result of the expression. Use your stack 
and queue implementation to help you with the algorithm.

Examples:
    Input: 4 5 *
    Result: 20
    Input: 3 5 10 + * 
    Result: 45

Note: the expression will always have space separated 
    inputs like "4 5 *" rather than "45*" or "4 4*"
*/

function rpn(string) {
    var input = string
    var operators = new Stack
    var operands = new Stack
    var expression = new Stack
    var current_value = input.match(/([0-9]+)|([^0-9\s])/gi)

    for (x in current_value) {
        if (current_value[x].match(/([0-9]+)/i)){ // if number then add to stack
            expression.push(parseFloat(current_value[x]))
        } else { // if operator take 2 numbers and operate on then and then push the result back on
            switch(current_value[x]){
                case "+":
                    expression.push(expression.pop() + expression.pop()); break;
                case "-":
                    expression.push(expression.pop() - expression.pop()); break;
                case "*":
                    expression.push(expression.pop() * expression.pop()); break;
                case "/":
                    expression.push(expression.pop() / expression.pop()); break;
                case "%":
                    expression.push(expression.pop() % expression.pop()); break;
            }
        }
    }
    
    // while (expression.size() > 1) {
    //     for (x in expression) {
    //         if (current_value[x].match(/([0-9]+)/i)){ // if number then add to stack
    //             expression.push(current_value[x])
    //         } else { // if operator take 2 numbers and operate on then and then push the result back on
    //             switch(current_value[x]){
    //                 case "+":
    //                     expression.push(expression.pop() + expression.pop()); break;
    //                 case "-":
    //                     expression.push(expression.pop() - expression.pop()); break;
    //                 case "*":
    //                     expression.push(expression.pop() * expression.pop()); break;
    //                 case "/":
    //                     expression.push(expression.pop() / expression.pop()); break;
    //                 case "%":
    //                     expression.push(expression.pop() % expression.pop()); break;
    //             }
    //         }
    //     }
    // }

    // while (expression.match(/[^0-9\s]/i) != null) {
    //     console.log(`found ${expression.match(/[^0-9\s]/i)}`)
    //     operators.push(expression.match(/[^0-9\s]/i))
    //     expression = expression.replace(/[^0-9\s]/i, "")
    // }

    // while (expression.match(/[0-9]+/i) != null) {
    //     console.log(`found ${expression.match(/[0-9]+/i)}`)
    //     operands.push(parseFloat(expression.match(/[0-9]+/i)))
    //     expression = expression.replace(/[0-9]+/i, "")
    // }

    // while (operands.size() > 1 && operators.size() > 0) {
    //     console.log(operators.peek())
    //     switch (operators.peek()) {
    //         case "+":
    //             if (current_value == null) {current_value = operands.pop() + operands.pop()}
    //             else {current_value += operands.pop()}
    //             break
    //         case "-":
    //             if (current_value == null) {current_value = operands.pop() - operands.pop()}
    //             else {current_value -= operands.pop()}
    //             break
    //         case "*":
    //             if (current_value == null) {current_value = operands.pop() * operands.pop()}
    //             else {current_value *= operands.pop()}
    //             break
    //         case "/":
    //             if (current_value == null) {current_value = operands.pop() / operands.pop()}
    //             else {current_value /= operands.pop()}
    //             break
    //         case "%":
    //             if (current_value == null) {current_value = operands.pop() % operands.pop()}
    //             else {current_value %= operands.pop()}
    //     }
    //     operators.pop()
    // }

    return expression.data[0]
}
