export default function Card({ title, content, color = "#ffd700" }) {
    return (
      <div style={{
        background: color,
        padding: '20px',
        borderRadius: '10px',
        margin: '10px 0',
        boxShadow: '0 4px 6px rgba(0,0,0,0.1)'
      }}>
        <h3 style={{ color: 'black', marginTop: 0 }}>{title}</h3>
        <p style={{ color: 'black' }}>{content}</p>
      </div>
    );
  }