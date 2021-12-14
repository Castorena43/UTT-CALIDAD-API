import BaseSeeder from '@ioc:Adonis/Lucid/Seeder'
import Area from 'App/Models/Area'

export default class AreaSeeder extends BaseSeeder {
  public static async run () {
    await Area.createMany([
      {
        id: 1,
        name: 'Desarrollo',
        email: 'desarrollo@gmail.com',
      },
      {
        id: 2,
        name: 'Area 2',
        email: 'area2@gmail.com',
      },
      {
        id: 3,
        name: 'Area 3',
        email: 'area3@gmail.com',
      },
      {
        id: 4,
        name: 'Area 4',
        email: 'area4@gmail.com',
      },
    ])
  }
}
