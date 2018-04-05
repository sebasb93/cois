import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterModule} from '@angular/router';
import { HttpModule } from '@angular/http';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

//Main components
import { ConfigurationComponent } from './components/configuration/configuration.component';
import { HomeComponent } from './components/home/home.component';
import { InventaryComponent } from './components/inventary/inventary.component';
import { LoginComponent } from './components/login/login.component';
import { TransactionComponent } from './components/transaction/transaction.component';
import { appRoutes } from './app.routing';

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
    NgbModule.forRoot(),
    BrowserModule,
    FormsModule,
    HttpModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
