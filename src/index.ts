import { Card } from "./card/index";
import { Application, Ticker, Loader, Sprite } from "pixi.js";
import { GameBoard } from "./gameBoard";
import { cardInfo } from "./config";

window.onload = () => {
  const app = new Application({
    view: document.getElementById("pixi-canvas") as HTMLCanvasElement,
    resolution: window.devicePixelRatio || 1,
    autoDensity: true,
    backgroundColor: 0x6495ed,
    width: innerWidth,
    height: innerHeight,
    antialias: true,
  });

  let isGameBegin = false;
  let cards: Card[] = [];
  const loader = new Loader();
  let winCardsCounter: number = 0;
  let plaingCards: Card[] = [];

  const hideCards = (isHide: boolean) => {
    cards.map((card) => {
      if (!card.isWin) {
        card.setIsHide(isHide);
      }
    });
    plaingCards = [];
  };

  const setInteractiveOfHiddenCards = (isInteractive: boolean): void => {
    cards.map((card) => {
      if (card.isHide && !card.isWin) {
        card.setIsInteractive(isInteractive);
      }
    });
  };

  const beginGame = () => {
    setTimeout(() => {
      cards.map((card) => {
        card.setIsHide(true);
        card.setIsInteractive(true);
      });
    }, 5000); //5000
  };

  const initGame = () => {
    winCardsCounter = 0;
    plaingCards = [];
    isGameBegin = true;
    app.ticker.start();

    if (app.stage.children.length > 0) {
      for (var i = app.stage.children.length - 1; i >= 0; i--) {
        app.stage.removeChild(app.stage.children[i]);
      }
    }
    
    const gameBoard: GameBoard = new GameBoard(
      app.screen.width / 2,
      app.screen.height / 2,
      700
    );

    cards = Card.createCards(cardInfo, loader);
    gameBoard.addChild(...cards);

    app.stage.addChild(gameBoard);

    beginGame();
  };

  loader
    .add("1", "1.png")
    .add("2", "2.png")
    .add("3", "3.png")
    .add("4", "4.png")
    .add("5", "5.png")
    .add("6", "6.png")
    .add("7", "7.png")
    .add("8", "8.png");

  loader.onProgress.add((e) => {
    console.log(e.progress);
  });
  loader.onComplete.add(initGame);
  loader.load();

  app.ticker.add((delta) => {
    if (isGameBegin) {
      cards.map((card) => {
        if (
          !card.isHide &&
          !plaingCards.includes(card) &&
          !card.isWin &&
          card.interactive
        ) {
          plaingCards.push(card);
        }
        if (
          plaingCards.length === 2 &&
          plaingCards[0].id === plaingCards[1].id
        ) {
          cards.map((card) => {
            if (
              card.id === plaingCards[0].id ||
              card.id === plaingCards[1].id
            ) {
              card.setIsWin();
              card.setIsInteractive(false);
              winCardsCounter++;
            }
          });
          plaingCards = [];
        }
        if (
          plaingCards.length === 2 &&
          plaingCards[0].id !== plaingCards[1].id
        ) {
          app.ticker.stop();
          setInteractiveOfHiddenCards(true);
          setTimeout(() => {
            hideCards(true);
            app.ticker.start();
          }, 600);
        }
        if (winCardsCounter === cards.length) {
          isGameBegin = false;
          initGame();
        }
      });
    }
  });
};
