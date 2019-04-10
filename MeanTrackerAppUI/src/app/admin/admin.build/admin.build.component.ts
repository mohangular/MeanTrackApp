import { Component, OnInit } from '@angular/core';
import { BuildModel } from '../../models/buildModel';
import { MatTableDataSource } from '@angular/material';

@Component({
  selector: 'app-admin-build',
  templateUrl: './admin.build.component.html',
  styleUrls: ['./admin.build.component.css']
})

export class AdminBuildComponent implements OnInit {

  buildData: any;
  displayedColumns: string[];
  constructor() { }

  ngOnInit() {
    this.displayedColumns = ['id', 'buildName', 'startDate', 'endDate', 'enabled'];
    const data = [
      { buildName: '1284.1', startDate: '01/09/2018', endDate: '01/10/2018', enabled: false, id: 0 },
      { buildName: '1284.2', startDate: '02/10/2018', endDate: '01/11/2018', enabled: false, id: 1 },
      { buildName: '1284.3', startDate: '02/11/2018', endDate: '01/12/2018', enabled: false, id: 2 },
      { buildName: '1284.4', startDate: '02/12/2018', endDate: '01/01/2019', enabled: false, id: 3 },
      { buildName: '1284.5', startDate: '02/01/2019', endDate: '01/02/2019', enabled: false, id: 4 },
      { buildName: '1294.1', startDate: '01/09/2018', endDate: '01/10/2018', enabled: false, id: 0 },
      { buildName: '1294.2', startDate: '02/10/2018', endDate: '01/11/2018', enabled: false, id: 1 },
      { buildName: '1294.3', startDate: '02/11/2018', endDate: '01/12/2018', enabled: false, id: 2 },
      { buildName: '1294.4', startDate: '02/12/2018', endDate: '01/01/2019', enabled: false, id: 3 },
      { buildName: '1284.5', startDate: '02/01/2019', endDate: '01/02/2019', enabled: false, id: 4 },
      { buildName: '1274.1', startDate: '01/09/2018', endDate: '01/10/2018', enabled: false, id: 0 },
      { buildName: '1274.2', startDate: '02/10/2018', endDate: '01/11/2018', enabled: false, id: 1 },
      { buildName: '1274.3', startDate: '02/11/2018', endDate: '01/12/2018', enabled: false, id: 2 },
      { buildName: '1274.4', startDate: '02/12/2018', endDate: '01/01/2019', enabled: false, id: 3 },
      { buildName: '1274.5', startDate: '02/01/2019', endDate: '01/02/2019', enabled: false, id: 4 },
      { buildName: '1384.1', startDate: '01/09/2018', endDate: '01/10/2018', enabled: false, id: 0 },
      { buildName: '1384.2', startDate: '02/10/2018', endDate: '01/11/2018', enabled: false, id: 1 },
      { buildName: '1384.3', startDate: '02/11/2018', endDate: '01/12/2018', enabled: false, id: 2 },
      { buildName: '1384.4', startDate: '02/12/2018', endDate: '01/01/2019', enabled: false, id: 3 },
      { buildName: '1384.5', startDate: '02/01/2019', endDate: '01/02/2019', enabled: false, id: 4 },
      { buildName: '1394.1', startDate: '01/09/2018', endDate: '01/10/2018', enabled: false, id: 0 },
      { buildName: '1394.2', startDate: '02/10/2018', endDate: '01/11/2018', enabled: false, id: 1 },
      { buildName: '1394.3', startDate: '02/11/2018', endDate: '01/12/2018', enabled: false, id: 2 },
      { buildName: '1394.4', startDate: '02/12/2018', endDate: '01/01/2019', enabled: false, id: 3 },
      { buildName: '1384.5', startDate: '02/01/2019', endDate: '01/02/2019', enabled: false, id: 4 },
      { buildName: '1374.1', startDate: '01/09/2018', endDate: '01/10/2018', enabled: false, id: 0 },
      { buildName: '1374.2', startDate: '02/10/2018', endDate: '01/11/2018', enabled: false, id: 1 },
      { buildName: '1374.3', startDate: '02/11/2018', endDate: '01/12/2018', enabled: false, id: 2 },
      { buildName: '1374.4', startDate: '02/12/2018', endDate: '01/01/2019', enabled: false, id: 3 },
      { buildName: '1374.5', startDate: '02/01/2019', endDate: '01/02/2019', enabled: false, id: 4 },
      { buildName: '9284.1', startDate: '01/09/2018', endDate: '01/10/2016', enabled: false, id: 0 },
      { buildName: '9284.2', startDate: '02/10/2018', endDate: '01/11/2016', enabled: false, id: 1 },
      { buildName: '9284.3', startDate: '02/11/2018', endDate: '01/12/2016', enabled: false, id: 2 },
      { buildName: '9284.4', startDate: '02/12/2018', endDate: '01/01/2016', enabled: false, id: 3 },
      { buildName: '9284.5', startDate: '02/01/2019', endDate: '01/02/2016', enabled: false, id: 4 },
      { buildName: '9294.1', startDate: '01/09/2018', endDate: '01/10/2016', enabled: false, id: 0 },
      { buildName: '9294.2', startDate: '02/10/2018', endDate: '01/11/2016', enabled: false, id: 1 },
      { buildName: '9294.3', startDate: '02/11/2018', endDate: '01/12/2016', enabled: false, id: 2 },
      { buildName: '9294.4', startDate: '02/12/2018', endDate: '01/01/2016', enabled: false, id: 3 },
      { buildName: '9284.5', startDate: '02/01/2019', endDate: '01/02/2016', enabled: false, id: 4 },
      { buildName: '9274.1', startDate: '01/09/2018', endDate: '01/10/2016', enabled: false, id: 0 },
      { buildName: '9274.2', startDate: '02/10/2018', endDate: '01/11/2016', enabled: false, id: 1 },
      { buildName: '9274.3', startDate: '02/11/2018', endDate: '01/12/2016', enabled: false, id: 2 },
      { buildName: '9274.4', startDate: '02/12/2018', endDate: '01/01/2016', enabled: false, id: 3 },
      { buildName: '9274.5', startDate: '02/01/2019', endDate: '01/02/2016', enabled: false, id: 4 },
      { buildName: '9384.1', startDate: '01/09/2018', endDate: '01/10/2016', enabled: false, id: 0 },
      { buildName: '9384.2', startDate: '02/10/2018', endDate: '01/11/2016', enabled: false, id: 1 },
      { buildName: '9384.3', startDate: '02/11/2018', endDate: '01/12/2016', enabled: false, id: 2 },
      { buildName: '9384.4', startDate: '02/12/2018', endDate: '01/01/2016', enabled: false, id: 3 },
      { buildName: '9384.5', startDate: '02/01/2019', endDate: '01/02/2016', enabled: false, id: 4 },
      { buildName: '9394.1', startDate: '01/09/2018', endDate: '01/10/2016', enabled: false, id: 0 },
      { buildName: '9394.2', startDate: '02/10/2018', endDate: '01/11/2016', enabled: false, id: 1 },
      { buildName: '9394.3', startDate: '02/11/2018', endDate: '01/12/2016', enabled: false, id: 2 },
      { buildName: '9394.4', startDate: '02/12/2018', endDate: '01/01/2016', enabled: false, id: 3 },
      { buildName: '9384.5', startDate: '02/01/2019', endDate: '01/02/2016', enabled: false, id: 4 },
      { buildName: '9374.1', startDate: '01/09/2018', endDate: '01/10/2016', enabled: false, id: 0 },
      { buildName: '9374.2', startDate: '02/10/2018', endDate: '01/11/2016', enabled: false, id: 1 },
      { buildName: '9374.3', startDate: '02/11/2018', endDate: '01/12/2016', enabled: false, id: 2 },
      { buildName: '9374.4', startDate: '02/12/2018', endDate: '01/01/2016', enabled: false, id: 3 },
      { buildName: '9374.5', startDate: '02/01/2019', endDate: '01/02/2016', enabled: false, id: 4 },
      { buildName: '9684.1', startDate: '01/09/2018', endDate: '01/10/2017', enabled: false, id: 0 },
      { buildName: '9684.2', startDate: '02/10/2018', endDate: '01/11/2017', enabled: false, id: 1 },
      { buildName: '9684.3', startDate: '02/11/2018', endDate: '01/12/2017', enabled: false, id: 2 },
      { buildName: '9684.4', startDate: '02/12/2018', endDate: '01/01/2017', enabled: false, id: 3 },
      { buildName: '9684.5', startDate: '02/01/2019', endDate: '01/02/2017', enabled: false, id: 4 },
      { buildName: '9694.1', startDate: '01/09/2018', endDate: '01/10/2017', enabled: false, id: 0 },
      { buildName: '9694.2', startDate: '02/10/2018', endDate: '01/11/2017', enabled: false, id: 1 },
      { buildName: '9694.3', startDate: '02/11/2018', endDate: '01/12/2017', enabled: false, id: 2 },
      { buildName: '9694.4', startDate: '02/12/2018', endDate: '01/01/2017', enabled: false, id: 3 },
      { buildName: '9684.5', startDate: '02/01/2019', endDate: '01/02/2017', enabled: false, id: 4 },
      { buildName: '9674.1', startDate: '01/09/2018', endDate: '01/10/2017', enabled: false, id: 0 },
      { buildName: '9674.2', startDate: '02/10/2018', endDate: '01/11/2017', enabled: false, id: 1 },
      { buildName: '9674.3', startDate: '02/11/2018', endDate: '01/12/2017', enabled: false, id: 2 },
      { buildName: '9674.4', startDate: '02/12/2018', endDate: '01/01/2017', enabled: false, id: 3 },
      { buildName: '9674.5', startDate: '02/01/2019', endDate: '01/02/2017', enabled: false, id: 4 },
      { buildName: '9684.1', startDate: '01/09/2018', endDate: '01/10/2017', enabled: false, id: 0 },
      { buildName: '9684.2', startDate: '02/10/2018', endDate: '01/11/2017', enabled: false, id: 1 },
      { buildName: '9684.3', startDate: '02/11/2018', endDate: '01/12/2017', enabled: false, id: 2 },
      { buildName: '9684.4', startDate: '02/12/2018', endDate: '01/01/2017', enabled: false, id: 3 },
      { buildName: '9684.5', startDate: '02/01/2019', endDate: '01/02/2017', enabled: false, id: 4 },
      { buildName: '9694.1', startDate: '01/09/2018', endDate: '01/10/2017', enabled: false, id: 0 },
      { buildName: '9694.2', startDate: '02/10/2018', endDate: '01/11/2017', enabled: false, id: 1 },
      { buildName: '9694.3', startDate: '02/11/2018', endDate: '01/12/2017', enabled: false, id: 2 },
      { buildName: '9694.4', startDate: '02/12/2018', endDate: '01/01/2017', enabled: false, id: 3 },
      { buildName: '9684.5', startDate: '02/01/2019', endDate: '01/02/2017', enabled: false, id: 4 },
      { buildName: '9674.1', startDate: '01/09/2018', endDate: '01/10/2017', enabled: false, id: 0 },
      { buildName: '9674.2', startDate: '02/10/2018', endDate: '01/11/2017', enabled: false, id: 1 },
      { buildName: '9674.3', startDate: '02/11/2018', endDate: '01/12/2017', enabled: false, id: 2 },
      { buildName: '9674.4', startDate: '02/12/2018', endDate: '01/01/2017', enabled: false, id: 3 },
      { buildName: '9674.5', startDate: '02/01/2019', endDate: '01/02/2017', enabled: false, id: 4 },
    ];

    this.buildData = new MatTableDataSource(data.map((row) => new BuildModel().deserialize(row)));
    console.log(this.buildData);
  }

  applyFilter(filterValue: string) {
    this.buildData.filter = filterValue.trim().toLowerCase();
  }
}
