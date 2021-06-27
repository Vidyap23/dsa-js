/**
 * Reversing a linkedlist
 */
/**
 * Recursive
 */
var reverseList = function (head) {
  if (!head || !head.next) {
    return head;
  }
  let temp = reverseList(head.next);
  head.next.next = head;
  head.next = null;

  return temp;
};
/**
 * Iterative
 * 
 */
 var reverseList = function(head) {
    let prev = null;
    let curr = head;
    let nextTemp = null;

    while(curr!= null) {
        nextTemp = curr.next; 
        curr.next = prev;  
        prev = curr;  
        curr = nextTemp;  

    }
    return prev 
};
/**stack
 * 
 */
 var reverseList = function(head) {
    let cur=head;
    let dummyNode=new ListNode(0);
    let curNew=dummyNode;
    let copy=[];
    let length=1;
    if(head===null||head.next===null){
        return head;
    }
    while(cur){
     copy.push(cur.val)
     cur=cur.next;
     length++;
    }
   
    for(let i=1;i<length;i++){
    let temp=new ListNode(copy.pop())
    curNew.next=temp;
    curNew=curNew.next;
    }
    
    return dummyNode.next
};

/**
 * Find middle
 * floyds- when fp points to null sp will be in the middle
 * */
 var middleNode = function(head) {
  let curr = head;
     let postCurr = head;
     while(postCurr && postCurr.next){
         curr = curr.next;
         postCurr = postCurr.next.next;
     }
     return curr;
};

/**
 * Remove node from nth end
 */
 var removeNthFromEnd = function(head, n) {
  let dummy= new ListNode(0);
  dummy.next=head;
  let fast=head;
  let slow=dummy.next;
     if(head.next==null && n==1||head==null){
         return null;
     }
     for(let i=0;i<n-1;i++){
         fast=fast.next;
     }
    
     while(slow){
         if(fast.next!==null){
         if(n==1 && slow.next.next===null){
               slow.next=null;
               return dummy.next
           }
             slow=slow.next
             fast=fast.next
         }
       else{
          
           slow.val= slow.next.val
           slow.next=slow.next.next;
           return dummy.next
       }
     }
 };

 /**
  * Rotate by k places
  */

  var rotateRight = function(head, k) {
    let dummy=head;
    let length=1;
   if(head===null){
       return null
   }
    if(head.next===null){
        return head
    }

    while(dummy.next!==null){
        dummy=dummy.next
        length++;
    }
   
    for(let i=0;i<k%length;i++){
        let cur=head;
        while(cur.next!==null && cur.next.next!==null){
            cur=cur.next;
        }
        let tempVal=cur.next.val
        cur.next=null
        let tempNode=new ListNode(tempVal)
        tempNode.next=head
      head=tempNode; 
    }
    
    return head;
};