export default function Home() {
  return (
    <div style={{
      minHeight: '100vh',
      backgroundColor: '#09090b',
      color: 'white',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      padding: '2rem',
      textAlign: 'center'
    }}>
      <div>
        <h1 style={{ fontSize: '4.5rem', fontWeight: 'bold', marginBottom: '1rem' }}>
          Global Deals Hub
        </h1>
        <p style={{ fontSize: '1.5rem', color: '#a1a1aa', marginBottom: '2rem' }}>
          The best discounts and coupons worldwide
        </p>
        <p style={{ color: '#22c55e', fontSize: '1.8rem' }}>
          ✅ Successfully Deployed!
        </p>
      </div>
    </div>
  );
}