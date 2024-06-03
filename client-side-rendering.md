## Client Side Rendering

- This method of rendering, where the component code is transformed into a user interface directly within the browser(the client), is known as client-side rendering.
- CSR quickly became the standard for SPAs, with widespread adoption

## Drawbacks of CSR

- ### SEO
  - Generating HTML that mainly contains a single div tag is not optimal for SEO, as it provides little content for search engines to index
- ### Performance
  - Having the browser (the client) handle all the work, such as fetching data, computing the UI, and making the HTML interactive, can slow things down. Users might see a blank screen or a loading spinner while the page loads.
  - Each new feature added to the application increases the size of the JavaScript bundle, prolonging the wait time for users to see the UI

## Server Side Solutions

- It significantly improves SEO because search engines can easily index the server-rendered content
- Users can immediately see the page HTML content, instead of a black screen or loading spinner
- ### Hydration
  - During hydration, React takes control in the browser, reconstructing the component tree in memory based on the static HTML that was served
  - It carefully plans the placement of interactive elements within this tree. Then, React proceeds to bind the necessary JavaScript logic to these elements
  - This involves initializing the application state, attaching event handlers for actions such as clicks and mouseover and setting up any dynamic functionalities required for a fully interactive user experience
- There are two SSR techniques
  - ### Static Site Generation
    - SSG occurs at build time, when the application is deployed on the server. This results in pages that are already rendered and ready to serve. It is ideal for content that doesn't change often, like blog posts
  - ### Server Side Rendering
    - SSR on the other hand, renders pages on-demand in response to user requests. It is suitable for personalized content like social media feeds, where the HTML depends on the logged-in user.

## Drawbacks of SSR

- ### You have to fetch everything before you can show anything
  - Components cannot start rendering and the pause or `wait` while data is still being loaded
  - If a component needs to fetch data from a database or another source (like an API), this fetching must be completed before the server can begin rendering the page
  - This can delay the server's response time to the browser, as the server must finish collecting all necessary data before any part of the page can be sent to the client.
- ### You have to load everything before you can hydrate anything
  - For successful hydration, where React adds interactivity to the server-rendered HTML, the component tree in the browser must be exactly match the server-generated component tree
  - That means that all the JavaScript for the components must be loaded on the client before you can start hydrating any of them.
- ### You have to hydrate everything before you can interact with anything
  - React hydrated the component tree in a single pass, meaning once it starts hydrating, it won't stop until it's finished with the entire tree.
  - As a consequences, all components must be hydrated before you can interact with any of them.

## Suspense SSR Architecture

- Use the `<Suspense>` component to unlock two major SSR features:
  - ### HTML streaming on the server
    - You don't have to fetch everything before you can show anything
    - If a particular section delays the initial HTML, it can be seamlessly integrated into the stream later
    - This is the essence of how Suspense facilitates server-side HTML streaming
  - ### Selective hydration on the client
    - By wrapping the main section with `<Suspense>`, you've indicated to React that it should not prevent the rest of the page from not just streaming but also from hydrating.
    - This feature, called `selective hydration` allows for the hydration of sections as they become available, before the rest of the HTML and the JavaScript code are fully downloaded.
