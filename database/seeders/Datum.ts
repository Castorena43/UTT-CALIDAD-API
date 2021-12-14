import BaseSeeder from '@ioc:Adonis/Lucid/Seeder'
import AreaSeeder from './Area'
import AreaViewSeeder from './AreaView'
import RoleSeeder from './Role'
// import UserSeeder from './User'
import ViewSeeder from './View'


export default class DatumSeeder extends BaseSeeder {
  public async run () {
    await AreaSeeder.run()
    await RoleSeeder.run()
    await ViewSeeder.run()
    await AreaViewSeeder.run()
    // await UserSeeder.run()
  }
}
