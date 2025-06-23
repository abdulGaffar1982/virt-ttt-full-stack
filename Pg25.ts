class ListNode {
  value: number;
  next: ListNode | null;

  constructor(value: number) {
    this.value = value;
    this.next = null;
  }
}

let head = new ListNode(10);
head.next = new ListNode(20);
head.next.next = new ListNode(30);
head.next.next.next = new ListNode(40);
head.next.next.next.next = new ListNode(50);

function findMiddle(head: ListNode | null): number | null {
  if (head === null) {
    return null;
  }

  let slow: ListNode | null = head;
  let fast: ListNode | null = head;

  while (fast !== null && fast.next !== null) {
    slow = slow!.next;
    fast = fast.next.next;
  }

  if (slow !== null) {
    return slow.value;
  } else {
    return null;
  }
}

console.log("Middle element is:", findMiddle(head)); 
