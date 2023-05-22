let contador_de_nao = 0;  
function moveButton() {
    contador_de_nao ++;
    let noButton = document.getElementById('no-button');
    let bodyWidth = document.body.clientWidth;
    let bodyHeight = document.body.clientHeight;

    let randomLeft = Math.floor(Math.random() * (bodyWidth - 100));
    let randomTop = Math.floor(Math.random() * (bodyHeight - 50));

    noButton.style.left = randomLeft + 'px';
    noButton.style.top = randomTop + 'px';
    noButton.style.position = 'absolute';
    noButton.style.transform = ' translateX(-50%)';

    if(contador_de_nao >= 5){
        alert('voce não se cansa de dizer não? diga logo sim uai.')
    }
}