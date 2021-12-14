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
      }
    ])
  }
}
