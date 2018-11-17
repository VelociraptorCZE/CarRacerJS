/**
 * CarRacerJS
 * Copyright (C) Simon Raichl 2018
 * MIT License
 */

export default class Canvas {
    constructor() {
        this.checkCanvas();
        window.addEventListener("resize", () => {
            this.checkCanvas();
        });
    }

    checkCanvas(param) {
        const height = Math.ceil(parseInt(window.getComputedStyle(Canvas.get().elem).height.replace("px", "")));
        const elem = Canvas.get().anim_elem;
        elem.innerHTML = elem.innerHTML.replace(/[0-9]+px/, `${param || height}px`);
    }

    static get() {
        const id = document.getElementById("js-game");
        return {
            elem: id,
            anim_elem: document.getElementById("js-anim"),
            width: parseInt(id.getAttribute("width")),
            height: parseInt(id.getAttribute("height")),
            context: id.getContext("2d")
        }
    }
}