export const appConfig = {
  view: document.getElementById("pixi-canvas") as HTMLCanvasElement,
  resolution: window.devicePixelRatio || 1,
  autoDensity: true,
  backgroundColor: 0x6495ed,
  width: innerWidth,
  height: innerHeight,
  antialias: true,
}

export const cardConfig = {
  size: 150,
  colors: {
    cardBgTint: 0x3914af,
    cardName: "#FFE773",
    cardDescription: "#FFDE40",
  }
}

export interface ICard {
  name: string;
  description: string;
  img: number;
  id: number;
}

export const cardInfo: ICard[] = [
  {
    name: "Жук",
    description: "Жу-жу-жу",
    img: 1,
    id: 1,
  },
  {
    name: "Стрекоза",
    description: "Бз-бз-бз",
    img: 2,
    id: 2,
  },
  {
    name: "Пончик",
    description: "Сладкий",
    img: 3,
    id: 3,
  },
  {
    name: "Яицо",
    description: "Панк",
    img: 4,
    id: 4,
  },
  {
    name: "Курица",
    description: "Ку ку",
    img: 5,
    id: 5,
  },
  {
    name: "Бык",
    description: "Тушенка",
    img: 6,
    id: 6,
  },
  {
    name: "Цветочек",
    description: "Пестицид",
    img: 7,
    id: 7,
  },
  {
    name: "Заяц",
    description: "Быстрый",
    img: 8,
    id: 8,
  },
  {
    name: "Жук",
    description: "Жу-жу-жу",
    img: 1,
    id: 1,
  },
  {
    name: "Стрекоза",
    description: "Бз-бз-бз",
    img: 2,
    id: 2,
  },
  {
    name: "Пончик",
    description: "Сладкий",
    img: 3,
    id: 3,
  },
  {
    name: "Яицо",
    description: "Панк",
    img: 4,
    id: 4,
  },
  {
    name: "Курица",
    description: "Ку ку",
    img: 5,
    id: 5,
  },
  {
    name: "Бык",
    description: "Тушенка",
    img: 6,
    id: 6,
  },
  {
    name: "Цветочек",
    description: "Пестицид",
    img: 7,
    id: 7,
  },
  {
    name: "Заяц",
    description: "Быстрый",
    img: 8,
    id: 8,
  },
];
