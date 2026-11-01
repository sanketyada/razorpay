import mongoose from 'mongoose';
import ProductModel from './model/product.model.js';

const products = [
    {
        name: 'Wireless Headphones',
        description: 'Premium wireless headphones with noise cancellation.',
        price: {
            amount: 2499,
            currency: 'INR'
        }
    },
    {
        name: 'Bluetooth Speaker',
        description: 'Portable Bluetooth speaker with powerful bass.',
        price: {
            amount: 1499,
            currency: 'INR'
        }
    },
    {
        name: 'Smart Watch',
        description: 'Smartwatch with fitness tracking and heart rate monitoring.',
        price: {
            amount: 3999,
            currency: 'INR'
        }
    },
    {
        name: 'Mechanical Keyboard',
        description: 'RGB mechanical keyboard with responsive switches.',
        price: {
            amount: 2999,
            currency: 'INR'
        }
    },
    {
        name: 'Gaming Mouse',
        description: 'Ergonomic gaming mouse with adjustable DPI.',
        price: {
            amount: 999,
            currency: 'INR'
        }
    },
    {
        name: 'Laptop Stand',
        description: 'Adjustable aluminium laptop stand for better posture.',
        price: {
            amount: 799,
            currency: 'INR'
        }
    },
    {
        name: 'USB-C Hub',
        description: 'Multiport USB-C hub with HDMI and USB 3.0 ports.',
        price: {
            amount: 1299,
            currency: 'INR'
        }
    },
    {
        name: 'Power Bank',
        description: '20000mAh fast charging power bank for smartphones.',
        price: {
            amount: 1799,
            currency: 'INR'
        }
    },
    {
        name: 'Webcam',
        description: 'Full HD webcam suitable for video calls and streaming.',
        price: {
            amount: 2199,
            currency: 'INR'
        }
    },
    {
        name: 'Wireless Mouse',
        description: 'Compact wireless mouse with ergonomic design.',
        price: {
            amount: 599,
            currency: 'INR'
        }
    }
];

const seedProducts = async () => {
    try {
        await mongoose.connect('mongodb://127.0.0.1:27017/rajorpay');

        console.log('MongoDB connected successfully');

        await ProductModel.insertMany(products);

        console.log('10 sample products inserted successfully');

    } catch (error) {
        console.error('Error inserting products:', error);
    } finally {
        await mongoose.connection.close();
    }
};

seedProducts();