import React, { useState, useRef } from 'react';
import html2canvas from 'html2canvas';
import { Download, Settings } from 'lucide-react';

export default function App() {
  const [data, setData] = useState({
    logoText: 'منصة المستثمر',
   
    startupName: 'فوكسو',
    description: 'بناء أنظمة إطالة العمر المخصصة',
    fundingAmount: '0.5 مليون $',
    foundedIn: '2024',
    headquarters: 'بنغالورو',
    sector: 'تك الصحة',
    keyInvestors: 'بلوم فينتشرز',
    founders: 'سوبهيندو بانيغراهي،\nأكاش جيهاني،\nسانمايا كومار دال',
    primaryCompetition: 'بايبيك، فانكشن هيلث،\nسوبر باور',
    footerLogoText: 'Inc',
    footerNumber: '42',
    selectedLogo: '/logooo/logo-1.png', // Default logo
    slogan: 'في رحلة لتطوير الاقتصاد العربي',
    theme: 'white', // Default theme
  });

  const THEMES = {
    white: {
      name: 'الأبيض النقي',
      main: '#e32028',
      text: '#111827',
      textSec: '#4b5563',
      bg: '#ffffff',
      panel: '#fdf6ee', // cream
      border: '#d1d5db',
      accent: '#e32028',
      footerBg: '#fdf6ee',
      dotColor: '#cbd5e1'
    },
    navy: {
      name: 'الكحلي الملكي',
      main: '#38bdf8', // Blue accent
      text: '#f8fafc',
      textSec: '#94a3b8',
      bg: '#0f172a',
      panel: '#1e293b',
      border: '#334155',
      accent: '#38bdf8',
      footerBg: '#1e293b',
      dotColor: '#334155'
    },
    emerald: {
      name: 'الأخضر الفاخر',
      main: '#10b981',
      text: '#f0fdf4',
      textSec: '#6dbd9f',
      bg: '#064e3b',
      panel: '#065f46',
      border: '#047857',
      accent: '#10b981',
      footerBg: '#065f46',
      dotColor: '#047857'
    },
    slate: {
      name: 'الرمادي العصري',
      main: '#f43f5e',
      text: '#f8fafc',
      textSec: '#94a3b8',
      bg: '#1e293b',
      panel: '#334155',
      border: '#475569',
      accent: '#f43f5e',
      footerBg: '#334155',
      dotColor: '#475569'
    },
    crimson: {
      name: 'الأحمر العميق',
      main: '#ffffff',
      text: '#ffffff',
      textSec: '#fecaca',
      bg: '#7f1d1d',
      panel: '#991b1b',
      border: '#b91c1c',
      accent: '#ffffff',
      footerBg: '#991b1b',
      dotColor: '#dc2626'
    },
    coffee: {
      name: 'القهوة الدافئة',
      main: '#d97706',
      text: '#451a03',
      textSec: '#92400e',
      bg: '#fff7ed',
      panel: '#ffedd5',
      border: '#fed7aa',
      accent: '#d97706',
      footerBg: '#ffedd5',
      dotColor: '#fdba74'
    }
  };

  const currentTheme = THEMES[data.theme as keyof typeof THEMES] || THEMES.white;


  const cardRef = useRef<HTMLDivElement>(null);

  const handleDownload = async () => {
    if (!cardRef.current) return;
    const canvas = await html2canvas(cardRef.current, {
      scale: 2,
      useCORS: true,
      backgroundColor: '#ffffff',
    });
    const image = canvas.toDataURL('image/png');
    const link = document.createElement('a');
    link.href = image;
    link.download = `${data.startupName}-factsheet.png`;
    link.click();
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setData({ ...data, [e.target.name]: e.target.value });
  };

  const inp = 'w-full p-2.5 bg-gray-50 border border-gray-200 rounded-lg focus:ring-2 focus:ring-red-500 focus:border-red-500 transition-all text-sm leading-relaxed';
  const inp2 = `${inp} resize-none`;

  const RED    = '#e32028';
  const CREAM  = '#fdf6ee';
  const BORDER = '#d1d5db';

  return (
    <div
      style={{
        display: 'flex',
        height: '100vh',
        width: '100vw',
        overflow: 'hidden',
        fontFamily: "'IBM Plex Sans Arabic', 'Segoe UI', sans-serif",
        direction: 'rtl',
        backgroundColor: '#f1f5f9',
      }}
    >

      {/* ════════════════════════════════
          RIGHT SIDEBAR — fixed editor
          ════════════════════════════════ */}
      <aside
        style={{
          width: 420,
          minWidth: 420,
          height: '100vh',
          backgroundColor: '#ffffff',
          borderLeft: '1px solid #e5e7eb',
          display: 'flex',
          flexDirection: 'column',
          overflow: 'hidden',
          boxShadow: '-4px 0 20px rgba(0,0,0,0.06)',
          zIndex: 10,
          flexShrink: 0,
        }}
      >
        {/* Sidebar Header */}
        <div
          style={{
            padding: '24px 28px 20px',
            borderBottom: '1px solid #f1f5f9',
            backgroundColor: '#fff',
          }}
        >
          <div style={{ display: 'flex', alignItems: 'center', gap: 12, marginBottom: 8 }}>
            <Settings size={22} color="#e32028" />
            <span style={{ fontWeight: 700, fontSize: 18, color: '#0f172a', letterSpacing: '-0.01em' }}>المحرر الاحترافي</span>
          </div>
          <p style={{ fontSize: 13, color: '#64748b', lineHeight: 1.5 }}>هنا يمكنك تخصيص محتوى البطاقة. استخدم Ctrl + − للرؤية الشاملة.</p>
        </div>

        {/* Download button */}
        <div style={{ padding: '12px 16px', borderBottom: '1px solid #f3f4f6' }}>
          <button
            onClick={handleDownload}
            style={{
              width: '100%',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              gap: 10,
              backgroundColor: RED,
              color: '#fff',
              border: 'none',
              borderRadius: 12,
              padding: '14px 0',
              fontWeight: 700,
              fontSize: 16,
              cursor: 'pointer',
              fontFamily: 'inherit',
            }}
          >
            <Download size={16} />
            تحميل الصورة (2×)
          </button>
        </div>

        {/* Fields scroll area */}
        <div style={{ flex: 1, overflowY: 'auto', padding: '16px' }}>

          <SideSection label="الترويسة">
            <SideField label="نص الشعار"       name="logoText"      value={data.logoText}      onChange={handleChange} cls={inp} />
            <SideField label="نص فاكت شيت"     name="factsheetText" value={data.factsheetText} onChange={handleChange} cls={inp} />
            <SideField label="شعار (سلوجن)"    name="slogan"        value={data.slogan}        onChange={handleChange} cls={inp} />
          </SideSection>

          <SideSection label="الثيم والتصميم">
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: 10 }}>
              {Object.entries(THEMES).map(([id, t]) => (
                <button
                  key={id}
                  onClick={() => setData({ ...data, theme: id })}
                  style={{
                    padding: '12px 8px',
                    border: data.theme === id ? `2px solid ${t.main}` : '1px solid #e2e8f0',
                    borderRadius: 12,
                    backgroundColor: t.bg,
                    color: t.text,
                    fontSize: 12,
                    fontWeight: 700,
                    cursor: 'pointer',
                    transition: 'all 0.2s',
                    textAlign: 'center',
                    boxShadow: data.theme === id ? '0 4px 12px rgba(0,0,0,0.1)' : 'none',
                    position: 'relative'
                  }}
                >
                  <div style={{ height: 6, width: 24, backgroundColor: t.main, borderRadius: 3, margin: '0 auto 6px' }} />
                  {t.name}
                  {data.theme === id && (
                    <div style={{ position: 'absolute', top: -4, right: -4, backgroundColor: t.main, color: '#fff', borderRadius: '50%', width: 16, height: 16, fontSize: 8, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>✓</div>
                  )}
                </button>
              ))}
            </div>
          </SideSection>

          <SideSection label="المعلومات الأساسية">
            <SideField label="اسم الشركة" name="startupName" value={data.startupName} onChange={handleChange} cls={inp} />
            <SideField label="الوصف"      name="description" value={data.description} onChange={handleChange} cls={inp} />
          </SideSection>

          <SideSection label="الأرقام">
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 8 }}>
              <SideField label="حجم التمويل"   name="fundingAmount"  value={data.fundingAmount}  onChange={handleChange} cls={inp} />
              <SideField label="سنة التأسيس"   name="foundedIn"      value={data.foundedIn}      onChange={handleChange} cls={inp} />
              <SideField label="المقر الرئيسي" name="headquarters"   value={data.headquarters}   onChange={handleChange} cls={inp} />
              <SideField label="القطاع"         name="sector"         value={data.sector}         onChange={handleChange} cls={inp} />
            </div>
          </SideSection>

          <SideSection label="اختيار الشعار">
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 10 }}>
              <button
                onClick={() => setData({ ...data, selectedLogo: '' })}
                style={{
                  padding: 8,
                  border: !data.selectedLogo ? `3px solid ${RED}` : '1px solid #e2e8f0',
                  borderRadius: 12,
                  backgroundColor: !data.selectedLogo ? '#fff5f5' : '#fff',
                  transition: 'all 0.2s',
                  cursor: 'pointer',
                  display: 'flex',
                  flexDirection: 'column',
                  alignItems: 'center',
                  justifyContent: 'center',
                  minHeight: 60,
                  position: 'relative',
                }}
              >
                <div style={{ fontSize: 10, fontWeight: 800, color: '#1a2e1a', border: '1px solid #1a2e1a', padding: '2px 4px', borderRadius: 4 }}>{data.logoText}</div>
                <span style={{ fontSize: 10, color: '#64748b', marginTop: 4 }}>افتراضي</span>
                {!data.selectedLogo && (
                  <div style={{ position: 'absolute', top: -5, right: -5, backgroundColor: RED, color: 'white', borderRadius: '50%', width: 20, height: 20, fontSize: 10, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>✓</div>
                )}
              </button>
              {[1, 2, 3, 4].map((num) => (
                <button
                  key={num}
                  onClick={() => setData({ ...data, selectedLogo: `/logooo/logo-${num}.png` })}
                  style={{
                    padding: 8,
                    border: data.selectedLogo === `/logooo/logo-${num}.png` ? `3px solid ${RED}` : '1px solid #e2e8f0',
                    borderRadius: 12,
                    backgroundColor: data.selectedLogo === `/logooo/logo-${num}.png` ? '#fff5f5' : '#fff',
                    transition: 'all 0.2s',
                    cursor: 'pointer',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    minHeight: 60,
                    position: 'relative',
                  }}
                  title={`Logo ${num}`}
                >
                  <img src={`/logooo/logo-${num}.png`} alt={`Logo ${num}`} style={{ height: 36, width: 'auto', objectFit: 'contain' }} />
                  {data.selectedLogo === `/logooo/logo-${num}.png` && (
                    <div style={{ position: 'absolute', top: -5, right: -5, backgroundColor: RED, color: 'white', borderRadius: '50%', width: 20, height: 20, fontSize: 10, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>✓</div>
                  )}
                </button>
              ))}
            </div>
          </SideSection>

            <SideTextArea label="أبرز المنافسين"  name="primaryCompetition" value={data.primaryCompetition} rows={2} onChange={handleChange} cls={inp2} />
          </SideSection>

        </div>
      </aside>

      {/* ════════════════════════════════
          MAIN CANVAS AREA — scrollable
          ════════════════════════════════ */}
      <main
        style={{
          flex: 1,
          overflowY: 'auto',
          overflowX: 'auto',
          /* dynamic grid background matching theme */
          backgroundImage: `radial-gradient(circle, ${currentTheme.dotColor} 1px, transparent 1px)`,
          backgroundSize: '32px 32px',
          backgroundColor: '#f8fafc',
          display: 'flex',
          alignItems: 'flex-start',
          justifyContent: 'center',
          padding: '80px 60px 120px',
        }}
      >

        {/* ════════════════════════════════
            INSTAGRAM STORY CARD 1080×1920
            ════════════════════════════════ */}
        <div
          ref={cardRef}
          dir="rtl"
          style={{
            width: 1080,
            minWidth: 1080,
            height: 1920,
            minHeight: 1920,
            backgroundColor: currentTheme.bg,
            fontFamily: "'IBM Plex Sans Arabic', 'Segoe UI', sans-serif",
            boxShadow: '0 32px 80px rgba(0,0,0,0.22)',
            display: 'flex',
            flexDirection: 'column',
            overflow: 'hidden',
            flexShrink: 0,
            borderRadius: 4,
            position: 'relative',
          }}
        >
          {/* Subtle background texture/pattern */}
          <div style={{ position: 'absolute', inset: 0, opacity: 0.1, pointerEvents: 'none', backgroundImage: 'radial-gradient(circle at 2px 2px, rgba(255,255,255,0.05) 1px, transparent 0)', backgroundSize: '40px 40px' }} />
          <div style={{ position: 'absolute', top: 0, left: 0, right: 0, height: 600, background: `linear-gradient(180deg, ${currentTheme.panel} 0%, transparent 100%)`, opacity: 0.5, pointerEvents: 'none' }} />

          {/* ① TOP BORDER */}
          <div style={{ height: 10, backgroundColor: currentTheme.main, flexShrink: 0, position: 'relative', zIndex: 2 }} />

          {/* ② HEADER: Logo + Slogan */}
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', padding: '72px 72px 60px', flexShrink: 0, position: 'relative', zIndex: 2 }}>
            {/* Logo Group */}
            <div style={{ display: 'flex', alignItems: 'center', gap: 20 }}>
              <div style={{ flexShrink: 0 }}>
                {data.selectedLogo ? (
                  <img 
                    src={data.selectedLogo} 
                    alt="Logo Icon" 
                    style={{ height: 100, width: 'auto', objectFit: 'contain', filter: currentTheme.text === '#ffffff' ? 'brightness(0) invert(1)' : 'none' }} 
                  />
                ) : (
                  <div style={{ width: 80, height: 80, color: currentTheme.main, display: 'flex', alignItems: 'center', justifyContent: 'center', border: `3px solid ${currentTheme.main}`, borderRadius: 20 }}>
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5" />
                    </svg>
                  </div>
                )}
              </div>

              <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-start', gap: 2 }}>
                <div style={{ fontSize: 56, fontWeight: 900, color: currentTheme.text, lineHeight: 1, whiteSpace: 'nowrap', textAlign: 'right' }}>
                  {data.logoText}
                </div>
                {data.slogan && (
                  <div style={{ fontSize: 30, fontWeight: 700, color: currentTheme.textSec, marginTop: 6, whiteSpace: 'nowrap', textAlign: 'right' }}>
                    {data.slogan}
                  </div>
                )}
              </div>
            </div>
            
            <h2 style={{ fontSize: 100, fontWeight: 900, color: currentTheme.main, fontStyle: 'italic', margin: 0 }}>{data.factsheetText}</h2>
          </div>

          <div style={{ height: 3, backgroundColor: currentTheme.main, margin: '0 72px', flexShrink: 0, opacity: 0.3 }} />

          {/* ③ COMPANY NAME + DESCRIPTION */}
          <div style={{ padding: '72px 72px 64px', flexShrink: 0, position: 'relative', zIndex: 2 }}>
            <div style={{ display: 'flex', alignItems: 'stretch', gap: 0 }}>
              <div style={{ width: 10, backgroundColor: currentTheme.main, borderRadius: 4, flexShrink: 0, marginLeft: 40 }} />
              <div>
                <h1 style={{ fontSize: 148, fontWeight: 900, color: currentTheme.main, lineHeight: 0.95, margin: 0 }}>{data.startupName}</h1>
                <p style={{ fontSize: 38, color: currentTheme.textSec, fontWeight: 500, marginTop: 32, lineHeight: 1.4 }}>{data.description}</p>
              </div>
            </div>
          </div>

          <div style={{ height: 2, backgroundColor: currentTheme.border, margin: '0 72px', flexShrink: 0, opacity: 0.2 }} />

          {/* ④ METRICS GRID */}
          <div style={{ margin: '0 72px', flexShrink: 0, position: 'relative', zIndex: 2 }}>
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', borderBottom: `2px solid ${currentTheme.border}` }}>
              <MetricCell label="حجم التمويل" value={data.fundingAmount} fs={80} border="left" theme={currentTheme} />
              <MetricCell label="سنة التأسيس" value={data.foundedIn}    fs={90} border="none" theme={currentTheme} />
            </div>
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr' }}>
              <MetricCell label="المقر الرئيسي" value={data.headquarters} fs={72} border="left" theme={currentTheme} />
              <MetricCell label="القطاع"         value={data.sector}      fs={68} border="none" theme={currentTheme} />
            </div>
          </div>

          {/* ⑤ BOTTOM PANEL */}
          <div style={{ flex: 1, backgroundColor: currentTheme.panel, display: 'flex', flexDirection: 'column', position: 'relative', zIndex: 2 }}>
            <div style={{ flex: 1, display: 'grid', gridTemplateColumns: '1fr 1fr', padding: '80px 72px 60px', gap: 0 }}>
              <div style={{ paddingLeft: 52, borderLeft: `2px solid ${currentTheme.border}` }}>
                <InfoBox label="أبرز المستثمرين" value={data.keyInvestors} theme={currentTheme} />
                <div style={{ marginTop: 80 }}>
                  <InfoBox label="أبرز المنافسين" value={data.primaryCompetition} theme={currentTheme} />
                </div>
              </div>
              <div style={{ paddingRight: 52 }}>
                <InfoBox label="المؤسسون" value={data.founders} theme={currentTheme} />
              </div>
            </div>

            {/* ⑥ FOOTER */}
            <div style={{ padding: '32px 72px 48px', borderTop: `1px solid ${currentTheme.border}`, display: 'flex', alignItems: 'center', justifyContent: 'space-between', backgroundColor: currentTheme.footerBg }}>
              <div style={{ fontSize: 24, fontWeight: 800, color: currentTheme.text, fontFamily: "'IBM Plex Sans Arabic', sans-serif" }}>منصة المستثمر الاقتصادية</div>
              <div style={{ fontSize: 24, fontWeight: 800, color: currentTheme.text, letterSpacing: '-0.02em', fontFamily: "'IBM Plex Sans Arabic', sans-serif" }}>al-investor.com</div>
            </div>
          </div>
 Name */}
              <div 
                className="footer-platform"
                style={{ 
                  display: 'flex', 
                  alignItems: 'center', 
                  gap: 16,
                  fontSize: 24, 
                  fontWeight: 800, 
                  color: '#1e293b',
                  fontFamily: "'IBM Plex Sans Arabic', sans-serif"
                }}
              >
                <span>منصة المستثمر الاقتصادية</span>
              </div>

              {/* Left Side: Domain */}
              <div 
                className="footer-domain"
                style={{ 
                  fontSize: 24, 
                  fontWeight: 800, 
                  color: '#1e293b', 
                  letterSpacing: '-0.02em',
                  fontFamily: "'IBM Plex Sans Arabic', sans-serif"
                }}
              >
                al-investor.com
              </div>
            </div>
          </div>

        </div>
        {/* ════ END CARD ════ */}

      </main>
    </div>
  );
}

/* ─────────────────── helpers ─────────────────── */

function MetricCell({ label, value, fs, border, theme }: { label: string; value: string; fs: number; border: 'left' | 'none'; theme: any }) {
  return (
    <div style={{
      padding: '64px 52px 64px 0',
      ...(border === 'left' ? { borderLeft: `2px solid ${theme.border}`, paddingLeft: 52, paddingRight: 0 } : { paddingRight: 52 }),
    }}>
      <p style={{ fontSize: 24, color: theme.textSec, fontWeight: 600, marginBottom: 14, letterSpacing: '0.06em' }}>
        {label}
      </p>
      <div style={{ 
        fontSize: fs, 
        fontWeight: 900, 
        color: theme.main, 
        lineHeight: 1.1, 
        letterSpacing: '-0.01em', 
        whiteSpace: 'nowrap',
        overflow: 'hidden',
        textOverflow: 'ellipsis'
      }}>
        {value}
      </div>
    </div>
  );
}

function InfoBox({ label, value, theme }: { label: string; value: string; theme: any }) {
  return (
    <div>
      <div style={{
        display: 'flex', alignItems: 'center', justifyContent: 'space-between',
        border: `1.5px solid ${theme.accent}`, borderRadius: 6, padding: '14px 20px',
        marginBottom: 18, backgroundColor: theme.bg,
      }}>
        <span style={{ fontSize: 26, fontWeight: 900, color: theme.accent, letterSpacing: '0.05em', textTransform: 'uppercase' }}>
          {label}
        </span>
        <span style={{ width: 16, height: 16, backgroundColor: theme.accent, display: 'inline-block', transform: 'rotate(45deg)', flexShrink: 0 }} />
      </div>
      <p style={{ fontSize: 32, color: theme.text, fontWeight: 500, lineHeight: 1.7, whiteSpace: 'pre-wrap' }}>
        {value}
      </p>
    </div>
  );
}

function SideSection({ label, children }: { label: string; children: React.ReactNode }) {
  return (
    <div style={{ marginBottom: 32 }}>
      <p style={{ fontSize: 12, fontWeight: 800, color: '#94a3b8', textTransform: 'uppercase', letterSpacing: '0.12em', marginBottom: 16 }}>
        {label}
      </p>
      <div style={{ display: 'flex', flexDirection: 'column', gap: 8 }}>
        {children}
      </div>
      <div style={{ height: 1, backgroundColor: '#f3f4f6', marginTop: 16 }} />
    </div>
  );
}

function SideField({ label, name, value, onChange, cls }: {
  label: string; name: string; value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void; cls: string;
}) {
  return (
    <div>
      <label style={{ display: 'block', fontSize: 13, fontWeight: 600, color: '#475569', marginBottom: 8 }}>{label}</label>
      <input type="text" name={name} value={value} onChange={onChange} className={cls} />
    </div>
  );
}

function SideTextArea({ label, name, value, onChange, rows, cls }: {
  label: string; name: string; value: string; rows: number;
  onChange: (e: React.ChangeEvent<HTMLTextAreaElement>) => void; cls: string;
}) {
  return (
    <div>
      <label style={{ display: 'block', fontSize: 12, fontWeight: 500, color: '#6b7280', marginBottom: 4 }}>{label}</label>
      <textarea name={name} value={value} onChange={onChange} rows={rows} className={cls} />
    </div>
  );
}
