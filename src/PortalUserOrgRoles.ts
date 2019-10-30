import { Ref, prop, modelOptions } from '@typegoose/typegoose'
import { OrganizationSchema } from './Organization'
import { PortalUserSchema } from './PortalUser'
import { BaseSchema } from './BaseSchema'
import { OrgRoleSchema } from './OrgRole'

@modelOptions({ schemaOptions: { collection: 'portaluserorgroles' } })
export class PortalUserOrgRolesSchema extends BaseSchema {
  @prop({ required: true, ref: 'organization' })
  public org!: Ref<OrganizationSchema>

  @prop({ required: true, ref: 'portaluser' })
  public user!: Ref<PortalUserSchema>

  @prop({ required: true, ref: 'orgrole' })
  public role!: Ref<OrgRoleSchema>
}
