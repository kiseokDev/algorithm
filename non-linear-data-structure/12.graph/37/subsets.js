//모든 부분집합을 리턴하라
// 입력 : [1,2,3]
// 출력 : [[], [1], [1, 2], [1, 2, 3], [1, 3], [2], [2, 3], [3]]

function subsets(nums) {
  let result = [];
  let prevNums = [];

  function dfs(start) {
    result.push([...prevNums]);
    for (let i = start; i < nums.length; i++) {
      prevNums.push(nums[i]);
      dfs(i + 1);
      prevNums.pop();
    }
  }

  dfs(0);
  return result;
}

// dfs(0)  prevNums = []
// 		dfs(1) (i=0) nums[0] = 1 , prevNums = [1] , result = [[]]
// 			dfs(2)(i=1) nums[1] = 2, prevNums = [1,2] result = [[], [1]]
// 				dfs(3)(i=2) nums[2] = 3 prevNums = [1,2,3] result = [[], [1], [1,2]]
// 					종료 (i=3) prevNums = [1,2] result = [[], [1], [1,2], [1,2,3]]
// 				종료 (i=3) prevNums = [1] result = [[], [1], [1,2], [1,2,3]]

// 			dfs(3)(i=2) nums[2] = 3 prevNums = [1,3] result = [[], [1], [1,2], [1,2,3]]
//				종료(i=3) prevNums = [1] result = [[], [1], [1,2], [1,2,3], [1,3]]
//			종료 (i=3) prevNums = []

//		dfs(2) (i=1) nums[1] = 2 prevNums = [2]
// 			dfs(3) (i=2) nums[2]= 3 preNumbs =[2,3] result= [[], [1], [1,2], [1,2,3], [1,3], [2]]
// 				종료 (i=3) prevNums = [2] result = [[], [1], [1,2], [1,2,3], [1,3], [2], [2,3]]
// 		종료 (i=3) prevNums = []
// 	 	dfs(3) (i=2) nums[2] = 3 prevNumbs=[3]
// 			종료 (i=3) prevNums = [] result = [[], [1], [1,2], [1,2,3], [1,3], [2], [2,3], [3]]
//		종료 (i=3) prevNums = []

function subsets2(nums) {
  let result = [];

  function dfs(start, path) {
    result.push([...path]);
    for (let i = start; i < nums.length; i++) {
      dfs(i + 1, [...path, nums[i]]);
    }
  }

  dfs(0, []);
  return result;
}

console.log(subsets2([1, 2, 3]));
// dfs(0, []) result = []

// dfs1(1, [1]) (i=0) result = [[]]

//		dfs2-1(2, [1,2]) (i=1) result = [[], [1]]

// 			dfs3-1(3, [1,2,3]) (i=2) result = [[], [1], [1,2]]
// 			dfs3-2 종료 (i=3) result = [[], [1], [1,2], [1,2,3]]

// 		dfs2-2(3, [1,3]) (i=2) result = [[], [1], [1,2], [1,2,3]]
// 		dfs2-2 종료 (i=3)	  result = [[], [1], [1,2], [1,2,3], [1,3]]

// dfs1(2,[2]) (i=1) result = [[], [1], [1,2], [1,2,3], [1,3]]
// 		dfs2-1(3,[2,3])  (i=2)  result = [[], [1], [1,2], [1,2,3], [1,3], [2]]
//				dfs3-1 종료 (i=3) result = [[], [1], [1,2], [1,2,3], [1,3], [2], [2,3]]
// 		dfs2-2 종료 (i=3) result = [[], [1], [1,2], [1,2,3], [1,3], [2], [2,3]]

// dfs1(3,[3]) (i=2) result = [[], [1], [1,2], [1,2,3], [1,3], [2], [2,3]]
// 		dfs2-1 종료 (i=3) result = [[], [1], [1,2], [1,2,3], [1,3], [2], [2,3],[3]]
// dfs1 종료 (i=3) result = [[], [1], [1,2], [1,2,3], [1,3], [2], [2,3],[3]]

// dfs(0, []) result = []
