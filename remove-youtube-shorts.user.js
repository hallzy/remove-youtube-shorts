// ==UserScript==
// @name         Remove YouTube Shorts from page
// @namespace    https://github.com/hallzy
// @version      0.3
// @description  Removes YouTube Shorts Videos from your current page.
// @author       Steven Hall
// @match        https://*.youtube.com/*
// @icon         https://www.google.com/s2/favicons?sz=64&domain=youtube.com
// @grant        none
// ==/UserScript==
(
    () =>
    {
        const removeShorts = () =>
        {
            const containers = [
                'ytd-grid-video-renderer',
                'ytd-item-section-renderer',
                'ytd-rich-item-renderer',
                'ytd-rich-section-renderer',
                'ytd-video-renderer',

                'ytm-grid-video-renderer',
                'ytm-item-section-renderer',
                'ytm-rich-item-renderer',
                'ytm-rich-section-renderer',
                'ytm-video-renderer',
            ];

            const elementsToRemove = [];
            containers
                .forEach
                (
                    container =>
                    {
                        const shorts= Array
                            .from(document.querySelectorAll(`${container} a[href^="/shorts"]`))
                            .forEach
                            (
                                a =>
                                {
                                    const video = a.closest(container);
                                    elementsToRemove.push(video);
                                }
                            )
                        ;
                    }
                )
            ;

            elementsToRemove.forEach
            (
                element =>
                {
                    element.remove();
                }
            );
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
