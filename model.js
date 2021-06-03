import item from "./itemModel.js";
export default class itemModelList {
  constructor() {
    this.items = [];
  }
  addComment(text) {
    const date = new Date();
    let strTime = `${date.getHours()}:${date.getMinutes()}:${date.getSeconds()}`;
    const newItem = new item(text, strTime);
    this.items.push(newItem);
  }
  delete(itemId) {
    const itemIndex = this.items.findIndex((item) => item.id === itemId);
    this.items.splice(itemIndex, 1);
  }
}
