import Global from "./global";

const domAccordionItems = document.querySelectorAll(".js-accordion-item");

let openAccordionTab = () => {
  // domAccordionItems.forEach((item) => {
  //   item.addEventListener("click", (e) => {
  //     const isClickInside = item.contains(e.target);
  //     console.log(isClickInside, " ", item);
  //     // console.log(item.classList.contains("active"));
  //     item.classList.add("active");
  //   });
  // });

  window.addEventListener("click", (e) => {
    domAccordionItems.forEach((item) => {
      item.addEventListener("click", (e2) => {
        const isClickInside = item.contains(e2.target);
        console.log(isClickInside, " ", item);
        // console.log(item.classList.contains("active"));
        item.classList.add("active");
      });
      if (
        item.classList.contains("active") &&
        e.target != item &&
        e.target != item.nextSibling
      ) {
        item.classList.remove("active");
      }
    });
  });
};

export { openAccordionTab };
