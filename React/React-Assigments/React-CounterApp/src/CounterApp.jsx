
import { useState } from "react";

export default function CounterApp() {
  const [count, setCount] = useState(0);

  const increment = () => setCount(count + 1);
  const decrement = () => setCount(count - 1);
  const reset = () => setCount(0);

  const getColor = () => {
    if (count > 0) return "#00e676";
    if (count < 0) return "#ff1744";
    return "#ffffff";
  };

  return (
    <div style={{
      minHeight: "100vh",
      background: "#0a0a0a",
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      justifyContent: "center",
      fontFamily: "'Courier New', monospace",
      userSelect: "none",
    }}>
      {/* Title */}
      <p style={{
        color: "#555",
        fontSize: "11px",
        letterSpacing: "6px",
        textTransform: "uppercase",
        marginBottom: "60px",
      }}>
        useState Counter
      </p>

      {/* Count Display */}
      <div style={{
        position: "relative",
        marginBottom: "60px",
      }}>
        {/* Glow ring */}
        <div style={{
          position: "absolute",
          inset: "-20px",
          borderRadius: "50%",
          background: `radial-gradient(circle, ${getColor()}22 0%, transparent 70%)`,
          transition: "background 0.4s ease",
          pointerEvents: "none",
        }} />

        {/* Number Box */}
        <div style={{
          width: "200px",
          height: "200px",
          border: `2px solid ${getColor()}`,
          borderRadius: "50%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          transition: "border-color 0.4s ease",
          boxShadow: `0 0 30px ${getColor()}33`,
        }}>
          <span style={{
            fontSize: "72px",
            fontWeight: "bold",
            color: getColor(),
            transition: "color 0.4s ease",
            lineHeight: 1,
          }}>
            {count}
          </span>
        </div>
      </div>

      {/* Buttons */}
      <div style={{ display: "flex", gap: "16px", alignItems: "center" }}>
        {/* Decrement */}
        <button
          onClick={decrement}
          style={{
            width: "64px",
            height: "64px",
            borderRadius: "50%",
            border: "2px solid #ff1744",
            background: "transparent",
            color: "#ff1744",
            fontSize: "28px",
            cursor: "pointer",
            transition: "all 0.2s ease",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
          onMouseEnter={e => {
            e.target.style.background = "#ff1744";
            e.target.style.color = "#000";
          }}
          onMouseLeave={e => {
            e.target.style.background = "transparent";
            e.target.style.color = "#ff1744";
          }}
        >
          −
        </button>

        {/* Reset */}
        <button
          onClick={reset}
          style={{
            padding: "10px 24px",
            borderRadius: "4px",
            border: "1px solid #333",
            background: "transparent",
            color: "#555",
            fontSize: "10px",
            letterSpacing: "3px",
            textTransform: "uppercase",
            cursor: "pointer",
            transition: "all 0.2s ease",
          }}
          onMouseEnter={e => {
            e.target.style.borderColor = "#fff";
            e.target.style.color = "#fff";
          }}
          onMouseLeave={e => {
            e.target.style.borderColor = "#333";
            e.target.style.color = "#555";
          }}
        >
          Reset
        </button>

        {/* Increment */}
        <button
          onClick={increment}
          style={{
            width: "64px",
            height: "64px",
            borderRadius: "50%",
            border: "2px solid #00e676",
            background: "transparent",
            color: "#00e676",
            fontSize: "28px",
            cursor: "pointer",
            transition: "all 0.2s ease",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
          onMouseEnter={e => {
            e.target.style.background = "#00e676";
            e.target.style.color = "#000";
          }}
          onMouseLeave={e => {
            e.target.style.background = "transparent";
            e.target.style.color = "#00e676";
          }}
        >
          +
        </button>
      </div>

      {/* Status label */}
      <p style={{
        marginTop: "40px",
        fontSize: "10px",
        letterSpacing: "4px",
        color: "#333",
        textTransform: "uppercase",
      }}>
        {count > 0 ? "Positive" : count < 0 ? "Negative" : "Zero"}
      </p>
    </div>
  );
}
