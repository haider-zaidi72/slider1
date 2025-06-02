let images = ["slider1.jpg", "slider2.jpg", "slider3.jpg", "slider4.jpg"]
const slider = document.getElementById("sliderImage");
let currentIndex = 0;


document.getElementById("nextBtn").addEventListener('click', function(){
    currentIndex = (currentIndex + 1) % images.length
    slider.src = images[currentIndex]
})
document.getElementById("prevBtn").addEventListener('click', function(){
    currentIndex = (currentIndex -1 + images.length) % images.length
    slider.src = images[currentIndex]
})


