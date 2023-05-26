"use strict";

import Global from "./global";

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
    // Global.clickOutsideContainer(
    //   Menu.domMenuOuter,
    //   Menu.classActive,
    //   "menu-item",
    //   Menu.closeMenu
    // );
    window.addEventListener("mouseup", function (e) {
      if (
        Menu.domMenuOuter.classList.contains(Menu.classActive) &&
        e.target != Menu.domMenuInner &&
        !e.target.parentElement.classList.contains("menu-item")
      ) {
        console.log(e.target.parentElement);
        Menu.closeMenu();
      }
    });
  },
};

export default Menu;
