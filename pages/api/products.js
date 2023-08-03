// pages/api/hello.js
import { connectDB } from '../../utils/database'
export default async function handler(req, res) {
    await connectDB();
    const products = [
        {
            name: 'Shoes',
            price: 2500,
            cateegries: 'shoes'

        },
        {
            name: 'lenovo',
            price: 2630,
            cateegries: 'laptop'

        }

    ]
    res.status(200).json({ success: true, products });
}
