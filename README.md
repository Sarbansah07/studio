# Kasparro AI-SEO Platform

This project is a frontend implementation for Kasparro, an AI-native SEO & Brand Intelligence platform. It includes both a public-facing marketing website and a mocked product dashboard, built according to the provided engineering assignment.

The application is built with Next.js (App Router), TypeScript, and Tailwind CSS, leveraging shadcn/ui for the component library.

## Folder Structure

The project follows a feature-based folder structure, aiming for clarity and scalability.

```
/src
├── ai/                 # Genkit AI flows (pre-built, not to be modified)
├── app/                # Next.js App Router
│   ├── (app)/          # Routes for the authenticated dashboard
│   │   ├── architecture/
│   │   ├── audit/
│   │   ├── dashboard/
│   │   └── layout.tsx
│   ├── (public)/       # Routes for the public website
│   │   ├── about/
│   │   ├── platform/
│   │   ├── layout.tsx
│   │   └── page.tsx    # Home page
│   ├── globals.css     # Global styles and Tailwind directives
│   └── layout.tsx      # Root layout
├── components/         # Reusable React components
│   ├── layout/         # High-level layout components (headers, sidebars)
│   ├── pages/          # Components specific to a single page/feature
│   ├── shared/         # Components shared across multiple pages
│   └── ui/             # shadcn/ui components
├── contexts/           # React Context providers (e.g., DashboardProvider)
├── hooks/              # Custom React hooks (e.g., useToast, useIsMobile)
├── lib/                # Shared utilities, constants, and data models
└── public/             # Static assets
```

## Architectural Decisions

### System Design
The application is split into two main parts using Next.js Route Groups: `(public)` and `(app)`. This logically separates the marketing site from the product dashboard without affecting the URL structure.

- **Public Site (`(public)`)**: Composed of server components to optimize for fast initial loads and SEO.
- **Product Dashboard (`(app)`)**: A client-side heavy application shell that simulates an authenticated experience. It uses client components extensively to handle interactivity and state management.

### Component Architecture
Components are organized to promote reusability and maintainability:
- **`components/ui`**: Contains base UI primitives from `shadcn/ui`, which are the building blocks for all other components.
- **`components/shared`**: Houses components that are used in multiple, unrelated parts of the application (e.g., `Logo`, `ThemeToggle`).
- **`components/layout`**: Defines the main structural pieces of the site, like `PublicHeader`, `AppHeader`, and `AppSidebar`.
- **`components/pages`**: Holds components that are tightly coupled to a specific page or a complex feature. This prevents over-abstraction and keeps feature-specific logic co-located (e.g., `pages/home/Hero.tsx`, `pages/audit/ModuleDetails.tsx`).

### Data Modeling & State Management
- **Data Modeling**: All mocked data is strictly typed using interfaces defined in `src/lib/types.ts`. This ensures data consistency throughout the application. Mocked data is centralized in `src/lib/data.ts`, simulating a single source of truth that would be replaced by an API in a production environment.
- **State Management**: React Context (`src/contexts/DashboardProvider.tsx`) is used for managing global UI state, specifically the currently selected brand. This approach was chosen for its simplicity and because it's built into React, avoiding the need for a larger third-party library like Redux for this project's scale. For local component state (e.g., loading states, form inputs), `useState` is used.

### AI Integration
The application integrates with pre-built Genkit AI flows for two key features:
1.  **AI-SEO Audit**: On the `/app/audit-run` page, a form submission triggers the `generateAiSeoAudit` flow.
2.  **AI-Powered Recommendations**: On the `/app/audit/[slug]` pages, a "Generate" button triggers the `provideAiPoweredRecommendations` flow to enhance existing recommendations.

These interactions are handled in client components with loading and error states to provide a good user experience.

## Tradeoffs Made

- **Mocked Data Handling**: In the audit module details page (`/app/audit/[slug]`), data for *all* mocked brands is passed down to the client component. The component then filters the data based on the selected brand from the context. In a real-world application, the data would be fetched on the server for the specific brand based on user authentication, avoiding this over-fetching. This tradeoff was made to keep the data-loading logic simple while still demonstrating the use of both server components for data fetching and client components for interactivity.
- **Styling**: The color theme and typography are based on the proposal. Colors are defined as HSL variables in `globals.css` and leveraged by Tailwind and `shadcn/ui` components for a consistent theme that supports both light and dark modes.
- **No Backend**: The entire application is frontend-only, with AI features being called directly from server actions. This simplifies the setup but would be different in a production environment where a dedicated backend would handle business logic and communication with AI services.
