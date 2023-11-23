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
    html: `<img id="userIcon" height="100px" width="100px "src="/assets/man (1).png" alt="User Avatar"><br> Name: Juan Dela Cruz <br> Address: Poblacion, Baliwag <br> Contact No.: 0969-420-6969`,
    title: "Profile Info",
    showConfirmButton: false
  });
}

function logout() {
  Swal.fire({
    title: 'Are you sure you want to Log Out?',
    showDenyButton: true,
    showCancelButton: false,
    confirmButtonText: 'Yes',
    denyButtonText: 'No',
  }).then((result) => {
    if (result.isConfirmed) {

      Swal.fire('Log Out Successful!', '', 'success');
      window.location.href = "../index.html";
    } 
  })
}