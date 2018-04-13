import { CustomItemTransaction } from "./item-transaction";

export class Transaction {
    id: string;
    date: Date;
    type: string;
    comments: string;
    authorizated: boolean;
    authorizationUserId: string;
    authorizationType: string;
    user: string;
    transactionItems:CustomItemTransaction[];
}
