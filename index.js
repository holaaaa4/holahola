const yesBtn = document.querySelector('#yesBtn');

yesBtn.addEventListener('click',function () {
    alert('Obvio, pícale al corazón :-) ')
});

const noBtn = document.querySelector('#noBtn');

noBtn.addEventListener('mouseover', function () {
    const randomX = parseInt(Math.random()*100);
    const randomY = parseInt(Math.random()*100);
    noBtn.style.setProperty('top',randomY+'%');
    noBtn.style.setProperty('left',randomX+'%');
    noBtn.style.setProperty('transform',`translate(-${randomX}%,-${randomY}%)`);
})

const heart = document.querySelector('#heart');

heart.addEventListener('click',function () {
  window.location.href = 'https://open.spotify.com/playlist/7jEY0ngwHDK2LPSPMzd0au?si=c543914402134533&pt=3b4e7dfcd65780f1230ef64cd505898f';
});
