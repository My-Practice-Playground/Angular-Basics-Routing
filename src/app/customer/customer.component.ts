import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from "@angular/router";

@Component({
  selector: 'app-customer',
  templateUrl: './customer.component.html',
  styleUrls: ['./customer.component.scss']
})
export class CustomerComponent implements OnInit{
  data: string | null | undefined;
  constructor(private activatedRoute:ActivatedRoute) {
  }
  ngOnInit(): void {
    this.data = this.activatedRoute.snapshot.paramMap.get('data');
    console.log(this.data);
  }


}
