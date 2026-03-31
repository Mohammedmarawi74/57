import React, { useState, useRef } from 'react';
import html2canvas from 'html2canvas';
import { toPng } from 'html-to-image';
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
    theme: 'navyLight', // Updated default theme
  });

  const THEMES = {
    // --- 4 New Navy Day Variations ---
    navyLight: {
      name: 'كحلي كلاسيك (نهاري)',
      main: '#1e3a8a', mainText: '#1e3a8a', text: '#0f172a', textSec: '#475569',
      bg: '#ffffff', panel: '#f8fafc', border: '#e2e8f0', accent: '#1e3a8a', footerBg: '#f8fafc', dotColor: '#cbd5e1',
      isDark: false
    },
    navySky: {
      name: 'كحلي سماوي (نهاري)',
      main: '#0369a1', mainText: '#0369a1', text: '#0c4a6e', textSec: '#334155',
      bg: '#f0f9ff', panel: '#e0f2fe', border: '#bae6fd', accent: '#0ea5e9', footerBg: '#e0f2fe', dotColor: '#bae6fd',
      isDark: false
    },
    navyGold: {
      name: 'كحلي وذهبي (فاخر)',
      main: '#1e1b4b', mainText: '#1e1b4b', text: '#1e1b4b', textSec: '#475569',
      bg: '#ffffff', panel: '#fffcf0', border: '#fde68a', accent: '#b45309', footerBg: '#fffcf0', dotColor: '#e5e7eb',
      isDark: false
    },
    navyMinimal: {
      name: 'كحلي مينيمال (بسيط)',
      main: '#1e293b', mainText: '#1e293b', text: '#1e293b', textSec: '#64748b',
      bg: '#ffffff', panel: '#f1f5f9', border: '#cbd5e1', accent: '#1e293b', footerBg: '#f1f5f9', dotColor: '#e2e8f0',
      isDark: false
    },
    // --- Old Professional Themes (Restored) ---
    white: {
      name: 'الأبيض النقي',
      main: '#e32028', mainText: '#e32028', text: '#111827', textSec: '#4b5563',
      bg: '#ffffff', panel: '#fdf6ee', border: '#d1d5db', accent: '#e32028', footerBg: '#fdf6ee', dotColor: '#cbd5e1',
      isDark: false
    },
    navyDark: {
      name: 'الكحلي الملكي (ليل)',
      main: '#38bdf8', mainText: '#38bdf8', text: '#f8fafc', textSec: '#94a3b8',
      bg: '#0f172a', panel: '#1e293b', border: '#334155', accent: '#38bdf8', footerBg: '#1e293b', dotColor: '#334155',
      isDark: true
    },
    emeraldDark: {
      name: 'الأخضر الفاخر (ليل)',
      main: '#10b981', mainText: '#10b981', text: '#f0fdf4', textSec: '#6dbd9f',
      bg: '#064e3b', panel: '#065f46', border: '#047857', accent: '#10b981', footerBg: '#065f46', dotColor: '#047857',
      isDark: true
    },
    slateDark: {
      name: 'الرمادي العصري (ليل)',
      main: '#f43f5e', mainText: '#f43f5e', text: '#f8fafc', textSec: '#94a3b8',
      bg: '#1e293b', panel: '#334155', border: '#475569', accent: '#f43f5e', footerBg: '#334155', dotColor: '#475569',
      isDark: true
    },
    crimsonDark: {
      name: 'الأحمر العميق (ليل)',
      main: '#ffffff', mainText: '#ffffff', text: '#ffffff', textSec: '#fecaca',
      bg: '#7f1d1d', panel: '#991b1b', border: '#b91c1c', accent: '#ffffff', footerBg: '#991b1b', dotColor: '#dc2626',
      isDark: true
    },
    coffee: {
      name: 'القهوة الدافئة',
      main: '#d97706', mainText: '#d97706', text: '#451a03', textSec: '#92400e',
      bg: '#fff7ed', panel: '#ffedd5', border: '#fed7aa', accent: '#d97706', footerBg: '#ffedd5', dotColor: '#fdba74',
      isDark: false
    }
  };

  const currentTheme = THEMES[data.theme as keyof typeof THEMES] || THEMES.navyLight;

  const cardRef = useRef<HTMLDivElement>(null);

  const handleDownload = async () => {
    if (!cardRef.current) return;
    try {
      /* Wait a tiny bit to ensure all SVG/Images are ready */
      const dataUrl = await toPng(cardRef.current, { 
        cacheBust: true,
        pixelRatio: 2.5,
        backgroundColor: currentTheme.bg,
        style: {
          transform: 'scale(1)',
        }
      });
      const link = document.createElement('a');
      link.download = `${data.startupName}-factsheet.png`;
      link.href = dataUrl;
      link.click();
    } catch (err) {
      console.error('oops, something went wrong!', err);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setData({ ...data, [e.target.name]: e.target.value });
  };

  const inp = 'w-full p-2.5 bg-gray-50 border border-gray-200 rounded-lg focus:ring-2 focus:ring-red-500 focus:border-red-500 transition-all text-sm leading-relaxed';
  const inp2 = `${inp} resize-none`;

  const RED    = '#e32028';

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

      {/* Sidebar */}
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
        <div style={{ padding: '24px 28px 20px', borderBottom: '1px solid #f1f5f9', backgroundColor: '#fff' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: 12, marginBottom: 8 }}>
            <Settings size={22} color="#e32028" />
            <span style={{ fontWeight: 700, fontSize: 18, color: '#0f172a' }}>المحرر الاحترافي</span>
          </div>
          <p style={{ fontSize: 13, color: '#64748b' }}>خصص محتوى البطاقة واختر الثيم المناسب.</p>
        </div>

        <div style={{ padding: '12px 16px', borderBottom: '1px solid #f3f4f6' }}>
          <button onClick={handleDownload} style={{ width: '100%', display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 10, backgroundColor: RED, color: '#fff', border: 'none', borderRadius: 12, padding: '14px 0', fontWeight: 700, fontSize: 16, cursor: 'pointer' }}>
            <Download size={16} /> تحميل الصورة (2×)
          </button>
        </div>

        <div style={{ flex: 1, overflowY: 'auto', padding: '16px' }}>
          <SideSection label="الترويسة">
            <SideField label="نص الشعار"       name="logoText"      value={data.logoText}      onChange={handleChange} cls={inp} />
            <SideField label="شعار (سلوجن)"    name="slogan"        value={data.slogan}        onChange={handleChange} cls={inp} />
          </SideSection>

          <SideSection label="الثيم والتصميم">
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: 10 }}>
              {Object.entries(THEMES).map(([id, t]) => (
                <button
                  key={id}
                  onClick={() => setData({ ...data, theme: id })}
                  style={{
                    padding: '12px 8px', border: data.theme === id ? `2px solid ${t.main}` : '1px solid #e2e8f0', borderRadius: 12, backgroundColor: t.bg, color: t.text, fontSize: 12, fontWeight: 700, cursor: 'pointer', transition: 'all 0.2s', textAlign: 'center', position: 'relative'
                  }}
                >
                  <div style={{ height: 6, width: 24, backgroundColor: t.main, borderRadius: 3, margin: '0 auto 6px' }} />
                  {t.name}
                  {data.theme === id && <div style={{ position: 'absolute', top: -4, right: -4, backgroundColor: t.main, color: '#fff', borderRadius: '50%', width: 16, height: 16, fontSize: 8, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>✓</div>}
                </button>
              ))}
            </div>
          </SideSection>

          <SideSection label="اختيار الشعار">
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 10 }}>
              <button
                onClick={() => setData({ ...data, selectedLogo: '' })}
                style={{ padding: 8, border: !data.selectedLogo ? `3px solid ${RED}` : '1px solid #e2e8f0', borderRadius: 12, backgroundColor: '#fff', cursor: 'pointer', position: 'relative', minHeight: 60 }}
              >
                <div style={{ fontSize: 10, fontWeight: 800 }}>LOGO</div>
                <span style={{ fontSize: 10, color: '#64748b' }}>افتراضي</span>
              </button>
              {[1, 2, 3, 4].map((num) => (
                <button
                  key={num}
                  onClick={() => setData({ ...data, selectedLogo: `/logooo/logo-${num}.png` })}
                  style={{ padding: 8, border: data.selectedLogo === `/logooo/logo-${num}.png` ? `3px solid ${RED}` : '1px solid #e2e8f0', borderRadius: 12, cursor: 'pointer', position: 'relative', minHeight: 60 }}
                >
                  <img src={`/logooo/logo-${num}.png`} alt={`Logo ${num}`} style={{ height: 36, width: 'auto', objectFit: 'contain' }} />
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

          <SideSection label="التفاصيل">
            <SideTextArea label="أبرز المستثمرين" name="keyInvestors"       value={data.keyInvestors}       rows={2} onChange={handleChange} cls={inp2} />
            <SideTextArea label="المؤسسون"         name="founders"           value={data.founders}           rows={3} onChange={handleChange} cls={inp2} />
            <SideTextArea label="أبرز المنافسين"  name="primaryCompetition" value={data.primaryCompetition} rows={2} onChange={handleChange} cls={inp2} />
          </SideSection>
        </div>
      </aside>

      {/* Main Canvas Area */}
      <main style={{ flex: 1, overflow: 'auto', backgroundImage: `radial-gradient(circle, ${currentTheme.dotColor} 1px, transparent 1px)`, backgroundSize: '32px 32px', backgroundColor: '#f8fafc', display: 'flex', alignItems: 'flex-start', justifyContent: 'center', padding: '80px 60px' }}>
        <div ref={cardRef} dir="rtl" style={{ width: 1080, height: 1920, backgroundColor: currentTheme.bg, boxShadow: '0 32px 80px rgba(0,0,0,0.22)', display: 'flex', flexDirection: 'column', overflow: 'hidden', position: 'relative' }}>
          
          {/* Background Effects */}
          <div style={{ position: 'absolute', inset: 0, opacity: 0.1, backgroundImage: `radial-gradient(circle at 2px 2px, ${currentTheme.dotColor} 1px, transparent 0)`, backgroundSize: '40px 40px' }} />
          <div style={{ position: 'absolute', top: 0, left: 0, right: 0, height: 600, background: `linear-gradient(180deg, ${currentTheme.panel} 20%, ${currentTheme.bg} 100%)`, opacity: 0.8 }} />

          <div style={{ height: 12, backgroundColor: currentTheme.main, position: 'relative', zIndex: 10 }} />

          {/* Header */}
          <div style={{ display: 'flex', alignItems: 'center', padding: '80px 72px 40px', position: 'relative', zIndex: 10 }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: 24 }}>
              {data.selectedLogo ? (
                <img src={data.selectedLogo} alt="Logo" style={{ height: 110, width: 'auto', filter: currentTheme.isDark ? 'brightness(0) invert(1)' : 'none' }} />
              ) : (
                <div style={{ width: 90, height: 90, border: `4px solid ${currentTheme.main}`, borderRadius: 20, display: 'flex', alignItems: 'center', justifyContent: 'center', color: currentTheme.main, fontSize: 32, fontWeight: 900 }}>{data.logoText[0]}</div>
              )}
              <div style={{ textAlign: 'right' }}>
                <div style={{ fontSize: 56, fontWeight: 900, color: currentTheme.text, lineHeight: 1 }}>{data.logoText}</div>
                <div style={{ fontSize: 30, fontWeight: 700, color: currentTheme.textSec, marginTop: 8 }}>{data.slogan}</div>
              </div>
            </div>
          </div>

          {/* Hero Section */}
          <div style={{ padding: '60px 72px', position: 'relative', zIndex: 10 }}>
             <div style={{ display: 'flex', gap: 40 }}>
                <div style={{ width: 12, backgroundColor: currentTheme.main, borderRadius: 6 }} />
                <div>
                   <h1 style={{ fontSize: 154, fontWeight: 900, color: currentTheme.main, lineHeight: 0.9, margin: 0 }}>{data.startupName}</h1>
                   <p style={{ fontSize: 42, color: currentTheme.textSec, marginTop: 24, fontWeight: 500 }}>{data.description}</p>
                </div>
             </div>
          </div>

          <div style={{ height: 2, backgroundColor: currentTheme.border, margin: '0 72px', opacity: 0.3 }} />

          {/* Metrics */}
          <div style={{ padding: '40px 72px', display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 0, position: 'relative', zIndex: 10 }}>
            <MetricCell label="حجم التمويل" value={data.fundingAmount} fs={84} border="left" theme={currentTheme} />
            <MetricCell label="سنة التأسيس" value={data.foundedIn} fs={84} border="none" theme={currentTheme} />
            <MetricCell label="المقر الرئيسي" value={data.headquarters} fs={72} border="left" theme={currentTheme} />
            <MetricCell label="القطاع" value={data.sector} fs={72} border="none" theme={currentTheme} />
          </div>

          {/* Details Panel */}
          <div style={{ flex: 1, backgroundColor: currentTheme.panel, margin: '40px 0 0', padding: '80px 72px', display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 60, position: 'relative', zIndex: 10 }}>
            <div style={{ borderLeft: `2px solid ${currentTheme.border}`, paddingLeft: 60 }}>
              <InfoBox label="أبرز المستثمرين" value={data.keyInvestors} theme={currentTheme} />
              <div style={{ marginTop: 80 }}>
                <InfoBox label="أبرز المنافسين" value={data.primaryCompetition} theme={currentTheme} />
              </div>
            </div>
            <div>
              <InfoBox label="المؤسسون" value={data.founders} theme={currentTheme} />
            </div>
          </div>

          {/* Footer */}
          <div style={{ padding: '48px 72px 64px', backgroundColor: currentTheme.footerBg, borderTop: `1px solid ${currentTheme.border}`, display: 'flex', justifyContent: 'space-between', alignItems: 'center', position: 'relative', zIndex: 10 }}>
            <div style={{ fontSize: 26, fontWeight: 900, color: currentTheme.text }}>منصة المستثمر الاقتصادية</div>
            <div style={{ fontSize: 26, fontWeight: 900, color: currentTheme.text }}>al-investor.com</div>
          </div>

        </div>
      </main>
    </div>
  );
}

/* ─────────────────── Helpers ─────────────────── */

function MetricCell({ label, value, fs, border, theme }: any) {
  return (
    <div style={{ padding: '40px 0', borderLeft: border === 'left' ? `2px solid ${theme.border}` : 'none', paddingLeft: border === 'left' ? 40 : 0, paddingRight: border === 'left' ? 0 : 40 }}>
      <div style={{ fontSize: 24, fontWeight: 700, color: theme.textSec, marginBottom: 12 }}>{label}</div>
      <div style={{ fontSize: fs, fontWeight: 900, color: theme.main, lineHeight: 1 }}>{value}</div>
    </div>
  );
}

function InfoBox({ label, value, theme }: any) {
  return (
    <div style={{ marginBottom: 40 }}>
      <div style={{ display: 'flex', alignItems: 'center', gap: 12, marginBottom: 20 }}>
        <div style={{ width: 12, height: 12, backgroundColor: theme.accent, transform: 'rotate(45deg)' }} />
        <div style={{ fontSize: 28, fontWeight: 900, color: theme.accent, textTransform: 'uppercase' }}>{label}</div>
      </div>
      <div style={{ fontSize: 34, color: theme.text, fontWeight: 500, lineHeight: 1.6, whiteSpace: 'pre-wrap' }}>{value}</div>
    </div>
  );
}

function SideSection({ label, children }: any) {
  return (
    <div style={{ marginBottom: 32 }}>
      <div style={{ fontSize: 12, fontWeight: 800, color: '#94a3b8', textTransform: 'uppercase', marginBottom: 16 }}>{label}</div>
      <div style={{ display: 'flex', flexDirection: 'column', gap: 12 }}>{children}</div>
    </div>
  );
}

function SideField({ label, name, value, onChange, cls }: any) {
  return (
     <div>
        <label style={{ display: 'block', fontSize: 13, fontWeight: 600, color: '#4b5563', marginBottom: 6 }}>{label}</label>
        <input type="text" name={name} value={value} onChange={onChange} className={cls} />
     </div>
  );
}

function SideTextArea({ label, name, value, onChange, rows, cls }: any) {
  return (
     <div>
        <label style={{ display: 'block', fontSize: 13, fontWeight: 600, color: '#4b5563', marginBottom: 6 }}>{label}</label>
        <textarea name={name} value={value} onChange={onChange} rows={rows} className={cls} />
     </div>
  );
}
