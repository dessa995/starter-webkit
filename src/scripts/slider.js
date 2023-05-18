let sliderContainer = document.querySelector(".js-slider-container");
let leftSliderButton = document.querySelector(".js-left-slider-button");
let rightSliderButton = document.querySelector(".js-right-slider-button");
// import sliderImages from "./sliderImages.json";

let sliderGenerator = () => {
  sliderImages.forEach((image) => {
    let imageContainer = document.createElement("div");
    imageContainer.className = "slider-img-container";
    imageContainer.id = image.id;
    imageContainer.style.backgroundImage = `url("${image.src}")`;
    let sliderImageAnchor = document.createElement("a");
    sliderImageAnchor.classList.add("slider-image-anchor");
    sliderImageAnchor.href = "#";

    imageContainer.append(sliderImageAnchor);
    sliderContainer.append(imageContainer);

    let counter = 1;
    let size = imageContainer.clientWidth;
    rightSliderButton.addEventListener("click", (e) => {
      e.preventDefault();
      if (counter >= sliderImages.length - 1) return;
      imageContainer.style.transition = "transform 0.4s ease-in-out";
      counter++;
      imageContainer.style.transform = "translateX(" + -size * counter + "px)";
    });

    leftSliderButton.addEventListener("click", (e) => {
      e.preventDefault();
      if (counter <= 0) return;
      imageContainer.style.transition = "transform 0.4s ease-in-out";
      counter--;
      imageContainer.style.transform = "translateX(" + -size * counter + "px)";
    });
  });
};

export { sliderGenerator };
