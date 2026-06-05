export const styles = {
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
    position: "fixed",
    width: 320,
    height: 320,
    borderRadius: "50%",
    background: "radial-gradient(circle, #ffb3d1 0%, transparent 70%)",
    top: -80,
    right: -80,
    opacity: 0.5,
    pointerEvents: "none",
  },
  bg2: {
    position: "fixed",
    width: 240,
    height: 240,
    borderRadius: "50%",
    background: "radial-gradient(circle, #ff80b0 0%, transparent 70%)",
    bottom: -60,
    left: -60,
    opacity: 0.4,
    pointerEvents: "none",
  },
  bg3: {
    position: "fixed",
    width: 180,
    height: 180,
    borderRadius: "50%",
    background: "radial-gradient(circle, #ffc1db 0%, transparent 70%)",
    top: "40%",
    left: "10%",
    opacity: 0.3,
    pointerEvents: "none",
  },
  card: {
    background: "rgba(255,255,255,0.82)",
    backdropFilter: "blur(20px)",
    borderRadius: 28,
    boxShadow:
      "0 8px 40px rgba(255,105,170,0.18), 0 2px 12px rgba(255,105,170,0.10)",
    border: "1.5px solid rgba(255,182,214,0.5)",
    width: "100%",
    maxWidth: 460,
    padding: "40px 32px",
    position: "relative",
    zIndex: 1,
  },

  center: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    textAlign: "center",
  },

  introEmoji: {
    fontSize: 64,
    marginBottom: 16,
    lineHeight: 1,
  },

  introTitle: {
    fontSize: 28,
    fontWeight: 800,
    margin: "0 0 10px",
    background: "linear-gradient(135deg, #e91e8c, #ff6b9d)",
    WebkitBackgroundClip: "text",
    WebkitTextFillColor: "transparent",
    letterSpacing: "-0.5px",
  },

  introSub: {
    fontSize: 16,
    color: "#c2607a",
    margin: "0 0 8px",
    lineHeight: 1.7,
  },

  introNote: {
    fontSize: 14,
    color: "#e8a0b8",
    margin: "0 0 32px",
  },

  startBtn: {
    background: "linear-gradient(135deg, #ff6b9d, #e91e8c)",
    color: "#fff",
    border: "none",
    borderRadius: 50,
    padding: "16px 40px",
    fontSize: 17,
    fontWeight: 700,
    cursor: "pointer",
    boxShadow: "0 4px 20px rgba(233,30,140,0.35)",
    letterSpacing: "0.3px",
    transition: "transform 0.15s, box-shadow 0.15s",
  },

  quizWrap: {
    display: "flex",
    flexDirection: "column",
    gap: 0,
  },

  progressRow: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 8,
  },

  progressLabel: {
    fontSize: 13,
    color: "#e0729a",
    fontWeight: 600,
  },

  progressDim: {
    fontSize: 12,
    fontWeight: 700,
    background: "linear-gradient(135deg, #ff6b9d, #e91e8c)",
    WebkitBackgroundClip: "text",
    WebkitTextFillColor: "transparent",
  },

  progressBarBg: {
    height: 6,
    background: "#ffdde9",
    borderRadius: 99,
    marginBottom: 28,
    overflow: "hidden",
  },

  progressBarFill: {
    height: "100%",
    borderRadius: 99,
    background: "linear-gradient(90deg, #ff80b0, #e91e8c)",
    transition: "width 0.4s cubic-bezier(.4,0,.2,1)",
  },

  questionBox: {
    background: "linear-gradient(135deg, #fff5f8, #ffe8f2)",
    border: "1.5px solid #ffc1d8",
    borderRadius: 20,
    padding: "24px 20px",
    marginBottom: 20,
    textAlign: "center",
  },

  qEmoji: {
    fontSize: 40,
    marginBottom: 12,
    lineHeight: 1,
  },

  qText: {
    fontSize: 17,
    fontWeight: 700,
    color: "#b5376a",
    lineHeight: 1.6,
    margin: 0,
  },

  optionsCol: {
    display: "flex",
    flexDirection: "column",
    gap: 12,
  },

  optBtn: {
    display: "flex",
    alignItems: "center",
    gap: 14,
    background: "rgba(255,255,255,0.9)",
    border: "1.5px solid #ffc1d8",
    borderRadius: 16,
    padding: "16px 18px",
    cursor: "pointer",
    textAlign: "left",
    transition: "all 0.25s",
    boxShadow: "0 2px 8px rgba(255,105,170,0.08)",
  },

  optSelected: {
    background: "linear-gradient(135deg, #ff6b9d22, #e91e8c11)",
    border: "2px solid #e91e8c",
    boxShadow: "0 4px 18px rgba(233,30,140,0.2)",
    transform: "scale(1.02)",
  },

  optFaded: {
    opacity: 0.4,
    transform: "scale(0.97)",
  },

  optLabel: {
    minWidth: 30,
    height: 30,
    borderRadius: "50%",
    background: "linear-gradient(135deg, #ff80b0, #e91e8c)",
    color: "#fff",
    fontSize: 13,
    fontWeight: 800,
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    flexShrink: 0,
  },

  optText: {
    fontSize: 15,
    color: "#7a3050",
    fontWeight: 500,
    lineHeight: 1.5,
  },

  resultEmoji: {
    fontSize: 80,
    marginBottom: 16,
    lineHeight: 1,
  },

  resultBadge: {
    color: "#fff",
    fontSize: 22,
    fontWeight: 900,
    padding: "8px 28px",
    borderRadius: 50,
    marginBottom: 14,
    boxShadow: "0 4px 20px rgba(233,30,140,0.35)",
    letterSpacing: "3px",
  },

  resultTitle: {
    fontSize: 22,
    fontWeight: 800,
    color: "#c2185b",
    margin: "0 0 14px",
  },

  resultDesc: {
    fontSize: 15,
    color: "#9e4a6a",
    lineHeight: 1.75,
    margin: "0 0 32px",
    maxWidth: 340,
  },

  retryBtn: {
    background: "white",
    color: "#e91e8c",
    border: "2px solid #e91e8c",
    borderRadius: 50,
    padding: "14px 36px",
    fontSize: 16,
    fontWeight: 700,
    cursor: "pointer",
    transition: "all 0.2s",
  },

  footer: {
    marginTop: 20,
    fontSize: 12,
    color: "#e8a0b8",
    zIndex: 1,
  },
};