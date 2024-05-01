let awal = document.getElementById('awal')
function myInfo() {
    if(awal.style.display === 'none') {
        awal.style.display = 'block'
    } else {
        awal.style.display ='none'
    }
}

let pertama = document.getElementById('pertama')
function myPertama() {
    if(pertama.style.display === 'none') {
        pertama.style.display = 'block'
    } else {
        pertama.style.display ='none'
    }
}

let kedua = document.getElementById('kedua')
function myKedua() {
    if(kedua.style.display === 'none') {
        kedua.style.display = 'block'
    } else {
        kedua.style.display ='none'
    }
}

let ketiga = document.getElementById('ketiga')
function myKetiga() {
    if(ketiga.style.display === 'none') {
        ketiga.style.display = 'block'
    } else {
        ketiga.style.display ='none'
    }
}

let keempat = document.getElementById('keempat')
function myKeempat() {
    if(keempat.style.display === 'none') {
        keempat.style.display = 'block'
    } else {
        keempat.style.display ='none'
    }
}

let kelima = document.getElementById('kelima')
function myKelima() {
    if(kelima.style.display === 'none') {
        kelima.style.display = 'block'
    } else {
        kelima.style.display ='none'
    }
}

let keenam = document.getElementById('keenam')
function myKeenam() {
    if(keenam.style.display === 'none') {
        keenam.style.display = 'block'
    } else {
        keenam.style.display ='none'
    }
}

let ketujuh = document.getElementById('ketujuh')

function myKetujuh() {
    if(ketujuh.style.display === 'none') {
        ketujuh.style.display = 'block'
    } else {
        ketujuh.style.display ='none'
    }
}

let kedelapan = document.getElementById('kedelapan') 
    function myKedelapan() {
        if(kedelapan.style.display === 'none') {
            kedelapan.style.display = 'block'
        } else {
            kedelapan.style.display ='none'
        }
    }


// Animasi Bacground 

const numStars = 500; // Jumlah bintang yang ingin Anda tambahkan
const container = document.querySelector('.stars');

for (let i = 0; i < numStars; i++) {
    const star = document.createElement('div');
    star.className = 'star';
    star.style.top = Math.random() * 100 + '%';
    star.style.left = Math.random() * 100 + '%';
    star.style.animationDuration = (Math.random() * 1 + 0.3) + 's'; // Durasi animasi yang berbeda untuk setiap bintang
    container.appendChild(star);
}
