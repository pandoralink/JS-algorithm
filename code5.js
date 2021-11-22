class Node {
  constructor(data) {
    this.data = data;
    this.next = null;
  }
}

// 单链表
class ListNode {
  constructor() {
    this.size = 0; // 单链表的长度
    this.head = new Node("head"); // 表头节点
    this.currNode = ""; // 当前节点的指向
  }

  constructor() {
    this.size = 0; // 单链表的长度
    this.head = new Node("head"); // 表头节点
    this.currNode = ""; // 当前节点的指向
  }

  // 判断单链表是否为空
  isEmpty() {
    return this.size === 0;
  }

  // 获取单链表的最后一个节点
  findLast() {
    let currNode = this.head;

    while (currNode.next) {
      currNode = currNode.next;
    }

    return currNode;
  }

  // 单链表的遍历显示
  display() {
    let result = "";
    let currNode = this.head;

    while (currNode) {
      result += currNode.data;
      currNode = currNode.next;
      if (currNode) {
        result += "->";
      }
    }
    console.log(result);
  }

  // 从当前位置向前移动 n 个节点。
  advance(n, currNode = this.head) {
    this.currNode = currNode;

    while (n-- && this.currNode.next) {
      this.currNode = this.currNode.next;
    }

    return this.currNode;
  }

  // 在单链表中寻找item元素
  find(item) {
    let currNode = this.head;

    while (currNode && currNode.data !== item) {
      currNode = currNode.next;
    }

    return currNode;
  }

  // 显示当前节点
  show() {
    console.log(this.currNode.data);
  }

  // 获取单链表的长度
  getLength() {
    return this.size;
  }

  // 向单链表中插入元素
  insert(item, element) {
    let itemNode = this.find(item);

    if (!itemNode) {
      // 如果item元素不存在
      return;
    }

    let newNode = new Node(element);

    newNode.next = itemNode.next; // 若currNode为最后一个节点，则currNode.next为空
    itemNode.next = newNode;

    this.size++;
  }

  // 在单链表中删除一个节点
  remove(item) {
    if (!this.find(item)) {
      // item元素在单链表中不存在时
      return;
    }

    // 企图删除头结点
    if (item === "head") {
      if (!this.isEmpty()) {
        return;
      } else {
        this.head.next = null;
        return;
      }
    }

    let currNode = this.head;

    while (currNode.next.data !== item) {
      // 企图删除不存在的节点
      if (!currNode.next) {
        return;
      }
      currNode = currNode.next;
    }

    currNode.next = currNode.next.next;
    this.size--;
  }

  // 在单链表的尾部添加元素
  append(element) {
    let currNode = this.findLast();
    let newNode = new Node(element);

    currNode.next = newNode;
    this.size++;
  }

  // 清空单链表
  clear() {
    this.head.next = null;
    this.size = 0;
  }
}

function arrayToListNode(arr) {
  let result = new ListNode();
  arr.forEach(item => {
    result.append(item);
  })
  return result.head;
}

/**
 * 反转链表，用脚都能写
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * 暂不提供 ListNode 的生成，直接使用 leetcode 上的版本
 * 这是一个用栈的思想（JS Array 实现）存放链表，然后 pop 重新组装
 * 在时间上很慢，但是在内存消耗是竟然在所有提交中超过 90%，理论上来说
 * 多了个栈，空间复杂度是要更高的
 * @param {ListNode} head
 * @return {ListNode}
 */
var reverseList = function (head) {
  if (head == null) {
    return null;
  }
  let stack = [];
  let node = head;
  while (node != null) {
    stack.push(node);
    node = node.next;
  }
  let newHead = stack.pop();
  node = newHead;
  while (stack.length !== 0) {
    node.next = stack.pop();
    node = node.next;
    node.next = null;
  }

  return newHead;
};

/**
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * 官方解法，其实还有一个递归的解法，但递归总是不如
 * 迭代法的，所以就没有收录
 * 可以用 draw.io 等画图软件模拟一下变化的过程，精妙绝伦
 * @param {ListNode} head
 * @return {ListNode}
 */
var reverseList = function (head) {
  let prev = null;
  let curr = head;
  while (curr) {
    const next = curr.next;
    curr.next = prev;
    prev = curr;
    curr = next;
  }
  return prev;
};

// reverseList(arrayToListNode([1, 2, 3, 4, 5]));
