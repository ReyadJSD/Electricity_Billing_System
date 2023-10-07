import { Component, Pipe, PipeTransform } from '@angular/core';
import { Dashboard } from '../../classes/dashboard';
import { ElectricityService } from '../../electricity.service';
import { ActivatedRoute, Router } from '@angular/router';
import { NgToastService } from 'ng-angular-popup';
import { Chart,BarController,BarElement,PieController,CategoryScale, LineController, LineElement, PointElement, LinearScale,ArcElement, Title} from 'chart.js';

Chart.register(BarController,BarElement,LineController, LineElement,PieController,CategoryScale, PointElement, LinearScale,ArcElement, Title);

// import { Chart } from 'chart.js';


@Component({
  selector: 'app-defaultdashboard',
  templateUrl: './defaultdashboard.component.html',
  styleUrls: ['./defaultdashboard.component.css']
 
})
export class DefaultdashboardComponent {
  constructor(private userservice: ElectricityService, private router: Router, private route: ActivatedRoute, private toast: NgToastService) {

  }
  percentageValue: any;
  percentageBusiness: any;
  percentageSmallInd: any;
  residential: any;
  business:any;
  smallIndustry:any;
  totalEarning:any;
  pendingEarning:any;
  pendingBills:any;
	pendingCustomer:any;
  dashboard: Dashboard = new Dashboard();
  ngOnInit() {
    console.log(2432);
    
    let userId = localStorage.getItem("userId");
    
    if (userId == null) {
      console.log(userId);
      this.router.navigate(["login"]);
    }
    this.showTableRowsInTable();
    this.showResidentialRows();
    this.showBusinessRows();
    this.showIndustrialRows();
    this.showTotalEarnings();
    this.showPendingEarnings();
    this.showPendingBillsRow();
  }
  showTableRowsInTable() {
    this.userservice.getTableRows()
      .subscribe(response => {
        this.dashboard.rowCount = response.rowCount;
        this.showResidentialRows();
        this.showBusinessRows();
        this.showIndustrialRows();
        this.showTotalEarnings();
        this.showPendingEarnings();
        this.showPendingBillsRow();
      });
  }
  showResidentialRows() {
    this.userservice.getResidentialTableRows(this.residential)
      .subscribe(response => { this.dashboard.residential = response.residential
      this.calcResidential()
     });
  }

  calcResidential() {
    if (this.dashboard.rowCount > 0) {
      this.percentageValue = (this.dashboard.residential / this.dashboard.rowCount ) *100;
      this.updateChartData();
      this.updateColumnChartData();
    }
  }

  showBusinessRows() {
    this.userservice.getBusinessTableRows(this.business)
      .subscribe(response => { this.dashboard.business = response.business
      this.calcBusiness() });
  }

  calcBusiness() {
    if (this.dashboard.rowCount > 0) {
      this.percentageBusiness = (this.dashboard.business / this.dashboard.rowCount ) *100;
      this.updateChartData();
      this.updateColumnChartData();
    } 
  }

  showIndustrialRows() {
    this.userservice.getSmallIndustryTableRows(this.smallIndustry)
      .subscribe(response => { this.dashboard.smallIndustry = response.smallIndustry
      this.calcIndustrial() });
  }

  calcIndustrial() {
    if (this.dashboard.rowCount > 0) {
      this.percentageSmallInd = (this.dashboard.smallIndustry / this.dashboard.rowCount ) *100;
      this.updateChartData();
      this.updateColumnChartData();
    } 
  }

  showTotalEarnings() {
    this.userservice.getTotalEarnings(this.totalEarning)
      .subscribe(response => { this.dashboard.totalEarning = response.totalEarning
      });
  }

  //Pending Earnings
  showPendingEarnings() {
    this.userservice.getPendingEarnings(this.pendingEarning)
      .subscribe(response => { this.dashboard.pendingEarning = response.pendingEarning
      });
  }

  //Pending Row Count
  showPendingBillsRow() {
    this.userservice.getPendingBillsRow(this.pendingBills)
      .subscribe(response => { this.dashboard.pendingBills = response.pendingBills
      });
  }

  //Charts
  updateChartData() {
    const dataPoints = [
      { y: this.percentageValue || 0, name: "Residential Customer" },
      { y: this.percentageBusiness || 0, name: "Business Customer" },
      { y: this.percentageSmallInd || 0, name: "Small Industrial Customer" },
    ];
  
    // Update the dataPoints array in the chartOptions
    this.chartOptions.data[0].dataPoints = dataPoints;
  }

  updateColumnChartData() {
    const dataPoints = [
      { x: 10, y: this.percentageValue || 0, label: "Residential" },
    { x: 20, y: this.percentageBusiness || 0, label: "Business" },
    { x: 30, y: this.percentageSmallInd || 0, label: "Small Industrial" }
      // ... Add more data points as needed
    ];
  
    // Update the dataPoints array in the chartOptions1
    this.chartOptions1.data[0].dataPoints = dataPoints;
  
    // Call the chart's render or update method to reflect the changes
    this.chart1.render(); // Replace with the actual method for rendering/updating the chart
  }

  chartOptions = {
	  animationEnabled: true,
	  title:{
		text: "Counting Customer By Meter Type"
	  },
	  data: [{
		type: "doughnut",
		yValueFormatString: "#,###.##'%'",
		indexLabel: "{name}",
		dataPoints: [
		  { y: 0, name: "Residential Customer" },
		  { y: 0, name: "Business Customer" },
		  { y: 0, name: "Small Industrial Customer" },
		]
	  }]
	}	

  //Second Chart
  chart1: any;
	
  chartOptions1 = {
    title:{
      text: "Count Customers"  
    },
    animationEnabled: true,
    data: [{        
      type: "column",
      dataPoints: [
        { x: 10, y: 0, label: "Residential" },
      { x: 20, y: 0, label: "Business" },
      { x: 30, y: 0, label: "Small Industrial" }
      ]
    }]
  }	



  //Charts Option two
  ngAfterViewInit() {
    this.createChart();
    this.createChart1();
    this.createChartPie();
    this.createChartLine();
    this.updateColumnChartData();
  }
  public chart: any;
    public chartPie:any;
   
    createChart() {
      this.chart = new Chart("myChart", {
        type: 'bar',
        data: {
          labels: ['Residential', 'Business', 'Small Industrial'],
          datasets: [{
            label: 'Counting Customer By Meter Type',
            data: [this.percentageValue, this.percentageBusiness, this.percentageSmallInd],
            backgroundColor: [
              'rgba(255, 99, 132, 0.2)',
              'rgba(54, 162, 235, 0.2)',
              'rgba(255, 206, 86, 0.2)'
            ],
            borderColor: [
              'rgba(255, 99, 132, 1)',
              'rgba(54, 162, 235, 1)',
              'rgba(255, 206, 86, 1)'
            ],
            borderWidth: 1
          }]
        },
        options: {
          plugins: {
            title: {
              display: true,
              text: 'Count Customers'
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
    
    createChart1() {
        this.chart = new Chart("MyChartTwo", {
            type: 'bar', //this denotes tha type of chart

            data: {// values on X-Axis
                labels: ['2022-05-10', '2022-05-11', '2022-05-12', '2022-05-13',
                    '2022-05-14', '2022-05-15', '2022-05-16', '2022-05-17',],
                datasets: [
                    {
                        label: "Sales",
                        data: ['467', '576', '572', '79', '92',
                            '574', '573', '576'],
                        backgroundColor: 'blue'
                    },
                    {
                        label: "Profit",
                        data: ['542', '542', '536', '327', '17',
                            '0.00', '538', '541'],
                        backgroundColor: 'limegreen'
                    }
                ]
            },
            options: {
                aspectRatio: 2.5
            }

        });
    }

    createChartPie(){

        this.chartPie = new Chart("MyChartPie", {
          type: 'doughnut', //this denotes tha type of chart
    
          data: {// values on X-Axis
            labels: ['Red', 'Pink','Green','Yellow','Orange','Blue', ],
               datasets: [{
        label: 'My First Dataset',
        data: [300, 240, 100, 432, 253, 34],
        backgroundColor: [
          'red',
          'pink',
          'green',
                'yellow',
          'orange',
          'blue',			
        ],
        hoverOffset: 4
      }],
          },
          options: {
            aspectRatio:2.5
          }
    
        });
      }

      createChartLine(){
  
        this.chart = new Chart("MyChartLine", {
          type: 'line', //this denotes tha type of chart
    
          data: {// values on X-Axis
            labels: ['2022-05-10', '2022-05-11', '2022-05-12','2022-05-13',
                                     '2022-05-14', '2022-05-15', '2022-05-16','2022-05-17', ], 
               datasets: [
              {
                label: "Sales",
                data: ['467','576', '572', '79', '92',
                                     '574', '573', '576'],
                backgroundColor: 'blue'
              },
              {
                label: "Profit",
                data: ['542', '542', '536', '327', '17',
                                         '0.00', '538', '541'],
                backgroundColor: 'limegreen'
              }  
            ]
          },
          options: {
            aspectRatio:2.5
          }
          
        });
      }
}             


