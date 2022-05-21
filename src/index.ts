import { Application, Sprite } from "pixi.js";
import { Card } from "./card";
import { GameBoard } from "./gameBoard";
import { cardInfo } from "./config";

const app = new Application({
  view: document.getElementById("pixi-canvas") as HTMLCanvasElement,
  resolution: window.devicePixelRatio || 1,
  autoDensity: true,
  backgroundColor: 0x6495ed,
  width: innerWidth,
  height: innerHeight,
});

const gameBoard: GameBoard =  new  GameBoard(app.screen.width / 2, app.screen.height / 2, 700);
gameBoard.addCards(cardInfo);


app.stage.addChild(gameBoard);
