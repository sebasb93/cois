import { Routes } from '@angular/router';

//Main components
import { ConfigurationComponent } from './components/configuration/configuration.component';
import { HomeComponent } from './components/home/home.component';
import { InventaryComponent } from './components/inventary/inventary.component';
import { LoginComponent } from './components/login/login.component';
import { TransactionComponent } from './components/transaction/transaction.component';

//ChildComponents
import { AddUserComponent } from './components/configuration/add-user/add-user.component';
import { EditUserComponent } from './components/configuration/edit-user/edit-user.component';
import { AddItemComponent } from './components/inventary/add-item/add-item.component';
import { EditItemComponent } from './components/inventary/edit-item/edit-item.component';
import { ShowItemComponent } from './components/inventary/show-items/show-items.component';
import { AddInputTransactionComponent } from './components/transaction/add-input-transaction/add-input-transaction.component';
import { AddOutputTransactionComponent } from './components/transaction/add-output-transaction/add-output-transaction.component';
import { ShowMyTransactionsComponent } from './components/transaction/show-my-transactions/show-my-transactions.component';
import { ShowTransactionsComponent } from './components/transaction/show-transactions/show-transactions.component';
import { AuthorizeTransactionComponent } from './components/transaction/authorize-transaction/authorize-transaction.component';

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
    
    
