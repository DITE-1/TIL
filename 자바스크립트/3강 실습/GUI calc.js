//입력 개체
var input = { 'array': [] };

//입력받은 수식을 문자열로 리턴
input.getInput = function () {
    return this.array.join("");
};

//입력 배열을 초기화
input.removeAll = function (str) {
    this.array = [];
    this.array.push(str);
}

//수식이 비었는지 검사
input.empty = function () {
    return this.array.length === 0;
}

//계산을 실행하기 전 준비 
input.prepareCalc = function() {
    this.array = this.array.join("").split(" ")
}

//첫번째 수식에서 값을 읽어옴
input.getValue = function () {
    var str = this.array.shift();
    var num1 = Number(str);
    return num1;
};


//수식에서 연산자를 읽어옴
input.getOperator = function () {
    var op = this.array.shift();
    if (op === "+" || op === "-" || op === "*" || op === "x" || op === "/") {
        return op;
    } else {
        return "$";
    }
};


//출력 객체

var output = {};
output.text = document.getElementById('output');

//계산 결과를 출력
output.print = function(str) {
    this.text.innerHTML = str;
}

//수식을 출력
output.display = function() {
    this.text.innerHTML = input.getInput();
}

//계산 담당 객체
var calculator = {}
calculator.calculate = function (num1, num2, op) {
    var ret;
    switch (op) {
        case "+":
            ret = num1 + num2;
            break;
        case "-":
            ret = num1 - num2;
            break;
        case "*":
            ret = num1 * num2;
            break;
        case "x":
            ret = num1 * num2;
            break;
        case "/":
            ret = num1 / num2;
            break;
        default:
            return NaN;
    }
    return ret;
};

//숫자 버튼의 핸들러 함수
var clickNumbers = function (event) {
    var str = event.target.innerHTML;
    console.log(str);

    if (str === '←') {
        input.array.pop();
    } else if (str === '+' || str === '-' || str === '*' || str === '/') {
        input.array.push(' ' + str + ' ');
    } else {
        input.array.push(str);
    }

    if (input.empty()) {
        output.text.innerHTML = "0";
    } else {
        output.display();
    }
}

// = 버튼의 핸들러 함수
var showResult = function (event) {
    input.prepareCalc();
    var result = input.getValue();
    while (!input.empty()) {
        var op = input.getOperator();
        var second = input.getValue();
        result = calculator.calculate(result, second, op);
    }
    output.print(result);
    input.removeAll(result);
}





