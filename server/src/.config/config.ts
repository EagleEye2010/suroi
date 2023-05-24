import { Vec2 } from "planck";

export const Config = {
    host: "127.0.0.1",
    port: 8000,
    address: "ws://127.0.0.1:8000",
    ssl: {
        keyFile: "",
        certFile: "",
        enable: false
    },
    movementSpeed: 0.032,
    diagonalSpeed: 0, // Assigned below
    botProtection: false,
    randomUsernames: false,
    debug: {
        spawnLocation: Vec2(360, 360),
        fixedSpawnLocation: false,
        disableMapGeneration: false,
        stopServerAfter: -1
    }
};

export const Debug = Config.debug;
Config.diagonalSpeed = Config.movementSpeed / Math.SQRT2;