/**
 * CarRacerJS
 * Copyright (C) Simon Raichl 2018
 * MIT License
 */

export default class Service {
    getCondition(enemy, coords, side) {
        return coords >= enemy - side && coords <= enemy + side;
    }

    getRandomNumber(min, max) {
        return Math.ceil(min + Math.random() * (max - min));
    }
}