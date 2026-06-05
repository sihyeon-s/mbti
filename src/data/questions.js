export const questions = [
  // E / I
  {
    id: 1,
    dimension: "E/I",
    text: "주말에 친구들이 갑자기 파티에 초대했어. 너의 반응은?",
    emoji: "🎉",
    a: { text: "오예! 신난다, 바로 달려가!", type: "E" },
    b: { text: "음... 집에서 쉬고 싶었는데", type: "I" },
  },
  {
    id: 2,
    dimension: "E/I",
    text: "긴 하루를 보낸 후 에너지를 충전하는 방법은?",
    emoji: "🔋",
    a: { text: "친구들이랑 수다 떨거나 나가 놀기", type: "E" },
    b: { text: "혼자 조용히 넷플릭스 보며 뒹굴기", type: "I" },
  },
  {
    id: 3,
    dimension: "E/I",
    text: "처음 보는 사람 많은 모임에 갔을 때?",
    emoji: "🎈",
    a: { text: "먼저 말 걸고 분위기 탐색함", type: "E" },
    b: { text: "조용히 분위기 파악부터 함", type: "I" },
  },

  // S / N
  {
    id: 4,
    dimension: "S/N",
    text: "새로운 카페에 갔을 때 제일 먼저 눈에 들어오는 건?",
    emoji: "☕",
    a: { text: "인테리어, 메뉴판, 좌석 수 같은 실제 분위기", type: "S" },
    b: { text: "이 카페만의 감성이나 스토리", type: "N" },
  },
  {
    id: 5,
    dimension: "S/N",
    text: "친구에게 길을 설명해줄 때 너는?",
    emoji: "🗺️",
    a: { text: "\"편의점 지나서 오른쪽!\"처럼 자세하게", type: "S" },
    b: { text: "\"가다 보면 느낌 올 거야\" 스타일", type: "N" },
  },
  {
    id: 6,
    dimension: "S/N",
    text: "영화 볼 때 더 집중되는 건?",
    emoji: "🎬",
    a: { text: "스토리 개연성이나 현실감", type: "S" },
    b: { text: "숨겨진 의미나 떡밥 해석", type: "N" },
  },

  // T / F
  {
    id: 7,
    dimension: "T/F",
    text: "친구가 연애 고민을 털어놨다. 너의 반응은?",
    emoji: "💔",
    a: { text: "일단 상황 분석부터 해줌", type: "T" },
    b: { text: "\"많이 힘들었겠다...\" 공감 먼저", type: "F" },
  },
  {
    id: 8,
    dimension: "T/F",
    text: "팀플에서 의견 충돌이 생겼을 때?",
    emoji: "🤝",
    a: { text: "효율적인 방향이면 밀고 감", type: "T" },
    b: { text: "분위기 안 깨지는 게 더 중요", type: "F" },
  },
  {
    id: 9,
    dimension: "T/F",
    text: "친구가 이상한 선택을 하려는 것 같을 때?",
    emoji: "😵",
    a: { text: "팩트로 왜 문제인지 말해줌", type: "T" },
    b: { text: "상처 안 받게 조심해서 말함", type: "F" },
  },

  // J / P
  {
    id: 10,
    dimension: "J/P",
    text: "여행 계획 세울 때 너는?",
    emoji: "✈️",
    a: { text: "동선이랑 맛집까지 싹 정리", type: "J" },
    b: { text: "일단 가서 그때그때 움직임", type: "P" },
  },
  {
    id: 11,
    dimension: "J/P",
    text: "과제 마감 3일 전, 지금 너는?",
    emoji: "📝",
    a: { text: "거의 다 끝내놨거나 검토 중", type: "J" },
    b: { text: "\"아직 3일이나 남았네\" 상태", type: "P" },
  },
  {
    id: 12,
    dimension: "J/P",
    text: "갑자기 약속이 취소됐다. 너의 반응은?",
    emoji: "📅",
    a: { text: "그 시간에 할 다른 계획 바로 세움", type: "J" },
    b: { text: "오히려 좋아~ 그냥 쉼", type: "P" },
  },
];