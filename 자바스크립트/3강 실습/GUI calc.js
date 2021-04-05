        var input = {'array':[]};

        input.getInput = function() {
            return this.array.join("");
        };

        var output = {};
        output.text = document.getElementById('output');

        var clickNumbers = function(event) {
            var str=event.target.innerHTML;
            console.log(str);

            switch (str) {
                case '←' :
                input.array.pop();
                break;
                case '+' :
                input.array.push(' '+str+' ');
                break;
                case '-':
                input.array.push(' '+str+' ');
                break;
                case '*':
                input.array.push(' '+str+' ');
                break;
                case '/':
                input.array.push(' '+str+' ');
                break;
                default:
                input.array.push(str);
            }

            if (input.array.length === 0) {
                output.text.innerHTML = "0";                
            } else {
              output.text.innerHTML = input.getInput();
            }
        }



        var showResult = function(event) {
            console.log("Result")
            console.log(event.target.innerHTML)
        }


        
        // input.init =function(str) {
        //     this.list = str.split("");
        // }

        // input.empty = function () {
        //     return this.list.length === 0;
        // }

        // input.getValue = function() {
        //     var str = this.list.shift();
        //     var num1 = Number(str);
        //     return num1;
        // };
        
        // input.getOperator = function() {

        //     var op = this.list.shift();
        //     if (op === "+" || op === "-" || op === "*" || op === "x" || op === "/" ) {
        //         return op;
        //     } else {
        //         return "$"
                    
        //     }
        // };
        
        // var calculator = {}
        // calculator.calculate = function(num1, num2, op) {
        //     var ret;
        //     switch (op) {
        //         case "+":
        //         ret = num1 + num2;
        //         break;
        //         case "-":
        //         ret = num1 - num2;
        //         break;
        //         case "*":
        //         ret = num1 * num2;
        //         break;
        //         case "x":
        //         ret = num1 * num2;
        //         break;
        //         case "/":
        //         ret = num1 / num2;
        //         break;
        //         default:
        //         return NaN;
        //     }
        //     return ret;
        // };
           
        // var output = {};
        // output.out = document.getElementById("return");
        // output.print = function(result) {
        //     this.out.innerHTML= "최종 결과값은 "+ result + "입니다.";
        // };    

      
        // function calc() {
        //     var str = document.getElementById('input').value;
        //     input.init(str);
        //     var result = input.getValue();
        //     while (!input.empty()) {
        //         var op = input.getOperator();
        //         var second = input.getValue();
        //         result = calculator.calculate(result, second, op);
        //     }
        //     output.print(result);
        // }
        