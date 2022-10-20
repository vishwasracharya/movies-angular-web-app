import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';

import { MainRoutingModule } from './main-routing.module';
import { MainComponent } from './main.component';
import { DashboardComponent } from './dashboard/dashboard.component';

@NgModule({
  declarations: [MainComponent, DashboardComponent],
  imports: [CommonModule, MainRoutingModule, ReactiveFormsModule],
})
export class MainModule {}
