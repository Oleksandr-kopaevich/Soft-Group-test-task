## Backend (NestJS in apps/api)

```
apps/api/
│
├── src/
│ ├── products/ # Products module
│ │ ├── products.controller.ts
│ │ ├── products.service.ts
│ │ └── products.module.ts
| |
│ ├── payment-processor/ # Module that handles payments
│ │ ├── payment-providers/ # Implementation of specific payment providers
| | | ├── braintree
| | | ├── paypal
| | | └── stripe
| | |
│ │ └──payment-processor.service.ts
│ │
│ ├── checkout/ # Checkout module
| |  └── checkout.service # Checkout endpoint with example of PaymentProcessor service usage
| |
│ ├── orders/ # Orders module
│ ├── customers/ # Customers module
| |
│ └── app.module.ts
│
├── test/
└── main.ts # Entry point for the NestJS application
```
