export default function Quiz({
  styles,
  current,
  questions,
  selected,
  progress,
  handleAnswer,
}) {
  const q = questions[current];

  return (
    <div style={styles.quizWrap}>
      <div style={styles.progressRow}>
        <span style={styles.progressLabel}>
          {current + 1} / {questions.length}
        </span>

        <span style={styles.progressDim}>
          {q.dimension}
        </span>
      </div>

      <div style={styles.progressBarBg}>
        <div
          style={{
            ...styles.progressBarFill,
            width: `${progress}%`,
          }}
        />
      </div>

      <div style={styles.questionBox}>
        <div style={styles.qEmoji}>
          {q.emoji}
        </div>

        <p style={styles.qText}>
          {q.text}
        </p>
      </div>

      <div style={styles.optionsCol}>
        {[q.a, q.b].map((opt, i) => {
          const isSelected =
            selected === opt.type;

          const isOther =
            selected !== null &&
            selected !== opt.type;

          return (
            <button
              key={i}
              style={{
                ...styles.optBtn,
                ...(isSelected
                  ? styles.optSelected
                  : {}),
                ...(isOther
                  ? styles.optFaded
                  : {}),
              }}
              onClick={() =>
                handleAnswer(opt.type)
              }
            >
              <span style={styles.optLabel}>
                {i === 0 ? "A" : "B"}
              </span>

              <span style={styles.optText}>
                {opt.text}
              </span>
            </button>
          );
        })}
      </div>
    </div>
  );
}