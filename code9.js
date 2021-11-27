/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */

/**
 * 傻子解法我都没想出来，然后看评论里面有个大佬给出
 * 的一个非常牛的方案，给每个节点加一个标志位（必须独一无二）
 * 如果有环的话再次遍历到它时与标志位比较，如果相同那么就返回
 * true，思路简单，实施也很简单，牛
 * @param {ListNode} head
 * @return {boolean}
 */
var hasCycle = function (head) {
  const specialFlag = "haoge666";
  while (head) {
    if (head.flag === specialFlag) {
      return true;
    }
    head.flag = specialFlag;
    head = head.next;
  }
  return false;
};

/**
 * 官方没有给出 JS 的解法，但它的思路和傻子解法是差不多的
 * 而且它不是加入标志位，直接 Hash 表去比较整个
 * ListNode，这样子也能比较？但仔细一想，其实每个 ListNode 也
 * 的确是不一样的
 * 提交记录中，这个方法要比傻子解法要慢，因为 hash 判断需要计算，而
 * 傻子解法里面只是单纯的判断，而且 Set() 的添加查询创建的开销比在 JS
 * 中添加标志位要大
 * @param {ListNode} head
 * @return {boolean}
 */
var hasCycle = function (head) {
  const nodeRecord = new Set();
  while (head) {
    if (nodeRecord.has(head)) {
      return true;
    } else {
      nodeRecord.add(head);
      head = head.next;
    }
  }
  return false;
};

/**
 * 官方题解的龟兔指针也很有意思，
 * 但 JS 的解是没有给出来的
 * 两个指针的初值设置有一定思考，
 * 实践上 do/while 要比 while 要多一次
 * 判断
 * @param {*} head 
 * @returns 
 */
var hasCycle = function (head) {
  if (head == null || head.next == null) {
    return false;
  }
  let slow = head;
  let fast = head.next;
  while (slow != fast) {
    if (fast == null || fast.next == null) {
      return false;
    }
    slow = slow.next;
    fast = fast.next.next;
  }
  return true;
};
