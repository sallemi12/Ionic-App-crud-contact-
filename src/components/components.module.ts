import { NgModule } from '@angular/core';
import { LoginComponent } from './login/login';
import { RegisterComponent } from './register/register';
import { DashboardComponent } from './dashboard/dashboard';
@NgModule({
	declarations: [LoginComponent,
    RegisterComponent,
    DashboardComponent],
	imports: [],
	exports: [LoginComponent,
    RegisterComponent,
    DashboardComponent]
})
export class ComponentsModule {}
