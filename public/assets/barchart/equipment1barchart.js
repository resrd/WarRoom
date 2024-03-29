// JS 
var chart, data; 
var palette = [ 
  '#251F47', 
  '#404E7C', 
  '#71B48D', 
  '#86CB92'
]; 
  
// Resembles underline Used to highlight selected label. 
var selectedFill = { 
  angle: 90, 
  stops: [ 
    [0, '#ffffff'], 
    [0.94, '#ffffff'], 
    [0.94, '#000000'], 
    [1, '#000000'] 
  ] 
}; 
  
JSC.fetch('./resources/uk-remote-work-covid.csv') 
  .then(function(response) { 
    return response.text(); 
  }) 
  .then(function(text) { 
    data = JSC.csv2Json(text); 
    chart = renderChart( 
      makeSeries(data, 'before_covid') 
    ); 
  }) 
  .catch(function(error) { 
    console.error(error); 
  }); 
  
function renderChart(series) { 
  return JSC.chart('chartDiv', { 
    type: 'horizontal column solid', 
    animation_duration: 1000, 
    title: { 
      label: { 
        text: 
          'Most British workers (57%) want to be able to work from home after the pandemic.<br>' + 
          '<span style="font-size:12px;">Remote work status before the pandemic vs. remote work preference after the pandemic.</span>', 
        style_fontSize: 16 
      }, 
      margin_bottom: 35 
    }, 
  
    //Make sure all point labels are shown 
    margin_right: 10, 
    chartArea_clipContent: false, 
  
    palette: palette, 
    legend: { 
      position: 'bottom', 
      template: '%icon %name', 
      // Disable hiding series 
      defaultEntry: { 
        cursor: 'default', 
        events_click: function() { 
          return false; 
        } 
      } 
    }, 
    xAxis: { 
      staticColumnWidth: 20, 
      defaultTick: { 
        gridLine_visible: false, 
        line_visible: false
      } 
    }, 
    yAxis: { 
      scale: { 
        type: 'stackedFull', 
        invert: true
      }, 
      visible: false
    }, 
    defaultSeries_mouseTracking_enabled: false, 
    defaultPoint: { 
      outline_width: 0, 
      label: { 
        text: '%yValue%', 
        color: 'darkenMore', 
        offset: '0,-20', 
        autoHide: false
      } 
    }, 
    series: series, 
    toolbar_items: { 
      beforeAfterButtons: { 
        label_text: '', 
        position: 'inside top left', 
        margin_top: -35, 
        itemsBox: { 
          layout: 'horizontal', 
          visible: true
        }, 
        defaultItem: { 
          type: 'radio', 
          padding: [0, 0, 4, -20], 
          margin: 3, 
          label_style: { 
            fontSize: 14, 
            color: '#9E9E9E'
          }, 
          icon_visible: false, 
          states: { 
            select: { 
              fill: selectedFill, 
              label_style: { color: '#000000' } 
            }, 
            hover_fill: selectedFill 
          } 
        }, 
        events: { change: changeEvent }, 
        value: 'Before', 
        items: { 
          Before: { label_text: 'Before' }, 
          After: { label_text: 'After' } 
        } 
      } 
    } 
  }); 
} 
  
function changeEvent(val) { 
  chart.options({ 
    series: makeSeries( 
      data, 
      val === 'After'
        ? 'after_covid'
        : 'before_covid'
    ) 
  }); 
} 
  
function makeSeries(data, date) { 
  return JSC.nest() 
    .key('option') 
    .key('region') 
    .pointRollup(function(key, val) { 
      var value = val[0]; 
      return { 
        x: key, 
        y: value[date], 
        id: key + ' ' + value.option 
      }; 
    }) 
    .series(data); 
} 