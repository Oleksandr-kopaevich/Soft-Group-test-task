# Design Choices and Patterns

**Monorepo with TurboRepo:** Using a monorepo approach simplifies dependency management, streamlines the development process, and facilitates code sharing between the frontend and backend, with TurboRepo providing efficient builds and task orchestration.  
**Next.js for the Frontend:** Utilizes SSR and SSG for improved performance and SEO. The file-based routing system simplifies navigation development, and the public directory offers an easy way to manage static assets.  
**NestJS for the Backend API:** Offers a scalable structure for handling business logic, with modules for each domain area (e.g., products, orders). NestJS's use of controllers, services, and modules aligns well with clean architecture principles, separating concerns and making the codebase more maintainable.  
**Shared UI Components:** Promotes reusability and consistency across the frontend, potentially across multiple frontends (e.g., web, admin panels) within the monorepo.  
**Shared Configurations and Models:** Ensures consistency in configurations (like API endpoints) and data models across the frontend and backend, reducing duplication and potential discrepancies.

# for task || see the next files

`apps/api/src/payment-processor` - folder with managing payment processors  
`apps/api/src/checkout/checkout.service.ts` - examples of using payment processor service during checkout

Here's how I'd structure the project:

# High-Level Structure (see more details in folders itself)

```
web-shop-monorepo/
│
├── apps/
│ ├── web/ # Next.js application for the frontend
│ └── api/ # NestJS application for the backend
│
├── packages/
│ ├── ui/ # Shared UI components
│ ├── config/ # Shared configurations
│ └── models/ # Shared TypeScript interfaces/models
│
├── turbo.json # TurboRepo configuration
└── package.json # Workspace package.json
```

## Frontend (Next.js in apps/web)

```
apps/web/
│
├── app/ # Routes and pages
│ ├── products/ # Product listing and detail pages
│ │ ├── services/ # business logic related to this specific page
│ │ ├── hooks/ # custom hooks related to this specific page
│ │ └── components/ # local components that are used only on this page
| |
│ ├── cart/ # Shopping cart page
│ │ ├── services/
│ │ ├── hooks/
│ │ └── components/
│ │
│ └── checkout/ # Checkout page
|
│
├── components/ # Common Reusable components
│ ├── ProductCard/
│ └── CategoryMenu/
│
├── services/ # Reusable business logic
│ └── http/ # common fetcher to work with API
│
├── hooks/ # Reusable hooks
│ └── useDebounce/ # common hook for delaying callback on rapidly repeating events
│
├── public/ # Static files like images and `favicon`
├── styles/ # Global and component CSS/SASS files
└── next.config.js # Next.js configuration
```

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

## Shared Packages in packages/

```
packages/
│
├── ui/ # Shared UI components
│ ├── Button/
│ └── Input/
│
├── config/ # Shared configurations like API endpoints
└── models/ # Shared TypeScript interfaces or models
├── product.ts
├── order.ts
└── user.ts
```
