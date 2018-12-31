/**
 * CarRacerJS
 * Copyright (C) Simon Raichl 2018
 * MIT License
 */

import Car from "./Car.js";
import Canvas from "./Canvas.js";

export default class CanvasRender {
    constructor() {
        this.car = Car.get("tex/car_player.svg");
        this.carEnemy = {
            "up": Car.get("tex/car_enemy_up.svg"),
            "down": Car.get("tex/car_enemy_down.svg")
        };
    }

    redraw(enemies) {
        const { carEnemy, car } = this;
        Canvas.get().context.clearRect(0, 0, Canvas.get().width, Canvas.get().height);
        Canvas.get().context.drawImage(car, window.car.coords.x, window.car.coords.y);
        enemies.forEach(enemy => {
            Canvas.get().context.drawImage(carEnemy[enemy.direction], enemy.x, enemy.y);
        });

    }
}