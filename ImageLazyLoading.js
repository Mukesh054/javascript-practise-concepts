// Use this in HTML
{
  /* <img class="lazy-image" data-src="https://cdn.pixabay.com/photo/2018/09/16/15/31/boy-3681679_1280.jpg" /> */
}

//Prefetch all the images
//Repeating this inside function will hamper the performance
let lazyImages = [...document.querySelectorAll(".lazy-image")];

//Buffer
let inAdvance = 50;

const lazyLoad = () => {
  //Iterate all the images and check
  lazyImages.forEach((image) => {
    if (image.offsetTop < window.innerHeight + window.pageYOffset + inAdvance) {
      //if image is in viewport set the src from custom attribute
      //dataset is used to get the custom attribute
      image.src = image.dataset.src;

      //if the image is loaded then add class to it
      image.onload = () => image.classList.add("loaded");
    }
  });
};

//Call the function to load the first image
lazyLoad();

//lazy load the function when window is scrolled
window.addEventListener("scroll", throttle(lazyLoad, 700));

//lazy load the function when window is resized
window.addEventListener("resize", throttle(lazyLoad, 700));
