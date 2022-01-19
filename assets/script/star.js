function putStars() {
    var w = document.getElementById('main').clientWidth;
    var h = document.getElementById('main').clientHeight;
    var i = 1;
    var limit = getRndInteger(400, 900);

    var starColor = "orange";

    while (i < limit) {
        var topPosition = getRndInteger(1, h);
        var leftPosition = getRndInteger(1, w);
        var scale = getRndInteger(1, 10) / 10;
        var starRand = getRndInteger(1, 3);
        if (starRand == 1) {
            starColor = "yellow";
        }
        else if (starRand == 2) {
            starColor = "lightblue";
        }
        else {
            starColor = "white";
        }
        starNormal(starColor, topPosition, leftPosition, scale);
        i++;
    }

}

function getRndInteger(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

function starNormal(starColor, topPosition, leftPosition, scale) {
    var topPosition = topPosition - 90;
    var leftPosition = leftPosition - 5;
    var scale = scale;

    var drawnStar = document.createElement('div');
    drawnStar.setAttribute("id", "star");

    //var text = document.createTextNode("✦");
    //drawnStar.appendChild(text)
    
    drawnStar.setAttribute("style", "background-color: " + starColor + "; top: " + topPosition + "px; " +
        "left: " + leftPosition + "px; " + "transform: scale(" + scale + ")");
    document.getElementById("stars").appendChild(drawnStar);
}

putStars()