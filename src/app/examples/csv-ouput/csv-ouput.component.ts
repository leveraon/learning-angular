import { CommonModule } from '@angular/common';
import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';
import { MatPaginator, MatPaginatorModule } from '@angular/material/paginator';
import { MatSort, MatSortModule } from '@angular/material/sort';
import { MatTableDataSource, MatTableModule } from '@angular/material/table';

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
export class CsvOuputComponent implements OnInit, AfterViewInit {
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

  constructor() {}

  ngOnInit(): void {
    this.loadData();
  }

  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
  }

  loadData(): void {
    Promise.all([fetch('assets/data/aapl.json')]).then(async ([data]) => {
      const apple = await data.json();
      this.dataSource = new MatTableDataSource(apple);
    });
  }
}
