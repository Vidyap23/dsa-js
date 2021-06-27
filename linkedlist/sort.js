/**
 * Sorting a linkedlist ascending order
 * @param {*} head 
 * @returns 
 */

var sortList = function(head) {
    let val=[]
    let dummy=head;
    if(!head || !head.next)
    return head;
    while(head){
        val.push(head.val)
        head=head.next
    }
    val.sort((a,b) => a-b);
   let pointer= dummy
   let index=0;
   while(pointer){
       pointer.val=val[index]
       index++
       pointer=pointer.next
   }
    return dummy
};

/**
 * Deeleting duplicate nodes in a sorted linkedlist
 * @param {*} head 
 * @returns 
 */
var deleteDuplicates = function(head) {
    if(!head) return head
    var cur = head
    
    while(cur!=null && cur.next != null) {
        if(cur.next.val === cur.val) {
            cur.next = cur.next.next
        }else {
            cur = cur.next
        }
    }
    return head
}