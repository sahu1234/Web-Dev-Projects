var arrayForStoring = [];
function addFeedback(){
    arrayForStoring.push(document.getElementById("feedback").value);
    document.getElementById("result").innerHTML = "<h2>" + "Feedback Details " + "</h2>"+"<h3>"+"Successfully Added Feedback Details!"+"</h3>";
    document.getElementById("feedback").value = "";
}

function displayFeedback(){
    var i = 1;
    document.getElementById("result").innerHTML = "";
    document.getElementById("result").innerHTML += "<h2>" + "Feedback Details " + "</h2>";
    for (var element in arrayForStoring) {
        document.getElementById("result").innerHTML += "Feedback " + i++ + "<br>" + arrayForStoring[element] + "<br>";
    }
    arrayForStoring = [];
}