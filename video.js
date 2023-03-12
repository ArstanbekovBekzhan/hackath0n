let Play1 = document.getElementById("Play")
let Pause2 = document.getElementById("Pause")
let B_music1 = document.getElementById("B_music")
let C_music2 = document.getElementById("C_music")
let Vid = document.getElementById("vid")

Vid.volume = 0

function Play() {
    Play1.style.display="none"
    Pause2.style.display="block"
    Vid.play()
}
function Pause() {
    Play1.style.display="block"
    Pause2.style.display="none"
    Vid.pause()
}
function B_music() {
    C_music2.style.display="none"
    B_music1.style.display="block"
    Vid.volume = 1
}
function C_music() {
    B_music1.style.display="none"
    C_music2.style.display="block"
    Vid.volume = 0
}
var mySwiper = new Swiper('.swiper-container',{
    pagination: '.pagination',
    loop: false,
    autoplay: 1000,
})
$('.swiper-container').on('mouseenter', function(e){
    console.log('stop autoplay');
    mySwiper.stopAutoplay();
})
$('.swiper-container').on('mouseleave', function(e){
    console.log('start autoplay');
    mySwiper.startAutoplay();
})