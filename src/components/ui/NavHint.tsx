"use client";

interface NavHintProps {
  isObserving?: boolean;
}

const keyStyle = {
  borderColor: "rgba(255,255,255,0.3)",
  color: "rgba(255,255,255,0.7)",
};

export default function NavHint({ isObserving = false }: NavHintProps) {
  return (
    <div
      className="fixed top-4 left-4 z-50 hidden lg:flex items-center gap-1.5"
      style={{
        fontFamily: "'EB Garamond', serif",
        fontSize: "13px",
        color: "rgba(255, 255, 255, 0.5)",
        letterSpacing: "0.04em",
      }}
    >
      <span>{isObserving ? "to escape" : "to focus"}</span>
      {isObserving ? (
        <span className="border px-2 py-0.5 text-[11px]" style={keyStyle}>
          esc
        </span>
      ) : (
        <span className="flex gap-1">
          <span
            className="w-5 h-5 flex items-center justify-center text-[10px] border"
            style={keyStyle}
          >
            ↑
          </span>
          <span
            className="w-5 h-5 flex items-center justify-center text-[10px] border"
            style={keyStyle}
          >
            ↓
          </span>
        </span>
      )}
    </div>
  );
}
