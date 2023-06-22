// ==UserScript==
// @name         Remove YouTube Shorts from page
// @namespace    https://github.com/hallzy
// @version      0.4
// @description  Removes YouTube Shorts Videos from your current page.
// @author       Steven Hall
// @match        http://*.youtube.com/*
// @match        https://*.youtube.com/*
// @icon         https://www.google.com/s2/favicons?sz=64&domain=youtube.com
// @grant        none
// ==/UserScript==
(
    () =>
    {
        const removeShorts = () =>
        {
            Array
                .from(document.querySelectorAll(`a[href^="/shorts"]`))
                .forEach
                (
                    a =>
                    {
                        let parent = a.parentElement;

                        while (parent && (!parent.tagName.startsWith('YTD-') || parent.tagName === 'YTD-THUMBNAIL'))
                        {
                            parent = parent.parentElement;
                        }

                        if (parent)
                        {
                            parent.remove();
                        }
                    }
                )
            ;
        }

        const observer = new MutationObserver(removeShorts);
        observer.observe
        (
            document,
            {
                childList:  true,
                subtree:    true,
            }
        );

        removeShorts();
    }
)();
