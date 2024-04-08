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