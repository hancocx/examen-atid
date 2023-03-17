import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { ApiService } from '../servicios/api.service';
import { LoginInterface } from '../modelos/login.interface';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})

export class LoginComponent implements OnInit {

  loginForm = new FormGroup({
    username: new FormControl('', Validators.required),
    password: new FormControl('', Validators.required)
  })

  //console.log(form);
  constructor(private api: ApiService) { }

  ngOnInit(): void {
    const userData = {
      username: 'ROL-A',
      password: 'RolAPwd#'
    };
    this.api.login(userData).subscribe((res) => console.log('Login'));
  }

  /*ngLogin(form: LoginInterface) {
    //console.log(form);
    this.api.loginByEmail(form).subscribe(data => {
      console.log(data);
    })
  }*/
}
