import React, { useState, useEffect, useRef } from 'react';

const ChatWidget = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState([]);
  const [inputValue, setInputValue] = useState('');
  const [captureMode, setCaptureMode] = useState(false);
  const [chatHistory, setChatHistory] = useState([]);
  const messageAreaRef = useRef(null);

  const API_KEY = import.meta.env.VITE_GEMINI_KEY;
  const API_URL = `https://generativelanguage.googleapis.com/v1beta/models/gemma-3-4b-it:generateContent?key=${API_KEY}`;

  // PERSONALIDAD REFORZADA: No pedir datos a menos que sea explícito.
  const PERSONALIDAD = "Eres el asistente de Gensite. Responde dudas sobre desarrollo web y automatización. NO pidas datos personales (nombre/email) al principio. SOLO si el usuario dice palabras clave como 'contratar', 'presupuesto', 'contacto' o 'reunión', ahí sí pide Nombre y Email y agrega al final el código [CAPTURE_LEAD]. El resto del tiempo, solo charla de forma profesional.";

  useEffect(() => {
    if (isOpen && messages.length === 0) {
      const welcomeMsg = { 
        role: 'model', 
        text: '¡Hola! 👋 Bienvenido a Gensite. ¿En qué puedo ayudarte hoy?',
        isWelcome: true 
      };
      setMessages([welcomeMsg]);
      setChatHistory([
        { role: "user", parts: [{ text: PERSONALIDAD }] },
        { role: "model", parts: [{ text: "Entendido, seré un asistente informativo y solo pediré datos cuando sea necesario." }] }
      ]);
    }
  }, [isOpen]);

  useEffect(() => {
    if (messageAreaRef.current) {
      messageAreaRef.current.scrollTop = messageAreaRef.current.scrollHeight;
    }
  }, [messages]);

  const sendMessage = async (textOverride) => {
    const text = textOverride || inputValue.trim();
    if (!text) return;

    // Si el formulario ya está visible, bloqueamos nuevos mensajes hasta que lo complete o cancele
    if (captureMode && !textOverride) return;

    const newMessages = [...messages, { role: 'user', text }];
    setMessages(newMessages);
    setInputValue('');

    const updatedHistory = [...chatHistory, { role: "user", parts: [{ text }] }];

    try {
      const response = await fetch(API_URL, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ contents: updatedHistory })
      });

      const data = await response.json();
      const botText = data.candidates[0].content.parts[0].text;

      // Solo activamos captureMode si la IA incluyó el código especial
      if (botText.includes('[CAPTURE_LEAD]')) {
        setMessages(prev => [...prev, { role: 'model', text: botText.replace('[CAPTURE_LEAD]', ''), isForm: true }]);
        setCaptureMode(true);
      } else {
        setMessages(prev => [...prev, { role: 'model', text: botText }]);
        setChatHistory([...updatedHistory, { role: "model", parts: [{ text: botText }] }]);
      }
    } catch (e) {
      setMessages(prev => [...prev, { role: 'model', text: "Error de conexión." }]);
    }
  };

  return (
    <div style={styles.widgetContainer}>
      {isOpen && (
        <div style={styles.chatWindow}>
          <div style={styles.header}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
              <div style={styles.avatarCircle}>🤖</div>
              <div>
                <div style={{ fontWeight: '600', fontSize: '14px', color: '#f8fafc' }}>Asistente Gensite</div>
                <div style={{ fontSize: '11px', color: '#10b981' }}>● En línea</div>
              </div>
            </div>
            <button onClick={() => setIsOpen(false)} style={styles.closeBtn}>✕</button>
          </div>

          <div ref={messageAreaRef} style={styles.messageArea}>
            {messages.map((m, i) => (
              <div key={i} style={m.role === 'user' ? styles.userMsg : styles.botMsg}>
                <div dangerouslySetInnerHTML={{ __html: m.text.replace(/\n/g, '<br>') }} />
                {m.isWelcome && (
                  <div style={styles.quickReplieCol}>
                    <button onClick={() => sendMessage("¿Qué servicios ofrecen?")} style={styles.quickBtn}>🌐 Ver servicios</button>
                    <button onClick={() => sendMessage("Quiero contactar a un asesor")} style={styles.quickBtn}>📩 Quiero contratar/contactar</button>
                  </div>
                )}
                {m.isForm && (
                   <div style={styles.formContainer}>
                      <input id="f_name" placeholder="Tu Nombre" style={styles.inputForm}/>
                      <input id="f_mail" placeholder="Tu Email" style={styles.inputForm}/>
                      <button onClick={() => {
                        setCaptureMode(false);
                        setMessages(prev => [...prev, {role:'model', text: '¡Excelente! Ya recibimos tus datos.'}]);
                      }} style={styles.submitBtn}>Enviar datos</button>
                      <button onClick={() => setCaptureMode(false)} style={{background:'none', border:'none', color:'#94a3b8', fontSize:'10px', marginTop:'5px', cursor:'pointer'}}>Cancelar</button>
                   </div>
                )}
              </div>
            ))}
          </div>

          <div style={styles.inputArea}>
            <input 
              value={inputValue}
              onChange={(e) => setInputValue(e.target.value)}
              onKeyDown={(e) => { if(e.key === 'Enter') sendMessage(); }}
              placeholder={captureMode ? "Completá el formulario..." : "Escribí tu consulta..."}
              disabled={captureMode}
              style={styles.mainInput}
            />
          </div>
        </div>
      )}

      <button onClick={() => setIsOpen(!isOpen)} style={styles.chatButton}>
        <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="#fff" strokeWidth="2">
          <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"/>
        </svg>
      </button>
    </div>
  );
};

const styles = {
  widgetContainer: { position: 'fixed', bottom: '24px', right: '24px', zIndex: 99999, display: 'flex', flexDirection: 'column', alignItems: 'flex-end', fontFamily: "'DM Sans', sans-serif" },
  chatButton: { width: '60px', height: '60px', borderRadius: '50%', background: 'linear-gradient(135deg, #2563ff 0%, #1a3460 100%)', border: 'none', cursor: 'pointer', boxShadow: '0 8px 32px rgba(10, 22, 40, 0.5)', display: 'flex', justifyContent: 'center', alignItems: 'center' },
  chatWindow: { width: '360px', height: '520px', background: '#0a1628', borderRadius: '20px', display: 'flex', flexDirection: 'column', marginBottom: '12px', border: '1px solid rgba(37, 99, 255, 0.25)', overflow: 'hidden', boxShadow: '0 32px 80px rgba(10, 22, 40, 0.8)' },
  header: { padding: '16px 20px', background: '#112240', display: 'flex', justifyContent: 'space-between', alignItems: 'center' },
  avatarCircle: { width: '38px', height: '38px', borderRadius: '50%', background: '#2563ff', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '18px' },
  closeBtn: { background: 'none', border: 'none', color: 'white', cursor: 'pointer', fontSize: '18px' },
  messageArea: { flexGrow: 1, padding: '16px', overflowY: 'auto', display: 'flex', flexDirection: 'column', gap: '10px' },
  userMsg: { alignSelf: 'flex-end', background: '#2563ff', color: 'white', padding: '10px 14px', borderRadius: '16px 16px 4px 16px', maxWidth: '82%', fontSize: '13.5px' },
  botMsg: { alignSelf: 'flex-start', background: '#112240', color: '#cbd5e1', padding: '10px 14px', borderRadius: '16px 16px 16px 4px', maxWidth: '82%', fontSize: '13.5px' },
  inputArea: { padding: '12px 16px', background: '#112240' },
  mainInput: { width: '100%', background: 'rgba(255,255,255,0.05)', border: '1px solid rgba(37, 99, 255, 0.2)', borderRadius: '12px', padding: '10px 14px', color: 'white', outline: 'none' },
  quickReplieCol: { marginTop: '10px', display: 'flex', flexDirection: 'column', gap: '7px' },
  quickBtn: { background: 'rgba(37, 99, 255, 0.1)', border: '1px solid #2563ff', color: '#60a5fa', padding: '8px', borderRadius: '8px', cursor: 'pointer', textAlign: 'left', fontSize: '12px' },
  formContainer: { marginTop: '10px', display: 'flex', flexDirection: 'column', gap: '8px', background: 'rgba(255,255,255,0.03)', padding: '10px', borderRadius: '12px' },
  inputForm: { width: '100%', padding: '10px', borderRadius: '8px', border: '1px solid rgba(37, 99, 255, 0.3)', background: '#0a1628', color: 'white', fontSize: '13px' },
  submitBtn: { width: '100%', padding: '10px', background: '#2563ff', color: 'white', border: 'none', borderRadius: '8px', cursor: 'pointer', fontWeight: '600' }
};

export default ChatWidget;