/**
 * CarRacerJS
 * Copyright (C) Simon Raichl 2018-2019
 * MIT License
 */

import Texture from "./Texture.js";
import ParticleEffect from "particleeffect";

export default class CanvasRender {
    constructor () {
        this.enemyCarTexture = {
            up: Texture.getTextureFromFile("tex/car_enemy_up.svg"),
            down: Texture.getTextureFromFile("tex/car_enemy_down.svg")
        };

        this.carTexture = Texture.getTextureFromFile("tex/car_player.svg");
    }

    onInit ({ PlayerCarInfo, Enemies, GameCanvas }) {
        this.gameCanvas = GameCanvas;
        this.enemies = Enemies;
        this.playerCarInfo = PlayerCarInfo;
        this.explosion = new ParticleEffect(this.gameCanvas.getCanvas().context);
        this.explosion.setOptions({
            type: "explosion",
            colors: ["#ff6e16", "#ff6a09", "#da5501"],
            clearCanvasOnRender: true
        });
    }

    redraw () {
        const { enemyCarTexture, carTexture, explosion, enemies, playerCarInfo } = this;
        const { x, y } = playerCarInfo.coords;
        const { context, width, height } = this.gameCanvas.getCanvas();

        if (!this.explosionCreated) {
            context.clearRect(0, 0, width, height);
        }

        context.drawImage(carTexture, x, y);

        enemies.enemyList.forEach(enemy => context.drawImage(enemyCarTexture[enemy.direction], enemy.x, enemy.y));

        if (playerCarInfo.isDestroyed && !this.explosionCalled) {
            this.gameCanvas.handleCanvasHeight(0);
            this.explosionCalled = true;
            this.explosionCreated = true;
            explosion.setOptions({ coords: [x, y] });
            explosion.create();
        }
    }
}
