/* Sivax Retención — Datos 100 % sintéticos con reglas reales de retención (sin datos reales ni instituciones reales) */
window.SIVAX_MOCK = (function () {
  const baseScenarios = {
    'todas|todas': {
      kpis: [
        { id: 'retencion', label: 'Retención 1.er año', value: '74,2 %', sub: 'Meta 68,0 % · +6,2 pp · 524 de 706 · Si se van en riesgo: 54,8 %', delta: '+1,8 pp', deltaGood: true, spark: [69.4, 70.1, 70.8, 71.2, 72.0, 72.6, 73.1, 73.8, 74.2] },
        { id: 'permanencia', label: 'Permanencia', value: '86,5 %', sub: '1.280 vigentes · 200 bajas informadas (retracto)', delta: '+0,9 pp', deltaGood: true, spark: [84.9, 85.1, 85.3, 85.5, 85.8, 86.0, 86.1, 86.3, 86.5] },
        { id: 'avance', label: 'Avance lista semanal', value: '76,7 %', sub: '23 de 30 gestionados (15 por sede · sem. 47)', delta: '+13,4 pp', deltaGood: true, spark: [46, 53, 57, 60, 63, 67, 70, 73, 76.7] },
        { id: 'singestion', label: 'Sin gestión 14 días', value: '18', sub: 'Prioridad 1 y 2 vigentes sin contacto efectivo', delta: '-6 casos', deltaGood: true, spark: [34, 31, 29, 28, 26, 25, 24, 21, 18] },
        { id: 'riesgoalto', label: 'Riesgo alto y crítico', value: '142', sub: '54 críticos · 88 altos (11,1 % de vigentes)', delta: '-9 casos', deltaGood: true, spark: [176, 171, 168, 164, 160, 155, 151, 147, 142] },
        { id: 'asistencia', label: 'Asistencia real', value: '81,4 %', sub: 'Promedio por clase (mín. 4 clases registradas)', delta: '-1,3 pp', deltaGood: false, spark: [84.2, 83.9, 83.5, 83.1, 82.8, 82.6, 82.2, 81.9, 81.4] }
      ],
      risk: [
        { name: 'Crítico', value: 54, key: 'critico' },
        { name: 'Alto', value: 88, key: 'alto' },
        { name: 'Medio', value: 196, key: 'medio' },
        { name: 'Bajo', value: 264, key: 'bajo' },
        { name: 'Sin riesgo', value: 642, key: 'sin_riesgo' },
        { name: 'Sin datos', value: 36, key: 'sin_datos' }
      ],
      weekly: { weeks: ['Sem 38', 'Sem 39', 'Sem 40', 'Sem 41', 'Sem 42', 'Sem 43', 'Sem 44', 'Sem 45', 'Sem 46', 'Sem 47'], values: [181, 176, 171, 168, 164, 160, 155, 151, 147, 142] },
      approval: [
        { carrera: 'Enfermería Técnica', tasa: 88.4 },
        { carrera: 'Administración de Empresas', tasa: 82.7 },
        { carrera: 'Logística y Operaciones', tasa: 79.1 },
        { carrera: 'Técnico en Informática', tasa: 74.6 },
        { carrera: 'Construcción Civil', tasa: 71.2 },
        { carrera: 'Electricidad Industrial', tasa: 67.8 }
      ]
    },
    'norte|todas': {
      kpis: [
        { id: 'retencion', label: 'Retención 1.er año', value: '76,1 %', sub: 'Meta 68,0 % · +8,1 pp · 286 de 376 · Si se van en riesgo: 59,0 %', delta: '+2,1 pp', deltaGood: true, spark: [71.0, 71.8, 72.5, 73.1, 73.9, 74.4, 75.0, 75.6, 76.1] },
        { id: 'permanencia', label: 'Permanencia', value: '88,0 %', sub: '686 vigentes · 94 bajas informadas', delta: '+1,1 pp', deltaGood: true, spark: [86.1, 86.4, 86.7, 86.9, 87.2, 87.4, 87.6, 87.8, 88.0] },
        { id: 'avance', label: 'Avance lista semanal', value: '86,7 %', sub: '13 de 15 gestionados (Sede Norte · sem. 47)', delta: '+20,0 pp', deltaGood: true, spark: [53, 60, 60, 67, 73, 73, 80, 80, 86.7] },
        { id: 'singestion', label: 'Sin gestión 14 días', value: '7', sub: 'Prioridad 1 y 2 vigentes sin contacto efectivo', delta: '-4 casos', deltaGood: true, spark: [16, 15, 14, 13, 12, 11, 10, 8, 7] },
        { id: 'riesgoalto', label: 'Riesgo alto y crítico', value: '64', sub: '23 críticos · 41 altos (9,3 % de vigentes)', delta: '-6 casos', deltaGood: true, spark: [82, 79, 77, 75, 73, 71, 69, 66, 64] },
        { id: 'asistencia', label: 'Asistencia real', value: '83,2 %', sub: 'Promedio por clase (Sede Norte)', delta: '-0,6 pp', deltaGood: false, spark: [84.9, 84.7, 84.5, 84.2, 84.0, 83.9, 83.6, 83.4, 83.2] }
      ],
      risk: [
        { name: 'Crítico', value: 23, key: 'critico' },
        { name: 'Alto', value: 41, key: 'alto' },
        { name: 'Medio', value: 102, key: 'medio' },
        { name: 'Bajo', value: 148, key: 'bajo' },
        { name: 'Sin riesgo', value: 354, key: 'sin_riesgo' },
        { name: 'Sin datos', value: 18, key: 'sin_datos' }
      ],
      weekly: { weeks: ['Sem 38', 'Sem 39', 'Sem 40', 'Sem 41', 'Sem 42', 'Sem 43', 'Sem 44', 'Sem 45', 'Sem 46', 'Sem 47'], values: [85, 82, 79, 77, 75, 73, 71, 69, 66, 64] },
      approval: [
        { carrera: 'Enfermería Técnica', tasa: 90.1 },
        { carrera: 'Administración de Empresas', tasa: 84.3 },
        { carrera: 'Logística y Operaciones', tasa: 81.2 },
        { carrera: 'Técnico en Informática', tasa: 76.5 },
        { carrera: 'Construcción Civil', tasa: 73.0 },
        { carrera: 'Electricidad Industrial', tasa: 70.4 }
      ]
    },
    'sur|todas': {
      kpis: [
        { id: 'retencion', label: 'Retención 1.er año', value: '72,1 %', sub: 'Meta 68,0 % · +4,1 pp · 238 de 330 · Si se van en riesgo: 50,0 %', delta: '+1,4 pp', deltaGood: true, spark: [67.8, 68.4, 69.0, 69.5, 70.1, 70.7, 71.1, 71.6, 72.1] },
        { id: 'permanencia', label: 'Permanencia', value: '84,9 %', sub: '594 vigentes · 106 bajas informadas', delta: '+0,6 pp', deltaGood: true, spark: [83.6, 83.8, 83.9, 84.1, 84.3, 84.4, 84.6, 84.7, 84.9] },
        { id: 'avance', label: 'Avance lista semanal', value: '66,7 %', sub: '10 de 15 gestionados (Sede Sur · sem. 47)', delta: '+6,7 pp', deltaGood: true, spark: [40, 47, 53, 53, 53, 60, 60, 67, 66.7] },
        { id: 'singestion', label: 'Sin gestión 14 días', value: '11', sub: 'Prioridad 1 y 2 vigentes sin contacto efectivo', delta: '-2 casos', deltaGood: true, spark: [18, 16, 15, 15, 14, 14, 14, 13, 11] },
        { id: 'riesgoalto', label: 'Riesgo alto y crítico', value: '78', sub: '31 críticos · 47 altos (13,1 % de vigentes)', delta: '-3 casos', deltaGood: true, spark: [94, 92, 91, 89, 87, 84, 82, 81, 78] },
        { id: 'asistencia', label: 'Asistencia real', value: '79,4 %', sub: 'Promedio por clase (Sede Sur)', delta: '-2,1 pp', deltaGood: false, spark: [83.4, 83.0, 82.4, 81.9, 81.5, 81.2, 80.7, 80.2, 79.4] }
      ],
      risk: [
        { name: 'Crítico', value: 31, key: 'critico' },
        { name: 'Alto', value: 47, key: 'alto' },
        { name: 'Medio', value: 94, key: 'medio' },
        { name: 'Bajo', value: 116, key: 'bajo' },
        { name: 'Sin riesgo', value: 288, key: 'sin_riesgo' },
        { name: 'Sin datos', value: 18, key: 'sin_datos' }
      ],
      weekly: { weeks: ['Sem 38', 'Sem 39', 'Sem 40', 'Sem 41', 'Sem 42', 'Sem 43', 'Sem 44', 'Sem 45', 'Sem 46', 'Sem 47'], values: [96, 94, 92, 91, 89, 87, 84, 82, 81, 78] },
      approval: [
        { carrera: 'Enfermería Técnica', tasa: 86.5 },
        { carrera: 'Administración de Empresas', tasa: 80.9 },
        { carrera: 'Logística y Operaciones', tasa: 76.8 },
        { carrera: 'Técnico en Informática', tasa: 72.4 },
        { carrera: 'Construcción Civil', tasa: 69.1 },
        { carrera: 'Electricidad Industrial', tasa: 65.0 }
      ]
    }
  };

  function getPanelData(sede, jornada) {
    const base = baseScenarios[sede + '|todas'] || baseScenarios['todas|todas'];
    if (!jornada || jornada === 'todas') return base;
    const factor = jornada === 'vespertina' ? 0.42 : 0.58;
    const shift = jornada === 'vespertina' ? -2.4 : 1.5;
    return {
      kpis: base.kpis.map(function (k) {
        const copy = Object.assign({}, k);
        if (k.id === 'retencion') copy.value = (parseFloat(k.value.replace(',', '.')) + shift).toFixed(1).replace('.', ',') + ' %';
        if (k.id === 'asistencia') copy.value = (parseFloat(k.value.replace(',', '.')) + (jornada === 'vespertina' ? -3.1 : 1.9)).toFixed(1).replace('.', ',') + ' %';
        if (k.id === 'riesgoalto' || k.id === 'singestion') copy.value = String(Math.max(2, Math.round(parseInt(k.value, 10) * factor)));
        copy.sub = copy.sub + ' · ' + (jornada === 'vespertina' ? 'Jornada Vespertina' : 'Jornada Diurna');
        return copy;
      }),
      risk: base.risk.map(function (r) { return { name: r.name, key: r.key, value: Math.max(1, Math.round(r.value * factor)) }; }),
      weekly: { weeks: base.weekly.weeks, values: base.weekly.values.map(function (v) { return Math.max(1, Math.round(v * factor)); }) },
      approval: base.approval.map(function (a) { return { carrera: a.carrera, tasa: Number(Math.min(96, Math.max(55, a.tasa + (jornada === 'vespertina' ? -2.2 : 1.4))).toFixed(1)) }; })
    };
  }

  const listaSemanal = [
    {
      id: 'est-101',
      enListaSemana: true,
      prioridad: 1,
      dia: 'Lunes',
      nombre: 'Camila Rojas Paredes',
      rut: '21.408.312-K',
      sede: 'Sede Sur',
      sedeKey: 'sur',
      carrera: 'Técnico en Informática',
      jornada: 'Diurna',
      jornadaKey: 'diurna',
      riesgo: 'Crítico',
      riesgoKey: 'critico',
      probML: 78,
      porQue: 'Faltó a 7 de 24 clases (29,2 %); promedio 3,4; 2 módulos bajo 4,0; 1 nota 1,0 sin rendir',
      queHacer: 'Contactar hoy: riesgo crítico e invitar a tutoría en INF-201',
      ultimoContacto: 'Sin contacto (18 d)',
      estadoGestion: 'pendiente',
      responsable: 'Felipe Lagos'
    },
    {
      id: 'est-102',
      enListaSemana: true,
      prioridad: 1,
      dia: 'Lunes',
      nombre: 'Matías Fuentes Contreras',
      rut: '20.914.605-3',
      sede: 'Sede Norte',
      sedeKey: 'norte',
      carrera: 'Electricidad Industrial',
      jornada: 'Vespertina',
      jornadaKey: 'vespertina',
      riesgo: 'Crítico',
      riesgoKey: 'critico',
      probML: 82,
      porQue: 'Faltó a 11 de 26 clases (42,3 %); promedio 3,6; 2 módulos bajo 4,0; 3 clases sin registro docente',
      queHacer: 'Contactar hoy: inasistencia vespertina sobre umbral 40 %',
      ultimoContacto: 'No contesta · 16-11',
      estadoGestion: 'pendiente',
      responsable: 'Paula Ríos'
    },
    {
      id: 'est-103',
      enListaSemana: true,
      prioridad: 1,
      dia: 'Lunes',
      nombre: 'Valentina Soto Herrera',
      rut: '21.782.190-5',
      sede: 'Sede Sur',
      sedeKey: 'sur',
      carrera: 'Construcción Civil',
      jornada: 'Diurna',
      jornadaKey: 'diurna',
      riesgo: 'Crítico',
      riesgoKey: 'critico',
      probML: 74,
      porQue: 'No rindió 2 evaluaciones sumativas (notas 1,0); asistencia 64 % en 22 clases',
      queHacer: 'Contactar: no rinde evaluaciones y verificar justificativo',
      ultimoContacto: 'Sin contacto (21 d)',
      estadoGestion: 'pendiente',
      responsable: 'Felipe Lagos'
    },
    {
      id: 'est-104',
      enListaSemana: true,
      prioridad: 2,
      dia: 'Martes',
      nombre: 'Sebastián Araya Muñoz',
      rut: '20.543.918-7',
      sede: 'Sede Norte',
      sedeKey: 'norte',
      carrera: 'Logística y Operaciones',
      jornada: 'Vespertina',
      jornadaKey: 'vespertina',
      riesgo: 'Alto',
      riesgoKey: 'alto',
      probML: 64,
      porQue: 'Faltó a 7 de 25 clases (28,0 %); 1 módulo bajo 4,0 (Álgebra Aplicada 3,6)',
      queHacer: 'Invitar a tutoría de Álgebra Aplicada (sección sobre 40 % reprobación)',
      ultimoContacto: 'Contacto efectivo · 19-11',
      estadoGestion: 'gestionado',
      responsable: 'Rodrigo Castro'
    },
    {
      id: 'est-105',
      enListaSemana: true,
      prioridad: 2,
      dia: 'Martes',
      nombre: 'Francisca Morales Díaz',
      rut: '21.119.442-1',
      sede: 'Sede Sur',
      sedeKey: 'sur',
      carrera: 'Administración de Empresas',
      jornada: 'Diurna',
      jornadaKey: 'diurna',
      riesgo: 'Alto',
      riesgoKey: 'alto',
      probML: 59,
      porQue: 'Faltó a 5 de 24 clases (20,8 %); promedio 4,1; 1 módulo con 3,8',
      queHacer: 'Seguimiento: riesgo alto por asistencia diurna (umbral 15 %)',
      ultimoContacto: 'No contesta · 14-11',
      estadoGestion: 'pendiente',
      responsable: 'Paula Ríos'
    },
    {
      id: 'est-106',
      enListaSemana: true,
      prioridad: 2,
      dia: 'Miércoles',
      nombre: 'Diego Valenzuela Silva',
      rut: '20.388.704-9',
      sede: 'Sede Norte',
      sedeKey: 'norte',
      carrera: 'Técnico en Informática',
      jornada: 'Diurna',
      jornadaKey: 'diurna',
      riesgo: 'Alto',
      riesgoKey: 'alto',
      probML: 61,
      porQue: 'Promedio 4,7 pero registra nota 1,0 sin rendir en Bases de Datos Relacionales',
      queHacer: 'Revisar: no rindió en un módulo y confirmar fecha recuperativa',
      ultimoContacto: 'Contacto efectivo · 20-11',
      estadoGestion: 'gestionado',
      responsable: 'Felipe Lagos'
    },
    {
      id: 'est-107',
      enListaSemana: true,
      prioridad: 3,
      dia: 'Jueves',
      nombre: 'Isidora Carrasco Vega',
      rut: '21.605.128-4',
      sede: 'Sede Norte',
      sedeKey: 'norte',
      carrera: 'Enfermería Técnica',
      jornada: 'Diurna',
      jornadaKey: 'diurna',
      riesgo: 'Medio',
      riesgoKey: 'medio',
      probML: 41,
      porQue: 'Faltó a 4 de 32 clases (12,5 %); promedio 4,8; asistencia en descenso últimos 14 días',
      queHacer: 'Seguimiento preventivo antes del cierre de prácticas clínicas',
      ultimoContacto: 'Contacto efectivo · 18-11',
      estadoGestion: 'gestionado',
      responsable: 'Rodrigo Castro'
    },
    {
      id: 'est-108',
      enListaSemana: true,
      prioridad: 3,
      dia: 'Jueves',
      nombre: 'Tomás Navarro Lagos',
      rut: '20.822.311-6',
      sede: 'Sede Sur',
      sedeKey: 'sur',
      carrera: 'Electricidad Industrial',
      jornada: 'Vespertina',
      jornadaKey: 'vespertina',
      riesgo: 'Medio',
      riesgoKey: 'medio',
      probML: 38,
      porQue: 'Faltó a 5 de 26 clases (19,2 %); promedio 4,5; sin contacto reciente',
      queHacer: 'Invitar a taller de reforzamiento en Circuitos II',
      ultimoContacto: 'Sin contacto (15 d)',
      estadoGestion: 'pendiente',
      responsable: 'Paula Ríos'
    },
    {
      id: 'est-109',
      enListaSemana: false,
      prioridad: 4,
      dia: 'Viernes',
      nombre: 'Antonia Pizarro Alarcón',
      rut: '21.290.517-2',
      sede: 'Sede Norte',
      sedeKey: 'norte',
      carrera: 'Administración de Empresas',
      jornada: 'Diurna',
      jornadaKey: 'diurna',
      riesgo: 'Bajo',
      riesgoKey: 'bajo',
      probML: 19,
      porQue: 'Asistencia 92 % (22 de 24 clases); promedio 5,4; mejora sostenida tras tutoría',
      queHacer: 'Sin acción esta semana (cerrar caso en próxima revisión)',
      ultimoContacto: 'Contacto efectivo · 21-11',
      estadoGestion: 'gestionado',
      responsable: 'Rodrigo Castro'
    }
  ];

  const fichas = {
    'est-101': {
      id: 'est-101',
      iniciales: 'CR',
      nombre: 'Camila Rojas Paredes',
      rut: '21.408.312-K',
      sede: 'Sede Sur',
      carrera: 'Técnico en Informática',
      jornada: 'Diurna',
      anioIngreso: 2026,
      periodoActual: '2026-2',
      estado: 'Vigente',
      telefono: '+56 9 •••• 1193',
      correo: 'camila.rojas.demo@institucion-ejemplo.cl',
      tutor: 'Felipe Lagos (Sede Sur)',
      riesgoFinal: 'Crítico',
      riesgoKey: 'critico',
      prioridad: 1,
      prioridadTexto: 'P1 · Atención inmediata',
      origenRiesgo: 'Asistencia y Notas',
      nivelAsistencia: 'Crítico (29,2 % inasistencia · umbral diurna 25 %)',
      nivelNotas: 'Alto (promedio 3,7 · 2 módulos bajo 4,0)',
      probML: 78,
      causalEstado: 'Cerca de causal: falta 1 módulo reprobado para superar el 50 % del periodo.',
      queHacer: 'Contactar hoy y derivar a tutoría de Programación I (INF-201) antes de la sumativa 3 del 29-11.',
      porQue: 'Faltó a 7 de 24 clases (29,2 %); promedio 3,7 en el semestre; 2 módulos bajo 4,0 y una nota 1,0 sin rendir en Bases de Datos.',
      causasML: [
        { factor: 'Inasistencia real en las últimas 4 semanas (29,2 % en jornada diurna)', impacto: '+31 pp', peso: 86, tipo: 'critico' },
        { factor: 'Dos módulos troncales bajo nota 4,0 en el periodo actual', impacto: '+24 pp', peso: 68, tipo: 'alto' },
        { factor: '18 días corridos sin contacto efectivo registrado', impacto: '+14 pp', peso: 42, tipo: 'medio' }
      ],
      resumenCurricular: { aprobados: 5, enCurso: 5, reprobados: 1, promedioHistorico: '4,6', asistenciaGlobal: '70,8 %' },
      modulos: [
        { codigo: 'INF-201', nombre: 'Programación I', seccion: 'S-01', alertaTutoria: true, estado: 'En curso', evaluaciones: 'S1: 3,2 · S2: 3,6 · S3: 29-11', promedio: '3,4', clases: '16/24 (2 just. · 1 s/r)', inasistencia: '29,2 %', riesgoKey: 'critico', queHacer: 'Invitar a tutoría (sección sobre 40 % reprobación)' },
        { codigo: 'INF-204', nombre: 'Bases de Datos Relacionales', seccion: 'S-02', alertaTutoria: true, estado: 'En curso', evaluaciones: 'S1: 4,2 · S2: 1,0 (NR)', promedio: '2,6', clases: '17/24 (1 just. · 0 s/r)', inasistencia: '25,0 %', riesgoKey: 'critico', queHacer: 'Verificar justificativo de evaluación no rendida (1,0)' },
        { codigo: 'MAT-112', nombre: 'Lógica y Álgebra Aplicada', seccion: 'S-01', alertaTutoria: false, estado: 'En curso', evaluaciones: 'S1: 4,1 · S2: 4,4', promedio: '4,3', clases: '20/24 (0 just. · 2 s/r)', inasistencia: '16,7 %', riesgoKey: 'medio', queHacer: 'Reforzar asistencia en bloque 08:30' },
        { codigo: 'INF-209', nombre: 'Redes y Sistemas Operativos', seccion: 'S-01', alertaTutoria: false, estado: 'En curso', evaluaciones: 'S1: 5,1 · S2: 5,4', promedio: '5,3', clases: '22/24 (0 just. · 0 s/r)', inasistencia: '8,3 %', riesgoKey: 'bajo', queHacer: 'Sin acción requerida' },
        { codigo: 'COM-105', nombre: 'Comunicación Técnica', seccion: 'S-03', alertaTutoria: false, estado: 'Cerrado', evaluaciones: 'Final: 5,6', promedio: '5,6', clases: '18/20 (1 just.)', inasistencia: '5,0 %', riesgoKey: 'bajo', queHacer: 'Módulo aprobado' }
      ],
      bitacora: [
        { fecha: '2026-11-21', hora: '11:30', categoria: 'cita', tipo: 'Cita de tutoría', estadoContacto: 'No asistió', estadoCaso: 'Abierto', responsable: 'Felipe Lagos', nota: 'No se presentó al bloque de reforzamiento de INF-201. Se agenda reintento telefónico para el lunes.' },
        { fecha: '2026-11-14', hora: '16:10', categoria: 'atencion', tipo: 'Llamada telefónica', estadoContacto: 'No contesta', estadoCaso: 'Abierto', responsable: 'Felipe Lagos', nota: 'Dos intentos telefónicos sin respuesta. Se envía recordatorio al correo institucional.' },
        { fecha: '2026-11-05', hora: '10:00', categoria: 'atencion', tipo: 'Atención presencial', estadoContacto: 'Contacto efectivo', estadoCaso: 'Abierto', responsable: 'Andrea Molina', nota: 'Indica dificultad de traslado en bloque 08:30 por turno laboral de fin de semana. Acepta tutoría.' },
        { fecha: '2026-10-22', hora: '15:00', categoria: 'cita', tipo: 'Derivación apoyo', estadoContacto: 'Realizada', estadoCaso: 'Abierto', responsable: 'Paula Ríos', nota: 'Planificación semanal de entregas y calendario de evaluaciones sumativas.' }
      ]
    },
    'est-102': {
      id: 'est-102',
      iniciales: 'MF',
      nombre: 'Matías Fuentes Contreras',
      rut: '20.914.605-3',
      sede: 'Sede Norte',
      carrera: 'Electricidad Industrial',
      jornada: 'Vespertina',
      anioIngreso: 2026,
      periodoActual: '2026-2',
      estado: 'Vigente',
      telefono: '+56 9 •••• 8820',
      correo: 'matias.fuentes.demo@institucion-ejemplo.cl',
      tutor: 'Paula Ríos (Sede Norte)',
      riesgoFinal: 'Crítico',
      riesgoKey: 'critico',
      prioridad: 1,
      prioridadTexto: 'P1 · Atención inmediata',
      origenRiesgo: 'Asistencia',
      nivelAsistencia: 'Crítico (42,3 % inasistencia · umbral vespertina 40 %)',
      nivelNotas: 'Alto (promedio 3,6 · 2 módulos bajo 4,0)',
      probML: 82,
      causalEstado: 'Sin causal activa aún, pero con riesgo de reprobación múltiple al cierre.',
      queHacer: 'Llamar hoy en horario vespertino para evaluar carga laboral y flexibilización de tutorías.',
      porQue: 'Faltó a 11 de 26 clases (42,3 %) en jornada vespertina; promedio 3,6 y último intento sin respuesta.',
      causasML: [
        { factor: 'Inasistencia vespertina sobre 40 % (11 de 26 clases ausente)', impacto: '+36 pp', peso: 92, tipo: 'critico' },
        { factor: 'Promedio acumulado 3,6 con 2 módulos bajo 4,0', impacto: '+22 pp', peso: 62, tipo: 'alto' },
        { factor: 'Último intento telefónico sin respuesta (16-11)', impacto: '+11 pp', peso: 36, tipo: 'medio' }
      ],
      resumenCurricular: { aprobados: 4, enCurso: 4, reprobados: 2, promedioHistorico: '4,2', asistenciaGlobal: '57,7 %' },
      modulos: [
        { codigo: 'ELE-202', nombre: 'Circuitos Eléctricos II', seccion: 'V-01', alertaTutoria: true, estado: 'En curso', evaluaciones: 'S1: 3,3 · S2: 3,5', promedio: '3,4', clases: '14/26 (1 just. · 3 s/r)', inasistencia: '42,3 %', riesgoKey: 'critico', queHacer: 'Invitar a taller práctico vespertino' },
        { codigo: 'ELE-208', nombre: 'Instalaciones Industriales', seccion: 'V-01', alertaTutoria: true, estado: 'En curso', evaluaciones: 'S1: 3,8 · S2: 3,7', promedio: '3,8', clases: '15/26 (0 just.)', inasistencia: '42,3 %', riesgoKey: 'critico', queHacer: 'Contactar docente por asistencia de laboratorio' },
        { codigo: 'MAT-108', nombre: 'Matemática Aplicada', seccion: 'V-02', alertaTutoria: false, estado: 'En curso', evaluaciones: 'S1: 4,4 · S2: 4,6', promedio: '4,5', clases: '18/24 (1 just.)', inasistencia: '20,8 %', riesgoKey: 'bajo', queHacer: 'Sin acción requerida' }
      ],
      bitacora: [
        { fecha: '2026-11-16', hora: '19:40', categoria: 'atencion', tipo: 'Llamada telefónica', estadoContacto: 'No contesta', estadoCaso: 'Abierto', responsable: 'Paula Ríos', nota: 'Sin respuesta en bloque vespertino; se reintenta mañana antes de las 18:30.' },
        { fecha: '2026-10-28', hora: '18:15', categoria: 'atencion', tipo: 'Llamada telefónica', estadoContacto: 'Contacto efectivo', estadoCaso: 'Abierto', responsable: 'Paula Ríos', nota: 'Comenta horas extras en empresa contratista durante octubre.' }
      ]
    },
    'est-104': {
      id: 'est-104',
      iniciales: 'SA',
      nombre: 'Sebastián Araya Muñoz',
      rut: '20.543.918-7',
      sede: 'Sede Norte',
      carrera: 'Logística y Operaciones',
      jornada: 'Vespertina',
      anioIngreso: 2025,
      periodoActual: '2026-2',
      estado: 'Vigente',
      telefono: '+56 9 •••• 4451',
      correo: 'sebastian.araya.demo@institucion-ejemplo.cl',
      tutor: 'Rodrigo Castro (Sede Norte)',
      riesgoFinal: 'Alto',
      riesgoKey: 'alto',
      prioridad: 2,
      prioridadTexto: 'P2 · Seguimiento prioritario',
      origenRiesgo: 'Notas',
      nivelAsistencia: 'Alto (28,0 % inasistencia · umbral vespertina 25 %)',
      nivelNotas: 'Alto (1 módulo bajo 4,0)',
      probML: 64,
      causalEstado: 'No está cerca de una causal de eliminación.',
      queHacer: 'Confirmar asistencia a tutoría de Álgebra Aplicada agendada para el 26-11.',
      porQue: 'Promedio general 4,4 pero reprueba Álgebra Aplicada (3,6) y registra 28 % de inasistencia vespertina.',
      causasML: [
        { factor: 'Promedio 3,6 en Álgebra Aplicada con sección sobre 40 % reprobación', impacto: '+28 pp', peso: 76, tipo: 'alto' },
        { factor: 'Inasistencia acumulada de 28,0 % en jornada vespertina', impacto: '+19 pp', peso: 52, tipo: 'alto' },
        { factor: 'Dos inasistencias consecutivas en laboratorio de inventario', impacto: '+9 pp', peso: 28, tipo: 'medio' }
      ],
      resumenCurricular: { aprobados: 11, enCurso: 4, reprobados: 1, promedioHistorico: '4,9', asistenciaGlobal: '72,0 %' },
      modulos: [
        { codigo: 'MAT-115', nombre: 'Álgebra Aplicada', seccion: 'V-01', alertaTutoria: true, estado: 'En curso', evaluaciones: 'S1: 3,4 · S2: 3,8', promedio: '3,6', clases: '18/25 (0 just.)', inasistencia: '28,0 %', riesgoKey: 'alto', queHacer: 'Confirmar asistencia a tutoría grupal' },
        { codigo: 'LOG-301', nombre: 'Gestión de Inventarios', seccion: 'V-01', alertaTutoria: false, estado: 'En curso', evaluaciones: 'S1: 5,2 · S2: 5,0', promedio: '5,1', clases: '21/25 (1 just.)', inasistencia: '12,0 %', riesgoKey: 'bajo', queHacer: 'Sin acción requerida' }
      ],
      bitacora: [
        { fecha: '2026-11-19', hora: '19:10', categoria: 'atencion', tipo: 'Llamada telefónica', estadoContacto: 'Contacto efectivo', estadoCaso: 'Abierto', responsable: 'Rodrigo Castro', nota: 'Confirma asistencia a tutoría de Álgebra Aplicada el jueves 26.' }
      ]
    }
  };

  return {
    getPanelData: getPanelData,
    listaSemanal: listaSemanal,
    fichas: fichas,
    fichaEstudiante: fichas['est-101']
  };
})();
