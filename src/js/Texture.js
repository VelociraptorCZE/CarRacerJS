/**
 * CarRacerJS
 * Copyright (C) Simon Raichl 2018-2019
 * MIT License
 */

export default class Texture {
    static get(src) {
        const tex = new Image(0, 0);
        tex.src = src;
        return tex;
    }
}