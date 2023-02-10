{
    // 문제1) 두수를 입력받아 덧셈하여 반환하는 함수를 구현하시오.
   {
    const double = (a,b) => a * b;
    const result = double(3,2);
    console.log(result);

   }
}


{   
    // 문제2) 요소 1,2,3 을 갖는 배열이 주어졌을때 2배수한 결과를 배열로 반환하는 함수를 구현하시오.
    function double(arr) {
        for(let i = 0; i < arr.length; i++) {
            arr[i] = arr[i] * 2;
        }
        return arr;
    }

    const arr = [1,2,3];
    const result = double(arr);
    console.log(result);
    
   
}

{
    // 문제3) 정수를 입력받아 홀수인지 판단하는 함수를 구현하시오.(홀수면 true를 반환하고 짝수면 false를 반환)
    function solution(num) {
        if(num % 2 == 0) {
            console.log(false);
        }else {
            console.log(true);
        }
    }
    solution(33);

}

{
    // 문제4) 입력받는 매개값의 객체 프로퍼티 구조가 아래와 같을 경우 성별을 판단하며 반환하는 함수를 구현하시오.
    //          남자면 '남자'를 반환하고 여자면 '여자'를 반환하기로 한다.
    //          {name:'홍길동',age:30,gender:'남|여'}
    
    
}

{
    // 문제5) 아래 주어진 배열을 매개값으로 입력받아 가장 큰 수를 반환하는 함수를 구현하시오.
    //          배열 = [5,2,7,1]
    {
      function max(arr) {
        let maxValue = [];
        for(let ele of arr) {
            if(ele > maxValue) {
                maxValue = ele;
            }
        }
        return maxValue;
      }
      const arr = [553,5,6,1133];
      const result = max(arr);
      console.log(result);
    }
  
}

{
    // 문제6) 문제2에서 원본배열을 유지하고 2배수한 결과를 새로운 배열로 반환하는 함수를 구현하시오.
  
    {}
}