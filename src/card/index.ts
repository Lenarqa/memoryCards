import { Container, Texture, Text, Sprite, Loader, Graphics } from "pixi.js";

export class Card extends Container {
  id: number;
  constructor(
    x: number,
    y: number,
    text: string,
    id: number,
    img: number,
    description: string
  ) {
    super();
    this.x = x;
    this.y = y;
    this.width = 150;
    this.height = 150;
    this.interactive = true;
    this.buttonMode = true;
    this.id = id;
    this.pivot.x = 75;
    this.pivot.y = 75;

    this.on("pointerdown", () => {
      console.log("Hello");
    });

    this.on("pointerover", () => {
      console.log("pointerover");
      cardBg.tint =  0x6A48D7	;
    });

    this.on("pointerout", () => {
      console.log("pointerout");
      cardBg.tint = 0x3914AF;
    });

    const cardBg: Sprite = new Sprite(Texture.WHITE);
    cardBg.anchor.set(0.5);
    cardBg.width = 150;
    cardBg.height = 150;
    cardBg.tint = 0x3914AF;

    let sprite: Sprite = Sprite.from(`${img}.png`);
    sprite.anchor.set(0.5);
    sprite.x = this.width / 2;
    sprite.y = -30;
    sprite.scale.set(0.7, 0.7);

    const cardName: Text = new Text(text, {
      fontSize: 20,
      wordWrap: true,
      align: "center",
      fill: "#FFE773",
    });

    cardName.anchor.set(0.5);
    cardName.position.x = this.width / 2;
    cardName.position.y = 15;

    const CardDescription: Text = new Text(description, {
      fontSize: 20,
      wordWrap: true,
      align: "center",
      fill: "#FFDE40",
    });

    CardDescription.anchor.set(0.5);
    CardDescription.position.x = this.width / 2;
    CardDescription.position.y = 40;

    this.addChild(cardBg, sprite, cardName, CardDescription);
  }
}
