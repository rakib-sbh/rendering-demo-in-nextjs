## RSC Rendering Lifecycle

- For React Server Components (RSC), it's important to consider three elements: browser(client), and on the server side, Next.js(the framework) and React(the library)

## Server Rendering Strategies

- ### Static Rendering
  - Static rendering is a server rendering strategy where we generate HTML pages at the time of building our application.
  - This approach allows the page to be built once, cached by a CDN, and served to the client almost instantly.
  - This optimization also enabled you to share the result of the rendering work among different users, resulting in a significant performance boost for your application
  - Static rendering is particularly useful for blog pages, e-commerce product pages, documentation and marketing pages
  - ### How to Statically Render
    - Static rendering is the default rendering strategy in the app router
    - All routes are automatically prepared at build time without additional setup
- ### Dynamic Rendering
  - Dynamic rendering is a server rendering strategy where routes are rendered for each user at request time
  - It is useful when a route has data that is personalized to the user or contains information that can only be known at request time, such as cookies or the URL's search parameters
  - News websites, personalized e-commerce pages, and social media feeds are some example where dynamic rendering is beneficial
  - ### How to Dynamically Render
    - During rendering, if a dynamic function is discovered, Next.js will switch to dynamic rendering the whole route
    - In Next.js, these dynamic functions are: `cookies()`, `headers()` and `searchParams`
- Streaming

## Prefetching

- Prefetching is a technique used to preload a route in the background before the user navigates to it
- Routes are automatically prefetched as they become visible in the user's viewport, either when the page first loads or as it comes into view through scrolling.
