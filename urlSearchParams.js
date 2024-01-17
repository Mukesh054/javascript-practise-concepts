class MyURLSearchParams {
  constructor(init) {
    // string as it is
    this.qs = init[0] === "?" ? init.slice(1) : init;
    // map string with key value pair
    this.qsMap = {};

    this.qs.split("&").forEach((param) => {
      const [key, value] = param.split("=");

      if (!(key in this.qsMap)) {
        this.qsMap[key] = [];
      }

      this.qsMap[key].push(value);
    });
  }

  append(name, value) {
    this.qs += `&${name}=${value + ""}`;
    if (name in this.qsMap) {
      this.qsMap[name].push(value + "");
    } else {
      this.qsMap[name] = value + "";
    }
  }

  delete(name) {
    delete this.qsMap[name];
    this.qs = this.qs
      .split("&")
      .filter((i) => i.split("=")[0] !== name)
      .join("&");
  }

  *entries() {
    const args = this.qs.split("&");
    for (let arg of args) {
      const [key, value] = arg.split("=");
      let reply = [key, value];
      yield reply;
    }
  }

  forEach(callback) {
    [...this.entries()].forEach((i) => {
      callback(i[1], i[0]);
    });
  }

  get(name) {
    return name in this.qsMap ? this.qsMap[name][0] : null;
  }

  getAll(name) {
    return name in this.qsMap ? this.qsMap[name] : [];
  }

  has() {
    return name in this.qsMap;
  }

  keys() {
    return this.qsMap.split("&").map((keyValue) => keyValue.split("=")[0]);
  }

  values() {
    return this.qsMap.split("&").map((keyValue) => keyValue.split("=")[1]);
  }

  set(name, value) {
    // this.qsMap[name] = [value + ""];
    this.append(name, value);
  }

  sort() {
    const sortedQs = [];
    const sortedKeys = Object.keys(this.qsMap).sort();
    sortedKeys.forEach((key) => {
      const values = this.qsMap[key];
      values.forEach((value) => sortedQs.push(`${key}=${value}`));
    });
    this.qs = sortedQs.join("&");
  }

  toString() {
    return this.qs;
  }
}

const params = new MyURLSearchParams("?a=1&a=2&b=2");
console.log(params.get("a"));
console.log(params.getAll("a"));
console.log(params.get("b"));
console.log(params.getAll("b"));

params.append("a", 3);
params.set("b", "3");
console.log(params.getAll("b"));
console.log(params.toString());
