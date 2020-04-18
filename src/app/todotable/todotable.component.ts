import { Component, OnInit, ViewChild } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { ITodo } from '../interfaces/itodo';
import { TodoService } from '../services/todo.service';
import { MatSort } from '@angular/material/sort';

@Component({
  selector: 'app-todotable',
  templateUrl: './todotable.component.html',
  styleUrls: ['./todotable.component.css']
})
export class TodotableComponent implements OnInit {

  displayedColumns: string[] = ['id', 'title', 'status', 'description', 'createdAt'];
  dataSource: MatTableDataSource<ITodo>;

  @ViewChild(MatSort, { static: true }) sort: MatSort;

  constructor(private todoService: TodoService) { }

  ngOnInit() {
    this.dataSource = new MatTableDataSource(this.todoService.getTodos());

    this.dataSource.sort = this.sort;
  }

}
