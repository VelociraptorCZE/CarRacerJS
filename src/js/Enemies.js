/**
 * CarRacerJS
 * Copyright (C) Simon Raichl 2018-2019
 * MIT License
 */

export default class Enemies {
    constructor () {
        this.maxEnemies = 5;
        this.spawnPoints = [
            [856, 0],
            [688, 0],
            [496, 1],
            [304, 1]
        ];

        this.restartEnemies();
    }

    restartEnemies () {
        this.enemyList = [];
    }

    onInit ({ PlayerCarInfo, Bounds, CanvasRender, Game }) {
        this.game = Game;
        this.bounds = Bounds;
        this.playerCarInfo = PlayerCarInfo;
        this.canvasRender = CanvasRender;
    }

    setEnemies () {
        const { enemyList } = this;
        let i = 0;

        if (enemyList.length <= this.maxEnemies && this.getRandomNumber(0, 20) === 2) {
            this.generateEnemy();
        }

        for (const enemy of enemyList) {
            const currentY = enemy.y;

            if (!this.playerCarInfo.isDestroyed) {
                this.moveTo(i, currentY);
            }

            if (currentY > this.bounds.getBounds().y2) {
                enemyList.splice(i, 1);
            }

            ++i;
        }

        this.canvasRender.redraw();
    }

    generateEnemy () {
        const {
            enemyList,
            playerCarInfo: { carSize }
        } = this;
        const carOffset = 32;

        const spawnPointId = this.getRandomNumber(-1, this.spawnPoints.length - 1);
        const y = -carSize.height - 100;
        const direction = this.spawnPoints[spawnPointId][1] === 1;

        for (const enemy of enemyList) {
            if (y + carSize.height + carOffset > enemy.y) {
                return;
            }
        }

        enemyList.push({
            x: this.spawnPoints[spawnPointId][0],
            y,
            speed: direction ? 10 : 4,
            direction: direction ? "down" : "up"
        });
    }

    moveTo (index, current, coef = 1) {
        this.enemyList[index].y = current + this.enemyList[index].speed * coef;
    }

    checkCollisionWithPlayer () {
        const {
            playerCarInfo: { carSize, coords },
            enemyList
        } = this;

        for (const enemy of enemyList) {
            const isCollidingOnX = this.isPlayerCollidingWithEnemy(enemy.x, coords.x, carSize.width);
            const isCollidingOnY = this.isPlayerCollidingWithEnemy(enemy.y, coords.y, carSize.height);
            if (isCollidingOnX && isCollidingOnY) {
                this.game.restartGame();
            }
        }
    }

    isPlayerCollidingWithEnemy (enemy, coords, side) {
        return coords >= enemy - side && coords <= enemy + side;
    }

    getRandomNumber (min, max) {
        return Math.ceil(min + Math.random() * (max - min));
    }
}
