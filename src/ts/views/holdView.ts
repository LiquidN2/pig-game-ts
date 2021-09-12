class HoldView {
  private btnHold: HTMLButtonElement = document.querySelector('.btn--hold')!;

  constructor() {}

  addClickHandler(handler: Function) {
    this.btnHold.addEventListener('click', (event: Event) => {
      handler();
    });
  }

  disableHold() {
    this.btnHold.disabled = true;
  }

  enableHold() {
    this.btnHold.disabled = false;
  }
}

export default new HoldView();
