import mongoose from 'mongoose';

const userSchema = new mongoose.Schema({
  googleId: {
    type: String,
    required: true,
    unique: true
  },
  email: {
    type: String,
    required: true,
    unique: true
  },
  name: {
    type: String,
    required: true
  },
  picture: String,
  age: Number,
  weight: Number,
  height: Number,
  goals: String,
  mfaEnabled: {
    type: Boolean,
    default: false
  },
  currentChallenge: {
    type: String,
    default: null
  },
  authenticator: {
    credentialID: Buffer,
    credentialPublicKey: Buffer,
    counter: Number,
    transports: [String]
  },
  createdAt: {
    type: Date,
    default: Date.now
  }
});

export default mongoose.model('User', userSchema);