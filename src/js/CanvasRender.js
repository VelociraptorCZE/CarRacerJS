/**
 * CarRacerJS
 * Copyright (C) Simon Raichl 2018-2019
 * MIT License
 */

import Texture from "./Texture.js";
import Canvas from "./Canvas.js";

export default class CanvasRender {
    constructor() {
        this.car = Texture.get("tex/car_player.svg");
        this.carEnemy = {
            "up": Texture.get("tex/car_enemy_up.svg"),
            "down": Texture.get("tex/car_enemy_down.svg")
        };
        this.explosion = {
            img: Texture.get("tex/explosion.svg"),
            size: 128
        };
    }

    redraw(enemies, destroyed) {
        const { carEnemy, car, explosion } = this;
        const c = window.car.coords;
        const ctx = Canvas.get().context;
        ctx.clearRect(0, 0, Canvas.get().width, Canvas.get().height);
        ctx.drawImage(car, c.x, c.y);

        enemies.forEach(enemy => {
            ctx.drawImage(carEnemy[enemy.direction], enemy.x, enemy.y);
        });

        if (destroyed) {
            this.explosion.size += .15;
            ctx.globalCompositeOperation = "lighter";
            ctx.drawImage(explosion.img, c.x, c.y - explosion.size / 3, explosion.size, explosion.size);
            ctx.globalCompositeOperation = "source-over";
        }
        else {
            this.explosion.size = 128;
        }
    }
}