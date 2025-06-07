export default function CustomNode({ data }) {
  return (
    <div
      style={{
        color: data.labelColor || "#000", // fallback black
        userSelect: "none",
        padding: 10,
        textAlign: "center",
      }}
    >
      {data.label}
    </div>
  );
}
