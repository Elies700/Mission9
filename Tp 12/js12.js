function calcul_moyenne() {
  var n1 = prompt("Donner la première note :");
  var n2 = prompt("Donner la deuxième note :");
  var n3 = prompt("Donner la troisième note :");

  var somme = Number(n1) + Number(n2) + Number(n3);

  document.write("Voici la somme : " + somme + "<br>");
  var moyenne = somme / 3;

  document.write("Voici la moyenne : " + moyenne + "<br>");

  if (moyenne < 10) {
    document.write("Redoublant");
  } else if(moyenne < 12){
    document.write(" Admis – Passable");
  }
  else if(moyenne < 14){
    document.write("Admis – Bien");
  }
  else {
    document.write("Admis – Très bien");
  }
  document.write(" <br> ")
  document.write(" <br> ")
  document.write(" <br> ")
  document.write('<a href="tp12.html">Retour</a>');
}
function temp() {
      var n3 = prompt("Donner la température en °C");
    if (Number(n3) < 10) {
    document.write("Il fait" + " "+Number(n3)+"°C." +" "+ "Il fait froid");
  } else if(Number(n3) < 25){
    document.write("Il fait" + " "+Number(n3)+"°C." +" "+ "C'est normal");
  }
  else {
    document.write("Il fait" + " "+Number(n3)+"°C." +" "+ "Il fait chaud");
  }
document.write(" <br> ")
document.write(" <br> ")
document.write(" <br> ")
  document.write('<a href="tp12.html">Retour</a>');
}
function comparaison() {
    var n1 =prompt("Donner un nombre:");
    var n2 =prompt("Donner un autre nombre:");

    if (n1 > n2){
        document.write("le plus grand est " + n1 + " et le plus petit est"+n2);
    }
        else if ( n1 < n2 ){{
            document.write("le plus grand est " + n2 + " et le plus petit est"+ n1)
        }

        }
             else{
                document.write("les deux nombres sont égaux.")
                
             }
document.write(" <br> ")
document.write(" <br> ")
document.write(" <br> ")
          
             document.write('<a href="tp12.html">Retour</a>');
    }
