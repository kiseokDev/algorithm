# 단어 리스트에서 words[i] + words[j]가 팰린드롬이 되는 모든 인덱스 조합(i,j)를 구하라
# 입력 : ["abcd","dcba","lls","s","sssll"]
# 출력 : [[0,1],[1,0],[3,2],[2,4]

# 입력 : ["bat","tab","cat"]
# 출력 : [[0,1],[1,0]]

from typing import List
import collections


# 트라이를 저장할 노드
class TrieNode:
    def __init__(self):
        self.children = collections.defaultdict(TrieNode)
        self.word_id = -1
        self.palindrome_word_ids = []


# 팰린드롬을 위한 트라이
class Trie:
    def __init__(self):
        self.root = TrieNode()

    @staticmethod
    def is_palindrome(word: str) -> bool:
        return word[::] == word[::-1]

    # 단어 삽입
    def insert(self, index: int, word: str) -> None:
        node = self.root
        for i, char in enumerate(reversed(word)):
            if self.is_palindrome(word[0 : len(word) - i]):
                node.palindrome_word_ids.append(index)
            node = node.children[char]
        node.word_id = index

    # 단어 존재 여부 판별
    def search(self, index: int, word: str) -> bool:
        result = []
        node = self.root

        while word:
            # 판별 로직 3
            if node.word_id >= 0:
                if self.is_palindrome(word):
                    result.append([index, node.word_id])
            if not word[0] in node.children:
                return result
            node = node.children[word[0]]
            word = word[1:]

        # 판별 로직 1
        # dcbb -> b->b->c->d 트리 노드를 검색해서 cbbd 를 찾고 팰린드롬 추가
        if node.word_id >= 0 and node.word_id != index:
            result.append([index, node.word_id])

        # 판별 로직 2 비교 단어어 길이가 더 남았는데 남은 단어가 팰린드롬일 경우
        # ex) search("dcbb") -> c->b->b->c->d 트리 노드를 검색해서 bbcd 를 로직1에서 찾고 palindrom 추가 이후에 c도 팰린드롬 이므로 추가
        for palindrome_word_id in node.palindrome_word_ids:
            result.append([index, palindrome_word_id])

        return result


# 브루트 포스 O(n^2)
def palindromePairsWithBruteForce(words: List[str]) -> List[List[int]]:
    def is_palindrome(word: str) -> bool:
        # word와 word의 역순이 같으면 팰린드롬
        return word == word[::-1]

    output = []
    for i, word1 in enumerate(words):
        for j, word2 in enumerate(words):
            if i == j:
                continue
            if is_palindrome(word1 + word2):
                output.append([i, j])
    return output


def palindromePairsWithTrie(words: List[str]) -> List[List[int]]:
    trie = Trie()

    for i, word in enumerate(words):
        trie.insert(i, word)

    result = []
    for i, word in enumerate(words):
        result.extend(trie.search(i, word))

    return result


input = ["d", "cbbcd", "dcbb", "dcbc", "cbbc", "bbcd"]
print(palindromePairsWithTrie(input))
