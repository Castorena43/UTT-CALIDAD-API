import { schema, rules } from '@ioc:Adonis/Core/Validator'
import { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'

export default class CreateDocumentValidator {
  constructor(protected ctx: HttpContextContract) {}

  /*
   * Define schema to validate the "shape", "type", "formatting" and "integrity" of data.
   *
   * For example:
   * 1. The username must be of data type string. But then also, it should
   *    not contain special characters or numbers.
   *    ```
   *     schema.string({}, [ rules.alpha() ])
   *    ```
   *
   * 2. The email must be of data type string, formatted as a valid
   *    email. But also, not used by any other user.
   *    ```
   *     schema.string({}, [
   *       rules.email(),
   *       rules.unique({ table: 'users', column: 'email' }),
   *     ])
   *    ```
   */
  public schema = schema.create({
    tipo: schema.string({trim:true}, [ rules.required(), rules.maxLength(100) ]),
    nombre: schema.string({trim:true}, [ rules.required(), rules.maxLength(100) ]),
    version: schema.string({trim:true}, [ rules.required(), rules.maxLength(100) ]),
    responsable: schema.string({trim:true}, [ rules.required(), rules.maxLength(100) ]),
    areas: schema.string({trim:true}, [ rules.required(), rules.maxLength(100) ]),
    documentosRelacionados: schema.string({trim:true}, [ rules.required(), rules.maxLength(100) ]),
    sustituye: schema.boolean([ rules.required() ]),
    codigo: schema.string.optional({}, [rules.requiredWhen('sustituye', '=', true)]),
    conservacion: schema.date({ format: 'yyyy-MM-dd' }, [ rules.required() ]),
    tipoResguardo: schema.string({trim:true}, [ rules.required(), rules.maxLength(100) ]),
    disposicionFinal: schema.string({trim:true}, [ rules.required(), rules.maxLength(100) ]),
  })

  /**
   * Custom messages for validation failures. You can make use of dot notation `(.)`
   * for targeting nested fields and array expressions `(*)` for targeting all
   * children of an array. For example:
   *
   * {
   *   'profile.username.required': 'Username is required',
   *   'scores.*.number': 'Define scores as valid numbers'
   * }
   *
   */
  public messages = {}
}
