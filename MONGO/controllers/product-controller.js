const Product = require('../models/Product');

const insertProduct = async (req, res) => {
    try {
        const sampleProducts = [
            {
                name: 'iPhone 12',
                category: 'Electronics',
                price: 799,
                inStock: true,
                tags: ['Apple', 'smartphone', 'iOS']
            },
            {
                name: 'MacBook Pro',
                category: 'Electronics',
                price: 1299,
                inStock: false,
                tags: ['Apple', 'laptop', 'macOS']
            },
            {
                name: 'Canon EOS R',
                category: 'Electronics',
                price: 1799,
                inStock: true,
                tags: ['Canon', 'camera', 'photography']
            },
            {
                name: 'Book - The Lean Startup',
                category: 'Books',
                price: 1200,
                inStock: true,
                tags: ['book', 'novel']
            }
        ]

        const products = await Product.insertMany(sampleProducts); 
        res.status(201).json({
            success: true,
            message: `${sampleProducts.length} products inserted successfully`,
            data: products
        });

    } catch (error) {
        res.status(500).json({ error: error.message });
    }
}

const getProducts = async (req, res) => {
    try {
        // Filter products that are in stock and have a price greater than or equal to 1000
        const products = await Product.aggregate([
        // filter products
            {
            $match: {
                inStock: true,
                price: {
                    $gte: 1000
                }
            }
        },
        {
        // group products by category
            $group: {
                _id: "$category",
                avgPrice: {
                    $avg: "$price"
                },
                count: {
                    $sum: 1
                }
            }
        }
    ]);
        res.status(200).json({
            success: true,
            message: `${products.length} products found`,
            data: products
        });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
}

const getProductAnalytics = async (req, res) => {
    try {
        const products = await Product.aggregate([
            {
                $match: {
                    category: 'Electronics'
                }
            },
            {
                $group: {
                    _id: null,
                    totalRevenue: {
                        $sum: "$price"
                    },
                    avgPrice: {
                        $avg: "$price"
                    },
                    minPrice: {
                        $min: "$price"
                    },
                    maxPrice: {
                        $max: "$price"
                    }
                }
            },
            {
                $project: {
                    _id: 0,
                    totalRevenue: 1,
                    avgPrice: 1,
                    minPrice: 1,
                    maxPrice: 1,
                }
            }
        ]);

        res.status(200).json({
            success: true,
            message: 'Product analytics',
            data: products
        });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
}

module.exports = {
    insertProduct,
    getProducts,
    getProductAnalytics
}