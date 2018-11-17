/**
 * CarRacerJS
 * Copyright (C) Simon Raichl 2018
 * MIT License
 */

import Canvas from "./Canvas.js";

export default class Game {
    constructor(restart) {
        this.initScore();
        if (restart) {
            if (!car.destroyed) {
                new Canvas().checkCanvas("0");
                car.destroyed = true;
                setTimeout(() => {
                    this.resetData();
                    new Canvas().checkCanvas();
                }, 2000);
            }
        }
        else {
            this.resetData();
            setInterval(() => {
                if (!car.destroyed) {
                    this.score.number += 1;
                    this.score.elem.innerHTML = this.score.elem.innerHTML.replace(/[0-9]+/, this.score.number);
                }
                else {
                    this.initScore();
                }
            }, 100);
        }
    }

    initScore() {
        this.score = {
            number: 0,
            elem: document.getElementById("js-game-score"),
        };
    }

    resetData() {
        window.car = {
            coords: {
                x: 590,
                y: 400
            },
            destroyed: false
        };
        this.initScore();
    }
}
