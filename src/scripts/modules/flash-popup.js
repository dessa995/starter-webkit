import Global from "./global";

const domBannerBtn = document.querySelector(".js-banner-btn");
const domFlashPopup = document.querySelector(".js-flash-popup");
const closePopupBtn = document.querySelector(".js-popup-close-btn");

const ActivatePopup = () => {
  domBannerBtn.addEventListener("click", function () {
    domFlashPopup.classList.add("active");

    if (window.innerWidth > 760) {
      setTimeout(function () {
        domFlashPopup.classList.add("black");
      }, 1800);
    } else {
      domFlashPopup.classList.add("black");
    }
  });

  const closePopup = (el) => {
    el.classList.remove("active");
    el.classList.remove("black");
  };

  closePopupBtn.addEventListener("click", function () {
    closePopup(domFlashPopup);
  });

  Global.clickOutsideContainer(
    domFlashPopup,
    "active",
    "js-flash-popup",
    closePopup
  );
};

export default ActivatePopup;
