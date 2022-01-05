//returns minimum value from array
function minArr(arr, sortOrd) {
  let order;
  let val = arr[0];
  let ind = 0;
  
  !sortOrd ? order = 0 : order = sortOrd;
  
  for (let i = 0; i < arr.length; i++) {
    let ord;
    if (order == 0) {
      ord = val < arr[i];
    } else if (order == 1) {
      ord = val > arr[i];
    }
    val = ord ? val : arr[i];
    ind = ord ? ind : i;
  }
  return {
    val: val,
    ind: ind
  };
}

//returns sorted array
function sortArr(arr, order) {
  let sortedArr = [];
  
  while (arr.length > 0) {
    sortedArr.push(minArr(arr, order).val);
    arr.splice(minArr(arr, order).ind, 1);
  }
  return sortedArr;
}

//testing
var myArr = [10, 12, 45, 41, 21, 10, 32];
sortArr(myArr);