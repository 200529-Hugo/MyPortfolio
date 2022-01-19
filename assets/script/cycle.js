var elements = ['header', 'navA1', 'navA2', 'navA3', 'navA4', 'main', 'mainP', 'info', 'footer']
function cycle() {
    for (let i = 0; i < elements.length; i++) {
        const element = elements[i];
        var num = document.getElementById(element);
        navCheck = element.slice(0, 4)
        if(navCheck == 'navA'){
            num.classList.toggle("navA-day");
        }else{
            num.classList.toggle(element + "-day");
        }
        
    }
    var x = document.getElementById("stars");
    if (x.style.display === "none") {
        x.style.display = "block";
    } else {
        x.style.display = "none";
    }
}