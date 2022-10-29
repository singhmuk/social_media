const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const bcrypt = require('bcryptjs');

const userSchema = new Schema({
    name: { type: String, required: true },
    email: { type: String, required: true, unique: true },
    password: { type: String, required: true },
    isAdmin: { type: Boolean, required: true, default: false },

    followers: {type:Array, default:[]},
    followings: {type:Array, default:[]},
  },
  { timestamps: true })


userSchema.methods.matchPassword = async function (enteredPassword) {
  return await bcrypt.compare(enteredPassword, this.password)
}

userSchema.pre('save', async function (next) {
  if (!this.isModified('password')) {
    next()
  }

  const salt = await bcrypt.genSalt(10)
  this.password = await bcrypt.hash(this.password, salt)
});

userSchema.virtual('id').get(function(){
  return this._id.toHexString();
});

userSchema.set('toJSON', {
  virtuals:true
});

module.exports = mongoose.model('User', userSchema);
