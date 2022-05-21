import { Card } from './card/index';
import { Application } from "pixi.js";
import { GameBoard } from "./gameBoard";
import { cardInfo } from "./config";

const app = new Application({
  view: document.getElementById("pixi-canvas") as HTMLCanvasElement,
  resolution: window.devicePixelRatio || 1,
  autoDensity: true,
  backgroundColor: 0x6495ed,
  width: innerWidth,
  height: innerHeight,
  antialias:true,
});

const gameBoard: GameBoard =  new  GameBoard(app.screen.width / 2, app.screen.height / 2, 700);
// gameBoard.addCards(cardInfo);
// gameBoard.hideCards();
const cards:Card[] = Card.addCards(cardInfo);
// cards.map(card => card.setIsHide(true));


app.stage.addChild(gameBoard, ...cards);

let isGameBegin = false;
if(isGameBegin === false) {
  setTimeout(()=>{
    cards.map(card => card.setIsHide(true));
    isGameBegin = true;
  }, 5000)
}

app.ticker.add((delta) => {
  
});


