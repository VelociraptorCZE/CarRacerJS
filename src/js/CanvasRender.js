/**
 * CarRacerJS
 * Copyright (C) Simon Raichl 2018-2019
 * MIT License
 */

import Texture from "./Texture.js";
import Canvas from "./Canvas.js";
import ParticleEffect from "particleeffect";

export default class CanvasRender {
    constructor() {
<<<<<<< HEAD
        const { context } = Canvas.get();
=======
>>>>>>> 1c5dcdabb98ba0eb67a817b8ee86e688f19e9a47
        this.car = Texture.get("tex/car_player.svg");
        this.carEnemy = {
            "up": Texture.get("tex/car_enemy_up.svg"),
            "down": Texture.get("tex/car_enemy_down.svg")
<<<<<<< HEAD
=======
        };
        this.explosion = {
            img: Texture.get("tex/explosion.svg"),
            size: 128
>>>>>>> 1c5dcdabb98ba0eb67a817b8ee86e688f19e9a47
        };
        this.explosion = new ParticleEffect(context);
        this.explosion.setOptions({
            type: "explosion",
            color: "#ff6e16",
            clearCanvasOnRender: true
        });
    }

    redraw(enemies, destroyed) {
        const { carEnemy, car, explosion } = this;
        const { x, y } = window.car.coords;
        const { context, width, height } = Canvas.get();

        if (!this.explosionCreated) {
            context.clearRect(0, 0, width, height);
        }

        context.drawImage(car, x, y);

        enemies.forEach(enemy => {
            context.drawImage(carEnemy[enemy.direction], enemy.x, enemy.y);
        });

        if (destroyed && !this.explosionCalled) {
            this.explosionCalled = true;
            this.explosionCreated = true;
            explosion.setOptions({
                coords: [x, y]
            });
            explosion.create();
            setTimeout(() => {
                this.explosionCalled = false;
            }, 2000);
        }
    }
}