import { Component, OnInit } from '@angular/core';
import { GetUserDataService } from '../get-user-data.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {

  constructor(private githubService: GetUserDataService) { }

  userName: string;


  ngOnInit(): void {
  }

  userObj: object

  getUsers() {
    this.githubService.getData(this.userName).subscribe((data) => {
      this.userObj = data
      console.log(typeof this.userObj)
      console.log(this.userObj)      
    })
  }

}
