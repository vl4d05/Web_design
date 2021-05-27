export default class itemModelList {
  constructor() {
    this.items = [];
    this.onChangeCallBack = null;
    return this.onModelChange();
  }
  add(item) {
    this.items.push(item);
    this.onChangeCallBack = this.onChangeCallBack;
  }
  delete(itemId) {
    const itemIndex = this.items.findIndex((item) => item.id === itemId);
    this.items.splice(itemIndex, 1);
  }

  setOnChangeCallback(funcCallback) {
    this.onChangeCallBack = funcCallback;
  }

  onModelChange() {
    let handler = {
      set: (obj, prop, val) => {
        obj[prop] = val;
        if (this.onChangeCallBack) this.onChangeCallBack();
        return true;
      },
    };
    return new Proxy(this, handler);
  }
}
