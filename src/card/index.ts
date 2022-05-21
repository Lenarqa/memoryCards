import { Sprite, Container, Texture, Text } from "pixi.js";

export class Card extends Container {
  id: number;
  constructor(x: number, y: number, text: string, id: number) {
    super();
    this.x = x;
    this.y = y;
    this.width = 100;
    this.height = 150;
    this.interactive = true;
    this.buttonMode = true;
    this.id = id;

    this.on("pointerdown", () => {
      console.log("Hello");
    });

    this.on("pointerover", () => {
      console.log("pointerover");
      cardBg.tint = 0x6495ed;
    });

    this.on("pointerout", () => {
      console.log("pointerout");
      cardBg.tint = 0xff0000;
    });

    const cardBg: Sprite = new Sprite(Texture.WHITE);
    cardBg.anchor.set(0.5);
    cardBg.width = 100;
    cardBg.height = 150;
    cardBg.tint = 0xff0000;

    const cardText: Text = new Text(text, {
      fontSize: 30,
      wordWrap: true,
      align: "center",
    });

    cardText.anchor.set(0.5);
    cardText.position.x = this.height / 2;
    cardText.position.y = this.width / 2;
    cardText.zIndex = 10;
    cardText;

    this.addChild(cardBg, cardText);
  }
}
