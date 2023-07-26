import * as model from "./model.js";
import buttonsView from "./views/buttonsView";

const controlData = function () {
  // Get data from inputs
  const data = buttonsView.getData();

  // Calculate the data and copy to clipboard
  model.setValues(data);
  model.calculatePosition();
  model.copyToClipboard(model.state.position);

  // Change the value in modal window
  buttonsView.setPosition(model.state.position);
};

const controlCopyButton = function () {
  model.copyToClipboard(model.state.position);
  buttonsView.changeCopyButtonText();
};

// Init
const init = function () {
  buttonsView.addHandlerGetData(controlData);
  buttonsView.addHandlerCopyBtn(controlCopyButton);
};
init();
