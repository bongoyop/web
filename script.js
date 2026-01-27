:root {
  --bg: #06162f;        /* azul marino */
  --panel: #0b2346;     /* panel */
  --text: #eaf2ff;      /* texto principal */
  --muted: #b8c7e6;     /* texto secundario */
  --border: #163a6b;    /* borde */
  --shadow: rgba(0, 0, 0, 0.35);
}

* { box-sizing: border-box; }

body {
  margin: 0;
  min-height: 100vh;
  display: grid;
  place-items: center;
  background: radial-gradient(900px 500px at 30% 20%, #0d2d5a 0%, var(--bg) 55%);
  color: var(--text);
  font-family: system-ui, -apple-system, Segoe UI, Roboto, Arial, sans-serif;
}

.card {
  width: min(720px, calc(100% - 32px));
  background: linear-gradient(180deg, var(--panel), rgba(11,35,70,0.88));
  border: 1px solid var(--border);
  border-radius: 18px;
  padding: 22px 22px 18px;
  box-shadow: 0 18px 40px var(--shadow);
}

h1 {
  margin: 0 0 14px;
  font-size: 1.7rem;
  letter-spacing: 0.2px;
}

.ascii {
  margin: 0;
  padding: 18px 16px;
  background: rgba(0, 0, 0, 0.22);
  border: 1px solid rgba(255,255,255,0.08);
  border-radius: 14px;
  overflow: auto;
  font-family: ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, "Liberation Mono", monospace;
  font-size: 14px;
  line-height: 1.2;
  color: #d7e6ff;
}

button {
  margin-top: 14px;
  padding: 10px 14px;
  border: 1px solid rgba(255,255,255,0.14);
  border-radius: 12px;
  background: rgba(255,255,255,0.08);
  color: var(--text);
  cursor: pointer;
  font-weight: 600;
}

button:hover { background: rgba(255,255,255,0.12); }
button:active { transform: translateY(1px); }

.hint {
  margin: 10px 0 0;
  color: var(--muted);
  font-size: 0.95rem;
}
