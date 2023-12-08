const images = [
    { src: "samurai.jpg", url: "https://c4.wallpaperflare.com/wallpaper/653/194/366/samurai-japan-japanese-digital-art-artwork-hd-wallpaper-preview.jpg"}
]; // Add more image URLs as needed
let currentIndex = 0;

function showImage(index) {
  const imgElement = document.getElementById("currentImg");
  imgElement.src = images[index];
}

function nextImage() {
  currentIndex = (currentIndex + 1) % images.length;
  showImage(currentIndex);
}

function prevImage() {
  currentIndex = (currentIndex - 1 + images.length) % images.length;
  showImage(currentIndex);
}

// Show the initial image
showImage(currentIndex);
