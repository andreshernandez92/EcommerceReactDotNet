export interface Paymentsinfo {
    id: string,
    amount: number,
    created: Date,
    clientSecret: string,
    currency: string,
    paymentMethodType: string
}

export interface Payments{
    items: Paymentsinfo[];
}