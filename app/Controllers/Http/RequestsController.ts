import { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import Request from 'App/Models/Request'
import Database from '@ioc:Adonis/Lucid/Database'
import CreateRequestValidator from 'App/Validators/CreateRequestValidator'
import Document from 'App/Models/Document'

export default class RequestsController {
    public async index({ response }: HttpContextContract) {
        const requests = await Request.all()
        return response.ok(requests)
      }
    
      public async store({ response, request }: HttpContextContract) {
        await request.validate(CreateRequestValidator)
        const trx = await Database.transaction()
    
        try {
          const data = request.body()
          await Request.create(data, trx)
          await trx.commit()
          return response.created({
            status: true,
            message: 'Request was created successfully',
          })
        } catch (error: any) {
          await trx.rollback()
          return response.internalServerError({
            status: false,
            message: 'Something went wrong',
          })
        }
        
      } 
    
      public async updateStatus({ response, request }: HttpContextContract) {
        const docId = request.input('docId')
        const requestId = request.input('requestId')
        const status = request.input('status')
        try {
          const doc = await Document.findOrFail(docId)
          const req = await Request.findOrFail(requestId)
          console.log('HOLAAAAAAAAAAAAAAAAAAA');
          
          if (status === 'approved') {
            req.status = status
            doc.version = req.version
            await doc.save()
          }
          await req.save()
          return response.created({
            status: true,
            message: 'Request was updated successfully',
          })
        } catch (error: any) {
          return response.internalServerError({
            status: false,
            message: 'Something went wrong',
          })
        }
      }
}
