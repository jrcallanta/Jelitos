import { config } from "dotenv";
config();

import { connect as connectToDB } from "mongoose";

// Export Database Connection
export function connect() {
    // const uri = "mongodb://localhost:27017/jelitosOfficialDB";
    const uri = `mongodb+srv://${process.env.ADMIN_USER}:${process.env.ADMIN_PASSWORD}@${process.env.DB_CLUSTER}.eutoset.mongodb.net/?retryWrites=true&w=majority`;
    return connectToDB(uri, { useNewUrlParser: true });
}
