export default function TopBar() {
  return (
    <div style={{
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'flex-end',
      padding: '14px 32px',
      backgroundColor: '#ffffff',
      borderBottom: '1px solid #e2e8f0',
    }}>
      <button style={{
        display: 'flex',
        alignItems: 'center',
        gap: '10px',
        background: 'none',
        border: 'none',
        cursor: 'pointer',
        padding: '4px 8px',
        borderRadius: '8px',
        fontFamily: 'inherit',
      }}
        onMouseEnter={e => e.currentTarget.style.background = '#f1f5f9'}
        onMouseLeave={e => e.currentTarget.style.background = 'none'}
      >
        <div style={{
          width: '36px', height: '36px',
          borderRadius: '50%',
          backgroundColor: '#dbeafe',
          display: 'flex', alignItems: 'center', justifyContent: 'center',
        }}>
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#3b82f6" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2" />
            <circle cx="12" cy="7" r="4" />
          </svg>
        </div>
        <div style={{ textAlign: 'left' }}>
          <div style={{ fontSize: '14px', fontWeight: '600', color: '#1e293b' }}>João da Silva</div>
          <div style={{ fontSize: '12px', color: '#64748b' }}>Coordenador</div>
        </div>
        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#94a3b8" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <polyline points="6 9 12 15 18 9" />
        </svg>
      </button>
    </div>
  )
}
