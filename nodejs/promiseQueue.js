/**
 * Promise 队列
 */
var todo = [
  function todo1() {
    return new Promise(function(resolve, reject) {
      setTimeout(function() {
        console.log('todo1');
        resolve();
      }, 3000);
    }); 
  },
  function todo2() {
    return new Promise(function (resolve, reject) {
      setTimeout(function () {
        console.log('todo2');
        resolve();
      }, 1000);
    }); 
  },
];

function promiseQueue(que) {
  let promise = Promise.resolve();
  que.forEach(function(q) {
    promise = promise.then(function() {
      return new Promise(function(resolve) {
        q().then(function() {
          resolve();
        })
      });
    });
  });
}

promiseQueue(todo);
