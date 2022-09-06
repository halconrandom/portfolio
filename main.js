var contador = 0;
var textBox = document.getElementById('textBox');
var mql = window.matchMedia("(max-width: 1280px)")

function change_text(){
    if (contador <= 30) {
        document.getElementById('clickSound').play();
        contador = contador+1;

        if (contador === 1) {
            textBox.innerHTML = 'Mucho gusto, soy Sasha.';

        } else if (contador === 2) {
            document.getElementById('textBoxWelcome2');
            textBox.style.display ="none"
            textBoxWelcome2.style.display = "flex"
        } else if (contador === 3) {
            document.getElementById('textBoxWelcome3');
            textBoxWelcome2.style.display ="none"
            textBoxWelcome3.style.display = "flex"
        }  else if (contador === 4) {
            textBoxWelcome3.style.display ="none"
            textBoxWelcome4.style.display = "flex"


        }  else if (contador === 5) {
            document.getElementById('textBoxWelcome5');
            document.getElementById('frameCat');
            frameCat.style.opacity = "1";
            document.getElementById('meowEffect').play();
            document.getElementById('squareTextWelcome');
            squareTextWelcome.style.display = "none";
            document.getElementById('squareTextWelcome2');
            squareTextWelcome2.style.display = "flex";
            textBoxWelcome5.style.display = "flex"
            document.getElementById('textBoxWelcome5');

        }  else if (contador === 6) {
            document.getElementById('textBoxWelcome6');
            textBoxWelcome5.style.display ="none"
            textBoxWelcome6.style.display = "flex"
        }  else if (contador === 7) {
            document.getElementById('textBoxWelcome7');
            textBoxWelcome6.style.display ="none"
            textBoxWelcome7.style.display = "flex"
        }  else if (contador === 8) {
            document.getElementById('buttonSeleccion');
            buttonSeleccion.style.display = "flex"
        }
    };

}

var contadorGithub = 0;
var textBoxGithub = document.getElementById('textBoxGithub0');
var mql = window.matchMedia("(max-width: 1280px)")

function change_text2(){
    if (contadorGithub <= 10) {
        document.getElementById('clickSound').play();
        contadorGithub = contadorGithub+1;

        if (contadorGithub === 1) {
            document.getElementById('textBoxGithub1');
            textBoxGithub0.style.display ="none"
            textBoxGithub1.style.display = "flex"

        } else if (contadorGithub === 2) {
            document.getElementById('textBoxGithub2');
            textBoxGithub1.style.display ="none"
            textBoxGithub2.style.display = "flex"
        } else if (contadorGithub === 3) {
            document.getElementById('textBoxGithub3');
            textBoxGithub2.style.display ="none"
            textBoxGithub3.style.display = "flex"
        } else if (contadorGithub === 4) {
            document.getElementById('textBoxGithub4');
            textBoxGithub3.style.display ="none"
            textBoxGithub4.style.display = "flex"
        } else if (contadorGithub === 5) {
            document.getElementById('textBoxGithub5');
            textBoxGithub4.style.display ="none"
            textBoxGithub5.style.display = "flex"
            document.getElementById('githubtrolButton');
            githubtrolButton.style.display = "flex"
        } else if (contadorGithub === 6) {
            document.getElementById('textBoxGithub6');
            textBoxGithub5.style.display ="none"
            textBoxGithub6.style.display = "flex"
            githubtrolButton.style.display = "none"
        } else if (contadorGithub === 7) {
            document.getElementById('textBoxGithub7');
            document.getElementById('githubButton');
            textBoxGithub6.style.display ="none"
            textBoxGithub7.style.display = "flex"
            githubButton.style.display = "flex"
        } else if (contadorGithub === 8) {
            document.getElementById('textBoxGithub8');
            textBoxGithub7.style.display ="none"
            textBoxGithub8.style.display = "flex"
        }
    }   
}


var contadorContacto = 0;
var textBoxGithub = document.getElementById('textBoxGithub0');
var mql = window.matchMedia("(max-width: 1280px)")

function change_text3(){
    if (contadorContacto <= 7) {
        document.getElementById('clickSound').play();
        contadorContacto = contadorContacto+1;

        if (contadorContacto === 1) {
            document.getElementById('textBoxGithub1');
            textBoxGithub0.style.display ="none"
            textBoxGithub1.style.display = "flex"

        } else if (contadorContacto === 2) {
            document.getElementById('textBoxGithub2');
            textBoxGithub1.style.display ="none"
            textBoxGithub2.style.display = "flex"
        } else if (contadorContacto === 3) {
            document.getElementById('textBoxGithub3');
            textBoxGithub2.style.display ="none"
            textBoxGithub3.style.display = "flex"
        } else if (contadorContacto === 4) {
            document.getElementById('textBoxGithub4');
            textBoxGithub3.style.display ="none"
            textBoxGithub4.style.display = "flex"
        } else if (contadorContacto === 5) {
            document.getElementById('textBoxGithub5');
            textBoxGithub4.style.display ="none"
            textBoxGithub5.style.display = "flex"
            document.getElementById('contactoDiv');
            contactoDiv.style.display = "flex"
        } else if (contadorContacto === 6) {
            document.getElementById('textBoxGithub5');
            textBoxGithub5.style.display ="none"
            textBoxGithub6.style.display = "flex"

        }
        
    }   
}

var contadorInfo = 0;
var textBoxGithub = document.getElementById('textBoxGithub0');
var mql = window.matchMedia("(max-width: 1280px)")

function change_text4(){
    if (contadorInfo <= 9) {
        document.getElementById('clickSound').play();
        contadorInfo = contadorInfo+1;

        if (contadorInfo === 1) {
            document.getElementById('textBoxGithub1');
            textBoxGithub0.style.display ="none"
            textBoxGithub1.style.display = "flex"

        } else if (contadorInfo === 2) {
            document.getElementById('textBoxGithub2');
            textBoxGithub1.style.display ="none"
            textBoxGithub2.style.display = "flex"
        } else if (contadorInfo === 3) {
            document.getElementById('textBoxGithub3');
            textBoxGithub2.style.display ="none"
            textBoxGithub3.style.display = "flex"
        } else if (contadorInfo === 4) {
            document.getElementById('textBoxGithub4');
            textBoxGithub3.style.display ="none"
            textBoxGithub4.style.display = "flex"
        } else if (contadorInfo === 5) {
            document.getElementById('textBoxGithub5');
            textBoxGithub4.style.display ="none"
            textBoxGithub5.style.display = "flex"
        } else if (contadorInfo === 6) {
            document.getElementById('textBoxGithub6');
            textBoxGithub5.style.display ="none"
            textBoxGithub6.style.display = "flex"
            // document.getElementById('infoPersonalDiv')
            // infoPersonalDiv.style.display = "flex"
        } else if (contadorInfo === 7) {
            document.getElementById('textBoxGithub7');
            textBoxGithub6.style.display ="none"
            textBoxGithub7.style.display = "flex"
        }        
    }   
}
