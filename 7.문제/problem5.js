{
    // 문제1) 정수를 요소로 갖는 배열을 매개값으로 받아 합과 평균을 반환하는 함수를 구현하시오.
    // {        
    //     function num(arr) {
    //         const result = '';
    //         const sum = 0;
    //         for(let i = 0; i < arr.length; i++) {
    //             sum = sum + i;
    //         }
    //         const avg = sum / arr.length;
    //         result.sum = sum;
    //         result.avg = avg;

    //         return result;
    //     }
    //     const arr = [1,2,3,4];
        
    //     console.log(sum);
    //     console.log(avg);
    // }
    
    // case1) 객체리터럴 반환
    function sumAndAvg(arr){
        const result = {};

        let sum = 0;
        for(let i = 0; i < arr.length; i++) {
            sum += arr[i];
        }
        const avg = sum / arr.length;

        result.sum = sum;   // {'sum' : sum};
        result.avg = avg;   // {'sum' : sum, 'avg' : avg};

        return result;
    }

    const values = [1,2,3,4];
    const result = sumAndAvg(values);
    console.log(`합=${result['sum']}, 평균=${result['avg']}`);
{
    // case2) 배열 반환
    function sumAndAvg(arr){
        const result = [];

        let sum = 0;
        for(let i = 0; i < arr.length; i++) {
            sum += arr[i];
        }
        const avg = sum / arr.length;

        result.push(sum);   // {'sum' : sum};
        result.push(avg);   // {'sum' : sum};

        return result;
    }

    const values = [1,2,3,4];
    const result = sumAndAvg(values);
    console.log(`합=${result[0]}, 평균=${result[1]}`);
}

{
    // case3) set 반환
    function sumAndAvg(arr){
        const result = new Set();

        let sum = 0;
        for(let i = 0; i < arr.length; i++) {
            sum += arr[i];
        }
        const avg = sum / arr.length;

        result.add(sum);   // {[sum]};
        result.add(avg);   // {[sum,avg]};

        return result;
    }

    const values = [1,2,3,4];
    const result = sumAndAvg(values);

    result.forEach(function(val){
        console.log(val);
    });
}
    
    {
        const obj = {};
        obj.name = '홍길동';
        obj.age = 30;
        console.log(obj);

        const arr = [];
        arr.push('홍길동');
        arr.push(30);
        console.log(arr);
    }

    {
        // case3) Map 반환
        function sumAndAvg(arr){
            const result = new Map();
    
            let sum = 0;
            for(let i = 0; i < arr.length; i++) {
                sum += arr[i];
            }
            const avg = sum / arr.length;
    
            result.set('sum',sum);   // {'sum'=>6};
            result.set('avg',avg);   // {'sum'=>6, 'avg=>2.5};
    
            return result;
        }
    
        const values = [1,2,3,4];
        const result = sumAndAvg(values);
        console.log(`합=${result.get('sum')}, 평균=${result.get('avg')}`);
        console.log(result);
    
    }
        


    // 문제2) 구구단 단수를 매개값으로 받아 구구단을 출력하는 함수를 구현하시오.
    {   
        function num(dan) {
            for(let i = 1; i<=9; i++) {
                console.log(dan * i);
            }
        }
        num(4);
    }

    {
        function gugudan(dansu) {
            console.log(`${dansu}단 출력`);
            for(let i = 1; i<=9; i++) {
                // 2 * 1 = 2..
                console.log(` ${dansu} * ${i} = ${ dansu * i}`);
            }
        }
        const result = gugudan(4);
        console.log(result);
    }

    // 문제3) 아래 해당되는 문자열을 매개값으로 받아 위도(lat)와 경도(lng)를 출력하는 함수를 구현하시오.
        '[ {"lat":34.123, "lng":127.123}, {"lat":35.123, "lng":132.345}, {"lat":36.123, "lng":136.456} ]'

        function latLng(json) {
            
            // 1) json포맷, 문자열 =>> js객체 변환
            const arr = JSON.parse(json);

            // 2)
            for(let i = 0; i<arr.length; i++) {
                console.log(`위도:${arr[i].lat}, 경도:${arr[i].lng}`)
            }
        }
        
        const json = '[ {"lat":34.123, "lng":127.123}, {"lat":35.123, "lng":132.345}, {"lat":36.123, "lng":136.456} ]';
        latLng(json);
}