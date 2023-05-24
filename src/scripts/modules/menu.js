"use strict";

const Menu = {
  domSiteHeader: document.querySelector(".js-header"),
  domMenuBtn: document.querySelector(".js-menu-btn"),
  domMenuOuter: document.querySelector(".js-nav-outer"),
  domMenuInner: document.querySelector(".js-nav-inner"),
  domMenuSub: document.querySelectorAll(".sub-menu"),
  classActive: "is-active",
  timeout: null,

  init: function () {
    this.bindEvents();
  },

  toggleMenu: function () {
    console.log(this.classActive);
    if (!Menu.domMenuBtn.classList.contains(Menu.classActive)) {
      Menu.domSiteHeader.classList.add(this.classActive);
      Menu.domMenuBtn.classList.add(this.classActive);
      Menu.domMenuOuter.classList.add(this.classActive);
    } else {
      this.closeMenu();
    }
  },

  closeMenu: function () {
    Menu.domMenuBtn.classList.remove(this.classActive);
    Menu.domMenuOuter.classList.remove(this.classActive);

    setTimeout(() => {
      Menu.domSiteHeader.classList.remove(this.classActive);
    }, 350);
  },

  bindEvents: function () {
    // this.toggleMenu.bind(this)
    Menu.domMenuBtn.addEventListener("click", this.toggleMenu.bind(this));
  },
};

export default Menu;
