import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ListRoutingModule } from './list-routing.module';
import { HttpModule } from '@angular/http';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ListComponent } from './list.component';

@NgModule({
  imports: [
    CommonModule,
    ListRoutingModule,
    HttpClientModule, HttpModule, FormsModule, ReactiveFormsModule
  ],
  declarations: [ListComponent]
})
export class ListModule { }
