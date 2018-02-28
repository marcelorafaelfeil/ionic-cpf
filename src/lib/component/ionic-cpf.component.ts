import {AfterViewInit, Component, forwardRef, Input, ViewChild} from '@angular/core';
import {ControlValueAccessor, NG_VALUE_ACCESSOR} from '@angular/forms';


const CUSTOM_INPUT_CONTROL_VALUE = {
	provide: NG_VALUE_ACCESSOR,
	useExisting: forwardRef(() => IonicCpfComponent),
	multi: true
};

const noop = () => {
};

@Component({
	selector: 'ionic-cpf',
	template: '<input class="part-1" type="text" pattern="[0-9]*" maxlength="3" [(ngModel)]="part01" (keyup)="toNext(1)" #first autocomplete="off" />' +
	'.' +
	'<input class="part-2" type="text" pattern="[0-9]*" maxlength="3" [(ngModel)]="part02" (keyup)="controlCursor($event, 2)" #second autocomplete="off" />' +
	'.' +
	'<input class="part-3" type="text" pattern="[0-9]*" maxlength="3" [(ngModel)]="part03" (keyup)="controlCursor($event, 3)" #third autocomplete="off" />' +
	'-' +
	'<input class="part-4" type="text" pattern="[0-9]*" maxlength="2" [(ngModel)]="part04" (keyup)="controlCursor($event, 4)" #fourth autocomplete="off" />',
	styles: ['' +
	'input {' +
		'outline: none !important;' +
		'font-size: 2.5rem;' +
		'background-color: transparent;' +
		'display: inline-block;' +
		'border: 0px;' +
		'border-bottom: 1px solid #CCC;' +
		'width: 5rem;' +
	'}' +
	'input:focus {' +
		'border-bottom: 2px solid #00F !important;' +
	'}' +
	'.part-4 {' +
		'width: 3.8rem;' +
	'}'],
	providers: [CUSTOM_INPUT_CONTROL_VALUE]
})
export class IonicCpfComponent implements ControlValueAccessor, AfterViewInit {
	@Input()
	private focus: string;

	@ViewChild('first')
	private _domPt01: any;
	@ViewChild('second')
	private _domPt02: any;
	@ViewChild('third')
	private _domPt03: any;
	@ViewChild('fourth')
	private _domPt04: any;


	public cpf: number;
	private _part01: string;
	private _part02: string;
	private _part03: string;
	private _part04: string;

	private onChangeCallback: (_: any) => void = noop;

	constructor() {
		this._part01 = '';
		this._part02 = '';
		this._part03 = '';
		this._part04 = '';
	}

	ngAfterViewInit() {
		if (this.focus !== undefined) {
			this._domPt01.nativeElement.focus();
		}
	}

	private merge() {
		let part01: any = '';
		let part02: any = '';
		let part03: any = '';
		let part04: any = '';

		if (this._part01 !== undefined) {
			part01 = this._part01;
		}
		if (this._part02 !== undefined) {
			part02 = this._part02;
		}
		if (this._part03 !== undefined) {
			part03 = this._part03;
		}
		if (this._part04 !== undefined) {
			part04 = this._part04;
		}

		return part01 + part02 + part03 + part04;
	}

	set part01(v: any) {
		if (v !== this._part01) {
			this._part01 = v;
			this.cpf = this.merge();
			this.onChangeCallback(this.cpf);
		}
	}

	set part02(v: any) {
		if (v !== this._part02) {
			this._part02 = v;
			this.cpf = this.merge();
			this.onChangeCallback(this.cpf);
		}
	}

	set part03(v: any) {
		if (v !== this._part03) {
			this._part03 = v;
			this.cpf = this.merge();
			this.onChangeCallback(this.cpf);
		}
	}

	set part04(v: any) {
		if (v !== this._part04) {
			this._part04 = v;
			this.cpf = this.merge();
			this.onChangeCallback(this.cpf);
		}
	}

	writeValue(value: any): void {
		if (value != this.cpf) {
			this.cpf = value;
		}
	}

	registerOnChange(fn: any): void {
		this.onChangeCallback = fn;
	}

	registerOnTouched(fn: any): void {
	}

	public changeInp(part: number, event: any) {
		this.registerOnChange(event);
		this.cpf = part;
	}

	public toNext(key) {
		if (key == 1 && this._part01.length >= 3) {
			this._domPt02.nativeElement.focus();
		}
		if (key == 2 && this._part02.length >= 3) {
			this._domPt03.nativeElement.focus();
		}
		if (key == 3 && this._part03.length >= 3) {
			this._domPt04.nativeElement.focus();
		}
	}

	public controlCursor($event, key): void {
		if ($event.keyCode == 8 || $event.key == 'Backspace') {
			if (key == 2) {
				if (this._part02.length == 0) {
					this._domPt01.nativeElement.focus();
				}
			}
			if (key == 3) {
				if (this._part03.length == 0) {
					this._domPt02.nativeElement.focus();
				}
			}
			if (key == 4) {
				if (this._part04.length == 0) {
					this._domPt03.nativeElement.focus();
				}
			}
		} else {
			this.toNext(key);
		}
	}
}
