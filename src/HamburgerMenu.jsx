export default function HamburgerMenu({ open, onClick }) {
  return (
    <div
      onClick={onClick}
      style={{
        width: "35px",
        height: "30px",
        cursor: "pointer",
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
        zIndex: 20,
      }}
    >
      <span
        style={{
          height: "4px",
          background: "white",
          borderRadius: "4px",
          transition: "0.3s",
          transform: open ? "rotate(45deg) translateY(10px)" : "none",
        }}
      ></span>

      <span
        style={{
          height: "4px",
          background: "white",
          borderRadius: "4px",
          opacity: open ? 0 : 1,
          transition: "0.3s",
        }}
      ></span>

      <span
        style={{
          height: "4px",
          background: "white",
          borderRadius: "4px",
          transition: "0.3s",
          transform: open ? "rotate(-45deg) translateY(-10px)" : "none",
        }}
      ></span>
    </div>
  );
}
