/**
 * CarRacerJS
 * Copyright (C) Simon Raichl 2018
 * MIT License
 */

export default class GameCanvas {
    onInit ({ PlayerCarInfo }) {
        this.playerCarInfo = PlayerCarInfo;
        this.handleCanvasHeight();
        addEventListener("resize", this.handleCanvasHeight.bind(this));
    }

    handleCanvasHeight (canvasHeight) {
        if (!this.playerCarInfo.isDestroyed) {
            const { elem, animElem } = this.getCanvas();
            const height = Math.ceil(elem.clientHeight);

            if (canvasHeight === void 0 || canvasHeight instanceof Object) {
                canvasHeight = height;
            }

            animElem.innerHTML = animElem.innerHTML.replace(/[0-9]+px/, `${canvasHeight}px`);
        }
    }

    getCanvas () {
        const id = document.getElementById("js-game");
        return {
            elem: id,
            animElem: document.getElementById("js-anim"),
            width: parseInt(id.getAttribute("width")),
            height: parseInt(id.getAttribute("height")),
            context: id.getContext("2d")
        };
    }
}
