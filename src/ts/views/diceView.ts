import dice1 from '../../img/dice-1.png';
import dice2 from '../../img/dice-2.png';
import dice3 from '../../img/dice-3.png';
import dice4 from '../../img/dice-4.png';
import dice5 from '../../img/dice-5.png';
import dice6 from '../../img/dice-6.png';

class DiceView {
  private image: HTMLImageElement = document.querySelector('.dice')!;
  private btnRoll: HTMLButtonElement = document.querySelector('.btn--roll')!;

  constructor() {}

  update(score: number) {
    switch (score) {
      default:
      case 1:
        this.image.src = dice1;
        break;

      case 2:
        this.image.src = dice2;
        break;

      case 3:
        this.image.src = dice3;
        break;

      case 4:
        this.image.src = dice4;
        break;

      case 5:
        this.image.src = dice5;
        break;

      case 6:
        this.image.src = dice6;
        break;
    }
  }

  addRollHandler(handler: Function) {
    this.btnRoll.addEventListener('click', event => {
      handler();
    });
  }

  disableRoll() {
    this.btnRoll.disabled = true;
  }

  enableRoll() {
    this.btnRoll.disabled = false;
  }
}

export default new DiceView();
