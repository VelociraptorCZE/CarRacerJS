/**
 * CarRacerJS
 * Copyright (C) Simon Raichl 2018
 * MIT License
 */

export default class GyroControl {
    constructor() {
        window.addEventListener("deviceorientation", e => {
            const movement = {
              false: e.alpha / 4,
              true: 0
            };

            car.coords.x += movement[car.destroyed];
        });
    }
}