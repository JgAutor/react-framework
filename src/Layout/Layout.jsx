export default function Layout({ children }) {
  return (
    <div style={{ padding: 10 }}>
      <header style={{ background: "#eee", padding: 10 }}>
        <h2>Nome do Site</h2>
      </header>

      <main>{children}</main>

      <footer style={{ background: "#eee", padding: 10, marginTop: 20 }}>
        <p>Informações do Site</p>
      </footer>
    </div>
  );
}
