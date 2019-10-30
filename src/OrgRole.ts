import { prop, arrayProp, modelOptions } from '@typegoose/typegoose'
import { BaseSchema } from './BaseSchema'

export enum OrgRoleScopes {
  OWNER = 'org:owner',
  MEMBER = 'org:member',
}

@modelOptions({ schemaOptions: { collection: 'orgroles' } })
export class OrgRoleSchema extends BaseSchema {
  @prop({ required: true })
  public name!: string

  @arrayProp({
    required: true,
    items: String,
    validate: {
      validator: (v) => Array.isArray(v) && v.every((i) => Object.values(OrgRoleScopes).includes(i)),
      message: `the provided scopes \`{VALUE}\` are not defined scopes [${Object.values(
        OrgRoleScopes,
      ).join(', ')}]`,
    },
  })
  public scopes!: OrgRoleScopes[]
}
