# MaskClub

<p align="center">
  <img src="https://github.com/caiodomingues/MaskClub/blob/master/frontend/src/assets/logo-inverse.svg">
</p>

This page was made for a college project; It's **not** mobile-friendly (yet), sorry 😅.

Note that the frontend only implements the UI, so there's none functionality done yet. You can navigate through the pages to see the results normally, for example, by clicking on the submit button of login forms to see the next page.

## Instructions

```bash
$ git clone https://github.com/caiodomingues/MaskClub.git
$ cd MaskClub

$ cd frontend
$ yarn
$ yarn start

$ cd backend
$ yarn
$ yarn dev
```

**Note:** For the correct usage of the project, it's necessary to copy the `.env_example` file, with the name `.env` and configure the connection string of a MongoDB database.

## Docs

Although the project was made with TypeScript, there's basic code documentation made with JSDocs/TSDocs:

```tsx
/**
 * Save the user on browser's localStorage
 * @param token A Bearer token
 * @param user The user object
 */
async function saveUser(token: string, user: UserProps) {
  localStorage.setItem("example_token", token);
  localStorage.setItem("example_user", JSON.stringify(user));
}
```

You can check the page design (please note that doesn't reflect the final result) on [this folder](https://github.com/caiodomingues/MaskClub/blob/master/docs/design/)

### API

You can find the Insomnia documentation file [here](https://github.com/caiodomingues/MaskClub/blob/master/docs/routes_api.json).

For a better understanding, the API documentation is structured like:

#### Auth

The project needs to implement a basic JWT Auth, you can use the following routes:

- [x] 1. Create: User creation: insomnia - Create - POST
- [x] 2. Login: User authentication: insomnia - Login - POST

#### Events

The core of the project is creating a simple application that handles an Event creation (doesn't handle edition), you can get a single or all events information, save and destroy an event, and there's a route for implementing a Like/Dislike feature as well.

- [x] 3. Index: User list: insomnia - Index - GET
- [x] 4. Show: Event view: insomnia - Show - GET
- [x] 5. Store: Event creation: insomnia - Create - POST
- [x] 6. Destroy: Event deletion: insomnia - Delete - DELETE
- [x] 7. Like/Dislike: Event Like / dislike: insomnia - Like/Dislike - POST\*

<sup>\* This route is could be done using Socket.io to make information broadcast, but we've decided to not take this project so deep</sup>

Made by [caiodomingues](https://github.com/caiodomingues) and [thobiasvicente](https://github.com/thobiasvicente)
