# Angular 14 Easy Sidebar

A modern admin dashboard built with Angular 14, featuring a responsive sidebar navigation, authentication system, and a beautiful UI design.

## Features

- 🔐 Authentication system with login page
- 📱 Responsive sidebar navigation
- 🎨 Modern UI with gradient backgrounds
- 📦 Modular component architecture
- 🔄 Dynamic routing system
- 🎯 Route guards for protected routes
- 🌈 Beautiful CSS animations and transitions

## Prerequisites

- Node.js (v14 or higher)
- npm (v6 or higher)
- Angular CLI (v14.2.0)

## Installation

1. Clone the repository:
```bash
git clone <repository-url>
```

2. Navigate to the project directory:
```bash
cd angular-14-easy-sidebar
```

3. Install dependencies:
```bash
npm install
```

4. Start the development server:
```bash
npm start
```

The application will be available at `http://localhost:4200`

## Project Structure

```
src/
├── app/
│   ├── auth/                 # Authentication services and guards
│   ├── login/               # Login component
│   ├── views/               # Feature components
│   │   ├── category/        # Category-related components
│   │   ├── plugins/         # Plugin-related components
│   │   └── posts/          # Post-related components
│   ├── app.component.*      # Root component
│   ├── app.module.ts        # Root module
│   └── app.routing.module.ts # Routing configuration
└── assets/                  # Static assets
```

## Features Overview

### Authentication

- Login system with username/password
- Route protection with AuthGuard
- Automatic redirect to login for unauthorized access

### Navigation

- Collapsible sidebar menu
- Nested menu items with animations
- Responsive design for mobile devices
- Active route highlighting

### Components

1. Dashboard
2. Category Section
   - HTML & CSS
   - JavaScript
   - PHP & MySQL
3. Posts Section
   - Web Design
   - Login Form
   - Card Design
4. Analytics
5. Charts
6. Plugins
   - UI Face
   - Pigments
   - Box Icons
7. Explore
8. History
9. Settings

## Development

### Development server

Run `npm start` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

### Build

Run `npm run build` to build the project. The build artifacts will be stored in the `dist/` directory.

### Running tests

Run `npm test` to execute the unit tests via Karma.

### Running end-to-end tests

Run `npm run e2e` to execute the end-to-end tests via Protractor.

## Styling

The project uses a combination of:
- Custom CSS with modern features
- Bootstrap 5
- Font Awesome icons
- Box icons
- Google Fonts (Poppins)

## Login Credentials

For development purposes:
- Username: `admin`
- Password: `admin`

## Browser Support

The dashboard is compatible with:
- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## License

This project is licensed under the MIT License - see the LICENSE file for details.
