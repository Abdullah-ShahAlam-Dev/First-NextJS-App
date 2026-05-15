import { useSelector, useDispatch } from "react-redux";
import { increment, decrement, reset } from "./counterSlice";

export default function App() {
  const count = useSelector((state) => state.counter.value);
  const dispatch = useDispatch();

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
      <p style={{
        color: "#555",
        fontSize: "11px",
        letterSpacing: "6px",
        textTransform: "uppercase",
        marginBottom: "60px",
      }}>
        Redux Counter
      </p>

      <div style={{ position: "relative", marginBottom: "60px" }}>
        <div style={{
          position: "absolute",
          inset: "-20px",
          borderRadius: "50%",
          background: `radial-gradient(circle, ${getColor()}22 0%, transparent 70%)`,
          transition: "background 0.4s ease",
          pointerEvents: "none",
        }} />
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

      <div style={{ display: "flex", gap: "16px", alignItems: "center" }}>
        <button
          onClick={() => dispatch(decrement())}
          style={{
            width: "64px", height: "64px", borderRadius: "50%",
            border: "2px solid #ff1744", background: "transparent",
            color: "#ff1744", fontSize: "28px", cursor: "pointer",
            transition: "all 0.2s ease", display: "flex",
            alignItems: "center", justifyContent: "center",
          }}
          onMouseEnter={e => { e.target.style.background = "#ff1744"; e.target.style.color = "#000"; }}
          onMouseLeave={e => { e.target.style.background = "transparent"; e.target.style.color = "#ff1744"; }}
        >−</button>

        <button
          onClick={() => dispatch(reset())}
          style={{
            padding: "10px 24px", borderRadius: "4px",
            border: "1px solid #333", background: "transparent",
            color: "#555", fontSize: "10px", letterSpacing: "3px",
            textTransform: "uppercase", cursor: "pointer",
            transition: "all 0.2s ease",
          }}
          onMouseEnter={e => { e.target.style.borderColor = "#fff"; e.target.style.color = "#fff"; }}
          onMouseLeave={e => { e.target.style.borderColor = "#333"; e.target.style.color = "#555"; }}
        >Reset</button>

        <button
          onClick={() => dispatch(increment())}
          style={{
            width: "64px", height: "64px", borderRadius: "50%",
            border: "2px solid #00e676", background: "transparent",
            color: "#00e676", fontSize: "28px", cursor: "pointer",
            transition: "all 0.2s ease", display: "flex",
            alignItems: "center", justifyContent: "center",
          }}
          onMouseEnter={e => { e.target.style.background = "#00e676"; e.target.style.color = "#000"; }}
          onMouseLeave={e => { e.target.style.background = "transparent"; e.target.style.color = "#00e676"; }}
        >+</button>
      </div>

      <p style={{
        marginTop: "40px", fontSize: "10px",
        letterSpacing: "4px", color: "#333", textTransform: "uppercase",
      }}>
        {count > 0 ? "Positive" : count < 0 ? "Negative" : "Zero"}
      </p>
    </div>
  );
}