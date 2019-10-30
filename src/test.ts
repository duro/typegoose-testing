// NodeJS: 12.11.1
// MongoDB: 4.2-bionic (Docker)
import { getModelForClass, ReturnModelType, DocumentType } from '@typegoose/typegoose'
import * as _ from 'lodash'
import * as mongoose from 'mongoose'
import { OrganizationSchema } from './Organization'
import { OrgRoleSchema } from './OrgRole'
import { PortalUserSchema, PortalUserRoles } from './PortalUser'
import { PortalUserOrgRolesSchema } from './PortalUserOrgRoles'

(async () => {
  const schemas = [ OrganizationSchema, OrgRoleSchema, PortalUserSchema, PortalUserOrgRolesSchema ]
  const connection = await mongoose.createConnection(`mongodb://localhost:27017/`, { useNewUrlParser: true, dbName: 'verify-duro', useCreateIndex: true, useUnifiedTopology: true })
  const models = schemas.map((s) => getModelForClass(s, { existingConnection: connection }))

  for (const model of models) {
    console.log(`Collection name for ${model.modelName}: ${model.collection.name}`)
  }

  const portalUserModel = models[2] as ReturnModelType<typeof PortalUserSchema>

  console.log(`Model name of selected model: ${portalUserModel.modelName}`)

  const newUser = new portalUserModel({
    firstName: 'Adam',
    lastName: 'Duro',
    email: 'adam@duromedia.com',
    password: 'password12345',
    roles: [PortalUserRoles.PARTNER]
  })

  await newUser.save()

  await connection.close()
})()
