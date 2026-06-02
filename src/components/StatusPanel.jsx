import { useState } from 'react'

export default function StatusPanel() {
  const [ativo, setAtivo] = useState(true)

  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
      {/* Status Card */}
      <div style={{
        backgroundColor: '#ffffff',
        borderRadius: '12px',
        border: '1px solid #e2e8f0',
        padding: '20px',
      }}>
        <h3 style={{ fontSize: '15px', fontWeight: '600', color: '#1e293b', marginBottom: '16px' }}>
          Status do Imóvel
        </h3>

        {/* Toggle */}
        <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '12px' }}>
          <button
            onClick={() => setAtivo(v => !v)}
            style={{
              width: '48px', height: '26px',
              borderRadius: '13px',
              border: 'none',
              backgroundColor: ativo ? '#22c55e' : '#cbd5e1',
              cursor: 'pointer',
              position: 'relative',
              transition: 'background-color 0.2s',
              flexShrink: 0,
            }}
          >
            <span style={{
              position: 'absolute',
              top: '3px',
              left: ativo ? '25px' : '3px',
              width: '20px', height: '20px',
              borderRadius: '50%',
              backgroundColor: '#ffffff',
              boxShadow: '0 1px 3px rgba(0,0,0,0.2)',
              transition: 'left 0.2s',
              display: 'block',
            }} />
          </button>
          <span style={{ fontSize: '14px', fontWeight: '600', color: '#1e293b' }}>
            {ativo ? 'Ativo' : 'Inativo'}
          </span>
        </div>

        <p style={{ fontSize: '12px', color: '#64748b', lineHeight: '1.5', marginBottom: '14px' }}>
          Imóvel disponível para visitas e registros.
        </p>

        {/* Info box */}
        <div style={{
          backgroundColor: '#eff6ff',
          border: '1px solid #bfdbfe',
          borderRadius: '8px',
          padding: '12px',
          display: 'flex',
          gap: '8px',
        }}>
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#3b82f6" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" style={{ flexShrink: 0, marginTop: '1px' }}>
            <circle cx="12" cy="12" r="10" />
            <line x1="12" y1="16" x2="12" y2="12" />
            <line x1="12" y1="8" x2="12.01" y2="8" />
          </svg>
          <div>
            <p style={{ fontSize: '12px', fontWeight: '600', color: '#1e40af', marginBottom: '4px' }}>Informações</p>
            <p style={{ fontSize: '12px', color: '#3b82f6', lineHeight: '1.5' }}>
              Imóveis inativados não podem receber novas visitas, mas o histórico será mantido no sistema.
            </p>
          </div>
        </div>
      </div>

      {/* Histórico Card */}
      <div style={{
        backgroundColor: '#ffffff',
        borderRadius: '12px',
        border: '1px solid #e2e8f0',
        padding: '20px',
      }}>
        <h3 style={{ fontSize: '15px', fontWeight: '600', color: '#1e293b', marginBottom: '10px' }}>
          Histórico
        </h3>
        <p style={{ fontSize: '13px', color: '#64748b', lineHeight: '1.5', marginBottom: '24px' }}>
          O histórico de visitas e ocorrências deste imóvel ficará disponível após o primeiro registro.
        </p>
        <div style={{ display: 'flex', justifyContent: 'center', padding: '16px 0' }}>
          <svg width="64" height="64" viewBox="0 0 24 24" fill="none" stroke="#cbd5e1" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" />
            <polyline points="9 22 9 12 15 12 15 22" />
          </svg>
        </div>
      </div>
    </div>
  )
}
