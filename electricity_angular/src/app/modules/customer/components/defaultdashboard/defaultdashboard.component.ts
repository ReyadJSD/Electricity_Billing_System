import { Component } from '@angular/core';
import { ElectricityService } from '../../electricity.service';
import { ActivatedRoute, Router } from '@angular/router';
import { NgToastService } from 'ng-angular-popup';
import { Dashboard } from '../../classes/dashboard';
import { Monthchart } from '../../classes/monthchart';
import { Chart, BarController, BarElement, PieController, CategoryScale, LineController, LineElement, PointElement, LinearScale, ArcElement, Title } from 'chart.js';

Chart.register(BarController, BarElement, LineController, LineElement, PieController, CategoryScale, PointElement, LinearScale, ArcElement, Title);

@Component({
  selector: 'app-defaultdashboard',
  templateUrl: './defaultdashboard.component.html',
  styleUrls: ['./defaultdashboard.component.css']
})
export class DefaultdashboardComponent {
  constructor(private userservice: ElectricityService, private router: Router, private route: ActivatedRoute, private toast: NgToastService) {

  }
  percentageValue: any;
  totalEarning: any;
  pendingEarning: any;
  pendingBills: any;
  pendingCustomer: any;
  fineTotal: any;
  totalBill: any;
  pJanuary: any;
  pFebruary: any;
  pMarch: any;
  pApril: any;
  pMay: any;
  pJune: any;
  pJuly: any;
  pAugust: any;
  pSeptember: any;
  pOctober: any;
  pNovember: any;
  pDecember: any;
  monthchart: Monthchart = new Monthchart();
  dashboard: Dashboard = new Dashboard();

  ngOnInit() {
    console.log(2432);

    let userId = localStorage.getItem("userId");

    if (userId == null) {
      console.log(userId);
      this.router.navigate(["login"]);
    }
    this.showPendingEarnings();
    this.showPendingBillsRow();
    this.showPendingBillsMonth();
    this.fetchAndRenderChartData();
  }

  showTotalEarnings() {
    let meterNo = localStorage.getItem("meterNo");
    this.userservice.getTotalPaidAmt(this.fineTotal, meterNo)
      .subscribe(response => {
        this.dashboard.fineTotal = response.fineTotal;
        this.showPendingEarnings();
        this.showPendingBillsRow();
        this.showPendingBillsMonth();
        this.totalBillOfJanuary();
        this.totalBillOfFebruary();
        this.totalBillOfMarch();
        this.totalBillOfApril();
        this.totalBillOfMay();
        this.totalBillOfJune();
        this.totalBillOfJuly();
        this.totalBillOfAugust();
        this.totalBillOfSeptember();
        this.totalBillOfOctober();
        this.totalBillOfNovember();
        this.totalBillOfDecember();
      });
  }
  fetchAndRenderChartData() {
    const promises = [
      this.showTotalEarnings(),
      this.totalBillOfJanuary(),
      this.totalBillOfFebruary(),
      this.totalBillOfMarch(),
      this.totalBillOfApril(),
      this.totalBillOfMay(),
      this.totalBillOfJune(),
      this.totalBillOfJuly(),
      this.totalBillOfAugust(),
      this.totalBillOfSeptember(),
      this.totalBillOfOctober(),
      this.totalBillOfNovember(),
      this.totalBillOfDecember(),
      // ... and so on for all months
    ];

    Promise.all(promises).then(() => {
      this.createChart();
      this.updateColumnChartData();
    });
  }
  //Pending Earnings
  showPendingEarnings() {
    let meterNo = localStorage.getItem("meterNo");
    this.userservice.getPendingEarnings(this.totalBill, meterNo)
      .subscribe(response => {
        if (response.totalBill !== null) {
          this.dashboard.totalBill = response.totalBill;
        } else {
          this.dashboard.totalBill = 0.00;
        }
      });
  }

  //Pending Row Count
  showPendingBillsRow() {
    let meterNo = localStorage.getItem("meterNo");
    this.userservice.getPendingBillsRow(this.pendingBills, meterNo)
      .subscribe(response => {
        if (response.pendingBills !== null) {
          this.dashboard.pendingBills = response.pendingBills;
        } else {
          this.dashboard.pendingBills = 0;
        }
      });
  }

  showPendingBillsMonth() {
    let meterNo = localStorage.getItem("meterNo");
    this.userservice.getPendingBillsMonth(meterNo)
      .subscribe(response => {
        console.log('djjjj');

        if (response.month !== null) {
          this.dashboard.month = response.month;
        } else {
          this.dashboard.month = null;
          console.log('ddddd');

        }
      });
  }

  //Show Specific Months Bill Start Here
  //totalForJanuary
  totalBillOfJanuary() {
    let meterNo = localStorage.getItem("meterNo");
    this.userservice.getTotalBillOfJanuary(this.monthchart.january, meterNo)
      .subscribe(response => {
        this.monthchart.january = response.january
        console.log(this.monthchart.january);
        this.calcJanuary();
      });
  }
  calcJanuary() {
    if (this.dashboard.fineTotal > 0) {
      this.pJanuary = (this.monthchart.january / this.dashboard.fineTotal) * 100;
      console.log(this.pJanuary);
      this.updateColumnChartData();
    }
  }
  //totalForFebruary
  totalBillOfFebruary() {
    let meterNo = localStorage.getItem("meterNo");
    this.userservice.getTotalBillOfFebruary(this.monthchart.february, meterNo)
      .subscribe(response => {
        this.monthchart.february = response.february
        this.calcFebruary();
      });

  }
  calcFebruary() {
    if (this.dashboard.fineTotal > 0) {
      this.pFebruary = (this.monthchart.february / this.dashboard.fineTotal) * 100;
      this.updateColumnChartData();
    }
  }
  //totalForMarch
  totalBillOfMarch() {
    let meterNo = localStorage.getItem("meterNo");
    this.userservice.getTotalBillOfMarch(this.monthchart.march, meterNo)
      .subscribe(response => {
        this.monthchart.march = response.march
        this.calcMarch();
      });

  }
  calcMarch() {
    if (this.dashboard.fineTotal > 0) {
      this.pMarch = (this.monthchart.march / this.dashboard.fineTotal) * 100;
      this.updateColumnChartData();
    }
  }
  //totalForApril
  totalBillOfApril() {
    let meterNo = localStorage.getItem("meterNo");
    this.userservice.getTotalBillOfApril(this.monthchart.april, meterNo)
      .subscribe(response => {
        this.monthchart.april = response.april
        this.calcApril();
      });

  }
  calcApril() {
    if (this.dashboard.fineTotal > 0) {
      this.pApril = (this.monthchart.april / this.dashboard.fineTotal) * 100;
      this.updateColumnChartData();
    }
  }
  //totalForMay
  totalBillOfMay() {
    let meterNo = localStorage.getItem("meterNo");
    this.userservice.getTotalBillOfMay(this.monthchart.may, meterNo)
      .subscribe(response => {
        this.monthchart.may = response.may
        this.calcMay();
      });

  }
  calcMay() {
    if (this.dashboard.fineTotal > 0) {
      this.pMay = (this.monthchart.may / this.dashboard.fineTotal) * 100;
      this.updateColumnChartData();
    }
  }
  //totalForJune
  totalBillOfJune() {
    let meterNo = localStorage.getItem("meterNo");
    this.userservice.getTotalBillOfJune(this.monthchart.june, meterNo)
      .subscribe(response => {
        this.monthchart.june = response.june
        this.calcJune();
      });

  }
  calcJune() {
    if (this.dashboard.fineTotal > 0) {
      this.pJune = (this.monthchart.june / this.dashboard.fineTotal) * 100;
      this.updateColumnChartData();
    }
  }
  //totalForJuly
  totalBillOfJuly() {
    let meterNo = localStorage.getItem("meterNo");
    this.userservice.getTotalBillOfJuly(this.monthchart.july, meterNo)
      .subscribe(response => {
        this.monthchart.july = response.july
        this.calcJuly();
      });

  }
  calcJuly() {
    if (this.dashboard.fineTotal > 0) {
      this.pJuly = (this.monthchart.july / this.dashboard.fineTotal) * 100;
      this.updateColumnChartData();
    }
  }
  //totalForAugust
  totalBillOfAugust() {
    let meterNo = localStorage.getItem("meterNo");
    this.userservice.getTotalBillOfAugust(this.monthchart.august, meterNo)
      .subscribe(response => {
        this.monthchart.august = response.august
        this.calcAugust();
      });

  }
  calcAugust() {
    if (this.dashboard.fineTotal > 0) {
      this.pAugust = (this.monthchart.august / this.dashboard.fineTotal) * 100;
      this.updateColumnChartData();
    }
  }
  //totalForSeptember
  totalBillOfSeptember() {
    let meterNo = localStorage.getItem("meterNo");
    this.userservice.getTotalBillOfSeptember(this.monthchart.september, meterNo)
      .subscribe(response => {
        this.monthchart.september = response.september
        this.calcSeptember();
      });
  }
  calcSeptember() {
    if (this.dashboard.fineTotal > 0) {
      this.pSeptember = (this.monthchart.september / this.dashboard.fineTotal) * 100;
      this.updateColumnChartData();
    }
  }
  //totalForOctober
  totalBillOfOctober() {
    let meterNo = localStorage.getItem("meterNo");
    this.userservice.getTotalBillOfOctober(this.monthchart.october, meterNo)
      .subscribe(response => {
        this.monthchart.october = response.october
        this.calcOctober();
      });
  }
  calcOctober() {
    if (this.dashboard.fineTotal > 0) {
      this.pOctober = (this.monthchart.october / this.dashboard.fineTotal) * 100;
      this.updateColumnChartData();
    }
  }
  //totalForNovember
  totalBillOfNovember() {
    let meterNo = localStorage.getItem("meterNo");
    this.userservice.getTotalBillOfNovember(this.monthchart.november, meterNo)
      .subscribe(response => {
        this.monthchart.november = response.november
        this.calcNovember();
      });
  }
  calcNovember() {
    if (this.dashboard.fineTotal > 0) {
      this.pNovember = (this.monthchart.november / this.dashboard.fineTotal) * 100;
      this.updateColumnChartData();
    }
  }
  //totalForDecember
  totalBillOfDecember() {
    let meterNo = localStorage.getItem("meterNo");
    this.userservice.getTotalBillOfDecember(this.monthchart.december, meterNo)
      .subscribe(response => {
        this.monthchart.december = response.december
        this.calcDecember();
      });
  }
  calcDecember() {
    if (this.dashboard.fineTotal > 0) {
      this.pDecember = (this.monthchart.december / this.dashboard.fineTotal) * 100;
      this.updateColumnChartData();
    }
  }

  //Show Specific Months Bill End Here

  //Charts
  updateColumnChartData() {
    const dataPoints = [
      // Update the data points as needed
      { x: 10, y: this.pJanuary || 0, label: "January" },
      { x: 20, y: this.pFebruary || 0, label: "February" },
      { x: 30, y: this.pMarch || 0, label: "March" },
      { x: 40, y: this.pApril || 0, label: "April" },
      { x: 50, y: this.pMay || 0, label: "May" },
      { x: 60, y: this.pJune || 0, label: "June" },
      { x: 70, y: this.pJuly || 0, label: "July" },
      { x: 80, y: this.pAugust || 0, label: "August" },
      { x: 90, y: this.pSeptember || 0, label: "September" },
      // { x: 100, y: this.pOctober || 0, label: "October" },
      // { x: 110, y: this.pNovember || 0, label: "November" },
      // { x: 120, y: this.pDecember || 0, label: "December" }
      // ... Add more data points as needed
    ];

    // Update the dataPoints array in the chartOptions1
    this.chartOptions1.data[0].dataPoints = dataPoints;

    // Call the chart's render or update method to reflect the changes
    if (this.chart1) {
      this.chart1.options.data[0].dataPoints = dataPoints; // Update chart's data
      this.chart1.render(); // Render or update the chart
    }

  }

  //Second Chart
  chart1: any;

  chartOptions1 = {
    title: {
      text: "Compare Monthly Bills"
    },
    animationEnabled: true,
    data: [{
      type: "column",
      dataPoints: [
        { x: 10, y: 0, label: "January" },
        { x: 20, y: 0, label: "February" },
        { x: 30, y: 0, label: "March" },
        { x: 40, y: 0, label: "April" },
        { x: 50, y: 0, label: "May" },
        { x: 60, y: 0, label: "June" },
        { x: 70, y: 0, label: "July" },
        { x: 80, y: 0, label: "August" },
        { x: 90, y: 0, label: "September" },
        // { x: 100, y: 0, label: "October" },
        // { x: 110, y: 0, label: "November" },
        // { x: 120, y: 0, label: "December" }
      ]
    }]
  }

  //Charts Option two
  ngAfterViewInit() {
    this.createChart();
    this.updateColumnChartData();
  }

  public chart: any;
  public chartPie: any;

  createChart() {
    this.chart = new Chart("myChart", {
      type: 'bar',
      data: {
        labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'],
        datasets: [{
          label: 'Compare Monthly Bills',
          data: [this.pJanuary, this.pFebruary, this.pMarch, this.pApril, this.pMay, this.pJune, this.pJuly, this.pAugust, this.pSeptember, this.pOctober, this.pNovember, this.pDecember], // Initial data, replace with actual data
          backgroundColor: [
            'rgba(255, 99, 132, 0.2)',
            'rgba(54, 162, 235, 0.2)',
            'rgba(255, 206, 86, 0.2)',
            'rgba(75, 192, 192, 0.2)',
            'rgba(153, 102, 255, 0.2)',
            'rgba(255, 159, 64, 0.2)',
            'rgba(255, 99, 132, 0.2)',
            'rgba(54, 162, 235, 0.2)',
            'rgba(255, 206, 86, 0.2)',
            'rgba(75, 192, 192, 0.2)',
            'rgba(153, 102, 255, 0.2)',
            'rgba(255, 159, 64, 0.2)'
          ],
          borderColor: [
            'rgba(255, 99, 132, 1)',
            'rgba(54, 162, 235, 1)',
            'rgba(255, 206, 86, 1)',
            'rgba(75, 192, 192, 1)',
            'rgba(153, 102, 255, 1)',
            'rgba(255, 159, 64, 1)',
            'rgba(255, 99, 132, 1)',
            'rgba(54, 162, 235, 1)',
            'rgba(255, 206, 86, 1)',
            'rgba(75, 192, 192, 1)',
            'rgba(153, 102, 255, 1)',
            'rgba(255, 159, 64, 1)'
          ],
          borderWidth: 1
        }]
      },
      options: {
        plugins: {
          title: {
            display: true,
            text: 'Compare Monthly Bills'
          },
          tooltip: {
            callbacks: {
              title: function (tooltipItem) {
                return tooltipItem[0].label;
              },
              label: function (tooltipItem) {
                return "Value: " + tooltipItem.formattedValue;
              }
            }
          }
        },
        scales: {
          y: {
            beginAtZero: true
          }
        }
      }
    });
  }
}
