/**
 * Add two numbers represented as linkedlist, longer version
 * @param {*} l1
 * @param {*} l2
 * @returns
 */

var addTwoNumbers = function (l1, l2) {
  let a = l1;
  let b = l2;
  let num1 = [];
  let num2 = [];
  let sum;
  if (a.val == 0 && b.val == 0 && a.next == null && b.next == null) {
    return a;
  }
  while (a.next !== null) {
    num1.unshift(a.val);
    a = a.next;
  }
  num1.unshift(a.val);
  while (b.next !== null) {
    num2.unshift(b.val);
    b = b.next;
  }
  num2.unshift(b.val);

  num1 = BigInt(num1.join(""));

  console.log(num1);
  num2 = BigInt(num2.join(""));

  sum = num1 + num2;
  var arr = sum.toString(10).split("").map(Number);
  let head = new ListNode(arr.pop());
  let temp = head;
  let length = arr.length;
  console.log(arr.length);
  for (let i = 1; i <= length; i++) {
    let node = new ListNode(arr.pop());
    head.next = node;
    head = head.next;
    console.log(head);
    if (i == arr.length) {
      head.next == null;
    }
  }
  return temp;
};


/**
 * Shorter version
 */
var addTwoNumbers = function (l1, l2) {
  let dummyNode = new ListNode(0);
  let cur = dummyNode;
  let carry = 0;
  while (l1 || l2 || carry) {
    if (l1) {
      carry += l1.val;
      l1 = l1.next;
    }
    if (l2) {
      carry += l2.val;
      l2 = l2.next;
    }
    cur.next = new ListNode(Math.floor(carry % 10));
    carry = Math.floor(carry / 10);
    cur = cur.next;
  }
  return dummyNode.next;
};
