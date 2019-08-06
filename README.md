<h1 align="center">
    Api MeetApp
</h1>

<p align="center">
  <a href="#rocket-technologies">Technologies</a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
  <a href="#information_source-how-to-use">How To Use</a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
	<a href="#memo-license">License</a>
</p>

## :rocket: Technologies

This project was developed at the [RocketSeat GoStack Bootcamp](https://rocketseat.com.br/bootcamp) with the following technologies:

-  [Node.js][nodejs]
-  [Express](https://expressjs.com/)
-  [nodemon](https://nodemon.io/)
-  [Sucrase](https://github.com/alangpierce/sucrase)
-  [Sentry](https://github.com/getsentry/sentry)
-  [Sequelize](http://docs.sequelizejs.com/)
-  [PostgreSQL](https://www.postgresql.org/)
-  [node-postgres](https://www.npmjs.com/package/pg)
-  [Redis](https://redis.io/)
-  [JWT](https://jwt.io/)
-  [Multer](https://github.com/expressjs/multer)
-  [Bcrypt](https://www.npmjs.com/package/bcrypt)
-  [Youch](https://www.npmjs.com/package/youch)
-  [Yup](https://www.npmjs.com/package/yup)
-  [Bee Queue](https://github.com/bee-queue/bee-queue)
-  [Nodemailer](https://nodemailer.com/about/)
-  [date-fns](https://date-fns.org/)
-  [Sentry](https://sentry.io/)
-  [Express Async Errors](https://github.com/davidbanham/express-async-errors)
-  [DotEnv](https://www.npmjs.com/package/dotenv)
-  [VS Code][vc] with [ESLint][vceslint]

## :information_source: How To Use

To clone and run this application, you'll need [Git](https://git-scm.com), [Node.js v10.16][nodejs] or higher + [Yarn v1.13][yarn] or higher installed on your computer. From your command line:

```bash
# Clone this repository
$ git clone https://github.com/dionlopes/api-meetapp

# Go into the repository
$ cd api-meetapp

# Copy environment
$ cp .env.example .env

# Configure environment
Open .env and configure Database, Redis, Mail, Sentry

# Install dependencies
$ yarn

# Run database migrations
$ yarn sequelize db:migrate

# Run the app
$ yarn dev

# Run the queue
$ yarn queue
```

## :memo: License
This project is under the MIT license. See the [LICENSE](https://github.com/dionlopes/api-meetapp/blob/master/LICENSE) for more information.

---

Made with ♥ by Dion Lopes :wave: [Get in touch!](https://www.linkedin.com/in/dionlopes/)

[nodejs]: https://nodejs.org/
[yarn]: https://yarnpkg.com/
[vc]: https://code.visualstudio.com/
[vceditconfig]: https://marketplace.visualstudio.com/items?itemName=EditorConfig.EditorConfig
[vceslint]: https://marketplace.visualstudio.com/items?itemName=dbaeumer.vscode-eslint
