import mongoose from "mongoose";

const conectarDB = async () => {
  try {
    const conn = await mongoose.connect(process.env.MONGODB_URI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
      dbName: "uptask", // 👈 Aquí forzamos la DB correcta
    });
    console.log(`✅ MongoDB conectado: ${conn.connection.host}/${conn.connection.name}`);
  } catch (error) {
    console.log(error.message);
  }
};

export default conectarDB;