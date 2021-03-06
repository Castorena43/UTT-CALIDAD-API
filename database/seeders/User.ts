import BaseSeeder from '@ioc:Adonis/Lucid/Seeder'
import User from 'App/Models/User'

export default class UserSeeder extends BaseSeeder {
  public static async run () {
    await User.createMany([
      {
        email: 'admin@gmail.com',
        roleId: 1,
        areaId: 1,
        isActive: true,
        password: '1234',
      },
      {
        email: 'lidercalidad@gmail.com',
        roleId: 2,
        areaId: 2,
        isActive: true,
        password: '1234',
      },
      {
        email: 'liderx@gmail.com',
        roleId: 3,
        areaId: 3,
        isActive: true,
        password: '1234',
      },
      {
        email: 'secretariox@gmail.com',
        roleId: 4,
        areaId: 4,
        isActive: true,
        password: '1234',
      },
    ])
  }
}
