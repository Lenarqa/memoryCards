import { Sprite, Container, Texture, Text } from "pixi.js";

export const createNewCard = (): Container => {
  const card: Container = new Container();

  card.width = 100;
  card.height = 150;
  card.position.x = 100;
  card.position.y = 100;
  card.pivot.x = card.height / 2;
  card.pivot.y = card.width / 2;
  card.interactive = true;
  card.buttonMode = true;

  card.on('pointerdown', ()=>{
    console.log("Hello");
  });

  card.on("pointerover", ()=>{
    console.log("pointerover")
    cardBg.tint = 0xffffff;
  })

  card.on("pointerout", ()=>{
    console.log("pointerout")
    cardBg.tint = 0xff0000;
  })


  const cardBg: Sprite = new Sprite(Texture.WHITE);
  cardBg.anchor.set(0.5);
  cardBg.width = 100;
  cardBg.height = 150;
  cardBg.tint = 0xff0000;
 

  const cardText: Text = new Text("Hello №1", {fontSize: 30, wordWrap: true, align: "center"});
  cardText.anchor.set(0.5);
  cardText.position.x = card.height / 2;
  cardText.position.y = card.width / 2;
  cardText.zIndex = 10;
  cardText

  card.addChild(cardBg, cardText);
  return card;
};
