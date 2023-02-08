// Date : 1970.1.1 자정(UTC)부터 초를 누적하여 관리
{
    console.log(Date());                    // Wed Feb 08 2023 11:07:56 GMT+0900 (대한민국 표준시)
    const today = new Date();
    console.log(today);                     // 2023-02-08T02:08:20.762Z
    console.log(today.getDate());           // 8, 일
    console.log(today.getFullYear());       // 2023, 년도
    console.log(today.getMonth());          // 1, 월( 0 -> 1월, 1 -> 2월, 2 -> 3월,... 11 -> 12월)
    console.log(today.getDay());            // 3, 요일( 0 -> 일요일, 1 -> 월요일, 2 -> 화요일,... 6 -> 토요일)
    console.log(today.getHours());          // 11, 시간
    console.log(today.getMinutes());        // 9, 분
    console.log(today.getSeconds());        //38, 초
    console.log(today.getMilliseconds());   // 356, 1/1000초
    console.log(today.toLocaleString());      // 2023. 2. 8 오전 11:11:34
    console.log(today.toLocaleDateString());  // 2023. 2. 8
    console.log(today.toLocaleTimeString());  // 오전 11:11:34
    console.log(Date.now());                  // 1675822973305 1970년 1월 1이
}
{
    const today = new Date();
    console.log(today);

    today.setFullYear(today.getFullYear()+1);
    today.setMonth(today.getMonth()+1);
    console.log(`다음달의 오늘날짜 : ${today}`);
    console.log(today.toLocaleDateString());
}
 {
    // 오늘날짜로 부터 35일 후의 요일은?
    const today = new Date();
    console.log(today.toLocaleDateString());    // 2023. 2. 8.
    const future = new Date ( today.getFullYear()+3, today.getMonth()+13,today.getDate() + 35);
    console.log(future.toLocaleDateString());   // 2023. 3. 15.

    switch(future.getDay()) {
        case 0 :
            console.log('일요일');
            break;
        case 1 :
            console.log('월요일');
            break;
        case 2 :
            console.log('화요일');
            break;
        case 3 :
            console.log('수요일');
            break;
        case 4 :
            console.log('목요일');
            break;
        case 5 :
            console.log('금요일');
            break;
        case 6 :
            console.log('토요일');
            break;
    }
 }