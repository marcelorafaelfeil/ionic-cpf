import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppComponent} from './app.component';
import {IonicCpfModule} from '../../src';
import {FormsModule} from '@angular/forms';

@NgModule({
	imports: [
		BrowserModule,
		IonicCpfModule,
		FormsModule
	],
	declarations: [
		AppComponent,
	],
	providers: [],
	bootstrap: [AppComponent]
})
export class AppModule {
}
