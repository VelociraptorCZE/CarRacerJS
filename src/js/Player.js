/**
 * CarRacerJS
 * Copyright (C) Simon Raichl 2018
 * MIT License
 */

import PlayerPositions from "./PlayerPositions.js";
import GyroControl     from "./GyroControl.js";

export default class Player extends GyroControl {
    constructor() {
        super();
        this.matrix = {
            "ArrowUp|KeyW":    {x: 0, y: -8},
            "ArrowDown|KeyS":  {x: 0, y: 8},
            "ArrowLeft|KeyA":  {x: -8, y: 0},
            "ArrowRight|KeyD": {x: 8, y: 0}
        };

        this.initPlayer();
    }

    initPlayer() {
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