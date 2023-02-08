{ // let 변수 선언
    let x;  // 선언
    let y;
    x = 10; // 할당
    y = 20;
    
    x= 30;  // 재할당
    let z = x + y;
    console.log('x+y=' + z);
    }
    {
        // const : 한번 초기화하면 수정할 수 없는 변수 선언
        const x = 10;
        const y = 10;
        // x = 10;  재할당 불가
        // y = 10;
        const z = x + y;
        console.log('x+y=' + z);
    }
    {
        // 자료형
        // 숫자
        let x = 10;
        let y = 3.14;
        console.log(typeof(x));
    
        let name = '홍길동';
        let region = "울산";
        console.log(typeof(name));
        console.log(typeof(region));
    
        // 논리
        let flag1 = true;
        let flag2 = false;
        console.log(typeof(flag1));
        console.log(typeof(flag2));
    
    
        // truthy : true가 아닌 값도 true값을 가짐
        if(true) {console.log('참')}
        if({}) {console.log('참')}
        if([]) {console.log('참')}
        if(42) {console.log('참')}
        if("0") {console.log('참')}
        if("false") {console.log('참')}
        if(new Data()) {console.log('참')}
        if(-42) {console.log('참')}
        if(12n) {console.log('참')}
        if(3.14) {console.log('참')}
        if(-3.14) {console.log('참')}
        if(Infinity) {console.log('참')}
        if(-Infinity) {console.log('참')}
    
        // falsy
        if (false) { console.log('거짓'); }
        if (null) { console.log('거짓'); }
        if (undefined) { console.log('거짓'); }
        if (0) { console.log('거짓'); }
        if (-0) { console.log('거짓'); }
        if (0n) { console.log('거짓'); }
        if (NaN) { console.log('거짓'); }
        if ("") { console.log('거짓'); }
        
    
        // null, undefined
        let hobby1 = null;
        let hobby2 = undefined;
        console.log(typeof(hobby1));
        console.log(typeof(hobby2));
        console.log(typeof(aaa));
        // console.log(aaa);
        console.log(hobby1);
        console.log(hobby2);
    }