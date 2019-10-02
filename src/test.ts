import { getModelForClass, prop } from "@typegoose/typegoose"; // @typegoose/typegoose@6.0.0
import * as mongoose from "mongoose"; // mongoose@5.7.3

class User {
    @prop()
    public username?: string;
}
const UserModel = getModelForClass(User);

(async () => {
    await mongoose.connect(`mongodb://localhost:27017/`, { useNewUrlParser: true, dbName: "verify26" });

    const user = new UserModel({ username: "user1" });
    console.log(user);
})();
