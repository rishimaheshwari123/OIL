const { uploadImageToCloudinary } = require("../config/imageUploader");
const productModel = require("../model/product")

const createProductCtrl = async (req, res) => {
    try {
        const { name, desc, price, highestPrice } = req.body;

        const image = req.files.image;

        if (!name || !desc || !price || !highestPrice || !image) {
            return res.status(400).json({
                success: false,
                message: "Please provide all fields"
            });
        }

        const thumbnailImage = await uploadImageToCloudinary(image, process.env.FOLDER_NAME);

        const product = await productModel.create({
            name,
            desc,
            price,
            highestPrice,
            image: thumbnailImage.secure_url
        })

        return res.status(201).json({
            success: true,
            message: "Product created successfully!",
            product
        })
    } catch (error) {
        return res.status(500).json({
            success: false,
            message: "Error in creating product api"
        })
    }
}


const getAllProductCtrl = async (req, res) => {
    try {
        const products = await productModel.find({})
        return res.status(200).json({
            success: true,
            products
        })
    } catch (error) {
        return res.status(500).json({
            success: false,
            message: "Error in getting all product api"
        })
    }
}

const deleteProductCtrl = async (req, res) => {
    try {
        const { id } = req.params;
        await productModel.findByIdAndDelete(id);
        return res.status(200).json({
            success: true,
            message: "Product deleted successfully!"
        })
    } catch (error) {
        return res.status(500).json({
            success: false,
            message: "Error in deleting product api"
        })
    }
}
module.exports = { createProductCtrl, getAllProductCtrl, deleteProductCtrl }