import {
  Pipe,
  setClassMetadata,
  ɵɵdefinePipe
} from "./chunk-XCNJ6FKI.js";
import "./chunk-WKYGNSYM.js";

// node_modules/tr-currency/fesm2022/tr-currency.mjs
var _TrCurrencyPipe = class _TrCurrencyPipe {
  transform(value, symbol = "", isCurrencyFront = false) {
    if (value == 0) {
      return "0,00 " + symbol;
    }
    let isValueNegative = false;
    if (value < 0) {
      isValueNegative = true;
      value *= -1;
    }
    let money = value.toString().split(".");
    let newMoney = "";
    let lira = money[0];
    let penny = "00";
    if (money.length > 1) {
      penny = money[1];
      if (penny.length == 1) {
        penny = penny + "0";
      }
      if (penny.length > 1) {
        penny = this.convertNumber(+penny).toString();
      }
    }
    let count = 0;
    for (let i = lira.length; i > 0; i--) {
      if (count == 3 && count < lira.length) {
        newMoney = lira[i - 1] + "." + newMoney;
        count = 1;
      } else {
        newMoney = lira[i - 1] + newMoney;
        count++;
      }
    }
    if (!isCurrencyFront)
      newMoney = `${newMoney},${penny} ${symbol}`;
    else
      newMoney = `${symbol}${newMoney},${penny}`;
    if (isValueNegative) {
      newMoney = "-" + newMoney;
    }
    return newMoney;
  }
  convertNumber(value) {
    const stringValue = value.toString();
    if (stringValue.length > 2) {
      const remainingValue = parseInt(stringValue.substr(2));
      if (remainingValue > 5) {
        return parseInt(stringValue.substr(0, 2)) + 1;
      }
      return parseInt(stringValue.substr(0, 2));
    }
    return value;
  }
};
_TrCurrencyPipe.ɵfac = function TrCurrencyPipe_Factory(t) {
  return new (t || _TrCurrencyPipe)();
};
_TrCurrencyPipe.ɵpipe = ɵɵdefinePipe({
  name: "trCurrency",
  type: _TrCurrencyPipe,
  pure: true,
  standalone: true
});
var TrCurrencyPipe = _TrCurrencyPipe;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(TrCurrencyPipe, [{
    type: Pipe,
    args: [{
      name: "trCurrency",
      standalone: true
    }]
  }], null, null);
})();
export {
  TrCurrencyPipe
};
//# sourceMappingURL=tr-currency.js.map
