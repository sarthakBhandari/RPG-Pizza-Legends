class ReplacementMenu {
  constructor({ replacements, onComplete }) {
    this.replacements = replacements;
    this.onComplete = onComplete;
  }

  decide() {
    this.menuSubmit(this.replacements[0]);
  }

  menuSubmit(replacement) {
    this.keyboardMenu?.end();
    this.onComplete(replacement);
  }

  showMenu(container) {
    this.keyboardMenu = new KeyboardMenu();
    this.keyboardMenu.init(container);
    this.keyboardMenu.setOptions(
      this.replacements.map((combatant) => {
        return {
          label: combatant.name,
          description: combatant.description,
          handler: () => {
            this.menuSubmit(combatant);
          },
        };
      })
    );
  }

  init(container) {
    if (this.replacements[0].isPlayerControlled) {
      this.showMenu(container);
    } else {
      this.decide();
    }
  }
}
