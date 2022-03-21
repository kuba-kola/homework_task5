class Calculator {
  constructor(x, y) {    
    this.x = x;
    this.y = y;
    this.setX = this.setX.bind(this);
    this.setY = this.setY.bind(this);
    this.logSum = this.logSum.bind(this);
    this.logMul = this.logMul.bind(this);
    this.logSub = this.logSub.bind(this);
    this.logDiv = this.logDiv.bind(this);
        
    if (!Number.isFinite(x) || !Number.isFinite(y)) {
      throw new Error('Ошибка!');

    }
  }

  setX(newX) {
    if (!Number.isFinite(newX)) {
      throw new Error('Ошибка!');
    }

    this.x = newX;
  }

  setY(newY) {
    if (!Number.isFinite(newY) || newY === 0) {
      throw new Error('Ошибка!');
    }

    this.y = newY;
  }

  logSum() {
    console.log(this.x + this.y);
  }

  logMul() {
    console.log(this.x * this.y);
  }

  logSub() {
    console.log(this.x - this.y);
  }

  logDiv() {
    if (this.y === 0) {
      throw new Error('Ошибка!');
    }

    console.log(this.x / this.y);
  }
}

const calculator = new Calculator(12, 3);
calculator.logSum(); // 15
calculator.logDiv(); // 4
calculator.setX(15);
calculator.logDiv(); // 5
const logCalculatorDiv = calculator.logDiv;
logCalculatorDiv(); // 5
calculator.setY(444n); // Ошибка!
