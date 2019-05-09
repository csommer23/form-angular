import { Component, OnInit, OnDestroy } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-customer',
  templateUrl: './customer.component.html',
  styleUrls: ['./customer.component.scss']
})
export class CustomerComponent implements OnInit, OnDestroy {

  sub: Subscription;
  custom: any = {};

  constructor(
    private router: Router,
    private route: ActivatedRoute) { }

  ngOnInit() {
    this.sub = this.route.params.subscribe(
      (queryParams: any) => {
        this.custom.id = queryParams['id'];
      }
    );
  }

  ngOnDestroy(): void {
    this.sub.unsubscribe();
  }

}
