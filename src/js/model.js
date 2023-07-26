import { COMMISSIONS } from "./config.js";

export const state = {
  deposit: 0,
  risk: 0,
  stop: 0,
  position: 0,
  currentCommission: 0,
};

const getCommission = function (broker) {
  return COMMISSIONS[broker].maker + COMMISSIONS[broker].taker;
};

export const setValues = function (data) {
  state.deposit = data.deposit;
  state.risk = data.risk;
  state.stop = data.stop;
  state.currentCommission = getCommission(data.broker);
};

export const calculatePosition = function () {
  const { deposit, risk, stop, currentCommission } = state;

  // Formula
  let output = (deposit * (risk / 100)) / (stop / 100);
  output = output - output * currentCommission; // 0.06
  output = Math.trunc(output);

  state.position = output;
};

export const copyToClipboard = function (dataToCopy) {
  navigator.clipboard.writeText(dataToCopy);
};
