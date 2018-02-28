# Ionic Cpf Component
It's an ionic component for cpf (individual registration for brazilians). This component, build an input with four parts according cpf format.

## Getting started
To install, is necessary to run the command `npm install --save ionic-cpf` and then include the module in your app module:
	
	...
	@NgModule({
    	imports: [
    		BrowserModule,
    		IonicCpfModule,
    		FormsModule
    	]
	...

Now, you can call the component with the tag `ionic-cpf`:

	<ionic-cpf [(ngModel)]="cpf"></ionic-cpf>
	
That will build:

![Screen 01](https://raw.githubusercontent.com/marcelorafaelfeil/ionic-cpf/developer/example/assets/cpf-example-01.png)
![Screen 02](https://raw.githubusercontent.com/marcelorafaelfeil/ionic-cpf/developer/example/assets/cpf-example-02.png)
.
