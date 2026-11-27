/* Sivax Retención — Tema Claro/Oscuro, pestañas, modales y formularios interactivos */
window.SIVAX_UI = (function () {
  const THEME_KEY = 'sivax-maqueta-theme';

  function getTheme() {
    const param = new URLSearchParams(window.location.search).get('theme');
    if (param === 'dark' || param === 'light') return param;
    try {
      const saved = localStorage.getItem(THEME_KEY);
      if (saved === 'dark' || saved === 'light') return saved;
    } catch (e) {}
    return 'light';
  }

  function applyTheme(theme) {
    const isDark = theme === 'dark';
    document.documentElement.classList.toggle('dark', isDark);
    document.documentElement.setAttribute('data-theme', theme);
    try { localStorage.setItem(THEME_KEY, theme); } catch (e) {}
    document.querySelectorAll('[data-theme-label]').forEach(function (el) {
      el.textContent = isDark ? 'Modo claro' : 'Modo oscuro';
    });
    window.dispatchEvent(new CustomEvent('sivax:theme', { detail: { isDark: isDark } }));
  }

  function toggleTheme() {
    const next = document.documentElement.classList.contains('dark') ? 'light' : 'dark';
    applyTheme(next);
  }

  function initTheme() {
    applyTheme(getTheme());
    document.querySelectorAll('[data-toggle-theme]').forEach(function (btn) {
      btn.addEventListener('click', toggleTheme);
    });
  }

  function riskBadgeClass(key) {
    if (key === 'critico') return 'bg-red-500/10 text-red-700 dark:text-red-300 border border-red-500/30';
    if (key === 'alto') return 'bg-orange-500/10 text-orange-700 dark:text-orange-300 border border-orange-500/30';
    if (key === 'medio') return 'bg-amber-500/15 text-amber-800 dark:text-amber-300 border border-amber-500/30';
    return 'bg-emerald-500/10 text-emerald-700 dark:text-emerald-300 border border-emerald-500/30';
  }

  function riskDotClass(key) {
    if (key === 'critico') return 'bg-red-600 dark:bg-red-400';
    if (key === 'alto') return 'bg-orange-600 dark:bg-orange-400';
    if (key === 'medio') return 'bg-amber-500 dark:bg-amber-400';
    return 'bg-emerald-600 dark:bg-emerald-400';
  }

  function priorityBadge(p) {
    const map = {
      1: { label: 'P1', cls: 'bg-red-600 text-white dark:bg-red-500/25 dark:text-red-200 dark:border dark:border-red-400/40' },
      2: { label: 'P2', cls: 'bg-orange-600/15 text-orange-800 dark:bg-orange-500/20 dark:text-orange-200 border border-orange-500/30' },
      3: { label: 'P3', cls: 'bg-amber-500/15 text-amber-800 dark:bg-amber-500/20 dark:text-amber-200 border border-amber-500/30' },
      4: { label: 'P4', cls: 'bg-slate-500/10 text-slate-700 dark:bg-white/10 dark:text-slate-300 border border-slate-400/25' }
    };
    return map[p] || map[4];
  }

  function initTabs() {
    const btns = document.querySelectorAll('[data-tab-btn]');
    const panels = document.querySelectorAll('[data-tab-panel]');
    if (!btns.length) return;
    btns.forEach(function (btn) {
      btn.addEventListener('click', function () {
        const target = btn.getAttribute('data-tab-btn');
        btns.forEach(function (b) {
          const active = b.getAttribute('data-tab-btn') === target;
          b.setAttribute('aria-selected', String(active));
          b.classList.toggle('is-active', active);
        });
        panels.forEach(function (p) {
          p.classList.toggle('hidden', p.getAttribute('data-tab-panel') !== target);
        });
      });
    });
  }

  function initModal(onSave) {
    const modal = document.getElementById('modal-atencion');
    if (!modal) return { open: function () {} };
    const nameEl = modal.querySelector('[data-modal-student]');
    const form = modal.querySelector('form');
    let currentId = null;

    function close() {
      modal.classList.add('hidden');
      currentId = null;
    }

    modal.querySelectorAll('[data-close-modal]').forEach(function (el) {
      el.addEventListener('click', close);
    });
    modal.addEventListener('click', function (e) {
      if (e.target === modal) close();
    });
    document.addEventListener('keydown', function (e) {
      if (e.key === 'Escape' && !modal.classList.contains('hidden')) close();
    });

    if (form) {
      form.addEventListener('submit', function (e) {
        e.preventDefault();
        const fd = new FormData(form);
        if (onSave && currentId) {
          onSave(currentId, {
            tipo: fd.get('tipo'),
            estadoContacto: fd.get('estado_contacto'),
            estadoCaso: fd.get('estado_caso'),
            nota: fd.get('nota')
          });
        }
        form.reset();
        close();
      });
    }

    return {
      open: function (student) {
        currentId = student.id;
        if (nameEl) nameEl.textContent = student.nombre + ' · ' + student.rut;
        modal.classList.remove('hidden');
      }
    };
  }

  function initQuickForms(getStudent, renderTimeline) {
    const attForm = document.getElementById('form-atencion-rapida');
    const citaForm = document.getElementById('form-cita-rapida');
    const toast = document.getElementById('ficha-toast');

    function showToast(msg) {
      if (!toast) return;
      toast.textContent = msg;
      toast.classList.remove('hidden');
      clearTimeout(toast._t);
      toast._t = setTimeout(function () { toast.classList.add('hidden'); }, 3200);
    }

    if (attForm) {
      attForm.addEventListener('submit', function (e) {
        e.preventDefault();
        const fd = new FormData(attForm);
        const st = getStudent();
        st.bitacora.unshift({
          fecha: '2026-11-23',
          hora: 'Ahora',
          categoria: 'atencion',
          tipo: fd.get('tipo') || 'Llamada telefónica',
          estadoContacto: fd.get('estado_contacto') || 'Contacto efectivo',
          estadoCaso: fd.get('estado_caso') || 'Abierto',
          responsable: 'Coord. Andrea Molina',
          nota: fd.get('nota') || 'Gestión registrada desde acciones rápidas.'
        });
        attForm.reset();
        if (renderTimeline) renderTimeline();
        showToast('Atención agregada a la bitácora de ' + st.nombre + '.');
      });
    }

    if (citaForm) {
      citaForm.addEventListener('submit', function (e) {
        e.preventDefault();
        const fd = new FormData(citaForm);
        const st = getStudent();
        st.bitacora.unshift({
          fecha: String(fd.get('fecha') || '26-11-2026').split('-').reverse().join('-'),
          hora: fd.get('hora') || '10:30',
          categoria: 'cita',
          tipo: 'Cita agendada',
          estadoContacto: 'Agendada',
          estadoCaso: 'Abierto',
          responsable: st.tutor.split(' (')[0],
          nota: fd.get('motivo') || 'Sesión de seguimiento académico.'
        });
        citaForm.reset();
        if (renderTimeline) renderTimeline();
        showToast('Cita agendada en la bitácora de ' + st.nombre + '.');
      });
    }
  }

  return {
    initTheme: initTheme,
    toggleTheme: toggleTheme,
    riskBadgeClass: riskBadgeClass,
    riskDotClass: riskDotClass,
    priorityBadge: priorityBadge,
    initTabs: initTabs,
    initModal: initModal,
    initQuickForms: initQuickForms
  };
})();
