import { action, computed, makeObservable, observable } from "mobx";

export class TypeBottomNavigationBarButton {
  static store = "store";
  static location = "location";
  static settings = "settings";
}

class StateBottomNavigationBarButton {
  _currentButton = TypeBottomNavigationBarButton.store

  get getCurrentButton() {
    return this._currentButton;
  }

  static get Instance() {
    return this._instance || (this._instance = new this());
  }

  constructor() {
    makeObservable(this, {
      _currentButton: observable,
      changeCurrentButton: action,
      getCurrentButton: computed,
    });
  }

  changeCurrentButton(currentButton) {
    if (!currentButton)
      throw new Error("param currentButton of changeCurrentButton is empty");

    this._currentButton = currentButton;
  }
}

export const stateBottomNavigationBarButton =
  StateBottomNavigationBarButton.Instance;
