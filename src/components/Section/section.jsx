export default function Section({ id, title, children }) {
    return (
      <section id={id} style={{ margin: '40px 0' }}>
        <h2 style={{ 
          color: 'black', 
          borderBottom: '2px solid #ffd700', 
          paddingBottom: '10px' 
        }}>
          {title}
        </h2>
        {children}
      </section>
    );
  }