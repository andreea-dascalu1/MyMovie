import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {

  registerForm!: FormGroup;
  constructor(private router: Router, private _snackBar: MatSnackBar, private http:HttpClient) { }

  ngOnInit(): void {
    this.initializeForm();
  }

  initializeForm() {
    this.registerForm = new FormGroup({
      fname: new FormControl(null, Validators.required),
      lname: new FormControl(null, Validators.required),
      email: new FormControl(null, Validators.required),
      password: new FormControl(null, Validators.required),
      confirmPassword: new FormControl(null, Validators.required),
    });
  }

  register() {
    //todo
    const body = {
      email: "eve.holt@reqres.in",
      password: "cityslicka"
  }
    this.http.post("http://localhost:3000/users", body).subscribe(
      (res: any) => {
        console.log(res)
        this.router.navigateByUrl('/login');
        this._snackBar.open('Register Successfully!', '', {
          duration: 2000,
        });
      }, (error) => {
        console.error(error)
        this._snackBar.open(error.error.error, '', {
          duration: 2000,
        });
      }


    )
  }
  
  get email() {
    return this.registerForm.get('email');
  }

  get password() {
    return this.registerForm.get('password');
  }

}
