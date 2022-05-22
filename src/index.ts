import { appConfig } from './config/index';
import { Card } from "./card/index";
import { Application, Loader, Text} from "pixi.js";
import { GameBoard } from "./gameBoard";
import { cardInfo } from "./config";
import { Game } from "./game";

window.onload = () => {
  const app = new Application(appConfig);

  let cards: Card[] = [];
  const loader = new Loader();

  const game = new Game();

  const gameBoard: GameBoard = new GameBoard(
    app.screen.width / 2,
    app.screen.height / 2,
    700
  );

  // loading
  const loadingText:Text = new Text("", {
    fontSize: 60,
    align: "center",
    fill: "#000",
  });
  loadingText.anchor.set(0.5);
  loadingText.position.x = app.screen.width / 2;
  loadingText.position.y = app.screen.height / 2;
  app.stage.addChild(loadingText);

  loader
    .add("1", "1.png")
    .add("2", "2.png")
    .add("3", "3.png")
    .add("4", "4.png")
    .add("5", "5.png")
    .add("6", "6.png")
    .add("7", "7.png")
    .add("8", "8.png")
    .add("cardCover", "cardCover.png");


  loader.onProgress.add(() => {
    loadingText.text = "Loading " + loader.progress.toFixed(2) + "%";
  });

  loader.onComplete.add(()=>{
    cards = Card.createCards(cardInfo, loader);
    game.initGame(cards, app, gameBoard)
  });

  loader.load();
  // end loading

  app.ticker.add((delta) => {
    if (game.getIsGameBegin()) {
      cards.map((card) => {
        if (
          !card.isHide &&
          !game.getPlayingCards().includes(card) &&
          !card.isWin &&
          card.interactive
        ) {
          game.pushPlaingCards(card);
        }
        if (
          game.getPlayingCards().length === 2 &&
          game.getPlayingCards()[0].id === game.getPlayingCards()[1].id
        ) {
          cards.map((card) => {
            if (
              card.id === game.getPlayingCards()[0].id ||
              card.id === game.getPlayingCards()[1].id
            ) {
              card.setIsWin();
              card.setIsInteractive(false);
              game.increaseWinCounter();
            }
          });
          game.setPlayingCards([]);
        }
        if (
          game.getPlayingCards().length === 2 &&
          game.getPlayingCards()[0].id !== game.getPlayingCards()[1].id
        ) {
          app.ticker.stop();
          game.setInteractiveOfHiddenCards(cards, true);
          setTimeout(() => {
            game.hideCards(cards, true);
            app.ticker.start();
          }, 600);
        }
        if (game.getWinCounter() === cards.length && app.ticker.started) {
          app.ticker.stop();
          setTimeout(()=>{
            game.setIsGameBegin(false);
            cards = Card.createCards(cardInfo, loader);
            game.initGame(cards, app, gameBoard);
          }, 5000);
        }
      });
    }
  });
};
