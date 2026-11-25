const mongoose = require('mongoose');

async function connectDB() {
  const uri = process.env.MONGO_URI;
  if (!uri) {
    console.warn('⚠️  MONGO_URI is not set. Database features will be unavailable.');
    return;
  }

  mongoose.set('strictQuery', true);
  try {
    await mongoose.connect(uri, {
      serverSelectionTimeoutMS: 3000,
    });
    console.log('   MongoDB    : connected');
  } catch (err) {
    console.warn(`\n⚠️  MongoDB connection failed (${err.message}).`);
    console.warn('   Auth & Project saving require MongoDB. Tectonic PDF Compilation and Health checks remain fully available.\n');
  }
}

module.exports = { connectDB };
