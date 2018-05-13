import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Http } from '@angular/http';


@Component({
    selector: 'app-blank-page',
    templateUrl: './blank-page.component.html',
    styleUrls: ['./blank-page.component.scss']
})
export class BlankPageComponent implements OnInit {

    constructor(private http: Http) {}

    ngOnInit() {}

    onClick() {
        const httpOptions = {
            headers: new HttpHeaders({
              'svnurl':  'test',
              'username': 'test',
              'password': 'test'
            })
          };
        // tslint:disable:max-line-length
        // 'http://alpmdmappdvn01.corporate.ge.com:8008/job/GEProcessScanTool/buildWithParameters?token=remoteToken&svnurl=https://openge.ge.com/svn/soacoe/tags/Power/WellandMES/AprilRelease/DPERP-WELLANDMES-Integrations/&username=rishi.sridhar&password=rishi.sridhar'
        this.http.post('http://alpmdmappdvn01.corporate.ge.com:8008/job/GEProcessScanTool/buildWithParameters?token=remoteToken', httpOptions);
    }
}
