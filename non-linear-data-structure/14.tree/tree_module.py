import collections
from typing import List


class TreeNode(object):
    def __init__(self, value=0, left=None, right=None):
        self.val = value
        self.left = left
        self.right = right

    def __repr__(self):
        left_repr = f", left: {{{self.left}}}" if self.left is not None else ", left: None"
        right_repr = f", right: {{{self.right}}}" if self.right is not None else ", right: None"
        return f"{{val: {self.val}{left_repr}{right_repr}}}"


def listToTreeNode(nums, index=0):
    if index >= len(nums) or nums[index] is None:
        return None
    node = TreeNode(nums[index])
    node.left = listToTreeNode(nums, index * 2 + 1)
    node.right = listToTreeNode(nums, index * 2 + 2)
    return node


def TreeNodeToList(root: TreeNode) -> List:
    if root is None:
        return []
    queue = collections.deque([root])
    result = []

    while queue:
        current = queue.popleft()
        if current:
            result.append(current.val)
            queue.append(current.left)
            queue.append(current.right)
        else:
            result.append(None)
    # 마지막에 None이 연속으로 나오는 경우 제거
    while result[-1] is None:
        result.pop()

    return result

# lst = [3, 9, 20, 15, 7, None, None]
# root = listToTreeNode(lst)
# print(root) # TreeNode {val: 3, left: {{val: 9, left: {{val: 15, left: None, right: None}}, right: {{val: 7, left: None, right: None}}}}, right: {{val: 20, left: None, right: None}}}


# lstFromTree = TreeNodeToList(root)
# print(lstFromTree)  # List [3, 9, 20, 15, 7, None, None,]
