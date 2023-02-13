{
    {   // 숫자인 경우
        {   // 오름차순
            const result = [5,3,6,9].sort();
            console.log(result);    // [ 3, 5, 6, 9 ]

        }
        {   // 오름차순 후 역순
            const result = [5,3,6,9].sort();
            console.log(result.reverse());    // [ 9, 6, 5, 3 ]
        }
    }
    {// 문자인 경우 : 사전순으로 정렬
        {   // 오름차순
            const result = ['4','15','22','102'].sort();
            console.log(result);
        }
        {   // 오름차순 후 역순
            const result = ['4','15','22','102'].sort();
            console.log(result.reverse());
        }
    }
    {   // 객체인 경우
        const persons = [{name:'홍길동',age:30},{name:'홍길서',age:20},{name:'홍길남',age:10},{name:'홍길북',age:40}];

        const result = persons.sort( (p1,p2)=>{return p1.age - p2.age} );
        const result2 = persons.sort( (p1,p2)=>{return p2.age - p1.age} );
        console.log(result);
        console.log(result2);
        console.log(result[0].name);
        console.log(result.at(-1).name);
        console.log(result[result.length-1].name);

    }
}