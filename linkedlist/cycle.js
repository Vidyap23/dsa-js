/**
 * LInked list cycle, floyds algorithm
 */
var hasCycle = function (head) {
  let slow = head;
  let fast = head;

  while (fast != null && fast.next != null) {
    fast = fast.next.next;
    slow = slow.next;

    if (fast == slow) {
      return true;
    }
  }

  return false;
};

/**
 * Cycle starting point
 * @param {*} head 
 * @returns 
 */
var detectCycle = function (head) {
  let slow = head;
  let fast = head;

  while (fast != null && fast.next != null) {
    fast = fast.next.next;
    slow = slow.next;

    if (fast == slow) {
      let p = head;
      while (p !== fast) {
        p = p.next;
        fast = fast.next;
      }
      return p;
    }
  }

  return null;
};
