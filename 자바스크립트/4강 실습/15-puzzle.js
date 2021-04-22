//html elements
var word = document.getElementById('word1') // answer
var word2 = document.getElementById('word2') //button
var check = document.getElementById('check') //word1 === word2?
var progress = document.getElementById('progress') // progress check
var time = document.getElementById('time')

// game object 
var game = {
    'btns': [],
    'maxPlay': 3,
    'current': 0
};

game.starTime = Date.now();

game.wordlist = 'almond,headphone,horizon,speaker,tissue,hat,socks,clothes'.split(',')

//choose 1 word from wordlist
game.choose = function () {
    var idx = Math.floor(Math.random() * this.wordlist.length)
    this.answer = this.wordlist[idx]
    word.innerHTML = this.answer;
    this.letters = this.answer.split('')
};

game.choose();

game.addButtons = function () {
    for (var i = 0; i < this.letters.length; i++) {
        var btn = document.createElement("button");
        btn.innerHTML = this.letters[i]
        word2.appendChild(btn)
        this.btns.push(btn)
    }
};

game.isCorrect = function () {
    return this.answer === this.letters.join('')
}

game.updateDisplay = function () {
    if (this.isCorrect()) {
        check.innerHTML = "일치합니다."
    } else {
        check.innerHTML = "일치하지 않습니다."
    }
};

game.refresh = function () {
    this.choose();
    this.addButtons();
    this.updateDisplay();
};

game.refresh();

game.copyBtnText = function () {
    for (var i = 0; i < this.letters.length; i++) {
        this.btns[i].innerHTML = this.letters[i];
    }
};

game.swap = function () {
    var temp = [];
    //copy and swap
    while (game.letters.length != 0) {
        var s = game.letters.pop();
        temp.push(s);
    }

    game.letters = temp;
    game.copyBtnText();
    game.updateDisplay();
}

game.Rshift = function () {
    var s = game.letters.pop();
    game.letters.unshift(s)
    game.copyBtnText();
    game.updateDisplay();
}

game.Lshift = function () {
    var s = game.letters.shift();
    game.letters.push(s)
    game.copyBtnText();
    game.updateDisplay();
}

game.progress = function () {
    if (game.isCorrect()) {
        game.current++;
        F5();
        var str = "";
        for (var i = 0; i < game.current; i++) {
            str += "O"
        }
        progress.innerHTML = str;
    }

    if (game.current === game.maxPlay) {
        var result = (Date.now() - game.starTime) / 1000
        alert("Thank you for playing! Your Record:" +result +" sec")
        clearInterval(x);
    }
}

//event handler for swap button
var swap = function () {
    game.swap();
    game.progress();
};

var Rshift = function () {
    game.Rshift();
    game.progress();
};

var Lshift = function () {
    game.Lshift();
    game.progress();
};

//shuffle
game.shuffle = function () {
    var toggle = Math.floor(Math.random() * 2) === 0

    if (toggle) {
        game.swap();
    }

    var n = Math.floor(Math.random() * (game.letters.length -1))

    for (i = 0; i < n; i++) {
        game.Rshift();
    }
};
game.shuffle();

var updateTime = function () {
    now = Date.now() - game.starTime;
    time.innerHTML = "time : " +(now/1000) +"sec"
}

var reset = function () {
    for (var i = 0; i < game.btns.length; i++) {
        word2.removeChild(game.btns[i])
    }
    game.btns = [];
    // var spell = document.querySelector('#word2');
    // while (spell.childNodes.length != 0) {
    //     spell.removeChild(spell.childNodes[0])
    // };
};


var F5 = function () {
    reset();
    game.refresh();
    game.shuffle();
};

var x = setInterval(updateTime, 100)