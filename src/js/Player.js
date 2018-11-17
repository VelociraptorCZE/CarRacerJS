/**
 * CarRacerJS
 * Copyright (C) Simon Raichl 2018
 * MIT License
 */

import PlayerPositions from "./PlayerPositions.js";
import CanvasRender from "./CanvasRender.js";

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
        window.addEventListener("keydown", e => {
            const localCoords = car.destroyed
                ? {x: 0, y: 0}
                : this.matrix[Object.keys(this.matrix).filter(event => event.includes(e.code))[0]];
            try {
                car.coords.x += localCoords.x;
                car.coords.y += localCoords.y;
                new PlayerPositions().check();
            }
            catch {}
        });
    }
}