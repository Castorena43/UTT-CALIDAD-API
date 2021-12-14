import { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import Database from '@ioc:Adonis/Lucid/Database'
import Document from 'App/Models/Document'
import CreateDocumentValidator from 'App/Validators/CreateDocumentValidator'

export default class DocumentsController {
  public async index({ response }: HttpContextContract) {
    const documents = await Document.query().where('status', 'aproved')
    return response.ok(documents)
  }

  public async store({ response, request }: HttpContextContract) {
    await request.validate(CreateDocumentValidator)
    const trx = await Database.transaction()

    try {
      const data = request.body()
      await Document.create(data, trx)
      await trx.commit()
      return response.created({
        status: true,
        message: 'Document was created successfully',
      })
    } catch (error: any) {
      await trx.rollback()
      return response.internalServerError({
        status: false,
        message: 'Something went wrong',
      })
    }
    
  } 

}
