import { Container, Texture, Text, Sprite, Loader, Graphics } from "pixi.js";

export class Card extends Container {
  id: number;
  constructor(
    x: number,
    y: number,
    name: string,
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
    this.name = name;
    this.pivot.x = 75;
    this.pivot.y = 75;

    this.on("pointerdown", () => {
      console.log("Hello " + this.name);
      cardСover.visible = !cardСover.visible;
    });

    this.on("pointerover", () => {
      cardBg.tint = 0x6a48d7;
    });

    this.on("pointerout", () => {
      cardBg.tint = 0x3914af;
    });

    const cardBg: Sprite = new Sprite(Texture.WHITE);
    cardBg.anchor.set(0.5);
    cardBg.width = 150;
    cardBg.height = 150;
    cardBg.tint = 0x3914af;

    let sprite: Sprite = Sprite.from(`${img}.png`);
    sprite.anchor.set(0.5);
    sprite.x = this.width / 2;
    sprite.y = -30;
    sprite.scale.set(0.7, 0.7);

    const cardName: Text = new Text(name, {
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

    const cardСover: Sprite = new Sprite(Texture.WHITE);
    cardСover.anchor.set(0.5);
    cardСover.width = 150;
    cardСover.height = 150;
    cardСover.tint = 0x9f3ed5;

    let cardMask = new Graphics();
    cardMask.lineStyle(0);
    cardMask.beginFill(0xAA4F08);
    cardMask.drawCircle(this.width / 2, this.height / 2, 7.1); //7.5
    cardMask.endFill();
    cardСover.addChild(cardMask);

    const cardCoverImg = Sprite.from("cardCover.png");
    cardCoverImg.anchor.set(0.5);
    cardCoverImg.x = this.width / 2;
    cardCoverImg.y = this.height / 2;
    cardCoverImg.scale.set(0.05, 0.05);
    cardСover.addChild(cardCoverImg);
    
    this.mask = cardMask;

    this.addChild(cardBg, sprite, cardName, CardDescription, cardСover);
  }
}
