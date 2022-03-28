var ctx = document.getElementById("polarareachart");
var myChar = new Chart(ctx, {
    type: 'polarArea',
    data: {
        labels: ["機具一","機具二","機具三","機具四","機具五","機具六"],
        datasets: [{
            label: '雷達圖',
            data: [408,512,459,377,562,377],
            backgroundColor:[
                'rgba(255,0,0, .7)',
                'rgba(0,255,0, .7)',
                'rgba(0,0,255, .7)',
                'rgba(255,255,0, .7)',
                'rgba(255,0,255, .7)',
                'rgba(0,255,255, .7)',
            ],
            borderColor: [
                '#000',
                '#000',
                '#000',
                '#000',
                '#000',
                '#000',
            ],
            borderWidth: 0
        }],
    },
});