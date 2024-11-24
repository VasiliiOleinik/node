const Product = require('../models/Product')

const resolvers = {
    Query: {
        products: async () => await Product.find({}), // get all products
        // product: (parent, args, context, info) => {
        //     return products.find(product => product.id === Number(args.id))
        // }
    },
    Mutation: {
        createProduct: async (parent, args, context, info) => {
            const newProduct =  new Product(args)

            return await newProduct.save()
        },
        // deleteProduct: (parent, args, context, info) => {
        //     const index = products.findIndex(product => product.id === Number(args.id))
        //     if (index === -1) {
        //         throw new Error(`Product with id ${args.id} not found`)
        //     }
        //     const deletedProduct = products.splice(index, 1)
        //     return deletedProduct[0]
        // }
    }
}

module.exports = resolvers;