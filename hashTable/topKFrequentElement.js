//상위 k 번 이상 등장하는 요소를 추출하라
//input: nums = [1,1,1,2,2,3], k = 2
//output: [1,2]

function topKFrequent(nums, k) {
  let map = new Map();
  nums.forEach(val => {
    if (map.has(val)) {
      map.set(val, map.get(val) + 1);
    } else {
      map.set(val, 1);
    }
  });

  let heap = [...map.entries()].sort((a, b) => a[1] - b[1]);

  while (heap.length > k) {
    heap.shift();
  }

  return heap.map(([num, _]) => num).sort((a, b) => a - b);
}
console.log(topKFrequent([1, 1, 1, 2, 2, 3], 2)); //[1,2]q
