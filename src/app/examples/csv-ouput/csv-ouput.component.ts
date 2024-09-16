import { CommonModule } from '@angular/common';
import { Component, OnInit, ViewChild } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';
import { MatPaginator, MatPaginatorModule } from '@angular/material/paginator';
import { MatSort, MatSortModule } from '@angular/material/sort';
import { MatTableDataSource, MatTableModule } from '@angular/material/table';
import { saveAs } from 'file-saver';

@Component({
  selector: 'app-csv-ouput',
  standalone: true,
  imports: [
    CommonModule,
    MatButtonModule,
    MatIconModule,
    MatListModule,
    MatTableModule,
    MatPaginatorModule,
    MatSortModule,
  ],
  templateUrl: './csv-ouput.component.html',
  styleUrl: './csv-ouput.component.scss',
})
export class CsvOuputComponent implements OnInit {
  dataSource: MatTableDataSource<[]> = new MatTableDataSource();
  displayedColumns: string[] = [
    'Date',
    'Open',
    'High',
    'Low',
    'Adj Close',
    'Volume',
  ];
  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;
  appleStockData!: any[];

  constructor() {}

  ngOnInit(): void {
    this.loadData();
  }

  loadData(): void {
    Promise.all([fetch('assets/data/aapl.json')]).then(async ([data]) => {
      this.appleStockData = await data.json();
      this.dataSource = new MatTableDataSource(this.appleStockData);
      this.dataSource.paginator = this.paginator;
      this.dataSource.sort = this.sort;
    });
  }

  exportCSV(): void {
    const csvString = [
      this.displayedColumns,
      ...this.appleStockData.map((item) => [
        item['Date'],
        item['Open'],
        item['High'],
        item['Low'],
        item['Adj Close'],
        item['Volume'],
      ]),
    ]
      .map((e) => e.join(','))
      .join('\n');

    const blob = new Blob([csvString], { type: 'text/csv;charset=utf-8' });
    const fileName = 'applie-stock.csv';
    saveAs(blob, fileName);
  }
}
