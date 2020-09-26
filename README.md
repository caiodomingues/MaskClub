# MaskClub

This page was made for a college project; It's **not** mobile-friendly, sorry 😅.

Made by [caiodomingues](https://github.com/caiodomingues) and [thobiasvicente](https://github.com/thobiasvicente)

## API DOCS

You can find the documentation file [here.](https://github.com/caiodomingues/MaskClub/blob/master/docs/routes_api.json)

For a better understanding, the api documentation structure is like that:

### AUTH

- [x] 1. create: User creation: insomnia - Create - POST
- [x] 2. login: User authentication: insomnia - Login - POST

### EVENTS
- [x] 3. index: User list: insomnia - Index - GET
- [x] 4. show: Event view: insomnia - Show - GET
- [x] 5. store: Event creation: insomnia - Create - POST
- [x] 6. destroy: Event deletion: insomnia - Delete - DELETE
- [x] 7. like/dislike: Event Like / dislike: insomnia - Like/Dislike - POST

## BACKEND

For the correct use of the project, it is necessary to copy the `.env_example` file, with the name `.env` and configure the connection string of the MongoDB database.