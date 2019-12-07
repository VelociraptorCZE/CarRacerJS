/**
 * CarRacerJS
 * Copyright (C) Simon Raichl 2018
 * MIT License
 */

export default class Game {
    onInit ({ PlayerCarInfo, GameCanvas, Enemies, CanvasRender }) {
        this.playerCarInfo = PlayerCarInfo;
        this.gameCanvas = GameCanvas;
        this.enemies = Enemies;
        this.canvasRender = CanvasRender;
        this.initScore();
        this.initGame();
    }

    initGame () {
        this.resetData();
        setInterval(() => {
            if (!this.playerCarInfo.isDestroyed) {
                this.score.number++;
                this.score.elem.innerHTML = this.score.elem.innerHTML.replace(/[0-9]+/, this.score.number);
            } else {
                this.initScore();
            }
        }, 100);
    }

    initScore () {
        this.score = {
            number: 0,
            elem: document.getElementById("js-game-score")
        };
    }

    restartGame () {
        const { playerCarInfo } = this;

        if (!playerCarInfo.isDestroyed) {
            this.gameCanvas.handleCanvasHeight(0);
            playerCarInfo.isDestroyed = true;
            setTimeout(() => {
                this.canvasRender.explosionCalled = false;
                this.resetData();
                this.enemies.restartEnemies();
                this.gameCanvas.handleCanvasHeight();
            }, 2000);
        }
    }

    resetData () {
        this.initScore();
        this.playerCarInfo.resetProps();
    }
}
