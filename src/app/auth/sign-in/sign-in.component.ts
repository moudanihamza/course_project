import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.css']
})
export class SignInComponent implements OnInit {
  @ViewChild('myForm', { static: true }) myForm: NgForm;

  constructor(private authService: AuthService) { }

  ngOnInit() {
  }

  onSubmit() {
    const email = this.myForm.value.email;
    const password = this.myForm.value.password;
    this.authService.signInUser(email, password);
 }
}
