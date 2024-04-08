import { Injectable } from '@nestjs/common';
import { PaymentProcessor } from './types/payment-processor.interface';
import { StripeProcessor } from './payment-providers/stripe/stripe.processor';

@Injectable()
export class PaymentProcessorService {
  private paymentProcessor: PaymentProcessor;

  constructor(paymentProcessor: PaymentProcessor) {
    // Default payment processor, can be dynamically set based on user choice or configuration
    this.paymentProcessor = paymentProcessor || new StripeProcessor();
  }

  setPaymentProcessor(processor: PaymentProcessor) {
    this.paymentProcessor = processor;
  }

  async processPayment(amount: number, currency: string) {
    return this.paymentProcessor.initiatePayment(amount, currency);
  }

  async handle3DSecure(redirectUrl: string) {
    return this.paymentProcessor.handle3DSecure(redirectUrl);
  }
}
