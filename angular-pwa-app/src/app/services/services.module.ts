import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HttpServiceModule } from './http-service/http-service.module';
import { ApiManagerModule } from './api-manager/api-manager.module';

@NgModule({
	imports: [
		CommonModule,
		HttpServiceModule,
		ApiManagerModule
	],
	declarations: [],
})
export class ServicesModule { }
