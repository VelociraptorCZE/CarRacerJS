/**
 * CarRacerJS
 * Copyright (C) Simon Raichl 2018
 * MIT License
 */

import Bounds from "./Bounds.js";

export default class PlayerPositions {
    check() {
        car.coords.x > Bounds.get().x1
            ? car.coords.x = Bounds.get().x1 : car.coords.x < Bounds.get().x2
            ? car.coords.x = Bounds.get().x2 : null;

        return car.coords.y < Bounds.get().y1 || car.coords.y > Bounds.get().y2;
    }
}