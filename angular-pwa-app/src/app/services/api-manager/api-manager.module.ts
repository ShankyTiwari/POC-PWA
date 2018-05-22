import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ApiManagerService }  from './api-manager.service';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [],
	providers: [
		ApiManagerService
	]
})
export class ApiManagerModule { }
