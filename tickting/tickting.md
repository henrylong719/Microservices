

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





































