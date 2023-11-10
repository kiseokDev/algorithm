//정렬되어 있는 두 연결 리스트를 합쳐라
export function mergeTwoLinkedLists(l1, l2) {
  if (!l1) return l2;
  if (!l2) return l1;

  if (l1.val < l2.val) {
    l1.next = mergeTwoLinkedLists(l1.next, l2);
    return l1;
  } else {
    l2.next = mergeTwoLinkedLists(l1, l2.next);
    return l2;
  }
}

//정렬 되어있는 두 배열을 합쳐라
export function mergeTwoLists(arr1, arr2) {
  let result = [];
  let i = 0;
  let j = 0;

  while (i < arr1.length && j < arr2.length) {
    result.push(arr1[i] < arr2[j] ? arr1[i++] : arr2[j++]);
  }

  while (i < arr1.length) {
    result.push(arr1[i++]);
  }

  while (j < arr2.length) {
    result.push(arr2[j++]);
  }

  return result;
}
