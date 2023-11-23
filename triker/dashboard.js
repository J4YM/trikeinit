(() => {
  'use strict'

  // Graphs
  const ctx = document.getElementById('myChart')

  const myChart = new Chart(ctx, {
    type: 'line',
    data: {
      labels: [
        'Sunday',
        'Monday',
        'Tuesday',
        'Wednesday',
        'Thursday',
        'Friday',
        'Saturday'
      ],
      datasets: [{
        data: [
          35,
          20,
          26,
          36,
          18,
          20,
          27
        ],
        lineTension: 0,
        backgroundColor: 'transparent',
        borderColor: '#007bff',
        borderWidth: 4,
        pointBackgroundColor: '#007bff'
      }]
    },
    options: {
      plugins: {
        legend: {
          display: false
        },
        tooltip: {
          boxPadding: 3
        }
      }
    }
  })
})()

function trikerprofile() {
  Swal.fire({
    position: "top-end",
    html: `<img id="userIcon" height="100px" width="100px "src="/assets/man (1).png" alt="User Avatar"><br> Name: <br> Address: <br> Contact No.: `,
    title: "Profile Info",
    showConfirmButton: false
  });
}