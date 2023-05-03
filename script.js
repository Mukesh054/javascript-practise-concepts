let obj = {
  name: "Hello",
  getName: function () {
    function fn() {
      console.log("Normal");
      console.log(this, "???????????");
    }
    fn();
  },
  getName2: () => {
    fn = () => {
      console.log("fat");
      console.log(this, ">>>>>>>>>>");
    }
    return fn();
  },
};

obj.getName();
obj.getName2();
