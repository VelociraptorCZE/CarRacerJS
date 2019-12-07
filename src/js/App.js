/**
 * CarRacerJS
 * Copyright (C) Simon Raichl 2018
 * MIT License
 */

import GrumpyDI from "grumpydi";
import Player from "./Player.js";
import Enemies from "./Enemies.js";
import GameCanvas from "./GameCanvas.js";
import Game from "./Game.js";
import PlayerCarInfo from "./PlayerCarInfo";
import Bounds from "./Bounds";
import PlayerPosition from "./PlayerPosition";
import CanvasRender from "./CanvasRender";
import Scene from "./Scene";

const container = {
    PlayerCarInfo: [
        PlayerCarInfo,
        {
            coords: {
                x: 590,
                y: 400
            },
            width: 110,
            height: 210,
            destroyed: false
        }
    ],
    GameCanvas,
    Bounds,
    PlayerPosition,
    Game,
    Player,
    Enemies,
    CanvasRender,
    Scene
};

GrumpyDI(container);
