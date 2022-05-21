import { Container, Sprite, Texture } from "pixi.js";

export class GameBoard extends Container {
    constructor(x, y, size) {
        super();
        this.x = x;
        this.y = y;
        this.width = size;
        this.height = size;

        const cardBg: Sprite = new Sprite(Texture.WHITE);
        cardBg.anchor.set(0.5);
        cardBg.width = size;
        cardBg.height = size;
        cardBg.tint = 0xffffff;
        
        this.addChild(cardBg);
    }

    addCard(card: Container) {
        this.addChild(card);
    }
}