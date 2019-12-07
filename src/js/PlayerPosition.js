/**
 * CarRacerJS
 * Copyright (C) Simon Raichl 2018
 * MIT License
 */

export default class PlayerPosition {
    onInit ({ PlayerCarInfo, Bounds }) {
        this.playerCarInfo = PlayerCarInfo;
        this.bounds = Bounds;
    }

    checkPosition () {
        const { playerCarInfo, bounds } = this;
        const { x1, x2 } = bounds.getBounds();

        if (playerCarInfo.coords.x > x1) {
            playerCarInfo.coords.x = x1;
        }

        if (playerCarInfo.coords.x < x2) {
            playerCarInfo.coords.x = x2;
        }
    }

    isPlayerOutsideRoad () {
        const { y1, y2 } = this.bounds.getBounds();
        const { y } = this.playerCarInfo.coords;
        return y < y1 || y > y2;
    }
}
