export default function Loading() {
  return (
    <div
      className="min-h-screen flex items-center justify-center"
      style={{ backgroundColor: "var(--ink)" }}
    >
      <div
        className="w-px h-16 animate-pulse"
        style={{ background: "var(--moss)" }}
      />
    </div>
  );
}