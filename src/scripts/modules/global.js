"use strict";

const Global = {
  domWindow: window,
  domDoc: document,
  domBody: "body",
  varsWindowWidth: window.innerWidth,

  /**
   * @description do something on escape key click
   * @example Global.functions.escKey(closeNav);
   * @param {function} callback - pass callback function
   */
  escKey: function (callback) {
    Global.domDoc.on("keyup", function (e) {
      if (e.keyCode === 27) {
        callback();
      }
    });
  },

  /**
   *
   *
   */

  clickOutsideContainer: function (element, classUsed, parentEl, callback) {
    window.addEventListener("mouseup", function (e) {
      if (
        element.classList.contains(classUsed) &&
        e.target != element &&
        !e.target.parentElement.classList.contains(parentEl)
      ) {
        callback(element);
      }
    });
  },

  /**
   * @description Equal height function for multiple elements. This function should be used on load and on resize also.
   * @example Global.functions.equalHeights('.some-element-class');
   * @example $(window).on('resize', ()=> { Global.functions.equalHeights('.some-element-class'); });
   * @param {jQuery} elm - element class
   */
  equalHeights: (elm) => {
    let x = 0;
    elm.height("auto");

    elm.each((index, el) => {
      if (el.style.height > x) {
        x = el.style.height; //if not working add + "px" and continue to debugg
      }
    });

    elm.height(x + 1);
  },
};

export default Global;
