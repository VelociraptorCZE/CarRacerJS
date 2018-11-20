/**
 * CarRacerJS
 * Copyright (C) Simon Raichl 2018
 * MIT License
 */

import Car from "./Car.js";
import Canvas from "./Canvas.js";

export default function CanvasRender(enemies) {
    const car = Car.get("tex/car_player.svg");
    const car_enemy = {
        "up": Car.get("tex/car_enemy_up.svg"),
        "down": Car.get("tex/car_enemy_down.svg")
    };

    car.onload = () => {
        car_enemy["down"].onload = () => {
            Canvas.get().context.clearRect(0, 0, Canvas.get().width, Canvas.get().height);
            Canvas.get().context.drawImage(car, window.car.coords.x, window.car.coords.y);
            enemies.forEach(enemy => {
                Canvas.get().context.drawImage(car_enemy[enemy.direction], enemy.x, enemy.y);
            });
        };
    };
}