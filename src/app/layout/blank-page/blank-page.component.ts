import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Http, RequestOptions } from '@angular/http';
import { Observable, Subscription } from 'rxjs/Rx';
import { NgForm } from '@angular/forms';

import 'rxjs/add/observable/interval';


@Component({
    selector: 'app-blank-page',
    templateUrl: './blank-page.component.html',
    styleUrls: ['./blank-page.component.scss']
})
export class BlankPageComponent implements OnInit {

    constructor(private http: HttpClient) { }

    ngOnInit() { }

    onSubmit(form: NgForm) {

        console.log(form.value.svnurl, form.value.user, form.value.pass);
        this.onClick(form.value.svnurl, form.value.user, form.value.pass);
    }

    // https://openge.ge.com/svn/soacoe/tags/Power/WellandMES/AprilRelease/DPERP-WELLANDMES-Integrations/

    onClick(svnurl, user, pass) {
        console.log('method triggered');
        // tslint:disable:max-line-length
        this.http.post('http://alpmdmappdvn01.corporate.ge.com:8008/job/GEProcessScanTool/buildWithParameters?token=remoteToken&svnurl=' + svnurl + '&username=' + user + '&password=' + pass, null, { headers: {} })
            .subscribe(
                res => {
                    console.log('Success ' + res);
                },
                err => {
                    console.log('Error occured ' + err);
                }
            );


        /*let headerss = new Headers();
        headerss.append('Content-Type', 'application/x-www-form-urlencoded');
        headerss.append('Accept', 'application/json');
        headerss.append('Authorization', 'Basic ' + 'NTAzMDM1MzYyOlBpbmd1QDE3UmlzaA==');
        let options = new RequestOptions({ headers: headerss });*/

        /*

          let headers = new HttpHeaders({
              'svnurl': 'test',
              'username': 'test',
              'password': 'test'
          });


          // tslint:disable:max-line-length
          // 'http://alpmdmappdvn01.corporate.ge.com:8008/job/GEProcessScanTool/buildWithParameters?token=remoteToken&svnurl=https://openge.ge.com/svn/soacoe/tags/Power/WellandMES/AprilRelease/DPERP-WELLANDMES-Integrations/&username=rishi.sridhar&password=rishi.sridhar'
          this.http.post('http://alpmdmappdvn01.corporate.ge.com:8008/job/GEProcessScanTool/buildWithParameters?token=remoteToken', httpOptions).subscribe(
              error => console.log(error)
          );*/
    }

    onClicky() {

        let i = 1;
        const timer = Observable.timer(0, 1000);

        const sub: Subscription = timer.subscribe(tick => {
            i++;
            console.log('loggyyyy');
            if (i === 10) {
                sub.unsubscribe();
            }

        });
        // tslint:disable:max-line-length
        this.http.get('http://alpmdmappdvn01.corporate.ge.com:8008/job/GEProcessScanTool/lastBuild/api/xml', { responseType: 'text' })
            .subscribe(
                res => {
                    console.log('Success ' + res);
                },
                err => {
                    console.log(err);
                    alert(JSON.stringify(err));
                }
            );
    }
}
