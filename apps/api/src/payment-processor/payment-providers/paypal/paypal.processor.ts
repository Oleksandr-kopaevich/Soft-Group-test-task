import {
  PaymentProcessor,
  PaymentResult,
} from '../../types/payment-processor.interface';

export class PaypalProcessor implements PaymentProcessor {
  async initiatePayment(
    amount: number,
    currency: string,
  ): Promise<PaymentResult> {
    console.log(`Processing payment with PayPal: ${amount} ${currency}`);

    return { success: true, message: 'Payment processed with PayPal' };
  }

  async handle3DSecure(redirectUrl: string): Promise<PaymentResult> {
    console.log(
      `Handling 3D Secure with PayPal, redirecting to: ${redirectUrl}`,
    );

    return { success: true, message: '3D Secure processed with PayPal' };
  }
}
