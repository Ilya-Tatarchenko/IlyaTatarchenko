var modal = document.getElementById('myModal-Logos');
var modal1 = document.getElementById('myModal-FCE');


var btnLogos = document.getElementById("Logos");
var btnFCE = document.getElementById("FCE");


var span = document.getElementsByClassName("close")[0];


btnLogos.onclick = function() {
    modal.style.display = "block";
}

btnFCE.onclick = function() {
    modal1.style.display = "block";
}


span.onclick = function() {
    modal.style.display = "none";
    modal1.style.display = "none";
}


window.onclick = function(event) {
    if (event.target == modal || event.target == modal1) {
        modal.style.display = "none";
        modal1.style.display = "none";
    }
}