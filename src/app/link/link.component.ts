import { Link } from './../category';
import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-link',
  templateUrl: './link.component.html',
  styleUrls: ['./link.component.scss']
})
export class LinkComponent implements OnInit {

  @Input() link: Link;
  getFav: String = "https://plus.google.com/_/favicon?domain_url=";

  constructor() { }

  ngOnInit() {

  }

}
