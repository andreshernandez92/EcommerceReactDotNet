export interface Paymentinfo {
    id: string,
    amount: number,
    created: Date,
    clientSecret: string,
    currency: string,
    paymentMethodType: string
}