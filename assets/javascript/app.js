var startAtNumber = 60;
var pageRefreshNumber = 10;

var countDown;
var pageReset;

$("#start").on("click", start);
$("#time").text(startAtNumber);
$("#submit").on("click", submit);


function start() {
    $("#allQuestions").css("display", "block");
    countDown = setInterval(decrement, 1000);
    console.log("#time");
}


function decrement() {
    startAtNumber--;

    $("#time").text(startAtNumber);

    if (startAtNumber === 0) {
        stop();
        alert("Time is Up! Click the start button again to re-try");
        $("#start").attr("disabled", false);
    }
}

function stop() {
    clearInterval(countDown);
    startAtNumber = 60;
}

function submit() {
    $("#answers").css("display", "block");
    stop();

    if (startAtNumber !== 0) {
        alert("If you wish to try again, click the start button at the top of the page!");
        $("#start").attr("diabled", false);
    }
    var trueAnswer = $("input:radio[value=true]:checked");
        trueAnswer = trueAnswer.length;
        $("#correctAnswers").html(trueAnswer);

    var falseAnswer = $("input:radio[value=false]:checked");
        falseAnswer = falseAnswer.length;
        $("#inCorrectAnswers").html(falseAnswer);

    var notAnsweredCount = 0;
    for (var i = 1; i <= 10; i++) {
        var notAnswered = $("input:radio[name=q" + i + "]");
        for (var j = 0; j < notAnswered.length; j++) {
            if (notAnswered[j].checked) {
                break;
            } else if (j === notAnswered.length -1) {
                notAnsweredCount++;
            }
        }
        $("#notAnswered").html(notAnsweredCount);
    }
}
