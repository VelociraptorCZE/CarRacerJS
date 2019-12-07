/**
 * CarRacerJS
 * Copyright (C) Simon Raichl 2018
 * MIT License
 */

export default class Bounds {
    onInit ({ GameCanvas }) {
        this.gameCanvas = GameCanvas;
    }

    getBounds () {
        const { elem } = this.gameCanvas.getCanvas();

        return {
            x1: elem.width * 0.69,
            x2: elem.height * 0.35,
            y1: -260,
            y2: elem.height
        };
    }
}
