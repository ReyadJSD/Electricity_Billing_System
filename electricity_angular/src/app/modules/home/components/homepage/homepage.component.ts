import { Component } from '@angular/core';

import { ActivatedRoute, Router } from '@angular/router';


@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.css'],

})
export class HomepageComponent {
  constructor(private router: Router, private route: ActivatedRoute){}
  loginPage() {
    this.router.navigate(['customerlogin'])
  }
}
