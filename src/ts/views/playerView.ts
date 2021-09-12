export default class PlayerView {
  private container: HTMLElement;
  private totalScore: HTMLElement;
  private currentScore: HTMLElement;

  constructor(player: number) {
    this.container = document.querySelector(`.player--${player}`)!;
    this.totalScore = document.querySelector(`#score--${player}`)!;
    this.currentScore = document.querySelector(`#current--${player}`)!;
  }

  setActive() {
    if (this.container.classList.contains('player--active')) return;
    this.container.classList.add('player--active');
  }

  removeActive() {
    this.container.classList.remove('player--active');
  }

  setWinner() {
    if (this.container.classList.contains('player--winner')) return;
    this.container.classList.add('player--winner');
  }

  removeWinner() {
    this.container.classList.remove('player--winner');
  }

  updateScore(score: number, type: 'current' | 'total') {
    if (type === 'current')
      return (this.currentScore.textContent = score.toString());
    this.totalScore.textContent = score.toString();
  }

  resetScore(type: 'current' | 'total') {
    if (type === 'current') return (this.currentScore.textContent = '0');
    return (this.totalScore.textContent = '0');
  }
}
