import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  logInForm!: FormGroup;
  rememberMe: boolean=false;

  constructor(private router:Router, private _snackBar:MatSnackBar, private http:HttpClient) { }

  ngOnInit(): void {
    this.rememberMe = false;
    this.initializeForm();
  }

  initializeForm() {
    this.logInForm = new FormGroup({
      email: new FormControl(null, Validators.required),
      password: new FormControl(null, Validators.required),
    });
  }

  logIn() {
    //todo
    const body = {
      email: "eve.holt@reqres.in",
      password: "cityslicka"
    }
    this.http.post("https://reqres.in/api/login", body).subscribe(
      (res: any) => {
        console.log(res)
        this.router.navigateByUrl('/dashboard');
        this._snackBar.open('Log In Successfully!', '', {
          duration: 2000,
        });
        localStorage.setItem('email', res['email']);
        localStorage.setItem('password', res['password']);
        window.localStorage.setItem("token",res.token);
        if(this.rememberMe) {
          localStorage.setItem('rememberMe', 'yes')
        }

      }, (error) => {
        console.error(error)
        this._snackBar.open(error.error.error, '', {
          duration: 2000,
        });
      }
    )

  }
  autoComplete(){
    const accessTokenObj = localStorage.getItem("token");
    // Retrieve rememberMe value from local storage
    const rememberMe = localStorage.getItem('rememberMe');
console.log(accessTokenObj);
    if (accessTokenObj && rememberMe == 'yes') {
      //this.logInForm.get(email)=localStorage.getItem('email');
    }
  }

  get email() {
    return this.logInForm.get('email');
  }

  get password() {
    return this.logInForm.get('password');
  }
}
