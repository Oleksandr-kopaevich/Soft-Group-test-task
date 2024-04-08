import {
  PaymentProcessor,
  PaymentResult,
} from '../../types/payment-processor.interface';

export class StripeProcessor implements PaymentProcessor {
  async initiatePayment(
    amount: number,
    currency: string,
  ): Promise<PaymentResult> {
    console.log(`Processing payment with Stripe: ${amount} ${currency}`);

    return { success: true, message: 'Payment processed with Stripe' };
  }

  async handle3DSecure(redirectUrl: string): Promise<PaymentResult> {
    console.log(
      `Handling 3D Secure with Stripe, redirecting to: ${redirectUrl}`,
    );

    return { success: true, message: '3D Secure processed with Stripe' };
  }
}
