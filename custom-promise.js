const STATE = {
  PENDING: "pending",
  SUCCESS: "success",
  REJECTED: "rejected",
};

class MyPromise {
  constructor(execFn) {
    this.val = null;
    this.state = STATE.PENDING;
    this.successCallbacks = [];
    this.failedCallbacks = [];

    try {
      execFn(
        (val) => this.resolve(val),
        (val) => this.reject(val)
      );
    } catch (err) {
      this.reject(err);
    }
  }

  resolve(val) {
    this.val = val;
    this.state = STATE.SUCCESS;
    this.successCallbacks.forEach((cb) => cb());
  }

  reject(val) {
    this.val = val;
    this.state = STATE.REJECTED;
    this.failedCallbacks.forEach((cb) => cb());
  }

  then(onResolve, onReject) {
    return new MyPromise((resolve, reject) => {
      const successCaller = () => {
        if (!onResolve) return resolve(this.val);

        try {
          resolve(onResolve(this.val));
        } catch (error) {
          reject(error);
        }
      };

      const errorCaller = () => {
        if (!onReject) return reject(this.val);

        try {
          resolve(onReject(this.val));
        } catch (error) {
          reject(error);
        }
      };

      switch (this.state) {
        case STATE.PENDING:
          this.successCallbacks.push(successCaller);
          this.failedCallbacks.push(failedCaller);
          break;
        case STATE.SUCCESS:
          successCaller();
          break;
        case STATE.REJECTED:
          failedCaller();
          break;
      }
    });
  }

  catch(onReject) {
    return this.then(null, onReject);
  }
}

function promiseA(a) {
  return new MyPromise((resolve, reject) => {
    setTimeout(() => {
      if (a === 1) {
        return reject("a can not be equal to 1");
      }

      resolve(a + a);
    }, 2000);
  });
}

promiseA(1)
  .then((res) => console.log(res))
  .catch((err) => console.log(err));
