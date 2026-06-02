import { useState } from 'react'
import TopBar from '../components/TopBar.jsx'
import StatusPanel from '../components/StatusPanel.jsx'

const inputStyle = {
  width: '100%',
  padding: '10px 14px',
  border: '1px solid #e2e8f0',
  borderRadius: '8px',
  fontSize: '14px',
  color: '#1e293b',
  backgroundColor: '#ffffff',
  fontFamily: 'inherit',
  outline: 'none',
  transition: 'border-color 0.15s, box-shadow 0.15s',
}

const selectStyle = {
  ...inputStyle,
  appearance: 'none',
  backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='16' height='16' viewBox='0 0 24 24' fill='none' stroke='%2394a3b8' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3E%3Cpolyline points='6 9 12 15 18 9'/%3E%3C/svg%3E")`,
  backgroundRepeat: 'no-repeat',
  backgroundPosition: 'right 12px center',
  paddingRight: '36px',
  cursor: 'pointer',
}

const labelStyle = {
  fontSize: '13px',
  fontWeight: '500',
  color: '#374151',
  marginBottom: '6px',
  display: 'block',
}

function Label({ children, required }) {
  return (
    <label style={labelStyle}>
      {children}
      {required && <span style={{ color: '#ef4444', marginLeft: '2px' }}>*</span>}
    </label>
  )
}

function Input({ placeholder, value, onChange, style }) {
  const [focused, setFocused] = useState(false)
  return (
    <input
      placeholder={placeholder}
      value={value}
      onChange={onChange}
      style={{
        ...inputStyle,
        ...style,
        borderColor: focused ? '#3b82f6' : '#e2e8f0',
        boxShadow: focused ? '0 0 0 3px rgba(59,130,246,0.1)' : 'none',
      }}
      onFocus={() => setFocused(true)}
      onBlur={() => setFocused(false)}
    />
  )
}

function Select({ children, value, onChange, style }) {
  const [focused, setFocused] = useState(false)
  return (
    <select
      value={value}
      onChange={onChange}
      style={{
        ...selectStyle,
        ...style,
        borderColor: focused ? '#3b82f6' : '#e2e8f0',
        boxShadow: focused ? '0 0 0 3px rgba(59,130,246,0.1)' : 'none',
      }}
      onFocus={() => setFocused(true)}
      onBlur={() => setFocused(false)}
    >
      {children}
    </select>
  )
}

const INITIAL = {
  tipo: '', uso: '', endereco: '', numero: '', complemento: '',
  cep: '', bairro: '', pontoRef: '', latitude: '', longitude: '',
  zona: '', observacoes: '',
}

export default function CadastroImovel() {
  const [form, setForm] = useState(INITIAL)

  const set = (field) => (e) => setForm(prev => ({ ...prev, [field]: e.target.value }))

  const handleLimpar = () => setForm(INITIAL)

  const handleSalvar = (e) => {
    e.preventDefault()
    alert('Imóvel salvo com sucesso!')
  }

  return (
    <div style={{ display: 'flex', flexDirection: 'column', flex: 1 }}>
      <TopBar />

      <div style={{ flex: 1, padding: '28px 32px', display: 'flex', gap: '24px', alignItems: 'flex-start' }}>
        {/* Main content */}
        <div style={{ flex: 1, minWidth: 0 }}>
          {/* Breadcrumb + Title */}
          <div style={{ marginBottom: '24px' }}>
            <h1 style={{ fontSize: '24px', fontWeight: '700', color: '#1e293b', marginBottom: '6px' }}>
              Cadastro de Imóvel
            </h1>
            <nav style={{ display: 'flex', alignItems: 'center', gap: '6px', fontSize: '13px' }}>
              <a href="#" style={{ color: '#3b82f6', textDecoration: 'none' }}>Início</a>
              <span style={{ color: '#94a3b8' }}>›</span>
              <a href="#" style={{ color: '#3b82f6', textDecoration: 'none' }}>Imóveis</a>
              <span style={{ color: '#94a3b8' }}>›</span>
              <span style={{ color: '#64748b' }}>Cadastro de Imóvel</span>
            </nav>
          </div>

          {/* Form card */}
          <form onSubmit={handleSalvar}>
            <div style={{
              backgroundColor: '#ffffff',
              borderRadius: '12px',
              border: '1px solid #e2e8f0',
              overflow: 'hidden',
              marginBottom: '24px',
            }}>
              {/* Card header */}
              <div style={{
                padding: '20px 24px',
                borderBottom: '1px solid #f1f5f9',
                display: 'flex',
                alignItems: 'center',
                gap: '12px',
              }}>
                <div style={{
                  width: '40px', height: '40px',
                  backgroundColor: '#eff6ff',
                  borderRadius: '10px',
                  display: 'flex', alignItems: 'center', justifyContent: 'center',
                }}>
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#3b82f6" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" />
                    <polyline points="9 22 9 12 15 12 15 22" />
                  </svg>
                </div>
                <div>
                  <h2 style={{ fontSize: '16px', fontWeight: '600', color: '#1e293b' }}>Dados do Imóvel</h2>
                  <p style={{ fontSize: '13px', color: '#64748b' }}>Preencha as informações do imóvel abaixo.</p>
                </div>
              </div>

              {/* Form fields */}
              <div style={{ padding: '24px' }}>
                {/* Row 1: Tipo + Uso */}
                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '20px', marginBottom: '20px' }}>
                  <div>
                    <Label required>Tipo de imóvel</Label>
                    <Select value={form.tipo} onChange={set('tipo')}>
                      <option value="">Selecione o tipo</option>
                      <option value="residencial">Residencial</option>
                      <option value="comercial">Comercial</option>
                      <option value="terreno">Terreno</option>
                      <option value="institucional">Institucional</option>
                      <option value="industrial">Industrial</option>
                    </Select>
                  </div>
                  <div>
                    <Label required>Uso do imóvel</Label>
                    <Select value={form.uso} onChange={set('uso')}>
                      <option value="">Selecione o uso</option>
                      <option value="permanente">Permanente</option>
                      <option value="temporario">Temporário</option>
                      <option value="desocupado">Desocupado</option>
                      <option value="misto">Misto</option>
                    </Select>
                  </div>
                </div>

                {/* Row 2: Endereço */}
                <div style={{ marginBottom: '20px' }}>
                  <Label required>Endereço</Label>
                  <Input
                    placeholder="Rua, Avenida, Travessa, etc."
                    value={form.endereco}
                    onChange={set('endereco')}
                  />
                </div>

                {/* Row 3: Número + Complemento + CEP */}
                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1.5fr 1fr', gap: '20px', marginBottom: '20px' }}>
                  <div>
                    <Label required>Número</Label>
                    <Input placeholder="Ex.: 123" value={form.numero} onChange={set('numero')} />
                  </div>
                  <div>
                    <Label>Complemento</Label>
                    <Input placeholder="Ex.: Casa, Apt 01, Fundos" value={form.complemento} onChange={set('complemento')} />
                  </div>
                  <div>
                    <Label required>CEP</Label>
                    <Input placeholder="Ex.: 19900-000" value={form.cep} onChange={set('cep')} />
                  </div>
                </div>

                {/* Row 4: Bairro + Ponto de referência */}
                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '20px', marginBottom: '20px' }}>
                  <div>
                    <Label required>Bairro</Label>
                    <Select value={form.bairro} onChange={set('bairro')}>
                      <option value="">Selecione o bairro</option>
                      <option value="centro">Centro</option>
                      <option value="norte">Zona Norte</option>
                      <option value="sul">Zona Sul</option>
                      <option value="leste">Zona Leste</option>
                      <option value="oeste">Zona Oeste</option>
                    </Select>
                  </div>
                  <div>
                    <Label>Ponto de referência</Label>
                    <Input placeholder="Ex.: Próximo à praça central" value={form.pontoRef} onChange={set('pontoRef')} />
                  </div>
                </div>

                {/* Row 5: Latitude + Longitude + Zona */}
                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr 1fr', gap: '20px' }}>
                  <div>
                    <Label>Latitude</Label>
                    <Input placeholder="Ex.: -22.9711" value={form.latitude} onChange={set('latitude')} />
                  </div>
                  <div>
                    <Label>Longitude</Label>
                    <Input placeholder="Ex.: -49.8738" value={form.longitude} onChange={set('longitude')} />
                  </div>
                  <div>
                    <Label>Zona</Label>
                    <Select value={form.zona} onChange={set('zona')}>
                      <option value="">Selecione a zona</option>
                      <option value="urbana">Urbana</option>
                      <option value="rural">Rural</option>
                      <option value="periurbana">Periurbana</option>
                    </Select>
                  </div>
                </div>
              </div>
            </div>

            {/* Informações adicionais */}
            <div style={{
              backgroundColor: '#ffffff',
              borderRadius: '12px',
              border: '1px solid #e2e8f0',
              padding: '24px',
              marginBottom: '24px',
            }}>
              <h2 style={{ fontSize: '16px', fontWeight: '600', color: '#1e293b', marginBottom: '16px' }}>
                Informações adicionais
              </h2>
              <div>
                <Label>Observações</Label>
                <textarea
                  placeholder="Digite informações adicionais sobre o imóvel (opcional)."
                  value={form.observacoes}
                  onChange={set('observacoes')}
                  rows={5}
                  style={{
                    ...inputStyle,
                    resize: 'vertical',
                    minHeight: '120px',
                  }}
                  onFocus={e => {
                    e.target.style.borderColor = '#3b82f6'
                    e.target.style.boxShadow = '0 0 0 3px rgba(59,130,246,0.1)'
                  }}
                  onBlur={e => {
                    e.target.style.borderColor = '#e2e8f0'
                    e.target.style.boxShadow = 'none'
                  }}
                />
              </div>
            </div>

            {/* Action buttons */}
            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
              <button
                type="button"
                style={{
                  display: 'flex', alignItems: 'center', gap: '8px',
                  padding: '10px 20px',
                  border: '1px solid #e2e8f0',
                  borderRadius: '8px',
                  backgroundColor: '#ffffff',
                  color: '#374151',
                  fontSize: '14px',
                  fontWeight: '500',
                  cursor: 'pointer',
                  fontFamily: 'inherit',
                  transition: 'background-color 0.15s',
                }}
                onMouseEnter={e => e.currentTarget.style.backgroundColor = '#f8fafc'}
                onMouseLeave={e => e.currentTarget.style.backgroundColor = '#ffffff'}
              >
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <polyline points="15 18 9 12 15 6" />
                </svg>
                Voltar
              </button>

              <div style={{ display: 'flex', gap: '12px' }}>
                <button
                  type="button"
                  onClick={handleLimpar}
                  style={{
                    display: 'flex', alignItems: 'center', gap: '8px',
                    padding: '10px 20px',
                    border: '1px solid #e2e8f0',
                    borderRadius: '8px',
                    backgroundColor: '#ffffff',
                    color: '#374151',
                    fontSize: '14px',
                    fontWeight: '500',
                    cursor: 'pointer',
                    fontFamily: 'inherit',
                    transition: 'background-color 0.15s',
                  }}
                  onMouseEnter={e => e.currentTarget.style.backgroundColor = '#f8fafc'}
                  onMouseLeave={e => e.currentTarget.style.backgroundColor = '#ffffff'}
                >
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <polyline points="1 4 1 10 7 10" />
                    <path d="M3.51 15a9 9 0 1 0 .49-3.51" />
                  </svg>
                  Limpar
                </button>

                <button
                  type="submit"
                  style={{
                    display: 'flex', alignItems: 'center', gap: '8px',
                    padding: '10px 22px',
                    border: 'none',
                    borderRadius: '8px',
                    backgroundColor: '#2563eb',
                    color: '#ffffff',
                    fontSize: '14px',
                    fontWeight: '600',
                    cursor: 'pointer',
                    fontFamily: 'inherit',
                    transition: 'background-color 0.15s',
                  }}
                  onMouseEnter={e => e.currentTarget.style.backgroundColor = '#1d4ed8'}
                  onMouseLeave={e => e.currentTarget.style.backgroundColor = '#2563eb'}
                >
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M19 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11l5 5v11a2 2 0 0 1-2 2z" />
                    <polyline points="17 21 17 13 7 13 7 21" />
                    <polyline points="7 3 7 8 15 8" />
                  </svg>
                  Salvar imóvel
                </button>
              </div>
            </div>
          </form>
        </div>

        {/* Right panel */}
        <div style={{ width: '280px', flexShrink: 0 }}>
          <StatusPanel />
        </div>
      </div>
    </div>
  )
}
