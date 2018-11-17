/**
 * CarRacerJS
 * Copyright (C) Simon Raichl 2018
 * MIT License
 */

import Canvas from "./Canvas.js";

export default class Bounds {
    static get() {
        return {
            x1: Canvas.get().width * 0.69,
            x2: Canvas.get().height * 0.35,
            y1: -260,
            y2: Canvas.get().height
        };
    }
}