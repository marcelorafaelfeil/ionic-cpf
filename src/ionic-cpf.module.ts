import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {IonicCpfComponent} from './lib/component/ionic-cpf.component';
import {FormsModule} from '@angular/forms';

@NgModule({
	imports: [
		CommonModule,
		FormsModule
	],
	exports: [
		IonicCpfComponent
	],
	declarations: [
		IonicCpfComponent
	],
	providers: [],
})
export class IonicCpfModule {
}
