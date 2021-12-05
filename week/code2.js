import { listByArray } from "../lib/ListNode.js";

/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var deleteMiddle = function (head) {
  if (head == null || head.next == null) return null;
  if (head.next.next == null) {
    head.next = null;
    return head;
  }
  let fast = head.next; //快指针
  let slow = head; //慢指针

  //slow最终指向中间节点的前驱
  while (fast.next != null && fast.next.next != null) {
    slow = slow.next;
    fast = fast.next.next;
  }
  //进行删除
  slow.next = slow.next.next;
  return head;
};

deleteMiddle(listByArray([1,2,3,4]));
