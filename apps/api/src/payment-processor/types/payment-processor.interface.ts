export interface PaymentProcessor {
  initiatePayment(amount: number, currency: string): Promise<PaymentResult>;
  handle3DSecure(redirectUrl: string): Promise<PaymentResult>;
}

export interface PaymentResult {
  success: boolean;
  message: string;
}
