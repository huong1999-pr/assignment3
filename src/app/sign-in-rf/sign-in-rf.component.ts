import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-sign-in-rf',
  templateUrl: './sign-in-rf.component.html',
  styleUrls: ['./sign-in-rf.component.scss'],
})
export class SignInRfComponent implements OnInit {
  // signInForm = new FormGroup({
  //   username: new FormControl(''),
  //   password: new FormControl(''),
  //   rememberMe: new FormControl(false),
  // });
  signInForm: FormGroup;

  constructor(private fb: FormBuilder) {}
  ngOnInit(): void {
    this.signInForm = this.fb.group({
      email: '',
      password: '',
      rememberMe: false,
    });
  }
  onSubmit(): void {
    console.log(this.signInForm);
    if (!this.signInForm.value.email.includes('@')) {
      alert('Email value is not accepted!');
    }
    if (this.signInForm.value.password == '') {
      alert('Password value cannot empty!');
    } else if (this.signInForm.value.password.length <= 8) {
      alert('Password value is not accepted!');
    }
  }
}
