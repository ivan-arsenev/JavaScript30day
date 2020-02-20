class Counter {
  x = 0;

  increment() {
    this.x++;
  }

  onClick() {
    this.increment();
  }
}

const c = new Counter();
c.onClick(); // works fine
c.increment(); // error
