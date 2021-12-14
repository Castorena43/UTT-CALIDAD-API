import { DateTime } from 'luxon'
import { BaseModel, column } from '@ioc:Adonis/Lucid/Orm'

export default class Request extends BaseModel {
  @column({ isPrimary: true })
  public id: number

  @column()
  public documentoId: number

  @column()
  public nombre: string

  @column()
  public version: string

  @column()
  public status: string

  @column()
  public puntoCambio: string

  @column()
  public descripcionActual: string

  @column()
  public descripcionCambio: string

  @column.dateTime({ autoCreate: true })
  public createdAt: DateTime

  @column.dateTime({ autoCreate: true, autoUpdate: true })
  public updatedAt: DateTime
}
