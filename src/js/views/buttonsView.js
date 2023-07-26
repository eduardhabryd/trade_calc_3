import { TIMEOUT_SEC } from "../config";

class buttonsView {
  _btnOpen = document.querySelector(".button");
  _btnClose = document.querySelector(".close");
  _btnCopyText = document.querySelector(".copyText");
  _btnCopy = document.querySelector(".copy");
  _popup = document.querySelector(".popup");
  _container = document.querySelector(".container");
  _overlay = document.querySelector(".overlay");
  _position = document.querySelector(".position");
  changeCopyButtonTextTimer;

  constructor() {
    this._addHandlerShowWindow();
    this._addHandlerHideWindow();
    this.addHandlerCopyBtn();
  }

  toggleWindow() {
    this._overlay.classList.toggle("hidden");
    this._popup.classList.toggle("hidden");
    this.changeCopyButtonText();
  }

  addHandlerCopyBtn(handler = undefined) {
    this._btnCopy.addEventListener("click", handler);
  }

  _addHandlerShowWindow() {
    this._btnOpen.addEventListener("click", this.toggleWindow.bind(this));
  }

  _addHandlerHideWindow() {
    this._btnClose.addEventListener("click", this.toggleWindow.bind(this));
    this._overlay.addEventListener("click", this.toggleWindow.bind(this));
  }

  changeCopyButtonText() {
    clearTimeout(this.changeCopyButtonTextTimer);
    this._btnCopyText.textContent = "Copied to clipboard ✔";
    this.changeCopyButtonTextTimer = setTimeout(() => {
      this._btnCopyText.textContent = "Copy";
    }, TIMEOUT_SEC * 1000);
  }

  getData() {
    // SELECT ELEMENT
    const select = document.getElementById("broker");
    // DATA
    const deposit = +document.getElementById("deposit").value;
    const risk = +document.getElementById("risk").value;
    const stop = +document.getElementById("stop").value;
    const broker = select.options[select.selectedIndex].value;
    return { deposit, risk, stop, broker };
  }

  addHandlerGetData(handler) {
    this._btnOpen.addEventListener("click", function () {
      handler();
    });
  }

  setPosition(positionValue) {
    this._position.textContent = `$${positionValue}`;
  }
}

export default new buttonsView();
