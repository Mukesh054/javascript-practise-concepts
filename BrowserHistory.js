class BrowserHistory {
  constructor(url) {
    this.entries = [];
    this.currentIndex = 0;

    if (url !== undefined) {
      this.entries.push(url);
    }
  }

  visit(url) {
    this.entries.length = this.currentIndex + 1;
    this.entries.push(url);
    this.currentIndex++;
  }

  get current() {
    return this.entries[this.currentIndex];
  }

  goBack() {
    this.currentIndex = Math.max(0, this.currentIndex - 1);
  }

  forward() {
    this.currentIndex = Math.min(
      this.entries.length - 1,
      this.currentIndex + 1
    );
  }
}
