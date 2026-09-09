export default function Home() {
  return (
    <div style={{ padding: "40px", textAlign: "center" }}>
      <h1>Welcome to CodeFlux</h1>

      <p style={{ fontSize: "18px", maxWidth: "700px", margin: "20px auto" }}>
        CodeFlux is a collaborative platform where developers build projects,
        share ideas, and create innovative software solutions together.
      </p>

      <div style={{ marginTop: "40px" }}>
        <h2>Our Mission</h2>
        <p>
          Empower developers through collaboration, learning, and real-world
          software development.
        </p>
      </div>

      <button
        style={{
          marginTop: "30px",
          padding: "12px 24px",
          backgroundColor: "#2563EB",
          color: "white",
          border: "none",
          borderRadius: "8px",
          cursor: "pointer",
          fontSize: "16px",
        }}
      >
        Explore Projects
      </button>
    </div>
  );
}