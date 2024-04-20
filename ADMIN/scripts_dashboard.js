// Objeto que contiene las etiquetas para días, semanas y meses
const etiquetas = {
  dia: ['Lunes', 'Martes', 'Miércoles', 'Jueves', 'Viernes', 'Sábado', 'Domingo'],
  semana: ['Semana 1', 'Semana 2', 'Semana 3', 'Semana 4'],
  mes: ['Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio', 'Julio', 'Agosto', 'Septiembre', 'Octubre', 'Noviembre', 'Diciembre']
};

const tiposIncidencia = {
  incidencias : ['Hurto','Discriminación','Disturbios','Vandalismo','Drogas','Extorsión','Secuestro','Acoso','Fraudes','Violación','Homicidio','Ruido','Otros']
}
const urbanizaciones = {
  urbanizacion : ['San Miguelito','Udima','Pershing','Miramar','San Luis','Maranga','German Astete','Pando']
}
//Maranga Etapa 7-Etapa 8 es Pando
// Función para actualizar las gráficas con datos según el periodo seleccionado
function actualizarDatos(selectedPeriod) {
  let newData = [];
  let newData2 = [];
  let listabarra = [];
  let arreglopastel = [];
  let arregloUrba = [];
  // Generar datos de prueba según el periodo seleccionado
  if (selectedPeriod === 'mes') {
    newData = [30, 40, 45, 55, 60,30, 40, 45, 55, 60,30, 40]; // Datos para un mes
    newData2 = [10, 20, 30, 40, 50,10, 20, 30, 40, 50,10, 20];
    listabarra = [10, 20, 30, 40, 50,10, 20, 30, 40, 50,10, 20,25];
    arreglopastel = [40,35,25];
    arregloUrba = [50, 60,70,40,35,40,50, 60];
    areaChart.updateOptions({ xaxis: { categories: etiquetas.mes } }); // Actualizar etiquetas del eje X
    barChart.updateOptions({ xaxis: { categories: tiposIncidencia.incidencias } }); 
  } else if (selectedPeriod === 'semana') {
    newData = [8, 12, 10, 15]; // Datos para una semana
    newData2 = [2, 10, 8, 5];
    listabarra = [8, 18, 25, 20, 25,9, 10, 20, 20, 28,10, 15,18];
    arreglopastel = [60,30,10];
    arregloUrba = [30, 20,10,30,20,15,25, 30,];
    areaChart.updateOptions({ xaxis: { categories: etiquetas.semana } }); // Actualizar etiquetas del eje X
    barChart.updateOptions({ xaxis: { categories: tiposIncidencia.incidencias } }); 
  } else if (selectedPeriod === 'dia') {
    newData = [2, 3, 5, 4, 6,2, 3]; // Datos para un día
    newData2 = [0, 1, 2, 3, 4,2, 3];
    listabarra = [2,14, 10, 2, 12,5, 7, 17, 15, 10,8, 13,11]
    arreglopastel = [10,40,50];
    arregloUrba = [20, 10,8,13,10,13,13, 15];
    areaChart.updateOptions({ xaxis: { categories: etiquetas.dia } }); // Actualizar etiquetas del eje X
    barChart.updateOptions({ xaxis: { categories: tiposIncidencia.incidencias } }); 
  }

  // Actualizar datos de la gráfica de barras
  barChart.updateSeries([{ data: listabarra }]);

  // Actualizar datos de la gráfica de área
  areaChart.updateSeries([
    { name: 'Casos resueltos', data: newData },
    { name: 'Casos pendientes', data: newData2 }
  ]);

  // Actualizar datos de la gráfica de barras 2
  barChart2.updateSeries([{ data: arregloUrba }]);

  // Actualizar datos de la gráfica de pastel
  pieChart.updateSeries(arreglopastel);
}

// Evento de cambio de periodo
const periodSelect = document.getElementById('period');
periodSelect.addEventListener('change', function() {
  const selectedPeriod = periodSelect.value;
  actualizarDatos(selectedPeriod);
});

// ---------- CHARTS ----------

// BAR CHART
const barChartOptions = {
  series: [
    {
      data:[10, 20, 30, 40, 50,10, 20, 30, 40, 50,10, 20,25] ,
      name: 'Tipos incidencias de la semana',
    },
  ],
  chart: {
    type: 'bar',
    background: 'transparent',
    height: 350,
    toolbar: {
      show: false,
    },
  },
  colors: ['#2962ff', '#d50000', '#2e7d32', '#ff6d00', '#583cb3'],
  plotOptions: {
    bar: {
      distributed: true,
      borderRadius: 4,
      horizontal: false,
      columnWidth: '40%',
    },
  },
  dataLabels: {
    enabled: false,
  },
  fill: {
    opacity: 1,
  },
  grid: {
    borderColor: '#55596e',
    yaxis: {
      lines: {
        show: true,
      },
    },
    xaxis: {
      lines: {
        show: true,
      },
    },
  },
  legend: {
    labels: {
      colors: '#f5f7ff',
    },
    show: true,
    position: 'top',
  },
  stroke: {
    colors: ['transparent'],
    show: true,
    width: 2,
  },
  tooltip: {
    shared: true,
    intersect: false,
    theme: 'dark',
  },
  xaxis: {
    
    categories: ['Hurto','Discriminación','Disturbios','Vandalismo','Drogas','Extorsión','Secuestro','Acoso','Fraudes','Violación','Homicidio','Ruido','Otros'],
    title: {
      style: {
        color: '#f5f7ff',
      },
    },
    axisBorder: {
      show: true,
      color: '#55596e',
    },
    axisTicks: {
      show: true,
      color: '#55596e',
    },
    labels: {
      style: {
        colors: '#f5f7ff',
      },
    },
  },
  yaxis: {
    title: {
      text: '',
      style: {
        color: '#f5f7ff',
      },
    },
    axisBorder: {
      color: '#55596e',
      show: true,
    },
    axisTicks: {
      color: '#55596e',
      show: true,
    },
    labels: {
      style: {
        colors: '#f5f7ff',
      },
    },
  },
};

const barChart = new ApexCharts(
  document.querySelector('#bar-chart'),
  barChartOptions
);
barChart.render();


// AREA CHART
const areaChartOptions = {
  series: [
    {
      name: 'Casos resueltos',
      data: [30, 40, 45, 55, 60,30, 40, 45, 55, 60,55, 60,],
    },
    {
      name: 'Casos pendientes',
      data: [10, 20, 30, 40, 50,10, 20, 30, 40, 50,10, 20],
    },
  ],
  chart: {
    type: 'area',
    background: 'transparent',
    height: 350,
    stacked: false,
    toolbar: {
      show: false,
    },
  },
  colors: ['#00ab57', '#d50000'],
  labels: etiquetas.mes, // Cambiado a utilizar etiquetas de meses por defecto
  
  dataLabels: {
    enabled: false,
  },
  fill: {
    gradient: {
      opacityFrom: 0.4,
      opacityTo: 0.1,
      shadeIntensity: 1,
      stops: [0, 100],
      type: 'vertical',
    },
    type: 'gradient',
  },
  grid: {
    borderColor: '#55596e',
    yaxis: {
      lines: {
        show: true,
      },
    },
    xaxis: {
      lines: {
        show: true,
      },
    },
  },
  legend: {
    labels: {
      colors: '#f5f7ff',
    },
    show: true,
    position: 'top',
  },
  markers: {
    size: 6,
    strokeColors: '#1b2635',
    strokeWidth: 3,
  },
  stroke: {
    curve: 'smooth',
  },
  xaxis: {
    axisBorder: {
      color: '#55596e',
      show: true,
    },
    axisTicks: {
      color: '#55596e',
      show: true,
    },
    labels: {
      offsetY: 5,
      style: {
        colors: '#f5f7ff',
      },
    }, 
  },
  yaxis: [
    {
      title: {
        text: 'Número de incidencias por caso',
        style: {
          color: '#f5f7ff',
        },
      },
      labels: {
        style: {
          colors: ['#f5f7ff'],
        },
      },
    },
   
  ],
  tooltip: {
    theme: 'dark',
  },
};

const areaChart = new ApexCharts(
  document.querySelector('#area-chart'),
  areaChartOptions
);
areaChart.render();


// BAR CHART 2
const barChart2Options = {
  series: [
    {
      data: [50, 60,70,40,35,40,50, 60],
      name: 'Tipos incidencias del mes',
    },
  ],
  chart: {
    type: 'bar',
    background: 'transparent',
    height: 350,
    toolbar: {
      show: false,
    },
  },
  colors: ['#2962ff', '#d50000', '#2e7d32', '#ff6d00', '#583cb3'],
  plotOptions: {
    bar: {
      distributed: true,
      borderRadius: 4,
      horizontal: false,
      columnWidth: '40%',
    },
  },
  dataLabels: {
    enabled: false,
  },
  fill: {
    opacity: 1,
  },
  grid: {
    borderColor: '#55596e',
    yaxis: {
      lines: {
        show: true,
      },
    },
    xaxis: {
      lines: {
        show: true,
      },
    },
  },
  legend: {
    labels: {
      colors: '#f5f7ff',
    },
    show: true,
    position: 'top',
  },
  stroke: {
    colors: ['transparent'],
    show: true,
    width: 2,
  },
  tooltip: {
    shared: true,
    intersect: false,
    theme: 'dark',
  },
  xaxis: {
    categories:['San Miguelito','Udima','Pershing','Miramar','San Luis','Maranga','German Astete','Pando'],
    title: {
      style: {
        color: '#f5f7ff',
      },
    },
    axisBorder: {
      show: true,
      color: '#55596e',
    },
    axisTicks: {
      show: true,
      color: '#55596e',
    },
    labels: {
      style: {
        colors: '#f5f7ff',
      },
    },
  },
  yaxis: {
    title: {
      text: '',
      style: {
        color: '#f5f7ff',
      },
    },
    axisBorder: {
      color: '#55596e',
      show: true,
    },
    axisTicks: {
      color: '#55596e',
      show: true,
    },
    labels: {
      style: {
        colors: '#f5f7ff',
      },
    },
  },
};

const barChart2 = new ApexCharts(
  document.querySelector('#bar-chart2'),
  barChart2Options
);
barChart2.render();


// Configuración del nuevo gráfico de pastel
const pieChartOptions = {
  series: [40,35,25], // Porcentaje de resoluciones resultas, pendientes y falsas alarmas
  labels: ['Resueltas', 'Pendientes', 'Falsas Alarmas'],
  colors: ['#00ab57', '#2962ff', '#d50000'],
  chart: {
    type: 'donut',
    background:'transparent',
    height: 350,
  },
  dataLabels: {
    enabled: true,
    formatter(val, opts) {
      const percent = opts.w.config.series[opts.seriesIndex];
      return `${percent}%`;
    }
  },
  legend: {
    position: 'bottom',
    horizontalAlign: 'center',
    fontSize: '14px',
    fontFamily: 'Montserrat, sans-serif',
    markers: {
      width: 10,
      height: 10,
      radius: 12,
    },
    itemMargin: {
      horizontal: 15,
      vertical: 0,
    }
    ,labels: {
      colors: '#ffffff', // Establecer el color de las etiquetas en blanco
    },
  },
  plotOptions: {
    pie: {
      donut: {
        size: '70%'
      }
    }
  },
  tooltip: {
    y: {
      formatter(val) {
        return val + '%';
      }
    }
  }
};

const pieChart = new ApexCharts(document.querySelector('#pie-chart'), pieChartOptions);
pieChart.render();
