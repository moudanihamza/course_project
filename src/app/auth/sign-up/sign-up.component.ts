import { NgForm } from '@angular/forms';
import { Component, OnInit, ViewChild } from '@angular/core';
import { Store } from '@ngrx/store';
import { AppState } from 'src/app/store/app.reducers';
import * as AuthActions from '../auth.actions';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.css']
})
export class SignUpComponent implements OnInit {

  @ViewChild('myForm', { static: true }) myForm: NgForm;
  constructor(private store: Store<AppState>) { }

  ngOnInit() {
  }

  onSubmit() {
    const email = this.myForm.value.email;
    const password = this.myForm.value.password;
    this.store.dispatch(new AuthActions.TrySignUp({ email: email, password: password }));
  }

}
