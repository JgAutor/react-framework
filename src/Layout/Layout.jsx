import Header from '../Header/header';

export default function Layout({ children }) {
  return (
    <div style={{ padding: 10, maxWidth: '1200px', margin: '0 auto' }}>
      <header style={{ background: "#ffd700", padding: 20, borderRadius: 10 }}>
        <Header />
      </header>

      <main>{children}</main>

      <footer style={{ background: "#ffd700", padding: 20, marginTop: 20, borderRadius: 10 }}>
        <p style={{ color: "black", textAlign: "center", margin: 0 }}>
          "Ninguém nasce odiando outra pessoa pela cor de sua pele, por sua origem ou ainda por sua religião. 
          Para odiar, as pessoas precisam aprender, e se podem aprender a odiar, podem ser ensinadas a amar." 
          - Nelson Mandela
        </p>
      </footer>
    </div>
  );
}