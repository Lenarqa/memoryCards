import { GameBoard } from './../gameBoard/index';
import { Application } from "pixi.js";
import { Card } from "../card";

export class Game {
  private isGameBegin: boolean;
  private winCardsCounter: number;
  private plaingCards: Card[];

  constructor() {
    this.isGameBegin = false;
    this.winCardsCounter = 0;
    this.plaingCards = [];
  }

  public initGame = (cards:Card[], app:Application,  gameBoard:GameBoard) => {
    this.setWinCounter(0);
    this.setPlayingCards([]);
    this.setIsGameBegin(true);
    app.ticker.start();

    this.clearAppStage(app);
    gameBoard.addChild(...cards);
    app.stage.addChild(gameBoard);
    this.beginGame(cards);
  };

  public beginGame = (cards:Card[]): void => {
    setTimeout(() => {
      cards.map((card) => {
        card.setIsHide(true);
        card.setIsInteractive(true);
      });
    }, 5000); //5000
  };

  private clearAppStage = (app: Application): void => {
    if (app.stage.children.length > 0) {
      for (var i = app.stage.children.length - 1; i >= 0; i--) {
        app.stage.removeChild(app.stage.children[i]);
      }
    }
  };

  public hideCards = (cards: Card[], isHide: boolean): void => {
    //change to private later
    cards.map((card) => {
      if (!card.getIsWin()) {
        card.setIsHide(isHide);
      }
    });
    this.plaingCards = [];
  };

  public setInteractiveOfHiddenCards = (cards:Card[], isInteractive: boolean): void => {
    cards.map((card) => {
      if (card.getIsHide() && !card.getIsWin()) {
        card.setIsInteractive(isInteractive);
      }
    });
  };

  public hideErrorCards = (cards:Card[], app: Application): void => {
    app.ticker.stop();
    this.setInteractiveOfHiddenCards(cards, true);
    setTimeout(() => {
      this.hideCards(cards, true);
      app.ticker.start();
    }, 100);
  };

  //getters setters
  public getIsGameBegin = (): boolean => {
    return this.isGameBegin;
  };

  public setIsGameBegin = (isBegin: boolean): void => {
    this.isGameBegin = isBegin;
  };

  public getPlayingCards = (): Card[] => {
    return this.plaingCards;
  };

  public setPlayingCards = (plaingCards: Card[]): void => {
    this.plaingCards = plaingCards;
  };

  public pushPlaingCards = (plaingCard: Card): void => {
    this.plaingCards.push(plaingCard);
  };

  public getWinCounter = (): number => {
    return this.winCardsCounter;
  };

  public setWinCounter = (count: number) => {
    this.winCardsCounter = count;
  };

  public increaseWinCounter = (): void => {
    this.winCardsCounter++;
  };
}
