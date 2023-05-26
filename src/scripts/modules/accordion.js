const domAccordionItems = document.querySelectorAll(".js-accordion-item");
import Global from "./global";

const openAccordion = (el) => {
  el.classList.add("active");
  el.children[0].classList.remove("fa-caret-down");
  el.children[0].classList.add("fa-x");
  el.children[0].classList.add("fa-xs");
};

const closeAccordion = (el) => {
  el.classList.remove("active");
  el.children[0].classList.remove("fa-x");
  el.children[0].classList.remove("fa-xs");
  el.children[0].classList.add("fa-caret-down");
};

let AccordionTabActions = () => {
  domAccordionItems.forEach((item) => {
    item.addEventListener("click", () => {
      if (!item.classList.contains("active")) {
        openAccordion(item);
      } else {
        closeAccordion(item);
      }

      Global.clickOutsideContainer(item, "active", "menu-item", closeAccordion);
      // window.addEventListener("mouseup", function (e) {
      //   console.log(e.target.parentElement);
      //   if (
      //     item.classList.contains("active") &&
      //     e.target != item &&
      //     !e.target.parentElement.classList.contains("menu-item")
      //   ) {
      //     item.classList.remove("active");
      //     item.children[0].classList.remove("fa-x");
      //     item.children[0].classList.remove("fa-xs");
      //     item.children[0].classList.add("fa-caret-down");
      //   }
      // });
    });
  });
};

export { AccordionTabActions };
