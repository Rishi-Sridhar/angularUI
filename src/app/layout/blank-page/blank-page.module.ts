import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';


import { BlankPageRoutingModule } from './blank-page-routing.module';
import { BlankPageComponent } from './blank-page.component';
import { HttpModule } from '@angular/http';
import { FormsModule } from '@angular/forms';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';

@NgModule({
    imports: [CommonModule, BlankPageRoutingModule, HttpClientModule, HttpModule, FormsModule],
    declarations: [BlankPageComponent]
})
export class BlankPageModule { }
