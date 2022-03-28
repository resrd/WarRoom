const data = [];
const data2 = [];
const data3 = [];
const data4 = [];
let prev = 100;
let prev2 = 80;
let prev3 = 100;
let prev4 = 120;
for (let i = 0; i < 1000; i++) {
    prev += 5 - Math.random() * 10;
    data.push({ x: i, y: prev });
    prev2 += 5 - Math.random() * 10;
    data2.push({ x: i, y: prev2 });
    prev3 += 5 - Math.random() * 10;
    data3.push({ x: i, y: prev3 });
    prev4 += 5 - Math.random() * 10;
    data4.push({ x: i, y: prev4 });
}

const totalDuration = 10000;
const delayBetweenPoints = totalDuration / data.length;
const previousY = (ctx) => ctx.index === 0 ? ctx.chart.scales.y.getPixelForValue(100) : ctx.chart.getDatasetMeta(ctx.datasetIndex).data[ctx.index - 1].getProps(['y'], true).y;

new Chart("progressiveChart", {
    type: 'line',
    data: {
        datasets: [{
            borderColor: 'red',
            borderWidth: 1,
            radius: 0,
            data: data,
        },
        {
            borderColor: 'blue',
            borderWidth: 1,
            radius: 0,
            data: data2,
        },
        {
            borderColor: 'green',
            borderWidth: 1,
            radius: 0,
            data: data3,
        },
        {
            borderColor: 'yellow',
            borderWidth: 1,
            radius: 0,
            data: data4,
        }
    ]
    },
    options: {
        animation: {
            x: {
                type: 'number',
                easing: 'linear',
                duration: delayBetweenPoints,
                from: NaN, // the point is initially skipped
                delay(ctx) {
                    if (ctx.type !== 'data' || ctx.xStarted) {
                        return 0;
                    }
                    ctx.xStarted = true;
                    return ctx.index * delayBetweenPoints;
                }
            },
            y: {
                type: 'number',
                easing: 'linear',
                duration: delayBetweenPoints,
                from: previousY,
                delay(ctx) {
                    if (ctx.type !== 'data' || ctx.yStarted) {
                        return 0;
                    }
                    ctx.yStarted = true;
                    return ctx.index * delayBetweenPoints;
                }
            }
        },
        interaction: {
            intersect: false
        },
        plugins: {
            legend: false
        },
        scales: {
            x: {
                type: 'linear'
            }
        }
    }
});