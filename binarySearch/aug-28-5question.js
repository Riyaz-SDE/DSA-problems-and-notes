// 1.sqrt max floor || type 2 sqrt ceil 
let c1 = 64 
let c2 = 4 
let c3 = 28 
let c4 = 29
function sqrt(num){
    let low = 1
    let high = num
    let ans = 1
    while(low <= high){
        let mid = Math.floor((low+high)/2)
        
        if(mid * mid <= num){
            ans = mid
            low = mid + 1
        }else{
            high = mid - 1
        }
    }
    return [ans,high]
}
console.log('sqrt max floor');
console.log(sqrt(c1),`test case ${sqrt(c1)[0] === 8 ? 'pass':'fail'}`)
console.log(sqrt(c2),`test case ${sqrt(c2)[0] === 2 || sqrt(c2) === 6 ? 'pass':'fail'}`)
console.log(sqrt(c3),`test case ${sqrt(c3)[0] === 5 ? 'pass':'fail'}`)
console.log(sqrt(c4),`test case ${sqrt(c4)[0] === 5 ? 'pass':'fail'}`)
// console.log(sqrt(c5),`test case ${sqrt(c5) === 5 ? 'pass':'fail'}`)


c1 = [1,2,3,4,5,6,7,5,1] //  7
c2 = [1,2,1,2,3,4,5,6,3]// 2 or 6
c3 = [1,2,3,4,5] //5
c4 = [5,4,3,2,1] // 5
let c5 = [1,2,3,4,3,2,5,2,3,4,3,2,1] // 5
// // 2.find peak element not duplicate array
function bs(nums){
  if(nums.length === 1) return nums[0]
  if(nums[0] > nums[1]) return nums[0]
  if(nums[nums.length-2] < nums[nums.length-1]) return nums[nums.length-1]
  
  let low = 1
  let high = nums.length-2
  
  while(low <= high){
    let mid = Math.floor((low+high)/2)
    
    if(nums[mid-1] < nums[mid] && nums[mid] > nums[mid+1] ){
      return nums[mid]
    }else if(nums[mid-1] < nums[mid]){
      low = mid + 1
    }else if(nums[mid] > nums[mid+1]) {
      high = mid - 1
    }else{
      low = mid - 1
    }
  }
  return -1
}
console.log('find peak element not duplicate array');
console.log(bs(c1),`test case ${bs(c1) === 7 ? 'pass':'fail'}`)
console.log(bs(c2),`test case ${bs(c2) === 2 || bs(c2) === 6 ? 'pass':'fail'}`)
console.log(bs(c3),`test case ${bs(c3) === 5 ? 'pass':'fail'}`)
console.log(bs(c4),`test case ${bs(c4) === 5 ? 'pass':'fail'}`)
console.log(bs(c5),`test case ${bs(c5) === 5 ? 'pass':'fail'}`)

// 3.nth root of m==============================================================
function ex(value,pow,target){
    let ans = 1
    for(let i = 0; i<pow; i++){
        ans *= value
        // if(ans > target && target) return false
    }
    return ans
}
function nm(n,m){
    let ans = 1
    let low = 0
    let high = m
    while(low <= high){
        let mid = Math.floor((low+high)/2)
        if(ex(mid,n,m) === m){
            return mid
        }else if(ex(mid,n) < m){
            low = mid + 1
        }else{
            high = mid - 1
        }
    }
    return -1
}
console.log('nth root of m');
console.log(nm(19,10000000000000000000),1000000000000000000) 

console.log(ex(3,3,10000))

// 4.finding single elements ========================================================================
c1 = [1,1,2,2,3,3,4,4,5]
c2 = [1,1,2,3,3,4,4,5,5]
c3 = [1,1,2,2,3,3,4,5,5]
c4 = [1,2,2,3,3,4,4,5,5]
c5 = [1,1,2,3,3,4,4,5,5]

function se(nums){
    if(nums.length === 1) return nums[0]
    if(nums[0]!==nums[1]) return nums[0]
    if(nums[nums.length-2]!==nums[nums.length-1]) return nums[nums.length-1]
  let low = 1
  let high = nums.length-2
  while(low <= high){
    let mid = Math.floor((low+high)/2)
    if(nums[mid] !== nums[mid+1] && nums[mid] !== nums[mid-1]){
      return nums[mid]
    }else if((nums[mid-1] === nums[mid] && mid%2 == 1) || (mid%2 === 0 && nums[mid] === nums[mid+1])){
      low = mid+1
    }else{
      high = mid-1
    }
  }
  return -1
}
console.log('finding single elements');
console.log(se(c1),`test case ${se(c1) === 5 ? 'pass':'fail'}`)
console.log(se(c2),`test case ${se(c2) === 2 ? 'pass':'fail'}`)
console.log(se(c3),`test case ${se(c3) === 4 ? 'pass':'fail'}`)
console.log(se(c4),`test case ${se(c4) === 1 ? 'pass':'fail'}`)
console.log(se(c5),`test case ${se(c5) === 2 ? 'pass':'fail'}`)

// 5.koko ==========================================================================================
function find(arr,h){
    let ans = 0
    for(let i = 0; i<arr.length; i++){
        ans += Math.ceil(arr[i]/h)
    }
    return ans
}
function koko(arr,h){
    // find k
    let max = 0
    for(let n of arr){
        // console.log(n)
        max = Math.max(max,n)
    }
    let ans = 0
    let low = 1
    let high = max
    // low mid high : numbers of banana ranges
    while(low <= high){
        let mid = Math.floor((low+high)/2)
        let totalHrs = find(arr,mid)
        if(totalHrs <= h){
            ans = mid
            high = mid - 1
        }else{
            low = mid + 1
        }
    }
    return [ans==0?-1:ans,low>max?-1:low]
}
console.log('koko');
console.log(koko([1,2,3,5],6))