export default function Hero() {
    return (
      <section style={{ 
        background: 'linear-gradient(135deg, #000 0%, #333 100%)', 
        color: 'white', 
        padding: '60px 20px',
        textAlign: 'center',
        borderRadius: '10px',
        margin: '20px 0'
      }}>
        <h1 style={{ fontSize: '2.5rem', marginBottom: '20px' }}>
          Contra o Racismo, Pela Igualdade
        </h1>
        <p style={{ fontSize: '1.2rem', maxWidth: '800px', margin: '0 auto' }}>
          O racismo é uma violação dos direitos humanos que precisa ser combatida 
          todos os dias. Educação e conscientização são nossas armas mais poderosas.
        </p>
      </section>
    );
  }