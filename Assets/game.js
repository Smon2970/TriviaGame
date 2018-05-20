


var totalQuestions = 15;
var right = 0;
var wrong = 0;
var time = 60;


//correct answers

var answers = ["b", "c", "c", "c", "c", "a", "b", "b", "a", "a", "b", "c", "c", "b", "b"],
    display = $('#timer');

//countDown function

var myTimer = setInterval(function () {

    time--;
    display.text(time);

    if (time < 0) {
        setTimeout(function () {
            clearTimeout(myTimer);
        }, 1000);
        handleClick();
        reset();
    };
}, 1000);

//check answers function

function handleClick() {
    var amountCorrect = 0;
    for (i = 1; i <= totalQuestions; i++) {
        var radios = document.getElementsByName("q" + i);
        for (var j = 0; j < radios.length; j++) {
            var radio = radios[j];
            if (radio.value == "correct" && radio.checked) {
                amountCorrect++;}
        }
    }

    alert('You scored' + '\n' + amountCorrect +'\n' + 'out of' + '\n' + totalQuestions);
   
};

function reset(){
    time=clearTimeout(myTimer);
        console.log(reset)

}

