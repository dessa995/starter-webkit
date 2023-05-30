import { AccordionTabActions } from "./modules/accordion";
import rotateBorder from "./modules/rotateBorder";
import Menu from "./modules/menu";
import ActivatePopup from "./modules/flash-popup";
// import { sliderGenerator } from "./modules/slider";

import "../scss/main.scss";

// sliderGenerator();
AccordionTabActions();
// responsiveNavBar();
rotateBorder();
Menu.init();
ActivatePopup();
window.addEventListener("resize", () => {
  ActivatePopup();
});
