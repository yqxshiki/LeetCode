// 给定一个链表，删除链表的倒数第 n 个节点，并且返回链表的头结点。

// 示例：

// 给定一个链表: 1->2->3->4->5, 和 n = 2.

// 当删除了倒数第二个节点后，链表变为 1->2->3->5.
// 你能尝试使用一趟扫描实现吗？

/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} n
 * @return {ListNode}
 */
var removeNthFromEnd = function (head, n) {
  let dummy = new ListNode();
  dummy.next = head;

  let n1 = dummy;
  let n2 = dummy;

  for (let i = 0; i <= n; i++) {
    n2 = n2.next;
  }

  while (n2 != null) {
    n1 = n1.next;
    n2 = n2.next;
  }

  n1.next = n1.next.next;

  return dummy.next;
};
