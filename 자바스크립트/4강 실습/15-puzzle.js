//html elements
var word = document.getElementById('word1') // answer
var word2 = document.getElementById('word2') //button
var check = document.getElementById('check') //word1 === word2?

// game object 
var game = { 'btns': [] };
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

game.updateDisplay = function () {
    var gameStr = this.letters.join('');
    if (this.answer === gameStr) {
        check.innerHTML = "일치합니다."
    } else {
        check.innerHTML = "일치하지 않습니다."
    }
};

game.refresh = function () {
    this.choose();
    this.addButtons();
    this.updateDisplay();
}
game.refresh();

game.copyBtnText = function () {
    for (var i = 0; i < this.letters.length; i++) {
        this.btns[i].innerHTML = this.letters[i];
    }
};

//event handler for swap button
var swap = function () {
    var temp = [];
    //copy and swap
    while (game.letters.length != 0) {
        var s = game.letters.pop();
        temp.push(s);
    }

    game.letters = temp;
    game.copyBtnText();
    game.updateDisplay();
};

var Rshift = function () {
    var s = game.letters.pop();
    game.letters.unshift(s)
    game.copyBtnText();
    game.updateDisplay();
};

var Lshift = function () {
    var s = game.letters.shift();
    game.letters.push(s)
    game.copyBtnText();
    game.updateDisplay();
};

//shuffle
game.shuffle = function () {
    var toggle = Math.floor(Math.random() * 2) === 0

    if (toggle) {
        swap();
    }

    var n = Math.floor(Math.random() * game.letters.length)

    for (i = 0; i < n; i++) {
        Rshift();
    }
};
game.shuffle();

var F5 = function () {
    game.refresh();
    game.shuffle();
}