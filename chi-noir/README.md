# ChiNoir

## Best Way To Play

This game is recommended to play in your browsers fullscreen mode. The project works in most of the popular browsers.
Playing the game is simple all you need is to go to the link given (https://chi-noir.vercel.app/), or start the project with
next build
next start
After this all you need to do is to sit back take a notepad and a pen (you might need it!) and try to solve our case.

## Code Overview

### Frameworks

This Project uses NextJS technology for page management via app router.
For design we use tailwind mostly, but where tailwind was not enough we used our own custom CSS classes as well.

### Structure

- Our system uses useState() hooks for keeping track of players actions.
- For dialogues, they are being held in their respective arrays, and being used as user clicks and increments the element index.
- The dialogue boxes have their own action arrays, one for the name of the actions, and one for the actual funtions that will be run after the click.
- Our music wrapper uses useContext() hook from react and called inside layout.tsx, so the music won't be cut off during page changes.
- The HTML behind the scenes is pretty simple. We use a background image to give the scene, and everything comes on top of the background image.
- They way that different scenes in a single page are represented with fullscreen div's. With every location change inside the scene, UI just scrolls to the respective ID, and fills the whole screen (since they are all 100vh and 100vw).
- For contextual page changes, we use slug technology to be able to pass a single string parameter from one page to another (which is all we need during contextual changes).
