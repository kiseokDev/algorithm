# 두 이진 트리를 병합하라. 중복되는 노드는 값을 합산한다. 
import sys
sys.path.append('/home/prime/workspace/algorithm/14.tree')
from tree_module import TreeNode, listToTreeNode, TreeNodeToList

def mergeTrees(t1, t2):
    if t1 and t2:
        node = TreeNode(t1.val + t2.val)
        node.left = mergeTrees(t1.left, t2.left)
        node.right = mergeTrees(t1.right, t2.right)  
        return node
    else:
        return t1 or t2

	

# 사용 예시
lst1 = [1,3,2,5]
lst2 = [2,1,3,None,4,None,7]
root1 = listToTreeNode(lst1)
root2 = listToTreeNode(lst2)


print(TreeNodeToList(mergeTrees(root1, root2)))
