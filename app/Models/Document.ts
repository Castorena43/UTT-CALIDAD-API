import { DateTime } from 'luxon'
import { BaseModel, column } from '@ioc:Adonis/Lucid/Orm'

export default class Document extends BaseModel {
  @column({ isPrimary: true })
  public id: number

  @column()
  public tipo: string

  @column()
  public nombre: string

  @column()
  public version: string

  @column()
  public status: string

  @column()
  public responsable: string

  @column()
  public areas: string

  @column()
  public documentosRelacionados: string

  @column()
  public sustituye: boolean

  @column()
  public codigo: string

  @column.dateTime()
  public conservacion: DateTime

  @column()
  public tipoResguardo: string

  @column()
  public disposicionFinal: string

  @column.dateTime({ autoCreate: true })
  public createdAt: DateTime

  @column.dateTime({ autoCreate: true, autoUpdate: true })
  public updatedAt: DateTime
}
