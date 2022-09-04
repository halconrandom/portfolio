var contador = 0;
var textBox = document.getElementById('textBox');
var mql = window.matchMedia("screen and (max-width: 1280px)")

function change_text(){
    if (contador <= 9) {
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









// function optionNegativo(){
//     var contadorNegativo = 0;
//     document.getElementById('clickSound').play();
//     squareTextWelcome.style.display = "flex";
//     seleccionLista.style.display = "none";
//     if (contadorNegativo <= 3){
//         document.getElementById('clickSound').play();
//         contadorNegativo = contadorNegativo+1
//         if (contadorNegativo === 1){
//             textBox.innerHTML = 'Oh, well sometimes life is pretty harsh. But lets hope you can get better tomorrow.';
//         }
//     }
