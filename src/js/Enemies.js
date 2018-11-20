/**
 * CarRacerJS
 * Copyright (C) Simon Raichl 2018
 * MIT License
 */

import Game                 from "./Game.js";
import Bounds               from "./Bounds.js";
import CanvasRender         from "./CanvasRender.js";
import PlayerPositions      from "./PlayerPositions.js";
import Service              from "./Service.js";

export default class Enemies extends Service{
    constructor(maxNumberOfEnemies = 5) {
        super();
        this.car = {
            width: 110,
            height: 210,
        };
        this.initNewGame();
        this.maxNumberOfEnemies = maxNumberOfEnemies;
        this.spawnPoints = [[856, 0], [688, 0], [496, 1], [304, 1]];
        this.init();
    }

    initNewGame() {
        this.enemies = [];
        this.destroyed = false;
    }

    init() {
        setInterval(() => {
            this.setEnemies();
            this.checkCollision();
        }, 20);
    }

    setEnemies() {
        if (this.enemies.length <= this.maxNumberOfEnemies && this.getRandomNumber(0, 20) === 2) {
            this.generateEnemy();
        }

        for (let i = 0; i < this.enemies.length; i++) {
            let currentY = this.enemies[i].y;
            currentY > Bounds.get().y2
                ? this.enemies.splice(i, 1)
                : !this.destroyed ? this.moveTo(i, currentY) : null;
        }

        CanvasRender(this.enemies);
    }

    generateEnemy() {
        let id = this.getRandomNumber(-1, this.spawnPoints.length-1);
        let y = -240;
        this.enemies.forEach(enemy => (y + 512 > enemy.y) ? y -= (this.car.height * 2) : null);
        this.enemies.push({
            x: this.spawnPoints[id][0],
            y: y,
            speed: this.spawnPoints[id][1] === 1 ? 10 : 4,
            direction: this.spawnPoints[id][1] === 1 ? "down" : "up"
        });
    }

    moveTo(index, current, coef = 1) {
        this.enemies[index].y = current + (this.enemies[index].speed * coef);
    }

    checkCollision() {
        for (let i = 0; i < this.enemies.length; i++) {
            let enemy = this.enemies[i];
            let x = this.getCondition(enemy.x, car.coords.x, this.car.width);
            let y = this.getCondition(enemy.y, car.coords.y, this.car.height);
            if ((x && y) || new PlayerPositions().check()) {
                new Game(true);
                if (!this.destroyed) {
                    this.destroyed = true;
                    setTimeout(() => {
                        this.initNewGame();
                    }, 2000);
                }
            }
        }
    }
}
