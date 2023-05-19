let accordionItemHeaders = document.querySelectorAll(
  ".js-accordion-item-heading"
);

let openAccordionTab = () => {
  accordionItemHeaders.forEach((item) => {
    item.addEventListener("click", () => {
      let accordionItemBody = item.nextElementSibling;

      item.classList.toggle("active");

      if (item.classList.contains("active")) {
        accordionItemBody.style.maxHeight =
          accordionItemBody.scrollHeight + "px";
      } else {
        accordionItemBody.style.maxHeight = 0;
      }
    });
  });
};

export { openAccordionTab };
