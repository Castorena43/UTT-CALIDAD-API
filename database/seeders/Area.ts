import BaseSeeder from '@ioc:Adonis/Lucid/Seeder'
import Area from 'App/Models/Area'

export default class AreaSeeder extends BaseSeeder {
  public static async run () {
    await Area.createMany([
      {
        name: 'Desarrollo',
        email: 'desarrollo@gmail.com',
      },
      {
        name: 'Calidad',
        email: 'desarrollo@gmail.com',
      },
      {
        name: 'Servicios Administrativos',
        email: 'luis.carrilloo.perez@gmail.com',
      },
      {
        name: 'Vinculación',
        email: 'aguscas43630@gmail.com',
      },
    ])
  }
}
