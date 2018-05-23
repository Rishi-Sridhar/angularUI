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

    isFail = false;
    isSuccess = false;
    isLoad = false;

    constructor(public router: Router, private http: HttpClient) {
    }
    ngOnInit() {
        sessionStorage.setItem('isLoggedin', 'false');
        // console.log(sessionStorage.getItem('isLoggedin'));
    }

    onSubmit(form: NgForm) {
        this.isFail = false;
        this.isSuccess = false;

        this.isLoad = true;


        const headers = new HttpHeaders({ 'Content-Type': 'application/xml' }).set('Accept', 'text/xml');
        // tslint:disable:max-line-length
        const body = '<soapenv:Envelope xmlns:soapenv="http://schemas.xmlsoap.org/soap/envelope/" xmlns:v1="com/Schemas/UserWrapperPayload/V1"><soapenv:Header/><soapenv:Body><v1:ValidationRequest><v1:username>' + form.value.user + '</v1:username><v1:password>' + form.value.pass + '</v1:password><v1:application>ProcessScanTool</v1:application><v1:subapplication>ProcessScanTool</v1:subapplication></v1:ValidationRequest></soapenv:Body></soapenv:Envelope>';
        this.http.post('http://tst-ibs.corporate.ge.com/UserAuthenticationService/ValidateUser', body, { responseType: 'text' }).subscribe

            (data => {
                this.isLoad = false;

                console.log('success', data);
                const loc = data.indexOf('<ns1:isAuthenticated>') + 21;
                const endloc = data.indexOf('</ns1:isAuthenticated>');
                const str = data.substring(loc, endloc);
                // console.log(str);
                const loc2 = data.indexOf('<ns1:UserName>') + 14;
                const endloc2 = data.indexOf('</ns1:UserName>');
                const str2 = data.substring(loc2, endloc2);

                // console.log(str2);
                // Store
                sessionStorage.setItem('username', str2);
                // console.log(sessionStorage.getItem("username"));
                if (str === 'true') {
                    sessionStorage.setItem('isLoggedin', 'true');
                    this.isSuccess = true;
                    this.router.navigate(['/dashboard']);
                } else {
                    sessionStorage.setItem('isLoggedin', 'false');
                    this.isLoad = false;
                    this.isFail = true;
                }
            },
            err => {
                this.isLoad = false;

                console.log('error', err);
                alert('Network issue. Please ensure you are connected to GE VPN or the network is working properly.');
            }
            );

    }

    onLoggedin(form: NgForm) {
        console.log(form.value.user, form.value.pass);
        sessionStorage.setItem('isLoggedin', 'true');
    }
}
