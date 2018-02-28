import {Component, ViewEncapsulation, ViewChild, Input} from '@angular/core';

@Component({
	selector: 'app-root',
	templateUrl: './app.component.html',
	styleUrls: ['./app.component.scss'],
	encapsulation: ViewEncapsulation.None,
})
export class AppComponent {
	@Input()
	public cpf: string;
}
