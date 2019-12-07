/**
 * CarRacerJS
 * Copyright (C) Simon Raichl 2018
 * MIT License
 */

export default class Player {
    onInit ({ PlayerCarInfo, GameCanvas, PlayerPosition }) {
        this.playerCarInfo = PlayerCarInfo;
        this.gameCanvas = GameCanvas;
        this.playerPosition = PlayerPosition;
        this.controls = {
            "ArrowUp|KeyW": { x: 0, y: -8 },
            "ArrowDown|KeyS": { x: 0, y: 8 },
            "ArrowLeft|KeyA": { x: -8, y: 0 },
            "ArrowRight|KeyD": { x: 8, y: 0 }
        };

        this.initPlayer();
    }

    initPlayer () {
        const { playerCarInfo } = this;

        this.gameCanvas.getCanvas().elem.addEventListener("touchmove", e => {
            const localCoords = {
                false: (window.innerWidth / 2 - e.touches[0].clientX) / -20,
                true: 0
            };

            playerCarInfo.coords.x += localCoords[playerCarInfo.isDestroyed];
        });

        window.addEventListener("keypress", e => {
            const localCoords = {
                false: this.move(e),
                true: { x: 0, y: 0 }
            };

            try {
                playerCarInfo.coords.x += localCoords[playerCarInfo.isDestroyed].x;
                playerCarInfo.coords.y += localCoords[playerCarInfo.isDestroyed].y;
                this.playerPosition.checkPosition();
            } catch {}
        });
    }

    move ({ code }) {
        const { controls } = this;
        return controls[Object.keys(controls).filter(event => event.includes(code))[0]];
    }
}
