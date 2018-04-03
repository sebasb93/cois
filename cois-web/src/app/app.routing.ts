import { Routes } from '@angular/router';

//Main components
import { ConfigurationComponent } from './configuration/configuration.component';
import { HomeComponent } from './home/home.component';
import { InventaryComponent } from './inventary/inventary.component';
import { LoginComponent } from './login/login.component';
import { TransactionComponent } from './transaction/transaction.component';

//ChildComponents
import { AddUserComponent } from './configuration/add-user/add-user.component';
import { EditUserComponent } from './configuration/edit-user/edit-user.component';
import { AddItemComponent } from './inventary/add-item/add-item.component';
import { EditItemComponent } from './inventary/edit-item/edit-item.component';
import { ShowItemComponent } from './inventary/show-items/show-items.component';
import { AddInputTransactionComponent } from './transaction/add-input-transaction/add-input-transaction.component';
import { AddOutputTransactionComponent } from './transaction/add-output-transaction/add-output-transaction.component';
import { ShowMyTransactionsComponent } from './transaction/show-my-transactions/show-my-transactions.component';
import { ShowTransactionsComponent } from './transaction/show-transactions/show-transactions.component';
import { AuthorizeTransactionComponent } from './transaction/authorize-transaction/authorize-transaction.component';

export const appRoutes: Routes = [
    { path: '', component: HomeComponent },
    { path: 'home', component: HomeComponent },
    { path: 'login', component: LoginComponent },
    { path: 'inventary', component: InventaryComponent },
    { path: 'inventary/add-item', component: AddItemComponent },
    { path: 'inventary/edit-item', component: EditItemComponent },
    { path: 'inventary/show-item', component: ShowItemComponent },    
    { path: 'transaction', component: TransactionComponent },
    { path: 'transaction/add-input-transaction', component: AddInputTransactionComponent },
    { path: 'transaction/add-output-transaction', component: AddOutputTransactionComponent },
    { path: 'transaction/show-my-transaction', component: ShowMyTransactionsComponent },
    { path: 'transaction/show-transaction', component: ShowTransactionsComponent },
    { path: 'transaction/authorize-transaction', component: AuthorizeTransactionComponent },        
    { path: 'configuration', component: ConfigurationComponent },
    { path: 'configuration/add-user', component: AddUserComponent },
    { path: 'configuration/edit-user', component: EditUserComponent }
]
    
    
