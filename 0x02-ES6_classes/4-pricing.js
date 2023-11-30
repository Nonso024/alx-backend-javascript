import Currency from './3-currency';

export default class Pricing {
  constructor(amount, currency) {
    this._amount = amount;
    this._currency = currency;
  }

  get amount() { return this._amount; }

  set amount(cost) {
    if (typeof cost === 'number') {
      this._amount = cost;
    } else {
      throw new TypeError('Amount must be a number');
    }
  }

  get currency() {
    return this._currency;
  }

  set currency(sign) {
    if (sign instanceof Currency) {
      this._currency = sign;
    } else {
      throw new TypeError('Currency must be a currency');
    }
  }

  displayFullprice() {
    return `${this.amount} ${this.currency.name} (${this.currency.code})`;
  }

  static convertPrice(amount, conversionRate) {
    if (typeof amount !== 'number') {
      throw new TypeError('Amount must be a number');
    }
    if (typeof conversionRate !== 'number') {
      throw new TypeError('ConversionRate must be a number');
    }
    return amount * conversionRate;
  }
}
