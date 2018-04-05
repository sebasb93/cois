export class Transaction {
    id: string;
    userId: string;
    date: Date;
    type: string;
    comments: string[];
    authorizated: boolean;
    authorizationUserId: string;
    authorizationType: string;
}