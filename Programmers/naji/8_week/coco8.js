//배열탐색인가 이진트리 맞나?
//트리 : 하나의 전선 -> 2개로 분할
// 송전탑 개수 n, 전선 정보 wires ; 매개변수
//wires는 길이가 n-1인 정수형 2차원 배열
//wires의 각 원소는 [v1, v2] 2개의 자연수로 이루어져 있으며, 이는 전력망의 v1번 송전탑과 v2번 송전탑이 전선으로 연결

///시도2
function solution(n, wires) {
  //wires 배열을 사용하여 송전탑 간의 연결 정보를 그래프로 구성 = push 사용
  //그래프_초기화 = 배열의초기화(제공된 wires의 n - 1; 이 결과값이 0이면 안되므로 )
  //배열, 연결정보(), 그래프, 푸쉬
  let answer = m;

  // 인접 리스트 생성 : n이 0이거나 -가 되면 안되므로 +1 해주기
  const graph = Array.from({ length: n + 1 }, () => []);
  // 그래프 구성
  for (const [v1, v2] of wires) {
    graph[v1].push(v2);
    graph[v2].push(v1);
  }

  //각 전선을 하나씩 끊어보며 네트워크가 어떻게 분할 되는 지 확인
  //배열 순환 : [v1, v2] 형태 배열 ; 송전탑 연결
  for (const [v1, v2] of wires) {
    // 함수를 호출, 사이 전선 끊었을 때의 한쪽 네트워크의 노드 수 계산
    const count = countNodes(v1, v2, graph, n);
    //네트워크 간의 노드 수 차이 계산
    const diff = Math.abs(n - 2 * count);
    answer = Math.min(answer, diff);
  }
  //bfs를 사용하여 각 부분의 송전탑 수 계산

  //두 부분의 송전탑 수 차이의 절대값 구하고 그 중 최소값 찾기

  return answer;
}

////답변/////
function solution(n, wires) {
  let answer = Infinity; // 최소 차이를 저장할 변수, 초기값은 무한대로 설정
  const graph = Array.from({ length: n + 1 }, () => []);

  // 그래프 구성
  for (const [v1, v2] of wires) {
    graph[v1].push(v2);
    graph[v2].push(v1);
  }

  // 각 전선을 끊어보며 네트워크 분할 확인
  for (const [v1, v2] of wires) {
    const count = countNodes(v1, v2, graph, n);
    const diff = Math.abs(n - 2 * count); // 두 부분의 차이
    answer = Math.min(answer, diff);
  }

  return answer;
}

// BFS를 사용하여 연결된 노드 수 계산
function countNodes(start, exclude, graph, n) {
  const visited = new Array(n + 1).fill(false);
  const queue = [start];
  let count = 0;

  visited[start] = true;
  visited[exclude] = true;

  while (queue.length > 0) {
    const node = queue.shift();
    count++;

    for (const neighbor of graph[node]) {
      if (!visited[neighbor]) {
        visited[neighbor] = true;
        queue.push(neighbor);
      }
    }
  }

  return count;
}
