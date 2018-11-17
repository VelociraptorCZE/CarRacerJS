/**
 * CarRacerJS
 * Copyright (C) Simon Raichl 2018
 * MIT License
 */

export default class Car {
    static get(src) {
        const car = new Image(0, 0);
        car.src = src;
        return car;
    }
}