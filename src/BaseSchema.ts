import { modelOptions } from '@typegoose/typegoose'
import { Types } from 'mongoose'

@modelOptions({ schemaOptions: { timestamps: true } })
export abstract class BaseSchema {
  public readonly _id!: Types.ObjectId

  public readonly createdAt!: Date

  public readonly updatedAt!: Date
}
