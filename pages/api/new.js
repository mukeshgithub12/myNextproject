import { connectDB } from "../../utils/database";
import { Products } from "../../model/products";

export default async (res, req) => {
    await connectDB();

    const price = 25630,
        name = 'Macebook',
        category = 'laptop';

    await Products.create({
        name,
        price,
        category,
    });
    res.status(201).json({
        success: true,
        message: "Product created successfully"
    })
}