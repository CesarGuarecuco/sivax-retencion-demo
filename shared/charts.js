/* Sivax Retención — Renderizado de gráficos Apache ECharts (Claro y Oscuro) */
window.SIVAX_CHARTS = (function () {
  const instances = [];

  function palette(isDark) {
    return {
      text: isDark ? '#f3f2fb' : '#111322',
      muted: isDark ? '#b3add4' : '#52586c',
      grid: isDark ? 'rgba(255,255,255,0.09)' : 'rgba(15,23,42,0.08)',
      tooltipBg: isDark ? '#26165c' : '#ffffff',
      tooltipBorder: isDark ? 'rgba(139,124,246,0.40)' : 'rgba(15,23,42,0.14)',
      brand: isDark ? '#8b7cf6' : '#2d1b8f',
      risk: {
        critico: isDark ? '#f87171' : '#dc2626',
        alto: isDark ? '#fb923c' : '#ea580c',
        medio: isDark ? '#facc15' : '#ca8a04',
        bajo: isDark ? '#4ade80' : '#15803d',
        sin_riesgo: isDark ? '#5b5480' : '#c9cdd8',
        sin_datos: isDark ? '#3a3360' : '#e3e6ee'
      }
    };
  }

  function clearAll() {
    while (instances.length) {
      const inst = instances.pop();
      try { inst.dispose(); } catch (e) {}
    }
  }

  function renderSparklines(kpis, isDark) {
    const p = palette(isDark);
    document.querySelectorAll('[data-spark]').forEach(function (el) {
      const id = el.getAttribute('data-spark');
      const kpi = kpis.find(function (k) { return k.id === id; });
      if (!kpi || !window.echarts || el.clientWidth === 0) return;
      const chart = echarts.init(el);
      instances.push(chart);
      const color = kpi.deltaGood ? p.brand : p.risk.critico;
      chart.setOption({
        animationDuration: 300,
        grid: { left: 2, right: 2, top: 4, bottom: 2 },
        xAxis: { type: 'category', show: false, data: kpi.spark.map(function (_, i) { return i; }) },
        yAxis: { type: 'value', show: false, min: 'dataMin', max: 'dataMax' },
        tooltip: {
          trigger: 'axis',
          confine: true,
          backgroundColor: p.tooltipBg,
          borderColor: p.tooltipBorder,
          borderWidth: 1,
          padding: [4, 8],
          textStyle: { color: p.text, fontFamily: 'IBM Plex Mono, monospace', fontSize: 11 },
          formatter: function (params) {
            return params && params[0] ? String(params[0].value).replace('.', ',') : '';
          }
        },
        series: [{
          type: 'line',
          data: kpi.spark,
          smooth: 0.35,
          showSymbol: false,
          lineStyle: { color: color, width: 2 },
          areaStyle: {
            color: {
              type: 'linear', x: 0, y: 0, x2: 0, y2: 1,
              colorStops: [
                { offset: 0, color: kpi.deltaGood ? (isDark ? 'rgba(139,124,246,0.32)' : 'rgba(45,27,143,0.16)') : (isDark ? 'rgba(248,113,113,0.28)' : 'rgba(220,38,38,0.14)') },
                { offset: 1, color: 'rgba(0,0,0,0)' }
              ]
            }
          }
        }]
      });
    });
  }

  function renderPanelCharts(sedeKey, jornadaKey, isDark) {
    if (!window.echarts) return;
    requestAnimationFrame(function () {
      clearAll();
      const p = palette(isDark);
      const pack = window.SIVAX_MOCK.getPanelData(sedeKey, jornadaKey);
      renderSparklines(pack.kpis, isDark);

      const elRisk = document.getElementById('chart-risk');
      if (elRisk && elRisk.clientWidth > 0) {
        const narrowRisk = elRisk.clientWidth < 400;
        const chart = echarts.init(elRisk);
        instances.push(chart);
        chart.setOption({
          animationDuration: 350,
          grid: { left: 8, right: 12, top: 24, bottom: narrowRisk ? 32 : 24, containLabel: true },
          tooltip: {
            trigger: 'axis',
            axisPointer: { type: 'shadow' },
            backgroundColor: p.tooltipBg,
            borderColor: p.tooltipBorder,
            borderWidth: 1,
            textStyle: { color: p.text, fontFamily: 'Source Sans 3, sans-serif', fontSize: 12 },
            formatter: function (params) {
              const it = params[0];
              return it.name + '<br/><strong style="font-family:IBM Plex Mono,monospace">' + it.value + '</strong> estudiantes';
            }
          },
          xAxis: {
            type: 'category',
            data: pack.risk.map(function (d) { return d.name; }),
            axisLine: { lineStyle: { color: p.grid } },
            axisTick: { show: false },
            axisLabel: {
              color: p.muted,
              fontFamily: 'Source Sans 3, sans-serif',
              fontSize: narrowRisk ? 10.5 : 11,
              interval: 0,
              lineHeight: 13,
              formatter: function (val) { return narrowRisk ? val.replace(' ', '\n') : val; }
            }
          },
          yAxis: {
            type: 'value',
            splitLine: { lineStyle: { color: p.grid } },
            axisLabel: { color: p.muted, fontFamily: 'IBM Plex Mono, monospace', fontSize: 11 }
          },
          series: [{
            type: 'bar',
            barMaxWidth: 34,
            label: {
              show: true,
              position: 'top',
              color: p.muted,
              fontFamily: 'IBM Plex Mono, monospace',
              fontSize: 11
            },
            data: pack.risk.map(function (d) {
              return { value: d.value, itemStyle: { color: p.risk[d.key], borderRadius: [4, 4, 0, 0] } };
            })
          }]
        });
      }

      const elWeekly = document.getElementById('chart-weekly');
      if (elWeekly && elWeekly.clientWidth > 0) {
        const chart = echarts.init(elWeekly);
        instances.push(chart);
        chart.setOption({
          animationDuration: 350,
          grid: { left: 10, right: 18, top: 24, bottom: 24, containLabel: true },
          tooltip: {
            trigger: 'axis',
            backgroundColor: p.tooltipBg,
            borderColor: p.tooltipBorder,
            borderWidth: 1,
            textStyle: { color: p.text, fontFamily: 'Source Sans 3, sans-serif', fontSize: 12 },
            formatter: function (params) {
              const it = params[0];
              return it.name + '<br/><strong style="font-family:IBM Plex Mono,monospace">' + it.value + '</strong> en riesgo crítico o alto';
            }
          },
          xAxis: {
            type: 'category',
            boundaryGap: false,
            data: pack.weekly.weeks,
            axisLine: { lineStyle: { color: p.grid } },
            axisTick: { show: false },
            axisLabel: { color: p.muted, fontFamily: 'IBM Plex Mono, monospace', fontSize: 10 }
          },
          yAxis: {
            type: 'value',
            min: function (v) { return Math.max(0, Math.floor((v.min - 12) / 10) * 10); },
            splitLine: { lineStyle: { color: p.grid } },
            axisLabel: { color: p.muted, fontFamily: 'IBM Plex Mono, monospace', fontSize: 11 }
          },
          series: [{
            name: 'Riesgo alto y crítico',
            type: 'line',
            smooth: 0.25,
            symbol: 'circle',
            symbolSize: 6,
            data: pack.weekly.values,
            itemStyle: { color: p.risk.alto },
            lineStyle: { color: p.risk.alto, width: 2.2 },
            areaStyle: {
              color: {
                type: 'linear', x: 0, y: 0, x2: 0, y2: 1,
                colorStops: [
                  { offset: 0, color: isDark ? 'rgba(251,146,60,0.24)' : 'rgba(234,88,12,0.14)' },
                  { offset: 1, color: 'rgba(0,0,0,0)' }
                ]
              }
            }
          }]
        });
      }

      const elApp = document.getElementById('chart-approval');
      if (elApp && elApp.clientWidth > 0) {
        const chart = echarts.init(elApp);
        instances.push(chart);
        chart.setOption({
          animationDuration: 350,
          grid: { left: 10, right: 44, top: 28, bottom: 20, containLabel: true },
          tooltip: {
            trigger: 'axis',
            axisPointer: { type: 'shadow' },
            backgroundColor: p.tooltipBg,
            borderColor: p.tooltipBorder,
            borderWidth: 1,
            textStyle: { color: p.text, fontFamily: 'Source Sans 3, sans-serif', fontSize: 12 },
            formatter: function (params) {
              const it = params[0];
              return it.name + '<br/><strong style="font-family:IBM Plex Mono,monospace">' + String(it.value).replace('.', ',') + ' %</strong> aprobación';
            }
          },
          xAxis: {
            type: 'value',
            min: 50,
            max: 100,
            splitLine: { lineStyle: { color: p.grid } },
            axisLabel: { color: p.muted, fontFamily: 'IBM Plex Mono, monospace', fontSize: 11, formatter: '{value}%' }
          },
          yAxis: {
            type: 'category',
            inverse: true,
            data: pack.approval.map(function (a) { return a.carrera; }),
            axisLine: { show: false },
            axisTick: { show: false },
            axisLabel: { color: p.text, fontFamily: 'Source Sans 3, sans-serif', fontSize: 12 }
          },
          series: [{
            type: 'bar',
            barMaxWidth: 18,
            label: {
              show: true,
              position: 'right',
              color: p.muted,
              fontFamily: 'IBM Plex Mono, monospace',
              fontSize: 11,
              formatter: function (par) { return String(par.value).replace('.', ',') + '%'; }
            },
            data: pack.approval.map(function (a) {
              const col = a.tasa < 70 ? p.risk.critico : a.tasa < 75 ? p.risk.alto : p.brand;
              return { value: a.tasa, itemStyle: { color: col, borderRadius: [0, 4, 4, 0] } };
            }),
            markLine: {
              symbol: 'none',
              silent: true,
              lineStyle: { color: p.muted, type: 'dashed', width: 1 },
              label: { position: 'start', distance: 6, formatter: 'Ref. 75%', color: p.muted, fontFamily: 'IBM Plex Mono, monospace', fontSize: 10 },
              data: [{ xAxis: 75 }]
            }
          }]
        });
      }
    });
  }

  window.addEventListener('resize', function () {
    instances.forEach(function (c) { try { c.resize(); } catch (e) {} });
  });

  return { renderPanelCharts: renderPanelCharts };
})();
