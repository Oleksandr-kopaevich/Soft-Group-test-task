import { Injectable } from '@nestjs/common';
import { PaymentProcessorService } from 'src/payment-processor/payment-processor.service';
import { BraintreeProcessor } from 'src/payment-processor/payment-processors/braintree/braintree.processor';
import { PaypalProcessor } from 'src/payment-processor/payment-processors/paypal/paypal.processor';
import { StripeProcessor } from 'src/payment-processor/payment-processors/stripe/stripe.processor';

@Injectable()
export class CheckoutService {
  constructor(private paymentService: PaymentProcessorService) {}

  async checkout(amount: number, currency: string, paymentMethod: string) {
    switch (paymentMethod) {
      case 'stripe':
        this.paymentService.setPaymentProcessor(new StripeProcessor());
        break;

      case 'braintree':
        this.paymentService.setPaymentProcessor(new BraintreeProcessor());
        break;

      case 'paypal':
        this.paymentService.setPaymentProcessor(new PaypalProcessor());
        break;
    }

    return this.paymentService.processPayment(amount, currency);
  }
}
