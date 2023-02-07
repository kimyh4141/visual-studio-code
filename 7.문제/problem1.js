// 문제 1) 1~10까지의 합을 구하시오

// 1) for문
{
    let sum = 0;
    for(let i = 1; i <= 10; i++) {
        sum = sum + i;
    }
    console.log(`1~10까지의 합 : ${sum}`);
}
// 2) while문 
{
    let i = 1;
    let sum = 0;
    while(i <= 10) {
        sum = sum + i;
        i++;
    }
    console.log(`1~10까지의 합 : ${sum}`);
}

// 3) do~while문
{
    let i = 1;
    let sum = 0;
    do {
        sum = sum + i;
        i++;
    } while(i <= 10);
    console.log(`1~10까지의 합 : ${sum}`);
}
// 문제2) 1~10까지 짝수의 합을 구하시오 (단, for~of 구문 사용)
{
    let arr = [1,2,3,4,5,6,7,8,9,10];
    let sum = 0;
    for(let ele of arr ) {
        if(ele % 2 == 0) {
        sum += ele;
        }
    }
    console.log(`1~10까지의 짝수의 합 : ${sum}`);
}
// 문제3) 1~10까지의 정수값을 배열에 저장하고 홀수의 합과 짝수의 합을 각각 구하시오.(단, for~of 구문 사용)
{
    let arr = [1,2,3,4,5,6,7,8,9,10];
    let sumOfEven = 0;
    let sumOfOdd = 0;
    for(let ele of arr) {
        if(ele % 2 == 0) {
            sumOfEven += ele;
        }else {
            sumOfOdd += ele;
        }
    }
    console.log(`1~10까지의 짝수의 합 : ${sumOfEven}`);
    console.log(`1~10까지의 홀수의 합 : ${sumOfOdd}`);
}
// 문제4) 두개의 양의 정수값을 매개값으로 입력받아 두 정수 사이의 정수값들의 합을 계산하여 반환하는 함수를 구현하시오.

// 1) 함수선언문
{
    function f(v1,v2) {
        if( v1 < 1 || v2 < 1) {
            // 예외가 발생되면 함수를 즉시 종료하고 호출한 곳으로 예외객체를 전달한다.
            throw new Error('양의 정수가 아닙니다.');
        }
        let sum = 0;
        for(let v = v1; v <= v2; v++) {
            sum += v;
        }
        return sum;
    }
    try {
        let result = f(-2,11);
        console.log(result);
        console.log(``)
    }catch(e) {
        console.log(e.message);
    }finally {
        console.log('예외발생 유무와 상관없이 실행되는 절');
    }
}

// 2) 함수 표현식
{
    const f = function(v1,v2) {
        if( v1 < 1 || v2 < 1) {
            // 예외가 발생되면 함수를 즉시 종료하고 호출한 곳으로 예외객체를 전달한다.
            throw new Error('양의 정수가 아닙니다.');
        }
        let sum = 0;
        for(let v = v1; v <= v2; v++) {
            sum += v;
        }
        return sum;
    }
    try {
        const f2 = f;
        let result = f2(1,10);

        console.log(`result=${result}`);
    }catch(e) {
        console.log(e.message);
    }finally {
        console.log('예외발생 유무와 상관없이 실행되는 절');
    }
}

// 3) 화살표함수
{
    const f = (v1,v2)=> {
        if( v1 < 1 || v2 < 1) {
            // 예외가 발생되면 함수를 즉시 종료하고 호출한 곳으로 예외객체를 전달한다.
            throw new Error('양의 정수가 아닙니다.');
        }
        let sum = 0;
        for(let v = v1; v <= v2; v++) {
            sum += v;
        }
        return sum;
    }
    try {
        const f2 = f;
        let result = f(4,7);

        console.log(`result=${result}`);
    }catch(e) {
        console.log(e.message);
    }finally {
        console.log('예외발생 유무와 상관없이 실행되는 절');
    }
}