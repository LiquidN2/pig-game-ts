class NewGameView {
  private btnNew: HTMLButtonElement = document.querySelector('.btn--new')!;

  constructor() {}

  addClickHandler(handler: Function) {
    this.btnNew.addEventListener('click', (event: Event) => {
      handler();
      console.log('test');
    });
  }
}

export default new NewGameView();
