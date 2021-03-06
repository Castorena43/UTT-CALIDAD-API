/*
|--------------------------------------------------------------------------
| Routes
|--------------------------------------------------------------------------
|
| This file is dedicated for defining HTTP routes. A single file is enough
| for majority of projects, however you can define routes in different
| files and just make sure to import them inside this file. For example
|
| Define routes in following two files
| ├── start/routes/cart.ts
| ├── start/routes/customer.ts
|
| and then import them inside `start/routes.ts` as follows
|
| import './routes/cart'
| import './routes/customer'
|
*/

import Route from '@ioc:Adonis/Core/Route'

Route.get('/', async () => {
  return { hello: 'world' }
})

Route.post('login', 'AuthController.login')
Route.delete('logout', 'AuthController.logout').middleware(['auth:api'])
Route.post('register', 'UsersController.store');
Route.group(() => {
  Route.resource('users', 'UsersController')
  Route.get('user', 'UsersController.getUser')
  Route.resource('docs', 'DocumentsController')
  // Route.post('doc', 'DocumentsController.store')
  Route.post('update-doc', 'DocumentsController.updateStatus')
  Route.resource('requests', 'RequestsController')
  Route.post('update-req', 'RequestsController.updateStatus')
})
  .prefix('api/v1')
  .middleware(['auth:api'])