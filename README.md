# FoodMarket - Fresh Groceries & Food Delivery

A modern, responsive e-commerce website built with Next.js, TypeScript, and Tailwind CSS for fresh grocery delivery.

## 🚀 Features

- **Modern UI/UX**: Clean, responsive design with Tailwind CSS
- **Product Catalog**: Browse products by categories with filtering and sorting
- **Shopping Cart**: Add/remove items, quantity management, and price calculation
- **User Authentication**: Login and signup functionality
- **Product Details**: Detailed product pages with descriptions and pricing
- **Special Deals**: Dedicated deals page with discount promotions
- **Mobile Responsive**: Fully responsive design for all device sizes

## 🛠️ Tech Stack

- **Framework**: Next.js 15 with App Router
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **Linting**: ESLint with Next.js config
- **Package Manager**: npm

## 📦 Pages Included

- **Home** (`/`) - Hero section, featured categories, and products
- **Shop** (`/shop`) - Product catalog with filtering and sorting
- **Product Details** (`/product/[id]`) - Individual product pages
- **Shopping Cart** (`/cart`) - Cart management and checkout summary
- **Login/Signup** (`/login`) - User authentication
- **Deals** (`/deals`) - Special offers and promotions

## 🚀 Getting Started

### Prerequisites

- Node.js 18+ and npm
- Git

### Installation

1. Clone the repository:
   ```bash
   git clone <repository-url>
   cd foodmarket
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Start the development server:
   ```bash
   npm run dev
   ```

4. Open [http://localhost:3000](http://localhost:3000) in your browser.

## 📜 Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run start` - Start production server
- `npm run lint` - Run ESLint

## 🎨 Design Features

- **Color Scheme**: Pink/red primary colors with clean grays
- **Typography**: Inter font for modern readability
- **Layout**: Mobile-first responsive design
- **Components**: Reusable UI components
- **Icons**: Text-based icons and emojis for simplicity

## 📱 Responsive Design

The application is fully responsive and works on:
- Mobile devices (320px+)
- Tablets (768px+)
- Desktops (1024px+)
- Large screens (1280px+)

## 🔧 Development

### Project Structure

```
src/
├── app/
│   ├── globals.css          # Global styles
│   ├── layout.tsx           # Root layout
│   ├── page.tsx             # Home page
│   ├── shop/
│   │   └── page.tsx         # Shop page
│   ├── product/
│   │   └── [id]/
│   │       └── page.tsx     # Product details
│   ├── cart/
│   │   └── page.tsx         # Shopping cart
│   ├── login/
│   │   └── page.tsx         # Authentication
│   └── deals/
│       └── page.tsx         # Deals page
```

### Styling

The project uses Tailwind CSS with a custom color palette:
- Primary colors: Pink/red theme
- Custom utilities for consistent spacing
- Responsive design utilities

### TypeScript

Fully typed components and interfaces for:
- Product data structures
- Cart item management
- Form handling
- Component props

## 🌟 Future Enhancements

- **Backend Integration**: Connect to a real API
- **Payment Processing**: Stripe/PayPal integration
- **User Profiles**: Complete user management system
- **Order History**: Track previous orders
- **Search Functionality**: Product search and filtering
- **Wishlist**: Save favorite products
- **Reviews & Ratings**: Customer feedback system

## 📄 License

This project is licensed under the MIT License.

## 🤝 Contributing

1. Fork the project
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## 📞 Support

For support, email support@foodmarket.com or create an issue on GitHub.

---

Built with ❤️ using Next.js and Tailwind CSS