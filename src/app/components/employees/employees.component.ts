import { Component,ViewChild,AfterViewInit } from '@angular/core';
import { AuthenticationService } from 'src/app/services/authentication.service';
import { EmployeeDetailsService } from 'src/app/services/employee-details.service';
//import {MatSort } from '@angular/material/sort';
//import {MatTableDataSource} from '@angular/material/table';
import { User } from 'src/app/models/user';
@Component({
  selector: 'app-employees',
  templateUrl: './employees.component.html',
  styleUrls: ['./employees.component.css']
})
export class EmployeesComponent {
  constructor(private authenticationService: AuthenticationService,
              private employeeDetailsService: EmployeeDetailsService,
              ){}
              employeeData: Array<any>=[];
              searchText: string = '';
              displayedColumns: string[] = ['Name', 'Employee ID', 'Date of Joining', 'Seat'];
              selectedEmployee: any;
              newSeat: any;
             // dataSource = new MatTableDataSource<User>(this.employeeData);
            
         //     @ViewChild(MatSort) sort!: MatSort;
            
              // ngAfterViewInit(): void {
              //   this.dataSource.sort = this.sort;
              // }
  ngOnInit(){
     this.employeeDetailsService.getEmployeeList().subscribe((res: any)=>{
      this.employeeData = res;
      console.log(res,"employeeData");
     })
  }
  logout() {
    this.authenticationService.logout();
}
openModal(item: any){
  this.selectedEmployee = item;
  const modalDiv= document.getElementById('myModal');
    if(modalDiv!==null){
      modalDiv.style.display = 'block';
    }
}
closeModal(){
  const modalDiv= document.getElementById('myModal');
  if(modalDiv!==null){
    modalDiv.style.display = 'none';
  }
}
onUpdate(){
  this.employeeData.map((item)=>{
    if(item == this.selectedEmployee){
      item.seat = this.newSeat;
      this.closeModal();
    } 
  })
}
}
