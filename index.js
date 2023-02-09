const divs = document.querySelectorAll('.grid-item');
Array.from(divs).forEach(div => {
    div.addEventListener('click', classToggler);
});

const colors = ['purple', 'green', 'black', 'white', 'blue'];
let	enumerator = 0;

function classToggler() {
    if (enumerator < colors.length+1){
        enumerator+=1;
    }
    else {enumerator=0}


    this.classList.add(colors[enumerator]);
    this.classList.remove(colors[enumerator-1]);
    const ma = document.querySelectorAll('.green');
    const delta = document.querySelectorAll('.black');
    const mp = document.querySelectorAll('.white');
    const usaf = document.querySelectorAll('.blue');
    const sd = document.querySelectorAll('.purple');
    const infoMa = document.querySelector('#infoMa');
    const infoDelta = document.querySelector('#infoDelta');
    const infoMp = document.querySelector('#infoMp');
    const infoSd = document.querySelector('#infoSd');
    const infoUsaf = document.querySelector('#infoUsaf');
    infoMa.innerHTML = "MA: " + ma.length;
    infoMp.innerHTML = "MP: " + delta.length;
    infoDelta.innerHTML = "Delta: " + mp.length;
    infoSd.innerHTML = "SD: " + sd.length;
    infoUsaf.innerHTML = "USAF: " + usaf.length;
}