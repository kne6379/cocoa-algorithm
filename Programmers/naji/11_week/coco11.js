//문제 https://school.programmers.co.kr/learn/courses/30/lessons/181851

function solution(rank, attendance) {
    var answer = [];


    for (let i = 0; i < attendance.length; i++) {
        //내가 보기 쉽게 {i:0, rank:3, attendance:false} 
          const ranking = {i:i,rank:rank[i] , attendance:attendance[i]}
          // console.log(ranking)
        if (attendance[i] === true) {
        answer.push(ranking)
        }
    }  const rankSorted= answer.sort((a, b) => a.rank - b.rank)
    
    return rankSorted[0].i*10000 +rankSorted[1].i*100+rankSorted[2].i
}

// 문제 https://school.programmers.co.kr/learn/courses/30/lessons/181830

// function solution(arr) {
//     var answer = [];
//     const maxSize = Math.max(arr.length, arr[0].length);

//     for (let i = 0; i < maxSize; i++) {
//         if (i < arr.length) {
//             const newRow = arr[i].slice(); 
//             while (newRow.length < maxSize) {
//                 newRow.push(0); 
//             }
//             answer.push(newRow);
//         } else {
// const newRow = arr.slice();
// while(newRow.length<maxSize){
//     newRow.push(0)
// }
//             answer.push(newRow);
//         }
//     }
//     return answer; 
// }


function solution(arr) {
    var answer = [];

    const maxSize = Math.max(arr.length, arr[0].length);
    for (let i = 0; i < maxSize; i++) {
        if (i < arr.length) {
            const newRow = arr[i].slice();
            console.log("newRow1->", newRow);
            while (newRow.length < maxSize) {
                newRow.push(0); 
            }
            answer.push(newRow);
        } else {
            const newRow = Array(maxSize).fill(0); 
            console.log("newRow2->", newRow);
            answer.push(newRow);
        }
    }

    return answer;
}