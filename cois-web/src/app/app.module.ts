import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule} from '@angular/router';
import { HttpModule } from '@angular/http';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

// Main components
import { ConfigurationComponent } from './components/configuration/configuration.component';
import { HomeComponent } from './components/home/home.component';
import { InventoryComponent } from './components/inventory/inventory.component';
import { LoginComponent } from './components/login/login.component';
import { TransactionComponent } from './components/transaction/transaction.component';
import { appRoutes } from './app.routing';

// ChildComponents
import { AddUserComponent } from './components/configuration/add-user/add-user.component';
import { EditUserComponent } from './components/configuration/edit-user/edit-user.component';
import { AddItemComponent } from './components/inventory/add-item/add-item.component';
import { EditItemComponent } from './components/inventory/edit-item/edit-item.component';
import { ShowItemComponent } from './components/inventory/show-items/show-items.component';
import { AddInputTransactionComponent } from './components/transaction/add-input-transaction/add-input-transaction.component';
import { AddOutputTransactionComponent } from './components/transaction/add-output-transaction/add-output-transaction.component';
import { ShowMyTransactionsComponent } from './components/transaction/show-my-transactions/show-my-transactions.component';
import { ShowTransactionsComponent } from './components/transaction/show-transactions/show-transactions.component';
import { AuthorizeTransactionComponent } from './components/transaction/authorize-transaction/authorize-transaction.component';

import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent,
    ConfigurationComponent,
    HomeComponent,
    InventoryComponent,
    LoginComponent,
    TransactionComponent,
    AddUserComponent,
    EditUserComponent,
    AddItemComponent,
    EditItemComponent,
    ShowItemComponent,
    AddInputTransactionComponent,
    AddOutputTransactionComponent,
    ShowMyTransactionsComponent,
    ShowTransactionsComponent,
    AuthorizeTransactionComponent
  ],
  imports: [
    NgbModule.forRoot(),
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    HttpModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
