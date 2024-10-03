// 첫번째 풀이
// 1. 중복된 코드 개선
// 2. 초로 먼저 계산해놓았다면 더 좋았을 것 같다.

function solution(video_len, pos, op_start, op_end, commands) {
  var answer = "";

  // 분, 초를 나눠서 정수 형태로 변환
  let [min, sec] = pos.split(":").map((v) => {
    return parseInt(v);
  });
  let [op_start_min, op_start_sec] = op_start.split(":").map((v) => {
    return parseInt(v);
  });
  let [op_end_min, op_end_sec] = op_end.split(":").map((v) => {
    return parseInt(v);
  });
  let [video_len_min, video_len_sec] = video_len.split(":").map((v) => {
    return parseInt(v);
  });

  // 커맨드 배열 검사
  commands.forEach((v) => {
    if (v == "next") {
      [min, sec] = next(
        min,
        sec,
        op_start_min,
        op_start_sec,
        op_end_min,
        op_end_sec,
        video_len_min,
        video_len_sec
      );
    } else if (v == "prev") {
      [min, sec] = prev(
        min,
        sec,
        op_start_min,
        op_start_sec,
        op_end_min,
        op_end_sec,
        video_len_min,
        video_len_sec
      );
    }
  });
  // 다시 문자로 변환한 뒤 반환
  answer =
    min.toString().padStart(2, "0") + ":" + sec.toString().padStart(2, "0");
  return answer;
}

function next(
  min,
  sec,
  op_start_min,
  op_start_sec,
  op_end_min,
  op_end_sec,
  video_len_min,
  video_len_sec
) {
  // 초로 나누어 오프닝 시간에 속해있다면 오프닝이 끝나는 시간으로 보내기
  if (
    min * 60 + sec >= op_start_min * 60 + op_start_sec &&
    min * 60 + sec <= op_end_min * 60 + op_end_sec
  ) {
    min = op_end_min;
    sec = op_end_sec;
  }
  // 10초 추가했을 때 60초를 넘어간다면 1분으로 변환
  sec += 10;
  if (sec >= 60) {
    sec -= 60;
    min += 1;
  }
  // 영상길이를 넘어갔다면 영상 끝 시간으로 고정
  if (min * 60 + sec >= video_len_min * 60 + video_len_sec) {
    min = video_len_min;
    sec = video_len_sec;
  }
  // 초로 나누어 오프닝 시간에 속해있다면 오프닝이 끝나는 시간으로 보내기
  if (
    min * 60 + sec >= op_start_min * 60 + op_start_sec &&
    min * 60 + sec <= op_end_min * 60 + op_end_sec
  ) {
    min = op_end_min;
    sec = op_end_sec;
  }

  return [min, sec];
}

function prev(
  min,
  sec,
  op_start_min,
  op_start_sec,
  op_end_min,
  op_end_sec,
  video_len_min,
  video_len_sec
) {
  // 초로 나누어 오프닝 시간에 속해있다면 오프닝이 끝나는 시간으로 보내기
  if (
    min * 60 + sec >= op_start_min * 60 + op_start_sec &&
    min * 60 + sec <= op_end_min * 60 + op_end_sec
  ) {
    min = op_end_min;
    sec = op_end_sec;
  }
  // 10초를 뺀 뒤, 초가 0초 미만이라면 분에서 감소
  sec -= 10;
  if (sec < 0) {
    sec += 60;
    min -= 1;
  }

  // 분이 0미만이라면 초와 분을 0으로 고정
  if (min < 0) {
    min = 0;
    sec = 0;
  }

  // 영상길이를 넘어갔다면 영상 끝 시간으로 고정
  if (min * 60 + sec >= video_len_min * 60 + video_len_sec) {
    min = video_len_min;
    sec = video_len_sec;
  }

  // 초로 나누어 오프닝 시간에 속해있다면 오프닝이 끝나는 시간으로 보내기
  if (
    min * 60 + sec >= op_start_min * 60 + op_start_sec &&
    min * 60 + sec <= op_end_min * 60 + op_end_sec
  ) {
    min = op_end_min;
    sec = op_end_sec;
  }
  return [min, sec];
}

// 두번째 풀이
// 1. 분기를 나눴던 함수를 통합하여 매개변수로 값을 받는다.
// 2. Math 메서드를 사용해서 if문 축약
// 3. 분과 초를 나눠서 계산하던걸 초로 통합하여 계산

function solution(video_len, pos, op_start, op_end, commands) {
  let result = "";

  // 분과 초를 정수화하여 저장
  let [video_len_min, video_len_sec] = video_len.split(":").map(Number);
  let [pos_min, pos_sec] = pos.split(":").map(Number);
  let [op_start_min, op_start_sec] = op_start.split(":").map(Number);
  let [op_end_min, op_end_sec] = op_end.split(":").map(Number);

  // 시간 비교를 위해 전부 초로 변환
  let total_second = pos_min * 60 + pos_sec;
  const total_video_second = video_len_min * 60 + video_len_sec;
  const total_op_start_second = op_start_min * 60 + op_start_sec;
  const total_op_end_second = op_end_min * 60 + op_end_sec;

  // 오프닝 시간에 속해있는지 검사
  if (
    total_second >= total_op_start_second &&
    total_second <= total_op_end_second
  ) {
    total_second = total_op_end_second;
  }

  // 커맨드 배열 검사, 분기에 맞게 매개변수 입력, 함수 호출
  commands.forEach((v) => {
    if (v === "next") {
      total_second = adjust_time(
        total_second,
        10,
        total_video_second,
        total_op_start_second,
        total_op_end_second
      );
    } else if (v === "prev") {
      total_second = adjust_time(
        total_second,
        -10,
        total_video_second,
        total_op_start_second,
        total_op_end_second
      );
    }
  });

  // 결과값 반환. 다시 분과 초로 변환
  pos_min = Math.floor(total_second / 60);
  pos_sec = total_second % 60;

  // 문자로 변환하여 부족한 문자열에 0 채워주기
  result =
    pos_min.toString().padStart(2, "0") +
    ":" +
    pos_sec.toString().padStart(2, "0");
  return result;
}

function adjust_time(
  total_second,
  operation,
  total_video_second,
  total_op_start_second,
  total_op_end_second
) {
  // 10초 뺼셈 혹은 덧셈
  total_second = total_second + operation;

  // 영상 시간 최소 시간과 최대 시간을 제한
  total_second = Math.max(0, Math.min(total_video_second, total_second));

  // 변환된 값이 오프닝 시간에 속하는지 다시 한번 검사
  if (
    total_second >= total_op_start_second &&
    total_second <= total_op_end_second
  ) {
    total_second = total_op_end_second;
  }

  return total_second;
}

/** 세번째 */
// 중복된 내용 함수화

function solution(video_len, pos, op_start, op_end, commands) {
  let result = "";

  // 분과 초를 정수화하여 저장
  let [video_len_min, video_len_sec] = split_time_to_int(video_len);
  let [pos_min, pos_sec] = split_time_to_int(pos);
  let [op_start_min, op_start_sec] = split_time_to_int(op_start);
  let [op_end_min, op_end_sec] = split_time_to_int(op_end);

  // 시간 비교를 위해 전부 초로 변환
  let total_second = convert_to_seconds(pos_min, pos_sec);
  const total_video_second = convert_to_seconds(video_len_min, video_len_sec);
  const total_op_start_second = convert_to_seconds(op_start_min, op_start_sec);
  const total_op_end_second = convert_to_seconds(op_end_min, op_end_sec);

  // 오프닝 시간에 속해있는지 검사
  total_second = skip_opening_time(
    total_second,
    total_op_start_second,
    total_op_end_second
  );

  // 커맨드 배열 검사, 분기에 맞게 매개변수 입력, 함수 호출
  commands.forEach((v) => {
    if (v === "next") {
      total_second = adjust_time(total_second, 10, total_video_second);
    } else if (v === "prev") {
      total_second = adjust_time(total_second, -10, total_video_second);
    }
    // 변환된 값이 오프닝 시간에 속하는지 다시 한번 검사
    total_second = skip_opening_time(
      total_second,
      total_op_start_second,
      total_op_end_second
    );
  });

  // 결과값 반환. 다시 분과 초로 변환
  pos_min = Math.floor(total_second / 60);
  pos_sec = total_second % 60;

  // 문자로 변환하여 부족한 문자열에 0 채워주기
  result =
    pos_min.toString().padStart(2, "0") +
    ":" +
    pos_sec.toString().padStart(2, "0");
  return result;
}

function skip_opening_time(
  total_second,
  total_op_start_second,
  total_op_end_second
) {
  if (
    total_second >= total_op_start_second &&
    total_second <= total_op_end_second
  ) {
    total_second = total_op_end_second;
  }
  return total_second;
}

function split_time_to_int(time_string) {
  return time_string.split(":").map(Number);
}

function convert_to_seconds(min, sec) {
  return min * 60 + sec;
}

function adjust_time(total_second, operation, total_video_second) {
  // 10초 뺼셈 혹은 덧셈
  total_second = total_second + operation;

  // 영상 시간 최소 시간과 최대 시간을 제한
  total_second = Math.max(0, Math.min(total_video_second, total_second));

  return total_second;
}
