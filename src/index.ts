import { Application, Sprite } from "pixi.js";
import { Card } from "./card";
import { GameBoard } from "./gameBoard";

const app = new Application({
  view: document.getElementById("pixi-canvas") as HTMLCanvasElement,
  resolution: window.devicePixelRatio || 1,
  autoDensity: true,
  backgroundColor: 0x6495ed,
  width: innerWidth,
  height: innerHeight,
});

const gameBoard: GameBoard =  new  GameBoard(app.screen.width / 2, app.screen.height / 2, 600);
const card:Card = new Card(-240, -215, "Жук", 0, 1, "Жу-жу-жу");
const card2:Card = new Card(-130, -215, "Стрекоза", 1, 2, "Бз-бз-бз");
const card3:Card = new Card(-20, -215, "Пончик", 1, 3, "Сладкий");

gameBoard.addCard(card);
gameBoard.addCard(card2);
gameBoard.addCard(card3);


app.stage.addChild(gameBoard);
