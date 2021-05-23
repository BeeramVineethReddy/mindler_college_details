import { Component, OnInit } from '@angular/core';


import { DatabaseService } from 'src/app/services/database.service';

import { College } from 'src/app/services/College';
import { MatTableDataSource } from '@angular/material/table';
@Component({
  selector: 'app-college-details',
  templateUrl: './college-details.component.html',
  styleUrls: ['./college-details.component.css']
})


export class CollegeDetailsComponent implements OnInit {

  constructor(private db : DatabaseService) { }

  columns = ["Name","Year Estd.","State","City","Facilities"];
  index = ["name","year_founded","state","city","facilities"]

  
  colleges : College[] = [];

  ngOnInit(): void {
    this.db.getColleges().subscribe(
      (response)=>{
        this.colleges = response;
      },
      (error)=>console.log(error)
    )
  }

  //dataSource = new MatTableDataSource(this.colleges);
  
  // applyFilter(filterValue: string)
  // {
  //   this.dataSource.filter = filterValue.trim().toLowerCase();
  // }

}
