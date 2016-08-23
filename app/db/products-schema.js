import mongoose from 'mongoose';

const Schema = mongoose.Schema;

const productSchema = new Schema({
    id: Number,
    name: String,
    img:String,
    price:Number,
    unit:String,
    briefDescription: String

});

const Product = mongoose.model('Product', productSchema);

export {
  Product
};
