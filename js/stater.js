
const images = document.querySelectorALL(".content img");
images.forEach(item => item.addEventListener("click", handleZoomImage));

function handleZoomImage(event) {
    console.log(event.target);
    
}