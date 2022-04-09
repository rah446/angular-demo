import { Component, OnInit } from '@angular/core';
import { Router,NavigationEnd  } from '@angular/router';
// import { filter } from '@rxjs/operators';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  title = 'angularTest';
  currentRoute: string;
  constructor(private router: Router){ }

    ngOnInit(): void {
        this.router.events.subscribe((event) => {
          if(event instanceof NavigationEnd) {
            this.currentRoute = (<NavigationEnd>event).url;
          }
        });
    }
}
