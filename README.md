
# AI SaaS Project

## Overview
This project is an AI SaaS platform designed to generate AI-based content, including chat completions, images, music, code, and video generations. Built using Next.js, Prisma, Supabase, Clerk, OpenAI, Replicate AI, Stripe, and Crisp, the platform offers a free trial of 5 generations and allows users to upgrade to a pro subscription for additional features and increased usage limits.

## Features
- **Free Trial:** 5 free AI generations for new users.
- **API Limit Count:** Track usage and limit API requests.
- **Subscription:** Upgrade to pro for more free generations and additional features.
- **Stripe Integration:** Handle payments and subscriptions seamlessly.
- **Authentication:** Secure user authentication using Clerk.
- **Authorization:** Protect routes and manage user access.
- **Landing Page:** Engaging and informative landing page.
- **Protected Routes:** Secure sensitive routes to ensure only authorized access.
- **Webhook:** Handle real-time updates and events.
- **Prisma ORM:** Efficient database management with Prisma.

## Technologies Used
- **Next.js:** Frontend framework for server-side rendering and static site generation.
- **Prisma:** ORM for database management and operations.
- **Supabase:** Backend service providing database and authentication.
- **Clerk:** Authentication service for secure user login.
- **OpenAI:** AI model for generating chat completions.
- **Replicate AI:** AI models for generating images, music, code, and videos.
- **Stripe:** Payment processing and subscription management.
- **Crisp:** Customer messaging platform for user support.

## Getting Started

### Prerequisites
Ensure you have the following installed:
- Node.js
- npm or yarn
- PostgreSQL (or any database supported by Prisma)

### Installation
1. **Clone the repository:**
    ```bash
    git clone https://github.com/your-username/ai-saas-project.git
    cd ai-saas-project
    ```

2. **Install dependencies:**
    ```bash
    npm install
    # or
    yarn install
    ```

3. **Set up environment variables:**
    Create a `.env` file in the root directory and add your configuration:
    ```env
    NEXT_PUBLIC_SUPABASE_URL=your-supabase-url
    NEXT_PUBLIC_SUPABASE







