// 문제 1) 1~10까지의 합을 구하시오

// 1) for문
{
   let sum = 0;
   for(let i = 1; i <= 10; i++) {
    sum = sum + i;
   }
   console.log(sum);
}
// 2) while문 
{
    let i = 1;
    let sum = 0;
    while( i <= 10) {
        sum = sum + i;
        i++;
    }
    console.log(sum);
}
// 3) do~while문
{
   let i = 1;
   let sum = 0;
   do{
    sum = sum + i;
    i++;
   }while( i <= 10)
   console.log(sum);
}

// 문제2) 1~10까지 짝수의 합을 구하시오 (단, for~of 구문 사용)
{
    let arr = [1,2,3,4,5,6,7,8,9,10];
    let sum = 0;
    for (let ele of arr) {
        if( ele % 2 == 0) {
            sum = sum + ele;
        }
    }
    console.log(sum);
}

// 문제3) 1~10까지의 정수값을 배열에 저장하고 홀수의 합과 짝수의 합을 각각 구하시오.(단, for~of 구문 사용)
{
    let arr = [1,2,3,4,5,6,7,8,9,10];
    let sum1 = 0;
    let sum2 = 0;
    for (let ele of arr) {
        if( ele % 2 == 0) {
            sum1 = sum1 + ele;
        }else{
            sum2 = sum2 + ele;
        }
    }
    console.log(sum1);
    console.log(sum2);
}




// 문제4) 두개의 양의 정수값을 매개값으로 입력받아 두 정수 사이의 정수값들의 합을 계산하여 반환하는 함수를 구현하시오.
// 1) 함수선언문
{
    

}
// 2) 함수 표현식
{
   
}
// 3) 화살표함수
{
    
}