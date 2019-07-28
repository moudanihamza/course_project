import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { AppState } from 'src/app/store/app.reducers';
import { Store } from '@ngrx/store';
import * as AuthActions from '../auth.actions';

@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.css']
})
export class SignInComponent implements OnInit {
  @ViewChild('myForm', { static: true }) myForm: NgForm;

  constructor(private store: Store<AppState>) { }

  ngOnInit() {
  }

  onSubmit() {
    const email = this.myForm.value.email;
    const password = this.myForm.value.password;
    this.store.dispatch(new AuthActions.TrySignIn({ email: email, password: password }));
  }
}
