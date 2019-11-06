// Set new default font family and font color to mimic Bootstrap's default styling
Chart.defaults.global.defaultFontFamily = 'Nunito', '-apple-system,system-ui,BlinkMacSystemFont,"Segoe UI",Roboto,"Helvetica Neue",Arial,sans-serif';
Chart.defaults.global.defaultFontColor = '#858796';

function number_format(number, decimals, dec_point, thousands_sep) {
  // *     example: number_format(1234.56, 2, ',', ' ');
  // *     return: '1 234,56'
  number = (number + '').replace(',', '').replace(' ', '');
  var n = !isFinite(+number) ? 0 : +number,
    prec = !isFinite(+decimals) ? 0 : Math.abs(decimals),
    sep = (typeof thousands_sep === 'undefined') ? ',' : thousands_sep,
    dec = (typeof dec_point === 'undefined') ? '.' : dec_point,
    s = '',
    toFixedFix = function(n, prec) {
      var k = Math.pow(10, prec);
      return '' + Math.round(n * k) / k;
    };
  // Fix for IE parseFloat(0.55).toFixed(0) = 0;
  s = (prec ? toFixedFix(n, prec) : '' + Math.round(n)).split('.');
  if (s[0].length > 3) {
    s[0] = s[0].replace(/\B(?=(?:\d{3})+(?!\d))/g, sep);
  }
  if ((s[1] || '').length < prec) {
    s[1] = s[1] || '';
    s[1] += new Array(prec - s[1].length + 1).join('0');
  }
  return s.join(dec);
}

// Bar Chart Example
var ctx = document.getElementById("myBarChart");

data1 = Array(12).fill(1).map(x => get_random(50,80))
data2 = Array(12).fill(1).map(x => get_random(50,80))

console.log("Ching's Charts");
console.log(data1);
console.log(data2);

var myBarChart = new Chart(ctx, {
  type: 'bar',
  data: {
    labels: ["January", "February", "March", "April", "May", "June"],
    datasets: [
    {
      label: "Expected Sales",
      backgroundColor: "#7E9181",
      hoverBackgroundColor: "#7E9181",
      borderColor: "#7E9181",
      data: data1,
    },
    {
      label: "Actual Sales",
      backgroundColor: "#9BC1BC",
      hoverBackgroundColor: "#9BC1BC",
      borderColor: "#9BC1BC",
      data: data2,
    },
  ],
  },
  options: {
    maintainAspectRatio: false,
    layout: {
      padding: {
        left: 10,
        right: 25,
        top: 25,
        bottom: 0
      }
    },
    tooltips: {
      backgroundColor: "rgb(255,255,255)",
      bodyFontColor: "#858796",
      titleMarginBottom: 10,
      titleFontColor: '#6e707e',
      titleFontSize: 14,
      borderColor: '#dddfeb',
      borderWidth: 1,
      xPadding: 15,
      yPadding: 15,
      displayColors: false,
      intersect: false,
      mode: 'index',
      caretPadding: 10,
    },
    legend: {
      display: false
    },
    scales: {
      yAxes: [{
        ticks: {
          max: 90,
          min: 40,
          stepSize: 5
      }
      }],
    }
  }
});



/////////////////////////////////////////////////////////////////////////////////
// Mitchell's Chart
/////////////////////////////////////////////////////////////////////////////////


var production = document.getElementById("production-chart");

data1 = Array(12).fill(1).map(x => get_random(40,60))
data2 = Array(12).fill(1).map(x => get_random(40,60))
console.log(data1)
var myBarChart = new Chart(production, {
  type: 'bar',
  data: {
    labels: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"],
    datasets: [
        {
            label: "Production",
            backgroundColor: "#7E9181",
            hoverBackgroundColor: "#7E9181",
            borderColor: "#7E9181",
            data: data1
        },
        {
            label: "Capacity",
            backgroundColor: "#9BC1BC",
            hoverBackgroundColor: "#9BC1BC",
            borderColor: "#9BC1BC",
            data: data2
        },

    ]
  }
})

function get_random(x,y){
  return Math.floor(Math.random() * ((y-x)+1) + x);
}
