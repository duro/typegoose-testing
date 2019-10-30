import { arrayProp, prop, index, modelOptions } from '@typegoose/typegoose'
import { BaseSchema } from './BaseSchema'

export enum PortalUserRoles {
  PARTNER = 'partner',
  ADMIN = 'admin',
  SUPER_ADMIN = 'superadmin',
  CUSTOMER_SERVICE = 'customer_service',
}

export enum PortalUserStatus {
  ENABLED = 1,
  DISABLED = 0,
}

@index({ email: 1 }, { unique: true })
@modelOptions({ schemaOptions: { collection: 'portalusers' } })
export class PortalUserSchema extends BaseSchema {
  @arrayProp({ items: String, enum: PortalUserRoles, default: [PortalUserRoles.PARTNER] })
  public roles: PortalUserRoles[] = [PortalUserRoles.PARTNER]

  @prop({ required: true })
  public firstName!: string

  @prop({ required: true })
  public lastName!: string

  @prop({ required: true })
  public email!: string

  @prop({ required: true })
  public password!: string

  @prop({ default: null })
  public passwordResetExpires?: Date | null

  @prop({ default: null })
  public passwordResetToken?: string | null

  @prop({ default: PortalUserStatus.ENABLED })
  public status?: number = PortalUserStatus.ENABLED
}
