import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'Logo',
  templateUrl: './logo.component.html',
  styleUrls: ['./logo.component.css']
})
export class LogoComponent implements OnInit {
  @Input() size: string;

  constructor() {}

  ngOnInit() {
    console.log('logo passed in = ', this.size);
  }

}
