import { prop, Ref, modelOptions } from '@typegoose/typegoose'
import { BaseSchema } from './BaseSchema'

@modelOptions({schemaOptions: {collection: 'organizations'}})
export class OrganizationSchema extends BaseSchema {
  @prop({ required: true })
  public name!: string

  @prop({ default: null, ref: 'organization' })
  public parent!: Ref<OrganizationSchema> | null

  @prop({ default: 0 })
  public readonly childCount!: number
}
