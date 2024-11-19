import { Engine, DisplayMode, Color } from "excalibur";
import { loader } from "./loader";
import { Paddle } from "./paddle";
import { Ball } from "./ball";

class MainGame extends Engine {
  constructor() {
    super({
      width: 800,
      height: 600,
      displayMode: DisplayMode.FillScreen,
    });
  }
  initialize() {
    const paddle1 = new Paddle({ x: 500, y: 400, colorOfBar: Color.Red });
    const ball1 = new Ball({ x: 100, y: 300, colorOfBall: Color.Orange });
    const ball2 = new Ball({ x: 400, y: 150, colorOfBall: Color.Green });
    this.input.pointers.primary.on("move", (e) => {
      paddle1.pos.x = e.worldPos.x;
    });

    this.add(paddle1);
    this.add(ball1);
    this.add(ball2);
    this.start(loader);
  }
}

export const game = new MainGame();

game.initialize();
