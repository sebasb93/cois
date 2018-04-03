import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterModule} from '@angular/router';
import { HttpModule } from '@angular/http';

//Main components
import { ConfigurationComponent } from './configuration/configuration.component';
import { HomeComponent } from './home/home.component';
import { InventaryComponent } from './inventary/inventary.component';
import { LoginComponent } from './login/login.component';
import { TransactionComponent } from './transaction/transaction.component';
import { appRoutes } from './app.routing';

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

import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent,
    ConfigurationComponent,
    HomeComponent,
    InventaryComponent,
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
    BrowserModule,
    FormsModule,
    HttpModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
