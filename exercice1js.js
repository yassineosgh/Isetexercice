function choisir(){
    var choix = document.getElementsByName("choix");
    if (choix[0].checked) {
        alert("Vous avez choisi l'atelier : " + choix[0].value);
    }
    else if (choix[1].checked) {
        alert("Vous avez choisi  l'atelier : " + choix[1].value);
        
    }
    else if (choix[2].checked) {
        alert("Vous avez choisi  l'atelier : " + choix[2].value);
        
    }
    else {
        alert("Vous n'avez pas choisi d'atelier");
    }
}