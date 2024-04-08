import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ProductsModule } from './products/products.module';
import { CustomersModule } from './customers/customers.module';
import { OrdersModule } from './orders/orders.module';
import { PaymentProcessorService } from './payment-processor/payment-processor.service';
import { CheckoutModule } from './checkout/checkout.module';

@Module({
  imports: [ProductsModule, CustomersModule, OrdersModule, CheckoutModule],
  controllers: [AppController],
  providers: [AppService, PaymentProcessorService],
})
export class AppModule {}
