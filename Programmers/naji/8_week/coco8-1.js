//배열탐색인가 이진트리 맞나?
//트리 : 하나의 전선 -> 2개로 분할
// 송전탑 개수 n, 전선 정보 wires ; 매개변수
//wires는 길이가 n-1인 정수형 2차원 배열
//wires의 각 원소는 [v1, v2] 2개의 자연수로 이루어져 있으며, 이는 전력망의 v1번 송전탑과 v2번 송전탑이 전선으로 연결

//시도 1
function solution(n, wires) {
  var answer = -1;
  //[v1, v2] 로 구성된 배열 중에서 => 배열로 돌리는건ㄱ..? 몇 번째 인덱스를 선택해야
  const queue = [];
  //큐에 데이터 추가
  queue.push([v1, v3]);
  queue.push([v2, v3]);

  //큐의 맨 앞 데이터 제거
  let firstItem = queue.shift([v1, v3]);
  console.log(firstItem);

  queue.push([v3, v4]);
  queue.push([v4, v5]);

  //큐의 맨 앞 데이터 제거
  firstItem = queue.shift([v2, v3]);
  console.log(firstItem);

  //slice 했을 때 갯수의 최솟값 => BFS (; 시작 지점부터 최단 경로나 최소 횟수를 찾아야 할 때)
  //return 최소값

  return answer;
}
//시도2 : 지금 풀이 부분
function solution(n, wires) {
  //wires 배열을 사용하여 송전탑 간의 연결 정보를 그래프로 구성 = push 사용
  //
  //각 전선을 하나씩 끊어보며 네트워크가 어떻게 분할 되는 지 확인

  //bfs를 사용하여 각 부분의 송전탑 수 계산

  //두 부분의 송전탑 수 차이의 절대값 구하고 그 중 최소값 찾기

  return answer;
}
////

//bfs 구현시 재방문을 안할 수 있게//////////////

//연결리스트 이용방식 : 틀
class Node {
  constructor(data) {
    this.data = data; //요소의 값
    this.next = null; //다음 요소 참조
  }
}
class Queue {
  constructor() {
    this.head = null; //첫 번째 요소 참조
    this.tail = null; //마지막 요소 참조
    this.size = 0; // 큐의 길이 : n
  }

  push(data) {
    //새로운 요소 생성
    const newNode = new Node(data);

    if (!this.head) {
      //큐가 비어 있다면 head와 tail을 모두 새로 생성한 요소로 설정
      this.head = newNode;
      this.tail = newNode;
      //아니면 현재 tail의 next 속성을 새로운 요소로 설정 후 tail이 새로운 요소를 참조하도록 변경
    } else {
      this.head = newNode;
      this.tail = newNode;
    }
    this.size++; // 큐 일이 증가
  }
  pop() {
    //head가 null 이라면 비어있다는 뜻
    if (!this.head) {
      return null;
    }
    //두번째 요소를 head의 참조로 변경하면
    // 자연스럽게 첫번째 요소가 사라짐
    const removeNode = this.head;
    this.head = this.head.next;

    //만약 두번째 요소가 없었다면
    //큐가 비어있다는 뜻이니 tail도 null로 설정
    if (!this.head) {
      this.tail = null;
    }
    this.size--; // 큐 길이 감소

    //삭제된 요소 값 반환
    return removeNode.data;
  }
  isEmpty() {
    return this.size === 0;
  }
}

/////// : 답변1
function solution(n, wires) {
  let answer = n;

  // 인접 리스트 생성
  const graph = Array.from({ length: n + 1 }, () => []);
  wires.forEach(([v1, v2]) => {
    graph[v1].push(v2);
    graph[v2].push(v1);
  });

  // BFS 함수 정의
  const bfs = (start, visited) => {
    const queue = [start];
    visited[start] = true;
    let count = 1;

    while (queue.length) {
      const node = queue.shift();
      for (const neighbor of graph[node]) {
        if (!visited[neighbor]) {
          visited[neighbor] = true;
          queue.push(neighbor);
          count++;
        }
      }
    }

    return count;
  };

  // 각 전선을 끊어보며 최소 차이 계산
  for (const [v1, v2] of wires) {
    const visited = Array(n + 1).fill(false);
    visited[v2] = true; // 전선을 끊음

    const part1 = bfs(v1, visited);
    const part2 = n - part1;

    answer = Math.min(answer, Math.abs(part1 - part2));
  }

  return answer;
}
