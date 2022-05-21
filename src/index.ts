import { Application, Text, Loader } from "pixi.js";
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
const card:Card = new Card(-240, -215, "Card №2", 0);

gameBoard.addCard(card);

app.stage.addChild(gameBoard);
