// sort array has 0's 1's 2's
//brute -  use quick sort
// optimal
let x = [0,0,2,0,2,1,0,2,1,2,0,2]
function sort(arr){
    let coun0 = 0;
    let coun1 = 0;
    let coun2 = 0;

    for(i=0; i<arr.length; i++){
        if(arr[i] === 0){
            coun0++
        } else if(arr[i] === 1){
            coun1++
        } else {
            coun2++
        }
    }
    // console.log(coun0,coun1,coun2);
    for(j=0; j<=(coun0+coun1+coun2); j++){
        if(j<=coun0){
            arr[j] = 0
        } else if(j<=coun1+coun0){
            arr[j] = 1
        } else{
            arr[j] = 2
        }
    }
    return arr
}
// optimal - using dutch national flag
// low , mid , high - 3 poiter
// [0 ... low-1] - 0's
// [low ... mid-1] - 1's
// [mid ... n-1] - 2's
// 
// 
// ========hypothetiacl array======
// 0 0 0 0 | 1 1 1 | 1 0 2 1 0 | 2 2 2 2|
// 0 ...l-1|l...m-1|m.........h|h+1..n-1|
// ---0's--|--1's--|--unsorted-|--2's---|
// ====================================== 
// 
// 
// ========dutch national flag algo======
// 0 swap(a[low],a[mid]);mid++;low++
// 1 mid++
// 2 swap(a[high],a[mid]);high--;mid++
// 
// 
function swap(x,y){
    var temp = x
    x = y
    y = temp

}
let z = 0
let q = 1
swap(z,q)
console.log(z,q);
function sortBetter(arr){
    let low = 0
    let mid = 0
    let high = arr.length-1
    let temp;
    while(mid<=high){
        if(arr[mid]===0){
            temp = arr[mid]
            arr[mid] = arr[low]
            arr[low] = temp
            mid++
            low++
        }
        else  if(arr[mid]===1){
            mid++
        }
        else{
            temp = arr[mid]
            arr[mid] = arr[high]
            high--
        }
    }
    return arr
}
console.log(sort(x));
console.log(sortBetter(x));