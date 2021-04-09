import { Component, OnInit } from '@angular/core';
import { MeasurementContainer } from 'src/app/models/measurementContainer';
import { ContainerService } from 'src/app/services/container.service';
import {Container} from './../../models/container'

@Component({
  selector: 'app-visualize',
  templateUrl: './visualize.component.html',
  styleUrls: ['./visualize.component.scss']
})
export class VisualizeComponent implements OnInit {

  containerRefs = []
  selectedMeasurementContainer: MeasurementContainer;


  // Temperature data vis setup
  // YES
  tempLineChartData = [{
    label: '# of Votes',
    data: [0, 0, 0, 0, 0, 0], // Y Axis
    borderWidth: 1,
    fill: false
  }];

  // YES
  tempLineChartLabels = ["2013", "2014", "2014", "2015", "2016", "2017"]; // X Axis

  tempLineChartOptions = {
    scales: {
      yAxes: [{
        ticks: {
          beginAtZero: false
        }
      }]
    },
    legend: {
      display: false
    },
    elements: {
      point: {
        radius: 0
      }
    }
  };

  tempLineChartColors = [
    {
      borderColor: 'rgba(255,99,132,1)'
    }
  ];

  // YES
  tempBarChartData = [{
    label: '# of Votes',
    data: [10, 19, 3, 5, 2, 3],
    borderWidth: 1,
    fill: false
  }];

  // YES
  tempBarChartLabels = ["2013", "2014", "2014", "2015", "2016", "2017"];

  tempBarChartOptions = {
    scales: {
      yAxes: [{
        ticks: {
          beginAtZero: true
        }
      }]
    },
    legend: {
      display: false
    },
    elements: {
      point: {
        radius: 0
      }
    }
  };

  tempBarChartColors = [
    {
      backgroundColor: [
        'rgba(255, 99, 132, 0.2)',
        'rgba(54, 162, 235, 0.2)',
        'rgba(255, 206, 86, 0.2)',
        'rgba(75, 192, 192, 0.2)',
        'rgba(153, 102, 255, 0.2)',
        'rgba(255, 159, 64, 0.2)'
      ],
      borderColor: [
        'rgba(255,99,132,1)',
        'rgba(54, 162, 235, 1)',
        'rgba(255, 206, 86, 1)',
        'rgba(75, 192, 192, 1)',
        'rgba(153, 102, 255, 1)',
        'rgba(255, 159, 64, 1)'
      ]
    }
  ];

  // Gaz data setup
  // YES change
  gazLineChartData = [{
    label: '# of Votes',
    data: [0, 0, 0, 0, 0, 0], // Y Axis
    borderWidth: 1,
    fill: false
  }];

  // YES change
  gazLineChartLabels = ["2013", "2014", "2014", "2015", "2016", "2017"]; // X Axis

  // NO change
  gazLineChartOptions = {
    scales: {
      yAxes: [{
        ticks: {
          beginAtZero: false
        }
      }]
    },
    legend: {
      display: false
    },
    elements: {
      point: {
        radius: 0
      }
    }
  };


  // NO change
  gazLineChartColors = [
    {
      borderColor: 'rgba(255,99,132,1)'
    }
  ];

  // YES change
  gazBarChartData = [{
    label: '# of Votes',
    data: [10, 19, 3, 5, 2, 3],
    borderWidth: 1,
    fill: false
  }];

  gazBarChartLabels = ["2013", "2014", "2014", "2015", "2016", "2017"];

  // NO change
  gazBarChartOptions = {
    scales: {
      yAxes: [{
        ticks: {
          beginAtZero: true
        }
      }]
    },
    legend: {
      display: false
    },
    elements: {
      point: {
        radius: 0
      }
    }
  };

  // No change
  gazBarChartColors = [
    {
      backgroundColor: [
        'rgba(255, 99, 132, 0.2)',
        'rgba(54, 162, 235, 0.2)',
        'rgba(255, 206, 86, 0.2)',
        'rgba(75, 192, 192, 0.2)',
        'rgba(153, 102, 255, 0.2)',
        'rgba(255, 159, 64, 0.2)'
      ],
      borderColor: [
        'rgba(255,99,132,1)',
        'rgba(54, 162, 235, 1)',
        'rgba(255, 206, 86, 1)',
        'rgba(75, 192, 192, 1)',
        'rgba(153, 102, 255, 1)',
        'rgba(255, 159, 64, 1)'
      ]
    }
  ];

  constructor(private containerService:ContainerService) { }

  ngOnInit(): void {
    this.containerService.getMeasuringContainersRefs().subscribe((res)=> this.containerRefs = res)
  }

  selectContainer(index){
    let selectedContainer = this.containerRefs[index];
    console.log(`selected container ${selectedContainer}`)

    this.containerService.getMeasurement(selectedContainer.containerRef).subscribe((res)=>{
      this.selectedMeasurementContainer = res;console.log(`selectedMeasurement ${JSON.stringify(res)}`);
      this.updateTempData();
      this.updateGazData();
    });
  }


  updateTempData(){
    const ENTRIES_NUMBER = 10;
    let temp_data = this.selectedMeasurementContainer.data.temp;
    const sliced_temp = temp_data.slice(0,ENTRIES_NUMBER);
    console.log(temp_data);
    // console.log(`Gaz data ${JSON.stringify(gaz_data)}`)
    // temp_data = temp_data.slice(0, ENTRIES_NUMBER);

    console.log(temp_data.slice(0,5))
    // this.tempLineChartData['data'] = temp_data;
    // this.tempLineChartLabels = ['2011','2012','2013','2222','3333'];
    console.log(`before reverse ${sliced_temp}`)
    sliced_temp.reverse()
    console.log(`after reverse ${sliced_temp}`)
    this.tempLineChartData = [{
      label: '# of Votes',
      data: sliced_temp.map((el)=> Number(el.value)), // Y Axis
      borderWidth: 1,
      fill: false
    }];
    this.tempLineChartLabels = sliced_temp.map((el)=>new Date(el.time).toLocaleString())
  }

  updateGazData(){
    const ENTRIES_NUMBER = 10;
    let gaz_data = this.selectedMeasurementContainer.data.gaz;
    const sliced_gaz = gaz_data.slice(0,ENTRIES_NUMBER);
    console.log(gaz_data);
    // console.log(`Gaz data ${JSON.stringify(gaz_data)}`)
    // temp_data = temp_data.slice(0, ENTRIES_NUMBER);

    console.log(gaz_data.slice(0,5))
    // this.tempLineChartData['data'] = temp_data;
    // this.tempLineChartLabels = ['2011','2012','2013','2222','3333'];
    sliced_gaz.reverse()
    this.gazLineChartData = [{
      label: '# of Votes',
      data: sliced_gaz.map((el)=> Number(el.value)), // Y Axis
      borderWidth: 1,
      fill: false
    }];
    this.gazLineChartLabels = sliced_gaz.map((el)=>new Date(el.time).toLocaleString())
  }

}
