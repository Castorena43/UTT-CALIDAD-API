import BaseSeeder from '@ioc:Adonis/Lucid/Seeder'
import AreaView from 'App/Models/AreaView'

export default class AreaViewSeeder extends BaseSeeder {
  public static async run () {
    await AreaView.createMany([
    // DESARROLLO
      {
        areaId: 1,
        viewId: 1,
      },
      {
        areaId: 1,
        viewId: 2,
      },

      // Lider calidad
      // {
      //   areaId: 2,
      //   viewId: 1,
      // },
      {
        areaId: 2,
        viewId: 2,
      },

      // Lider x
      {
        areaId: 3,
        viewId: 1,
      },
      {
        areaId: 3,
        viewId: 2,
      },

      // secretario calidad
      {
        areaId: 4,
        viewId: 1,
      },
    ])
  }
}
