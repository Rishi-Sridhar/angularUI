import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { routerTransition } from '../router.animations';
import { NgForm } from '@angular/forms';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Component({
    selector: 'app-login',
    templateUrl: './login.component.html',
    styleUrls: ['./login.component.scss'],
    animations: [routerTransition()]
})
export class LoginComponent implements OnInit {

    constructor(public router: Router, private http: HttpClient) {
    }
    ngOnInit() {
        localStorage.setItem('isLoggedin', 'false');
        // console.log(localStorage.getItem('isLoggedin'));
    }

    onSubmit(form: NgForm) {

        const headers = new HttpHeaders({ 'Content-Type': 'application/xml' }).set('Accept', 'text/xml');
        // tslint:disable:max-line-length
        const body = '<soapenv:Envelope xmlns:soapenv="http://schemas.xmlsoap.org/soap/envelope/" xmlns:v1="com/Schemas/UserWrapperPayload/V1"><soapenv:Header/><soapenv:Body><v1:ValidationRequest><v1:username>' + form.value.user + '</v1:username><v1:password>' + form.value.pass + '</v1:password><v1:application>ProcessScanTool</v1:application><v1:subapplication>ProcessScanTool</v1:subapplication></v1:ValidationRequest></soapenv:Body></soapenv:Envelope>';
        this.http.post('http://tst-ibs.corporate.ge.com/UserAuthenticationService/ValidateUser', body, { responseType: 'text' }).subscribe

            (data => {
                console.log('success', data);
                const loc = data.indexOf('<ns1:isAuthenticated>') + 21;
                const endloc = data.indexOf('</ns1:isAuthenticated>');
                const str = data.substring(loc, endloc);
                console.log(str);
                if (str === 'true') {
                    localStorage.setItem('isLoggedin', 'true');
                    this.router.navigate(['/dashboard']);
                } else {
                    localStorage.setItem('isLoggedin', 'false');
                }
            },
            err => { console.log('error', err); }
            );

    }

    onLoggedin(form: NgForm) {
        console.log(form.value.user, form.value.pass);
        localStorage.setItem('isLoggedin', 'true');
    }
}
