import { useState } from "react";

const questions = [
  {
    id: 1,
    dimension: "E/I",
    text: "주말에 친구들이 갑자기 파티에 초대했어. 너의 반응은?",
    emoji: "🎉",
    a: { text: "오예! 신난다, 바로 달려가!", type: "E" },
    b: { text: "음... 집에서 쉬고 싶어", type: "I" },
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
    a: { text: "먼저 말 걸고 분위기 탐색", type: "E" },
    b: { text: "조용히 분위기 파악부터!", type: "I" },
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
    b: { text: "분위기 안 깨지는 게 더 중요해", type: "F" },
  },
  {
    id: 9,
    dimension: "T/F",
    text: "친구가 이상한 선택을 하려는 것 같을 때?",
    emoji: "😵",
    a: { text: "팩트로 왜 문제인지 말해줌", type: "T" },
    b: { text: "상처 안 받게 돌려서 말함", type: "F" },
  },

  // J / P
  {
    id: 10,
    dimension: "J/P",
    text: "여행 계획 세울 때 너는?",
    emoji: "✈️",
    a: { text: "동선이랑 맛집까지 엑셀로 싹 정리", type: "J" },
    b: { text: "일단 가서 즉흥으로 움직임", type: "P" },
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
    a: { text: "내 완벽한 하루 계획이...", type: "J" },
    b: { text: "오히려 좋아~ 그냥 쉼", type: "P" },
  },
];

const results = {
  ENFP: { emoji: "🌈", title: "활기찬 활동가", desc: "상상력이 넘치고 사람들에게 영감을 주는 따뜻한 자유영혼! 어디서든 파티의 중심이 되는 당신, 새로운 아이디어와 가능성을 사랑해요.", color: "#FF6B9D" },
  ENFJ: { emoji: "💫", title: "정의로운 사회자", desc: "카리스마 넘치는 리더! 타인의 감정을 섬세하게 읽고 공동체를 하나로 묶는 천부적 재능을 가졌어요.", color: "#FF8FAB" },
  ENTP: { emoji: "⚡", title: "뜨거운 논쟁가", desc: "지적 도전을 즐기는 아이디어 뱅크! 기존 통념을 뒤집는 걸 즐기고 어떤 주제로도 토론할 수 있어요.", color: "#E91E8C" },
  ENTJ: { emoji: "👑", title: "대담한 통솔자", desc: "타고난 리더십으로 목표를 향해 거침없이 나아가요. 전략적 사고와 강한 의지로 불가능을 가능으로 만들죠.", color: "#C2185B" },
  ESFP: { emoji: "🎭", title: "자유로운 연예인", desc: "지금 이 순간을 즐기는 파티피플! 사람들을 웃게 만드는 재주와 타고난 유머 감각이 넘쳐요.", color: "#FF80AB" },
  ESFJ: { emoji: "🌸", title: "사교적인 외교관", desc: "따뜻한 마음으로 주변을 돌보는 화합의 아이콘! 모두가 행복한지 항상 체크하는 든든한 친구예요.", color: "#F48FB1" },
  ESTP: { emoji: "🔥", title: "모험을 즐기는 사업가", desc: "위험을 두려워하지 않는 행동파! 위기 상황에서도 침착하게 최선의 해결책을 찾아내는 실전 고수예요.", color: "#FF4081" },
  ESTJ: { emoji: "⚓", title: "엄격한 관리자", desc: "질서와 체계를 중요시하는 신뢰의 아이콘! 맡은 일은 반드시 해내는 책임감과 실행력의 소유자예요.", color: "#D81B60" },
  INFP: { emoji: "🦋", title: "열정적인 중재자", desc: "깊은 공감 능력과 풍부한 내면세계를 가진 몽상가! 자신만의 가치관을 소중히 여기는 이상주의자예요.", color: "#F8BBD9" },
  INFJ: { emoji: "🔮", title: "선의의 옹호자", desc: "통찰력 있는 비전으로 세상을 더 나은 곳으로 만들려는 희귀한 영혼! 깊은 신념과 직관을 가졌어요.", color: "#E91E63" },
  INTP: { emoji: "🧩", title: "논리적인 사색가", desc: "지식에 목마른 철학자! 복잡한 아이디어를 분석하고 패턴을 찾는 것에서 진정한 즐거움을 느껴요.", color: "#AD1457" },
  INTJ: { emoji: "🌙", title: "용의주도한 전략가", desc: "항상 몇 수 앞을 내다보는 체스 마스터! 독립적이고 결단력 있으며 높은 기준을 스스로에게 적용해요.", color: "#880E4F" },
  ISFP: { emoji: "🎨", title: "호기심 많은 예술가", desc: "세상의 아름다움을 느끼는 감성 예술가! 자유롭고 유연하게 지금 이 순간의 경험을 소중히 여겨요.", color: "#FCE4EC" },
  ISFJ: { emoji: "🛡️", title: "용감한 수호자", desc: "헌신적이고 따뜻한 수호자! 소중한 사람들을 지키기 위해 조용하지만 강인하게 행동하는 든든한 존재예요.", color: "#F06292" },
  ISTP: { emoji: "🔧", title: "만능 재주꾼", desc: "모든 것이 어떻게 작동하는지 궁금한 탐구자! 손으로 직접 뭔가를 만들고 고치는 걸 좋아해요.", color: "#EC407A" },
  ISTJ: { emoji: "📚", title: "청렴결백한 논리주의자", desc: "사실과 논리를 중시하는 완벽주의자! 한번 맡은 책임은 끝까지 완수하는 믿음직한 현실주의자예요.", color: "#C51162" },
};

function calcMBTI(answers) {
  const count = { E: 0, I: 0, S: 0, N: 0, T: 0, F: 0, J: 0, P: 0 };
  answers.forEach(a => count[a]++);
  return (count.E >= count.I ? "E" : "I") +
    (count.S >= count.N ? "S" : "N") +
    (count.T >= count.F ? "T" : "F") +
    (count.J >= count.P ? "J" : "P");
}

export default function MBTITest() {
  const [screen, setScreen] = useState("intro");
  const [current, setCurrent] = useState(0);
  const [answers, setAnswers] = useState([]);
  const [result, setResult] = useState(null);
  const [selected, setSelected] = useState(null);
  const [animating, setAnimating] = useState(false);

  const handleStart = () => {
    setScreen("quiz");
    setCurrent(0);
    setAnswers([]);
    setResult(null);
    setSelected(null);
  };

  const handleAnswer = (type) => {
    if (animating || selected !== null) return;
    setSelected(type);
    setAnimating(true);
    const newAnswers = [...answers, type];
    setTimeout(() => {
      if (current + 1 < questions.length) {
        setCurrent(current + 1);
        setAnswers(newAnswers);
        setSelected(null);
        setAnimating(false);
      } else {
        const mbti = calcMBTI(newAnswers);
        setResult(results[mbti] || results["ENFP"]);
        setScreen("result");
        setAnimating(false);
      }
    }, 600);
  };

  const handleRetry = () => {
    setScreen("intro");
    setSelected(null);
    setAnimating(false);
  };

  const progress = Math.round((current / questions.length) * 100);
  const q = questions[current];

  return (
    <div style={styles.root}>
      <div style={styles.bg1} />
      <div style={styles.bg2} />
      <div style={styles.bg3} />

      <div style={styles.card}>
        {screen === "intro" && (
          <div style={styles.center}>
            <div style={styles.introEmoji}>🌸</div>
            <h1 style={styles.introTitle}>나는 어떤 유형일까?</h1>
            <p style={styles.introSub}>12가지 질문으로 알아보는<br />MBTI 테스트</p>
            <p style={styles.introNote}>솔직하게 답할수록 정확해져요 💕</p>
            <button style={styles.startBtn} onClick={handleStart}>
              테스트 시작하기 ✨
            </button>
          </div>
        )}

        {screen === "quiz" && (
          <div style={styles.quizWrap}>
            <div style={styles.progressRow}>
              <span style={styles.progressLabel}>{current + 1} / {questions.length}</span>
              <span style={styles.progressDim}>{q.dimension}</span>
            </div>
            <div style={styles.progressBarBg}>
              <div style={{ ...styles.progressBarFill, width: `${progress}%` }} />
            </div>

            <div style={styles.questionBox}>
              <div style={styles.qEmoji}>{q.emoji}</div>
              <p style={styles.qText}>{q.text}</p>
            </div>

            <div style={styles.optionsCol}>
              {[q.a, q.b].map((opt, i) => {
                const isSelected = selected === opt.type;
                const isOther = selected !== null && selected !== opt.type;
                return (
                  <button
                    key={i}
                    style={{
                      ...styles.optBtn,
                      ...(isSelected ? styles.optSelected : {}),
                      ...(isOther ? styles.optFaded : {}),
                    }}
                    onClick={() => handleAnswer(opt.type)}
                  >
                    <span style={styles.optLabel}>{i === 0 ? "A" : "B"}</span>
                    <span style={styles.optText}>{opt.text}</span>
                  </button>
                );
              })}
            </div>
          </div>
        )}

        {screen === "result" && result && (
          <div style={styles.center}>
            <div style={styles.resultEmoji}>{result.emoji}</div>
            <div style={{ ...styles.resultBadge, background: result.color }}>
              {Object.keys(results).find(k => results[k] === result)}
            </div>
            <h2 style={styles.resultTitle}>{result.title}</h2>
            <p style={styles.resultDesc}>{result.desc}</p>
            <button style={styles.retryBtn} onClick={handleRetry}>
              다시 테스트하기 🔄
            </button>
          </div>
        )}
      </div>

      <p style={styles.footer}></p>
    </div>
  );
}

const styles = {
  root: {
    minHeight: "100vh",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    background: "linear-gradient(135deg, #fff0f5 0%, #ffe4ef 50%, #ffd6e7 100%)",
    fontFamily: "'Noto Sans KR', 'Apple SD Gothic Neo', sans-serif",
    position: "relative",
    overflow: "hidden",
    padding: "24px 16px",
  },
  bg1: {
    position: "fixed", width: 320, height: 320, borderRadius: "50%",
    background: "radial-gradient(circle, #ffb3d1 0%, transparent 70%)",
    top: -80, right: -80, opacity: 0.5, pointerEvents: "none",
  },
  bg2: {
    position: "fixed", width: 240, height: 240, borderRadius: "50%",
    background: "radial-gradient(circle, #ff80b0 0%, transparent 70%)",
    bottom: -60, left: -60, opacity: 0.4, pointerEvents: "none",
  },
  bg3: {
    position: "fixed", width: 180, height: 180, borderRadius: "50%",
    background: "radial-gradient(circle, #ffc1db 0%, transparent 70%)",
    top: "40%", left: "10%", opacity: 0.3, pointerEvents: "none",
  },
  card: {
    background: "rgba(255,255,255,0.82)",
    backdropFilter: "blur(20px)",
    borderRadius: 28,
    boxShadow: "0 8px 40px rgba(255,105,170,0.18), 0 2px 12px rgba(255,105,170,0.10)",
    border: "1.5px solid rgba(255,182,214,0.5)",
    width: "100%",
    maxWidth: 460,
    padding: "40px 32px",
    position: "relative",
    zIndex: 1,
  },
  center: { display: "flex", flexDirection: "column", alignItems: "center", textAlign: "center" },

  introEmoji: { fontSize: 64, marginBottom: 16, lineHeight: 1 },
  introTitle: {
    fontSize: 28, fontWeight: 800, margin: "0 0 10px",
    background: "linear-gradient(135deg, #e91e8c, #ff6b9d)",
    WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent",
    letterSpacing: "-0.5px",
  },
  introSub: { fontSize: 16, color: "#c2607a", margin: "0 0 8px", lineHeight: 1.7 },
  introNote: { fontSize: 14, color: "#e8a0b8", margin: "0 0 32px" },
  startBtn: {
    background: "linear-gradient(135deg, #ff6b9d, #e91e8c)",
    color: "#fff", border: "none", borderRadius: 50,
    padding: "16px 40px", fontSize: 17, fontWeight: 700,
    cursor: "pointer", boxShadow: "0 4px 20px rgba(233,30,140,0.35)",
    letterSpacing: "0.3px", transition: "transform 0.15s, box-shadow 0.15s",
  },

  quizWrap: { display: "flex", flexDirection: "column", gap: 0 },
  progressRow: { display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: 8 },
  progressLabel: { fontSize: 13, color: "#e0729a", fontWeight: 600 },
  progressDim: {
    fontSize: 12, fontWeight: 700,
    background: "linear-gradient(135deg, #ff6b9d, #e91e8c)",
    WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent",
  },
  progressBarBg: { height: 6, background: "#ffdde9", borderRadius: 99, marginBottom: 28, overflow: "hidden" },
  progressBarFill: {
    height: "100%", borderRadius: 99,
    background: "linear-gradient(90deg, #ff80b0, #e91e8c)",
    transition: "width 0.4s cubic-bezier(.4,0,.2,1)",
  },
  questionBox: {
    background: "linear-gradient(135deg, #fff5f8, #ffe8f2)",
    border: "1.5px solid #ffc1d8",
    borderRadius: 20, padding: "24px 20px", marginBottom: 20, textAlign: "center",
  },
  qEmoji: { fontSize: 40, marginBottom: 12, lineHeight: 1 },
  qText: { fontSize: 17, fontWeight: 700, color: "#b5376a", lineHeight: 1.6, margin: 0 },

  optionsCol: { display: "flex", flexDirection: "column", gap: 12 },
  optBtn: {
    display: "flex", alignItems: "center", gap: 14,
    background: "rgba(255,255,255,0.9)",
    border: "1.5px solid #ffc1d8",
    borderRadius: 16, padding: "16px 18px",
    cursor: "pointer", textAlign: "left", transition: "all 0.25s",
    boxShadow: "0 2px 8px rgba(255,105,170,0.08)",
  },
  optSelected: {
    background: "linear-gradient(135deg, #ff6b9d22, #e91e8c11)",
    border: "2px solid #e91e8c",
    boxShadow: "0 4px 18px rgba(233,30,140,0.2)",
    transform: "scale(1.02)",
  },
  optFaded: { opacity: 0.4, transform: "scale(0.97)" },
  optLabel: {
    minWidth: 30, height: 30, borderRadius: "50%",
    background: "linear-gradient(135deg, #ff80b0, #e91e8c)",
    color: "#fff", fontSize: 13, fontWeight: 800,
    display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0,
  },
  optText: { fontSize: 15, color: "#7a3050", fontWeight: 500, lineHeight: 1.5 },

  resultEmoji: { fontSize: 80, marginBottom: 16, lineHeight: 1 },
  resultBadge: {
    color: "#fff", fontSize: 22, fontWeight: 900,
    padding: "8px 28px", borderRadius: 50, marginBottom: 14,
    boxShadow: "0 4px 20px rgba(233,30,140,0.35)",
    letterSpacing: "3px",
  },
  resultTitle: { fontSize: 22, fontWeight: 800, color: "#c2185b", margin: "0 0 14px" },
  resultDesc: { fontSize: 15, color: "#9e4a6a", lineHeight: 1.75, margin: "0 0 32px", maxWidth: 340 },
  retryBtn: {
    background: "white", color: "#e91e8c",
    border: "2px solid #e91e8c", borderRadius: 50,
    padding: "14px 36px", fontSize: 16, fontWeight: 700,
    cursor: "pointer", transition: "all 0.2s",
  },

  footer: { marginTop: 20, fontSize: 12, color: "#e8a0b8", zIndex: 1 },
};
