# node-example-app

It's a step by step tutorial/commits which show the evolution from scratch to an Node API made with: `express` and `sequelize` (with postgresql). You can read the instruction or follow commit by commit the evolution of this.

## Getting Started

These instructions will get you a copy of the project up and running on your local machine for development and testing purposes. See deployment for notes on how to deploy the project on a live system.

### Prerequisites

You will need:
- (My recommendation is use [nodenv](https://github.com/nodenv/nodenv). But it's not necessary if you are starting and looks complicated for you)
- [Node](https://nodejs.org/en/)
- Also, (PostgreSQL)(https://www.postgresql.org/)

### Installing

#### Database
- 0. For the DB, you'll need an user with some special super powers (Login & CreateDB, and all). So, in `psql` run:

```psql
CREATE ROLE nodeuser;
ALTER ROLE nodeuser WITH LOGIN;
ALTER ROLE nodeuser WITH CREATEDB;
GRANT ALL ON schema public TO nodeuser;
```

- 1.A Clone [this repo](https://github.com/joseglego/node-example-app): `git@github.com:joseglego/node-example-app.git` with:
```sh
git clone git@github.com:joseglego/node-example-app.git
cd node-example-app
```

- 1.B Or start by your self:
```sh
mkdir node-example-app
cd node-example-app
```

### Commits / Step by Step
#### 0: Initial commit
Nothing special, define `package.json` and define first needs.

## Running the tests

No tests included yet.

## Deployment

Not worked yet.

## Authors

* **José Lezama** - *Initial work* - [joseglego.io](http://joseglego.io/) or [Github:](https://github.com/joseglego)

## License

This project is licensed under the MIT License - see the [LICENSE.md](LICENSE.md) file for details

## Acknowledgments
