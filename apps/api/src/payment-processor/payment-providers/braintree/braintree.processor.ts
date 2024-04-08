import {
  PaymentProcessor,
  PaymentResult,
} from '../../types/payment-processor.interface';

export class BraintreeProcessor implements PaymentProcessor {
  async initiatePayment(
    amount: number,
    currency: string,
  ): Promise<PaymentResult> {
    console.log(`Processing payment with Braintree: ${amount} ${currency}`);

    return { success: true, message: 'Payment processed with Braintree' };
  }

  async handle3DSecure(redirectUrl: string): Promise<PaymentResult> {
    console.log(
      `Handling 3D Secure with Braintree, redirecting to: ${redirectUrl}`,
    );

    return { success: true, message: '3D Secure processed with Braintree' };
  }
}
