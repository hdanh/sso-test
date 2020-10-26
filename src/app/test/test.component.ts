import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-test',
  templateUrl: './test.component.pug',
  styleUrls: ['./test.component.scss'],
})
export class TestComponent implements OnInit {
  @Input() token: string;

  constructor(private route: ActivatedRoute) {}

  ngOnInit(): void {
    this.route.queryParams.subscribe((params) => {
      this.token = params['token'];
    });
  }
}
