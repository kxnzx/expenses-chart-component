// SETUP
const labels = ["mon", "tue", "wed", "thu", "fri", "sat", "sun"];
const data = {
  labels: labels,
  datasets: [
    {
      borderRadius: 3, // Set border-radius on the bars
      label: "",
      backgroundColor: [
        "rgb(236, 119, 95)",
        "rgb(236, 119, 95)",
        "rgb(118, 181, 188)",
        "rgb(236, 119, 95)",
        "rgb(236, 119, 95)",
        "rgb(236, 119, 95)",
        "rgb(236, 119, 95)",
      ],
      hoverBackgroundColor: [
        "rgba(236, 119, 95, 0.6)",
        "rgba(236, 119, 95, 0.6)",
        "rgba(118, 181, 188, 0.6)",
        "rgba(236, 119, 95, 0.6)",
        "rgba(236, 119, 95, 0.6)",
        "rgba(236, 119, 95, 0.6)",
        "rgba(236, 119, 95, 0.6)",
      ],
      data: [17.45, 34.91, 52.36, 31.07, 23.39, 43.28, 25.48],
      options: {
        responsive: true,
        maintainAspectRatio: false,
      },
    },
  ],
};

// CONFIG
const config = {
  type: "bar",
  data: data,
  options: {
    // Create space for squeezed tooltip
    layout: {
      padding: {
        top: 10,
        left: 10,
        right: 10,
      },
    },
    // Set Cursor Pointer only on Bars
    onHover: (event, chartElement) => {
      if (chartElement.length == 1) {
        event.native.target.style.cursor = "pointer";
      }
      if (chartElement.length == 0) {
        event.native.target.style.cursor = "default";
      }
    },
    // Remove Grid Lines
    scales: {
      x: {
        grid: {
          display: false,
          // Remove X-axis Line on bottom
          drawBorder: false,
        },
        // Change color Labels X-axis
        ticks: { color: "rgba(147, 134, 123, 1)", beginAtZero: true },
      },
      y: {
        display: false, // Remove space of hidden Y-axis Line on leftside
        grid: {
          display: false,
          // Remove Y-axis Line on leftside
          drawBorder: false,
        },
        // Remove Labels Y-axis
        ticks: {
          display: false,
        },
      },
    },
    plugins: {
      tooltip: {
        // Customize font-size for data
        bodyFont: {
          size: 12,
          weight: "bold",
        },
        // Customize background-color tooltip
        backgroundColor: "rgb(56, 35, 20)",
        // Remove Tooltip Caret
        caretSize: 0,
        yAlign: "bottom",
        // Remove margin under title
        titleMarginBottom: 0,
        callbacks: {
          // Remove Tooltip Title
          title: function (tooltipItems, data) {
            return "";
          },
          // Set currency USD for data
          label: function (context) {
            let label = context.dataset.label || "";

            if (label) {
              label += ": ";
            }
            if (context.parsed.y !== null) {
              label += new Intl.NumberFormat("en-US", {
                style: "currency",
                currency: "USD",
              }).format(context.parsed.y);
            }
            return label;
          },
        },

        // Remove Color Box Point Style
        displayColors: false,
      },
      legend: {
        display: false,
      },
    },
  },
};
// RENDER INIT
const chart = new Chart(document.getElementById("chart"), config);
