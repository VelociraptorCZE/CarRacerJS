/**
 * CarRacerJS
 * Copyright (C) Simon Raichl 2018
 * MIT License
 */

import PlayerPositions from "./PlayerPositions.js";
import Canvas          from "./Canvas.js";

export default class Player {
    constructor() {
        this.matrix = {
            "ArrowUp|KeyW":    {x: 0, y: -8},
            "ArrowDown|KeyS":  {x: 0, y: 8},
            "ArrowLeft|KeyA":  {x: -8, y: 0},
            "ArrowRight|KeyD": {x: 8, y: 0}
        };

        this.initPlayer();
    }

    initPlayer() {
        Canvas.get().elem.addEventListener("touchmove", e => {
            let localCoords = {
                false: (window.innerWidth / 2 - e.touches[0].clientX) / -20,
                true: 0
            };

            car.coords.x += localCoords[car.destroyed];
        });

        window.addEventListener("keydown", e => {
            const localCoords = {
                false: this.move(e),
                true: {x: 0, y: 0}
            };

            try {
                car.coords.x += localCoords[car.destroyed].x;
                car.coords.y += localCoords[car.destroyed].y;
                new PlayerPositions().check();
            }
            catch {}
        });
    }

    move(e) {
        return this.matrix[Object.keys(this.matrix).filter(event => event.includes(e.code))[0]];
    }
}