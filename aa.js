// Important levelup:
// 1) Browser APIs {
//     - DOM                                ->>>> done
//     - geolocation api                    ->>>> done
//     - history api                        ->>>> done
//     - web Worker                         ->>> done
//     - Canvas api
// }
// 2) Javascript in Browser {
// - Custom Events
// - Mobile Events
// - Ajax working and its security points
// - Web Sockets
// - Web Page parsing, page flow, re-painting
// }
// 3) Node JS core
// 4) Web Performance Analysis and Optimization

// Topics to cover in Javascript
/**
 * Test driven development     => done
 * How to use Profiler         => done
 * Lighthouse                  => done
 * Regular Expressions         => done
 * Date functions in detail
 * Accessibility (https://www.youtube.com/watch?v=fGLp_gfMMGU&list=PLNYkxOF6rcICWx0C9LVWWVqvHlYJyqw7g&index=2)
 * Web Sockets
 * Asynchronous Programming
 */

// JS Questions.....
// https://learnersbucket.com/examples/topics/interview/

class Node {
  constructor(val) {
    this.val = val;
    this.next = null;
  }
}

class LinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
    this.length = 0;
  }

  push(val) {
    let newNode = new Node(val);

    if (!this.head) {
      this.head = newNode;
      this.tail = this.head;
    } else {
      this.tail.next = newNode;
      this.tail = newNode;
    }
    this.length++;
    return this;
  }

  isPalindrome() {
    let front = this.head;

    function isPalindromeRecursive(node) {
      if (!node) return true;

      const reverse = isPalindromeRecursive(node.next);

      const isEqual = front.val === node.val;
      front = front.next;
      return reverse && isEqual;
    }

    return isPalindromeRecursive(this.head);
  }
}

// let linkedList = new LinkedList();
// linkedList.push(1);
// linkedList.push(2);
// linkedList.push(1);
// linkedList.push(1);

// console.log(linkedList.isPalindrome());

function countSum(arr, num) {
  let map = {};

  let stack = [];

  for (let i = 0; i < arr.length; i++) {
    if (map[arr[i]]) {
      stack.push([map[arr[i]], arr[i]]);
    } else {
      map[num - arr[i]] = arr[i];
    }
  }
  return stack;
}

const aa = [2, 4, 5, 5, 12, 7, 13, 45];
console.log(countSum(aa, 12));
