//Global variables
var startAtNumber = 60;
//can't figure how to have the submit button use this variable
var pageRefreshNumber = 10;

//variables for the timer countdown.
var countDown;
var pageReset;

//on button start, time id reflect startingNumber, and submit button functionality
$("#start").on("click", start);
$("#time").text(startAtNumber);
$("#submit").on("click", submit);

//function to activate the start button
function start() {
    $("#allQuestions").css("display", "block");
    countDown = setInterval(decrement, 1000);
    console.log("#time");
}

//function to start the countdown timer and reflect that on the dom.
function decrement() {
    startAtNumber--;

    $("#time").text(startAtNumber);
    //if the page hits 0, the timer will use stop function and alert the user.
    if (startAtNumber === 0) {
        stop();
        alert("Time is Up! Click the start button again to re-try");
        $("#start").attr("disabled", false);
    }
}
//function to stop timer and reset countDown and startAtNumber to 60.
function stop() {
    clearInterval(countDown);
    startAtNumber = 60;
}
//function for the submit button to push the answered, notanswered, and incorrect answers to the DOM.
function submit() {
    $("#answers").css("display", "block");
    stop();
    //if the page has not hit 0 when the submit button is clicked, the timer will stop, and only re-start once the start button is clicked.
    if (startAtNumber !== 0) {
        alert("If you wish to try again, click the start button at the top of the page!");
        $("#start").attr("diabled", false);
    }
    // if the value of input:radio is true, and it is checked, the #correctAnswers id will reflect how many were correct.
    var trueAnswer = $("input:radio[value=true]:checked");
        trueAnswer = trueAnswer.length;
        $("#correctAnswers").html(trueAnswer);
    // if the value of input:radio is false, and it is checked, the #inCorrectAnswers id will reflect how many were inCorrect.
    var falseAnswer = $("input:radio[value=false]:checked");
        falseAnswer = falseAnswer.length;
        $("#inCorrectAnswers").html(falseAnswer);
    // if the question was not answered, create a for loop for the ones answered, and the ones un-answered. Then add to the notAnswered count.
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
        //push the notAnsweredCount to the html.
        $("#notAnswered").html(notAnsweredCount);
    }
}
