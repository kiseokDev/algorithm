from tree_module import TreeNode, listToTreeNode, TreeNodeToList
import sys
sys.path.append('/home/prime/workspace/algorithm/14.tree')


class Solution:
    result = []

    def preOrder(self, root: TreeNode) -> list:
        if root is None:
            return
        self.result.append(root.val)
        self.preOrder(root.left)
        self.preOrder(root.right)
        return self.result

    def inOrder(self, root: TreeNode) -> list:
        if root is None:
            return
        self.inOrder(root.left)
        self.result.append(root.val)
        self.inOrder(root.right)
        return self.result

    def postOrder(self, root: TreeNode) -> list:
        if root is None:
            return
        self.postOrder(root.left)
        self.postOrder(root.right)
        self.result.append(root.val)
        return self.result


lst = ['F', 'B', 'G', 'A', 'D', None, 'I',
       None, None, 'C', 'E', None, None, 'H']
tree = listToTreeNode(lst)
# ['F', 'B', 'A', 'D', 'C', 'E', 'G', 'I', 'H']
print(Solution().preOrder(tree))
Solution.result = []
# ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I']
print(Solution().inOrder(tree))
Solution.result = []
# ['A', 'C', 'E', 'D', 'B', 'H', 'I', 'G', 'F']
print(Solution().postOrder(tree))


class Test:

    def test1(self):
        self.result.append(1)
        print(self.result)

    def test2(self):
        self.result.append(2)
        print(self.result)

    def test3(self):
        self.result.append(3)
        print(self.result)

    def init(self):
        self.result = []
        print(self.result)


test1 = Test()
test2 = Test()

test1.test1()
test1.test2()
test2.test2()
