# Definition for singly-linked list.
# class ListNode:
#     def __init__(self, val=0, next=None):
#         self.val = val
#         self.next = next
class Solution:
    def deleteDuplicates(self, head: ListNode) -> ListNode:
        if not head:
            return None
        
        temp = head
        temp2 = head.next
        last = head.val
        
        while temp2:  # while end of Linked list
            if temp2.val == last:  # Current number same as last number
                if not temp2.next:  # If last element, just delete and break loop
                    temp.next = None
                    break
                temp2 = temp2.next  # Not last, then delete that element
                temp.next = temp2  # and move to next element
            else:  # If not the same as last element, jump to next node
                temp = temp2
                last = temp.val
                temp2 = temp2.next
        
        return head  # return the head back
