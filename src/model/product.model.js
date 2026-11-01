
import mongoose from 'mongoose';

const productSchema = new mongoose.Schema({ 
    name: { type: String, required: true },
    description: { type: String, required: true },
    price: {
        amount: { type: Number, required: true },
        currency: { type: String, required: true, default: 'INR' }
    },    
    // category: { type: String, required: true },
    // stock: { type: Number, required: true },
    // imageUrl: { type: String, required: true },
    // createdAt: { type: Date, default: Date.now }
});

const ProductModel = mongoose.model('Product', productSchema);
export default ProductModel;


