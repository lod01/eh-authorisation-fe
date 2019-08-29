import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {ExternalUrl} from '../external-url/external-url';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  private url: string;
  showPassword: boolean = false;

  constructor(private route: ActivatedRoute, private externalUrl: ExternalUrl) { }

  ngOnInit() {
    this.route.paramMap.subscribe((paramMap: any) => {
      this.url = paramMap.params.url;
    });
  }

  authorise() {
    // TODO: authorisation code here
    this.navigate();
  }

  navigate() {
    this.externalUrl.navigate(this.url);
  }
}
