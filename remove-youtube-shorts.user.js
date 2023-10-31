// ==UserScript==
// @name         Remove YouTube Shorts from page
// @namespace    https://github.com/hallzy
// @version      0.5
// @description  Removes YouTube Shorts Videos from your current page.
// @author       Steven Hall
// @match        http://*.youtube.com/*
// @match        https://*.youtube.com/*
// @icon         https://www.google.com/s2/favicons?sz=64&domain=youtube.com
// @grant        none
// ==/UserScript==

(() => {
  const removeShorts = () => {
    const shortsElements = document.querySelectorAll("[is-shorts]");
    shortsElements.forEach((element) => {
      element.remove();
    });
  };

  const observer = new MutationObserver(removeShorts);
  observer.observe(document, {
    childList: true,
    subtree: true,
  });

  removeShorts();
})();
