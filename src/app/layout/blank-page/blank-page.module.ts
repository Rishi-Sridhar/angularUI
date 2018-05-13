import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';


import { BlankPageRoutingModule } from './blank-page-routing.module';
import { BlankPageComponent } from './blank-page.component';
import { HttpModule } from '@angular/http';

@NgModule({
    imports: [CommonModule, BlankPageRoutingModule,  HttpClientModule, HttpModule],
    declarations: [BlankPageComponent]
})
export class BlankPageModule {}
