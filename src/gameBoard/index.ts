import { ICard } from "./../config/index";
import { Card } from "../card";
import { Container, Sprite, Texture } from "pixi.js";

export class GameBoard extends Container {
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

    this.addChild(cardBg);
  }

  addCars(card: Container) {
    this.addChild(card);
  }

  addCards(cards: ICard[]) {
    let x: number = -167; // x position including padding
    let y: number = -167; // y position including padding
    
    cards.sort(() => Math.random() - 0.5); //shuffle cards

    for (let i = 0; i < cards.length; i++) {
        if (i !== 0) {
            x+=160;
        }
        if(x > 335) {
            x = -167;
            y += 160;
        }
        const card: Card = new Card(
        x,
        y,
        cards[i].name,
        cards[i].id,
        cards[i].img,
        cards[i].description
      );
      this.addChild(card);
    }
  }
}
