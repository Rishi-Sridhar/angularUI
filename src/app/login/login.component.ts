import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { routerTransition } from '../router.animations';
import { NgForm } from '@angular/forms';

@Component({
    selector: 'app-login',
    templateUrl: './login.component.html',
    styleUrls: ['./login.component.scss'],
    animations: [routerTransition()]
})
export class LoginComponent implements OnInit {

    constructor(public router: Router) {
    }
    ngOnInit() { }

    onSubmit(form: NgForm) {

        console.log(form.value.user, form.value.pass);
        localStorage.setItem('isLoggedin', 'false');
        if (form.value.user === 'rishi' && form.value.pass === '12345') {
            this.router.navigate(['/dashboard']);
        }

    }

    onLoggedin(form: NgForm) {
        console.log(form.value.user, form.value.pass);
        localStorage.setItem('isLoggedin', 'true');
    }
}
