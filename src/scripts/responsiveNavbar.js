let showNavButton = document.querySelector(".show-nav-button");
let navIconDiv = document.querySelector(".nav-icon-div");

let responsiveNavBar = () => {
    showNavButton.addEventListener("click", (e) => {
        e.preventDefault();
        let icon = showNavButton.children[0];
        navIconDiv.classList.toggle("clicked");

        if (navIconDiv.classList.contains("clicked")) {
            icon.innerHTML = `<svg width="22" height="22" viewBox="0 0 22 22" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M21.4766 2.63281L13.1094 11L21.4766 19.3672L19.3672 21.4766L11 13.1094L2.63281 21.4766L0.523438 19.3672L8.89062 11L0.523438 2.63281L2.63281 0.523438L11 8.89062L19.3672 0.523438L21.4766 2.63281Z" fill="white"/>
            </svg>`;
        } else {
            icon.innerHTML = `<svg width="28" height="18" viewBox="0 0 28 18" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M0.5 0H27.5V3.02344H0.5V0ZM0.5 10.4766V7.52344H27.5V10.4766H0.5ZM0.5 18V14.9766H27.5V18H0.5Z" fill="white"/>
          </svg>
          `;
        }
    });
};

export { responsiveNavBar };
