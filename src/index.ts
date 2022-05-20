import { Application, Text, Container, Sprite, Texture} from 'pixi.js'
import { createNewCard } from './card';

const app = new Application({
	view: document.getElementById("pixi-canvas") as HTMLCanvasElement,
	resolution: window.devicePixelRatio || 1,
	autoDensity: true,
	backgroundColor: 0x6495ed,
	width: innerWidth,
	height: innerHeight
});

const helloText: Text = new Text("Hello world!");
helloText.anchor.set(0.5);
// helloText.x = app.screen.width / 2;
// helloText.y = app.screen.height / 2;

const card = createNewCard();
app.stage.addChild(card);
