

### Resource Type



![model](Images/model.png)



### Service types

![service](Images/service.png)



### Event and Architecture Design



![architecture](Images/architecture.png)





## Response Normalization Startefies



Create `rotues` folder and add `current-user.ts`, `signin.ts`, `signout.ts`, `signup.ts`

Add `error-handler.ts` to `middlewares` folder

Add `request-validation-error.ts` and `database-connection-error.ts` to `errors` folder

Add `custom-error` to `errors` folder



## Database Management and Modeling



Add `auth-mongo-depl.yaml` to `k8s`

Connect `mongodb` in `index.ts`



Create user model under `models`

Create `BadRequestError` under `errors`

Create `password.ts` under `services`

Add `userSchema.pre` in `user.ts` to hash password before saving



## Authentication Strategies and options



`npm install cookie-session @types/cookie-session `



set `cookieSession` in `auth/src/index.ts`



**Generating a JWT**

`npm i jsonwebtoken`

use jwt in `routes/signup.ts`





**Creating and accessing Secrets**

`kubectl create secret generic jet-secret --from-literal=JWT_KEY=asffu`

`kubectl get secrets`

Add `env` to `auth-depl`

use `env` in `signup.ts`

add `toJSON` in `user.ts`



Create `validate-request.ts` under `middlewares`

use `validateRequest` in `signin.ts` and `signup.ts`

Finalize `signin.ts`

Finalize `current-user.ts`

Finalize `signout-ts`

Create `current-user.ts` under `middleware` folder

Create `require-auth.ts` under `middleware` folder

Create `not-authorized-error.ts` under `errors`





## Testing isolated microservices

create `app.ts` and seperate logic in `index.ts`

run `npm install --save-dev @types/jest @types/supertest jest ts-jest supertest mongodb-memory-server`

Add `script` and `jest config` in the `package.json`

Create `test/setup.ts` under `src`

Create `__test__/signup.test.ts`  `signin.test.ts` `signout.test.ts` `current-user.test.ts` under `routes`

add `global.signin` in `setup.ts`



## Integrating a Server-Side-Rendered React App



create `client` folder and `npm init -y`

`npm i react react-dom next`

add `scripts` in `package.json`



Create `Dockerfile` and `.dockerignore`



**build next docker image locally**

`docker build -t henrylong719/client .`

` docker push henrylong719/client`



**Running Next in Kubernetes**

Create `client-depl.yaml`

Modify `skaffold.yaml`

Modify `ingress-src.yaml`



**Note on file change detection**

Create `next.config.js`

`k get pods`

` k delete pod client-depl-6d5c7ccd69-zxlql`

`k get pods`







## NATS Steaming Server



1. create `nats-depl.yaml` under `infra/k8s`
2. create service in `nats-depl.yaml`
3. run `k get pots` to see if **nats steaming server** is running







## Create expiration service



1. Build docker image

   `docker build -t henrylong719/expiration .`

2. Push to docker hub

   `docker push henrylong719/expiration`

3. Create deploy file under infra/k8s

​		`expiration-redis-depl.yaml`

​		`expiration-depl.yaml`

4. add expiration service to `skaffold.yaml`



## Create payments service

1. Build payments docker image

   `docker build -t henrylong719/payments .  `

2. Push to docker hub

   `docker push henrylong719/payments`

3. Create deploy file under infra/k8s

   `payments-depl.yaml`

   `payments-mongo-depl.yaml`

4. add payments service to `skaffold.yaml`

   

## Create secret stripe-key

1. `k create secret generic stripe-secret --from-literal STRIPE_KEY=...`
2. ` k get secrets   `
3. add `STRIPE_KEY` in the `payments-depl.yaml`
4. 













