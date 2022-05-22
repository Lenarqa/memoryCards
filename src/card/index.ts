import { ICard, cardConfig} from "./../config/index";
import { Container, Texture, Text, Sprite, Loader, Graphics } from "pixi.js";

export class Card extends Container {
  private id: number;
  private isHide: boolean;
  private isWin: boolean;
  public setIsHide: (isHide: boolean) => void;
  public setIsInteractive: (isInteractive: boolean) => void;
  public setIsWin: () => void;

  constructor(
    x: number,
    y: number,
    name: string,
    id: number,
    img: number,
    description: string,
    loader: Loader
  ) {
    super();
    this.x = x;
    this.y = y;
    this.width = cardConfig.size;
    this.height = cardConfig.size;
    this.interactive = false;
    this.buttonMode = true;
    this.id = id;
    this.name = name;
    this.pivot.x = 75;
    this.pivot.y = 75;
    this.isHide = false;
    this.isWin = false;

    this.on("pointerdown", () => {
      if(!this.isHide) {
        return;
      }else {
        cardСover.visible = !cardСover.visible;
        this.isHide = cardСover.visible;
      }
    });

    this.on("pointerover", () => {
      cardBg.tint = 0x6a48d7;
      cardCoverImg.tint = 0xffe773;
    });

    this.on("pointerout", () => {
      cardBg.tint = 0x3914af;
      cardCoverImg.tint = 0xffffff;
    });

    const cardBg: Sprite = new Sprite(Texture.WHITE);
    cardBg.anchor.set(0.5);
    cardBg.width = cardConfig.size;
    cardBg.height = cardConfig.size;
    cardBg.tint = cardConfig.colors.cardBgTint;

    let sprite: Sprite = Sprite.from(loader.resources[`${img}`].texture);
    sprite.anchor.set(0.5);
    sprite.x = this.width / 2;
    sprite.y = -30;
    sprite.scale.set(0.7, 0.7);

    const cardName: Text = new Text(name, {
      fontSize: 20,
      wordWrap: true,
      align: "center",
      fill: cardConfig.colors.cardName,
    });

    cardName.anchor.set(0.5);
    cardName.position.x = this.width / 2;
    cardName.position.y = 15;

    const CardDescription: Text = new Text(description, {
      fontSize: 20,
      wordWrap: true,
      align: "center",
      fill: cardConfig.colors.cardDescription,
    });

    CardDescription.anchor.set(0.5);
    CardDescription.position.x = this.width / 2;
    CardDescription.position.y = 40;

    const cardСover: Sprite = new Sprite(Texture.WHITE);
    cardСover.anchor.set(0.5);
    cardСover.width = 150;
    cardСover.height = 150;
    cardСover.tint = 0x9f3ed5;
    cardСover.visible = this.isHide;

    this.setIsHide = (isHide: boolean): void => {
      cardСover.visible = isHide;
      this.isHide = isHide;
    };

    this.setIsInteractive = (isInteractive: boolean) => {
      this.interactive = isInteractive;
    };

    this.setIsWin = ():void => {
      this.isWin = true;
      cardBg.tint = 0x3914af;
    }

    let cardMask = new Graphics();
    cardMask.lineStyle(0);
    cardMask.beginFill(0xaa4f08);
    cardMask.drawCircle(this.width / 2, this.height / 2, 65); //7.1
    cardMask.endFill();

    const cardCoverImg = Sprite.from(loader.resources[`cardCover`].texture);
    cardCoverImg.anchor.set(0.5);
    cardCoverImg.x = this.width / 2;
    cardCoverImg.y = this.height / 2;
    cardCoverImg.scale.set(0.05, 0.05);
    cardСover.addChild(cardCoverImg);

    this.mask = cardMask;

    this.addChild(
      cardMask,
      cardBg,
      sprite,
      cardName,
      CardDescription,
      cardСover
    );
  }

  public static createCards(cards: ICard[], loader: Loader): Card[] {
    let x: number = -167; // x position including padding 
    let y: number = -167; // y position including padding
    let cardsRes: Card[] = [];

    cards.sort(() => Math.random() - 0.5); //shuffle cards

    for (let i = 0; i < cards.length; i++) {
      if (i !== 0) {
        x += 160; 
      }

      if (x > 335) {
        x = -167; 
        y += 160; 
      }

      const card: Card = new Card(
        x,
        y,
        cards[i].name,
        cards[i].id,
        cards[i].img,
        cards[i].description,
        loader,
      );
      cardsRes[i] = card;
    }
    return cardsRes;
  }

  public getCardId = ():number => {
    return this.id;
  }

  public getIsHide = ():boolean => {
    return this.isHide;
  }

  public getIsWin = ():boolean => {
    return this.isWin;
  }
}
