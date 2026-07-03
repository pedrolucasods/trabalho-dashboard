const $html = document.querySelector('html')
const btn_theme = document.getElementById('btn-theme')
let estilosCSSS = getComputedStyle(document.documentElement)


btn_theme.addEventListener('click', function(){
    $html.classList.toggle('dark-mode')
    if(btn_theme.textContent == 'partly_cloudy_night'){
        btn_theme.textContent = 'sunny'
        
    }else{
        btn_theme.textContent = 'partly_cloudy_night'
    }
})
const ctx = document.getElementById('myLineChart').getContext('2d');
const myChart = new Chart(ctx, {
    type: 'line',
    data: {
        labels: ['January', 'February', 'March', 'April', 'May', 'June', 'Jul'],
        datasets: [{
            data: [
                {x:0, y:26},
                {x:0.5,y: 42},
                {x:1,y:51},
                {x:1.8,y:46},
                {x:2.1,y:52},
                {x:2.5, y:61},
                {x:2.9,y:58},
                {x:3.5,y:56},
                {x:4.3,y:74},
                {x:4.6,y:62},
                {x:6,y:79}],
            borderColor: estilosCSSS.getPropertyValue('--second-text'),
            backgroundColor: 'transparent',
            borderWidth: 1,
            tension: 0,
            fill: false,
            pointBackgroundColor: estilosCSSS.getPropertyValue('--second-text'),
            pointRadius: 4
        }]
    },
    options: {
        responsive: true,
        maintainAspectRatio:false,
        plugins: {
            legend: {
                display:false
            },
            title: {
                display: false
            }
        },
        scales: {
            y: {
                min: 0,
                max:100,

                ticks:{
                    stepSize:25,
                    callback: function(value){
                        return value+'%'
                    }
                },

                grid:{
                    display:true,
                    color: estilosCSSS.getPropertyValue('--line-graphic-color'),

                },
                border:{
                    display:false
                }
            },

            x:{
                type: 'linear',
                ticks:{
                    callback:(value)=>{
                        const meses = ['January', 'February', 'March', 'April', 'May', 'June', 'Jul']
                        return meses[value]
                    },
                    autoSkip:false,
                    maxRotation:0,
                },
                grid:{
                    display:false
                },
                border:{
                    display:false
                }
            }
        }
    }
});



const ctxCircle = document.getElementById('myCircleChart').getContext('2d');
const myCircleChart = new Chart(ctxCircle, {
    type: 'doughnut', 
    data: {
        labels: ['Em Andamento', 'Não Iniciais', 'Atrasadas', 'Não Iniciadas'], 
        datasets: [{
            data: [55, 35, 10], 
            backgroundColor: [
                '#8c8c8c',
                '#d9d9d9',
                '#b3b3b3' 
            ],
            borderWidth: 0 
        }]
    },
    options: {
        responsive: true,
        maintainAspectRatio: false,
        radius:'75%',
        resizeDelay: 100,
        plugins: {
            legend: {
                display: true,
                position: 'right', 
                labels: {
                    color: estilosCSSS.getPropertyValue('--second-text'),
                    font: { size: 10 }
                }
            },
            tooltip: {
                enabled: true
            }
        }
    }
});

const ctxColumn = document.getElementById('myColumnChart').getContext('2d');

const myColumnChart = new Chart(ctxColumn, {
    type: 'bar',
    data: {
        labels: ['Alta', 'Média', 'Baixa'],
        datasets: [{
            data:[40,37,20],
            backgroundColor: [
                '#8c8c8c',
                '#b3b3b3',
                '#d9d9d9'
            ],
            borderWidth: 0,
            barThickness: 45
        }]
    },
    options: {
        responsive: true,
        maintainAspectRatio: false,
        resizeDelay: 150,     
        
        plugins: {
            legend: {
                display: false
            },
            tooltip: {
                enabled: true
            }
        },
        scales: {
            y: {
                min: 0,
                max: 60,
                ticks: {
                    color: estilosCSSS.getPropertyValue('--second-text'),
                    stepSize: 20
                },
                grid: {
                    display: true,
                    color: estilosCSSS.getPropertyValue('--line-graphic-color'),
                    drawTicks: false
                },
                border: {
                    display: false
                }
            },
            x: {
                ticks: {
                    color: estilosCSSS.getPropertyValue('--second-text')
                },
                grid: {
                    display: false
                },
                border: {
                    display: true,
                    color: 'rgba(200, 200, 200, 0.3)'
                }
            }
        }
    }
});



