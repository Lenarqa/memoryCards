import { GameBoard } from "./../gameBoard/index";
import { Application } from "pixi.js";
import { Card } from "../card";

export class Game {
  isGameBegin: boolean;
  cards: Card[] = [];
  winCardsCounter: number;
  plaingCards: Card[];
  app: Application;

  constructor(cards: Card[], app: Application) {
    this.cards = cards;
    this.app = app;
    this.isGameBegin = false;
    this.winCardsCounter = 0;
    this.plaingCards = [];
  }

  public initGame = (gameBoard: GameBoard) => {
    this.winCardsCounter = 0;
    this.plaingCards = [];
    this.isGameBegin = true;
    this.app.ticker.start();

    this.clearAppStage();

    gameBoard.addChild(...this.cards);

    this.app.stage.addChild(gameBoard);

    this.beginGame();
  };

  public beginGame = (): void => {
    setTimeout(() => {
      this.cards.map((card) => {
        card.setIsHide(true);
        card.setIsInteractive(true);
      });
    }, 5000); //5000
  };

  private clearAppStage = (): void => {
    if (this.app.stage.children.length > 0) {
      for (var i = this.app.stage.children.length - 1; i >= 0; i--) {
        this.app.stage.removeChild(this.app.stage.children[i]);
      }
    }
  };

  public hideCards = (isHide: boolean): void => {
    //change to private later
    this.cards.map((card) => {
      if (!card.isWin) {
        card.setIsHide(isHide);
      }
    });
    this.plaingCards = [];
  };

  public setInteractiveOfHiddenCards = (isInteractive: boolean): void => {
    this.cards.map((card) => {
      if (card.isHide && !card.isWin) {
        card.setIsInteractive(isInteractive);
      }
    });
  };

  public hideErrorCards = (): void => {
    this.app.ticker.stop();
    this.setInteractiveOfHiddenCards(true);
    setTimeout(() => {
      this.hideCards(true);
      this.app.ticker.start();
    }, 600);
  };

  //getters setters
  public getIsGameBegin = (): boolean => {
    return this.isGameBegin;
  };

  public setIsGameBegin = (isBegin: boolean): void => {
    this.isGameBegin = isBegin;
  };

  public getCards = (): Card[] => {
    return this.cards;
  };

  public setCards = (cards: Card[]): void => {
    this.cards = cards;
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

  public getApp = ():Application => {
      return this.app;
  }
}
