let navButtons = document.querySelectorAll(".js-nav-button-holder");

let onHoverMenu = () => {
    navButtons.forEach((button) => {
        if (window.innerWidth >= 992) {
            let dropMenu = button.children;
            button.addEventListener("mouseover", () => {
                dropMenu[1].classList.add("active-menu");
            });
            button.addEventListener("mouseleave", () => {
                dropMenu[1].classList.remove("active-menu");
            });
        }
    });
};

export { onHoverMenu };
