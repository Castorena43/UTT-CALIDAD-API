import BaseSeeder from '@ioc:Adonis/Lucid/Seeder'
import Role from 'App/Models/Role'

export default class RoleSeeder extends BaseSeeder {
  public static async run () {
    await Role.createMany([
      {
        name: 'Admin',
      },
      {
        name: 'Lider de calidad', // Ver y aprobar o rechazar solicitudes
      },
      {
        name: 'Lider X', // Crear solicitud y docs
      },
      {
        name: 'Secretario X', // Leer documentos
      },
    ])
  }
}
