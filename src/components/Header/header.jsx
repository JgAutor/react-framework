export default function Header() {
    return (
      <nav style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
        <h1 style={{ color: "black", margin: 0 }}>Consciência Negra</h1>
        <div>
          <a href="#sobre" style={{ color: "black", margin: '0 10px', textDecoration: 'none' }}>Sobre</a>
          <a href="#formas" style={{ color: "black", margin: '0 10px', textDecoration: 'none' }}>Formas</a>
          <a href="#combate" style={{ color: "black", margin: '0 10px', textDecoration: 'none' }}>Combate</a>
          <a href="#recursos" style={{ color: "black", margin: '0 10px', textDecoration: 'none' }}>Recursos</a>
        </div>
      </nav>
    );
  }