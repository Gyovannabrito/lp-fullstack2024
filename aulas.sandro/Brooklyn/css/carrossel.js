let slideIndex = 1; //posição indice, inicia 1
showSlides(slideIndex); //chama função que exibe os slides, passando o indice 1

// Next/previous controls
function plusSlides(n) {        //função que soma o indice + o valor de N, que pode ser +1 ou -1
    showSlides(slideIndex += n); //caso +1, avançará o slide, caso -1 retornará o slide
}

// Thumbnail image controls
function currentSlide(n) { //exibe o slide atual
    showSlides(slideIndex = n);
}

function showSlides(n) {  //função que exibe o slide
    let i; //indice da lista
    let slides = document.getElementsByClassName("mySlides"); //guarda nossas imagens na variavel slides

    //Impede que acessemos uma posição invalida(n < 1 ou  n > tamanho da lista)
    if (n > slides.length) {    //se chegarmos ao final e ainda assim avançarmos, seta o indice para a posição inicial
        slideIndex = 1;
    }
    if (n < 1) {                 //se estivermos no inicio e tentarmos voltar, seta o indice para a posição final
        slideIndex = slides.length;
    }

    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none"; //percorre a lista e oculta todos elementos, imagens
    }

    slides[slideIndex - 1].style.display = "block"; //exibe o elemento no indice atual com a propriedade block
}
