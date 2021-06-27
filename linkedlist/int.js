/**
 * Intersection point of two linkedlists
 * @param {*} headA 
 * @param {*} headB 
 * @returns 
 */

const getIntersectionNode = (headA, headB) => {
    let a = headA,
      b = headB;
    while (a !== b) {
       
      a = a ? a.next : headB;
      b = b ? b.next : headA;
         console.log(a,"a")
        console.log(b,"b")
    }
    return a;
  };