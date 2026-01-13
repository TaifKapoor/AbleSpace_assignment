## Technology Choices

### Backend: Express.js + TypeScript
Although NestJS was recommended, I chose Express.js for the following reasons:
- Faster development and simpler setup for an MVP
- Full control over the scraping pipeline and middleware
- Excellent ecosystem for rate limiting, caching, and error handling
- Easier integration with Crawlee and Playwright for headless browsing
- Clean folder structure with separation of concerns (controllers, services, middleware)

The application still follows production best practices with proper typing, error handling, and modular code.