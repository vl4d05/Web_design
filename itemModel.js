export default class itemModel {
  constructor(text, time) {
    this.id = Math.round(Math.random() * 10000).toString();
    this.text = text;
    this.time = time;
  }
}
