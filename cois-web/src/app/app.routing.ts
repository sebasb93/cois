import { Routes } from '@angular/router';

import { ConfigurationComponent } from './configuration/configuration.component';
import { HomeComponent } from './home/home.component';
import { InventaryComponent } from './inventary/inventary.component';
import { LoginComponent } from './login/login.component';
import { TransactionComponent } from './transaction/transaction.component';

export const appRoutes: Routes = [
    { path: '', component: HomeComponent },
    { path: 'home', component: HomeComponent },
    { path: 'login', component: LoginComponent },
    { path: 'inventary', component: InventaryComponent },
    { path: 'transaction', component: TransactionComponent },
    { path: 'configuration', component: ConfigurationComponent }
]
    
    
