import mongoose from "mongoose";

const initConnect = async (URI) => {
    try {
        await mongoose.connect(URI, {
            useUnifiedTopology: true,
        })
        console.log("Base de datos conectada")
    }
    catch(err) {
        console.error(err)
        process.exit(1)
    }
  }
export default initConnect;