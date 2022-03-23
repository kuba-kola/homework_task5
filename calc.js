class Calculator {
  constructor(x, y) {    
    if (!Number.isFinite(x) || !Number.isFinite(y)) {
      throw new Error(`Ошибка! Вы ввели не число!`);
    }

    this.x = x;
    this.y = y;     
  }

  setX = num => {
    if (!Number.isFinite(num)) {
      throw new Error(`Ошибка! Вы ввели не число!`);
    }

    this.x = num;
  }

  setY = num => {
    if (!Number.isFinite(num) || num === 0) {
      throw new Error(`Ошибка! Вы ввели не число!`);
    }

    this.y = num;
  }

  logSum = () => {
    console.log(this.x + this.y);
  }

  logMul = () => {
    console.log(this.x * this.y);
  }

  logSub = () => {
    console.log(this.x - this.y);
  }

  logDiv = () => {
    if (this.y === 0) {
      throw new Error(`Ошибка! Вы пытаесь поделить на ноль!`);
    }

    console.log(this.x / this.y);
  }
}