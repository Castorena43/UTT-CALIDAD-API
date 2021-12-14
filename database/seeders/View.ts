import BaseSeeder from '@ioc:Adonis/Lucid/Seeder'
import View from 'App/Models/View'

export default class ViewSeeder extends BaseSeeder {
  public static async run () {
    await View.createMany([
      {
        name: 'Documentos',
        path: '/main/docs',
        icon: 'account-group',
      },
      {
        name: 'Solicitudes',
        path: '/main/request',
        icon: 'clipboard-file',
      },
    ])
  }
}
