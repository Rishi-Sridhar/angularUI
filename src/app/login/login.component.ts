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
    ngOnInit() {
        localStorage.setItem('isLoggedin', 'false');
        // console.log(localStorage.getItem('isLoggedin'));
    }

    onSubmit(form: NgForm) {

        console.log(form.value.user, form.value.pass);
        console.log(localStorage.getItem('isLoggedin'));
        if (form.value.user === 'rishi' && form.value.pass === '12345') {
            localStorage.setItem('isLoggedin', 'true');
            this.router.navigate(['/dashboard']);
        } else {
            localStorage.setItem('isLoggedin', 'false');
        }

    }

    onLoggedin(form: NgForm) {
        console.log(form.value.user, form.value.pass);
        localStorage.setItem('isLoggedin', 'true');
    }
}
