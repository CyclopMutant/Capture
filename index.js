
const colors = ['green', 'white', 'black', 'purple', 'blue'];
const data = [5,2,2,2,1,1,1,5,5,5,1,1,5,5,5,5,4,4,4,4,3,3,3,3,3];


    for (let i = 1; i<26; i++){
        document.getElementById(i.toString()).classList.add(colors[data[i-1]-1])
    }
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
