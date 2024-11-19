import { Actor, Color, CollisionType } from "excalibur";

export class Ball extends Actor {
  constructor(props: { x: number; y: number; colorOfBall: Color }) {
    super({
      x: props.x,
      y: props.y,
      radius: 10,
      color: props.colorOfBall,
    });
  }
}
