export default function Intro({
  styles,
  handleStart,
}) {
  return (
    <div style={styles.center}>
      <div style={styles.introEmoji}>🌸</div>

      <h1 style={styles.introTitle}>
        나는 어떤 유형일까?
      </h1>

      <p style={styles.introSub}>
        12가지 질문으로 알아보는
        <br />
        MBTI 테스트
      </p>

      <p style={styles.introNote}>
        솔직하게 답할수록 정확해져요 💕
      </p>

      <button
        style={styles.startBtn}
        onClick={handleStart}
      >
        테스트 시작하기 ✨
      </button>
    </div>
  );
}