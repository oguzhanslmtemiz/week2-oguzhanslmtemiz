# API Reference

| Route      | HTTP Verb | POST body                                                   | Description | Auth   |
| ---------- | --------- | ----------------------------------------------------------- | ----------- | ------ |
| /login     | `POST`    | { username: 'username', password: 'password' }              | Login       |        |
| /register  | `POST`    | { name: 'name' ,username: 'username', password: 'password'} | Register    |        |
| /dashboard | `GET`     |                                                             | Dashboard   | Bearer |
