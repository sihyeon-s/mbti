export default function Result({
  result,
  results,
  styles,
  handleRetry,
}) {
  return (
    <div style={styles.center}>
      <div style={styles.resultEmoji}>
        {result.emoji}
      </div>

      <div
        style={{
          ...styles.resultBadge,
          background: result.color,
        }}
      >
        {
          Object.keys(results).find(
            (k) => results[k] === result
          )
        }
      </div>

      <h2 style={styles.resultTitle}>
        {result.title}
      </h2>

      <p style={styles.resultDesc}>
        {result.desc}
      </p>

      <button
        style={styles.retryBtn}
        onClick={handleRetry}
      >
        다시 테스트하기 🔄
      </button>
    </div>
  );
}