import mongoose from "mongoose";
const productSchema = mongoose.Schema({
    productName:{
        type:String,
        required:true,
    },
    
    productPrice:{
        type:Number,
        required:true,
    },
    productImage:{
        type:String,
        required:true,
    },
})
const Products = mongoose.model("products",productSchema)
export default Products;