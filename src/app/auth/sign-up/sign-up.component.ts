import { AuthService } from './../auth.service';
import { NgForm } from '@angular/forms';
import { Component, OnInit, ViewChild } from '@angular/core';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.css']
})
export class SignUpComponent implements OnInit {

  @ViewChild('myForm', { static: true }) myForm: NgForm;
  constructor(private authService: AuthService) { }

  ngOnInit() {
  }

  onSubmit() {
     const email = this.myForm.value.email;
     const password = this.myForm.value.password;
     this.authService.signUpUser(email, password);
  }

}
