class Progress {
  constructor() {
    this.mapId = "DemoRoom";
    this.startingHeroX = 0;
    this.startingHeroY = 0;
    this.startingHeroDirection = "down";
    this.saveFileKey = "PizzaLegends_SaveFile1";
  }

  save() {
    window.localStorage.setItem(
      this.saveFileKey,
      JSON.stringify({
        mapId: this.mapId,
        startingHeroX: this.startingHeroX,
        startingHeroY: this.startingHeroY,
        startingHeroDirection: this.startingHeroDirection,
        playerState: {
          pizzas: window.playerState.pizzas,
          lineup: window.playerState.lineup,
          items: window.playerState.items,
          storyFlags: window.playerState.storyFlags,
        },
      })
    );
  }

  getSaveFile() {
    const file = window.localStorage.getItem(this.saveFileKey);
    return file ? JSON.parse(file) : null;
  }

  load() {
    const file = this.getSaveFile();

    if (file) {
      (this.mapId = file.mapId), (this.startingHeroX = file.startingHeroX);
      this.startingHeroY = file.startingHeroY;
      this.startingHeroDirection = file.startingHeroDirection;
      Object.keys(file.playerState).forEach((key) => {
        window.playerState[key] = file.playerState[key];
      });
    }
  }
}
