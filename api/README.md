# Follow-beers API

## Libraries

This app is build with the following libraries

- [Koa](https://koajs.com/)
- [Lowdb](https://github.com/typicode/lowdb)
- [Yup](https://github.com/jquense/yup)
- [Docker](https://docs.docker.com/)

## Documentation

An Open API specification is available here [_./resources/swagger.yml_](./resources/swagger.yml)

## Run

You can start it with the [_./Dockerfile_](./Dockerfile)
provided

```bash
docker build -t follow-beers-api .
docker run -p 4000:4000 -d follow-beers-api:latest
```
