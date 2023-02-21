// 문제1) 배열을 입력받아 배열 요소에 수식을 적용하여 배열을 반환하는 고차함수를 구현하시오.
// {
//     const numbers = [1,2,3,4]
//     const arr = []
//     numbers.forEach(item => arr.push(item * 2))
//     console.log(arr);
// }
// {
//     const numbers = [1,2,3,4]
//     numbers.forEach((item,index,arr) => {
//         arr[index] = item
//     });
//     console.log(numbers);
// }
// {
//     const numberArr = [1,2,3,4];
//     let total = 0;

//     numberArr.forEach((item)=> {
//         total += item;
//     });
//     console.log(total);
// }
{
    function f(arr,g){
        const result = [];

        for(let i = 0; i < arr.length; i++) {
            let x = g(arr[i]);
            result.push(x);
        }

        return result;
    }
    const values = [1,2,3];
    
    const subF = x => x * 2;        // multifly(x,2)
    const subF2 = x => x * 3;
    const subF3 = x => x * 4;

    let result = f(values,subF);
    console.log(result);    // [2,4,6]

    result = f(values,subF2);
    console.log(result);    // [3,6,9]

    result = f([1,2,3],x => x * 2);
    console.log(result);    // [2,4,6]
    
    result = f([1,2,3],x => x * 3);
    console.log(result);    // [3,6,9]

    // function multifly(n){
    //     return function(x) {
    //         return x * n;
    //     };
    // }
    const multifly = n => x => x * n;
    // console.log(multifly(2));

    console.log('----------------------')
    result = f([1,2,3],multifly(4))
    console.log(result);
    result = f([1,2,3],multifly(14))
    console.log(result);
}