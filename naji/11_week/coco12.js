//11번 파일도 같이 add 하기
//https://school.programmers.co.kr/learn/courses/30/lessons/120884 
// function solution(chicken) {
//     var answer = 0;
//     //chicken 100 일 때 => chicken/10 => 
       
//     while(coupon >= 10) {
// answer += chicken/10
// chicken = Math.floor(chicken/10)
// coupon = 
//     }
//     return answer;
// }

// 실패
function solution(chicken) {
    var answer = 0; 
    var totalCoupon = 0;

    while (chicken >= 10) {
       
        var currentCoupons = Math.floor(chicken / 10); 
        answer += currentCoupons;
        chicken = Math.floor(chicken / 10);

        totalCoupon += currentCoupons;

        if (totalCoupon >= 10) {
            chicken += Math.floor(totalCoupon / 10);
            totalCoupon = totalCoupon % 10; 
        }
    }

    return answer;
}