import { listByArray } from "./lib/ListNode.js";

/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} k
 * @return {ListNode}
 */
var getKthFromEnd = function (head, k) {
  let arr = [];
  while (head) {
    arr.push(head);
    head = head.next;
  }
  return arr[arr.length - k];
};

/**
 * 队列的方法，但是不是很理想
 * 时间和空间上不如傻子解法
 * @param {*} head 
 * @param {*} k 
 * @returns 
 */
var getKthFromEnd = function (head, k) {
  let arr = [];
  while (head) {
    if (arr.length >= k) {
      arr.shift();
    }
    arr.push(head);
    head = head.next;
  }
  return arr[0];
};

/**
 * 我自己写的龟兔指针
 * @param {*} head 
 * @param {*} k 
 * @returns 
 */
var getKthFromEnd = function (head, k) {
  let slow = head;
  let fast = head;
  // 假设 slow 在链表 1 的位置，经过循环后
  // 此时 fast 在 k + 1 的位置
  for(let i = 0; i < k; i++) {
    // 到 k + 1 的过程可能已经遍历完链表
    if(fast) {
      fast = fast.next;
    }
  }
  while(fast) {
    slow = slow.next;
    fast = fast.next;
  }
  return slow;
};

/**
 * 官方写的龟兔指针
 * @param {*} head 
 * @param {*} k 
 * @returns 
 */
var getKthFromEnd = function(head, k) {
  let fast = head, slow = head;
  
  while (fast && k > 0) {
      [fast, k] = [fast.next, k - 1];
  }
  while (fast) {
      [fast, slow] = [fast.next, slow.next];
  }
  return slow;
};

getKthFromEnd(listByArray([1, 2, 3, 4, 5]), 2);
getKthFromEnd(listByArray([1, 2]), 1);
getKthFromEnd(listByArray([1]), 1);
