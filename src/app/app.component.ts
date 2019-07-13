import { Category } from './category';
import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Observable, Subscription } from 'rxjs';
import { timer } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnDestroy, OnInit {

  private placeholderText = '';
  private inputForm: FormGroup;
  private clockSub: Subscription;
  public favourites = true;
  public editing = false;


  constructor(private formBuilder: FormBuilder) {
    this.inputForm = this.formBuilder.group({
      input: ''
    });
  }

  ngOnDestroy(): void {
    this.clockSub.unsubscribe();
  }

  ngOnInit() {
    const clock = timer(0, 900);

    this.clockSub = clock.subscribe(tick => {
      this.setTime();
    });
  }

  onSearch(inputData) {
    if (inputData.input.startsWith('www.')) {
      window.open('https://' + inputData.input);
    } else {
      window.open('https://google.com/search?q=' + inputData.input); // searches in google
    }
    this.inputForm.reset();
  }

  setTime() {
    const today = new Date();
    const h = today.getHours();
    let m: any = today.getMinutes();
    let s: any = today.getSeconds();

    // for some reason it doesn't function with a function
    if (m < 10) {
      m = '0' + m;
    }
    if (s < 10) {
      s = '0' + s;
    }

    this.placeholderText = h + ':' + m + ':' + s;
  }
}
