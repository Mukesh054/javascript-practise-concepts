// PIPE method implementation......

// const pipe = (...fns) => x => fns.reduce((v, f) => f(v), x)

getName = (person) => person.name;
uppercase = (string) => string.toUpperCase();

pipe =
  (...functions) =>
  (value) =>
    functions.reduce((value, currentFunction) => currentFunction(value), value);

pipe(getName, uppercase)({ name: "Buckethead" });

console.log(pipe([times(2), times(3)]));
function pipe(funcs) {
  return function (arg) {
    return funcs.reduce((result, func) => {
      return func.call(this, result);
    }, arg);
  };
}

// COMPOSE FUNCTION IMPLEMENTATION
// This only use reduceRight array function

compose =
  (...fns) =>
  (x) =>
    fns.reduceRight((v, f) => f(v), x);
