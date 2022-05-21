import { ICard } from "./../config/index";
import { Card } from "../card";
import { Container, Sprite, Texture } from "pixi.js";

export class GameBoard extends Container {
  cards: Card[] = [];

  constructor(x: number, y: number, size: number) {
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
    this.cards = [];

    this.addChild(cardBg);
  }
}
