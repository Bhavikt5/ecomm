import { connectDB } from "lib/db";
import Product from "lib/models/productModel";

export async function POST(request) {
  try {
    await connectDB();
    const body = await request.json();
    const product = await Product.create(body);
    return new Response(JSON.stringify(product), { status: 201 });
  } catch (error) {
    return new Response(JSON.stringify({ error: error.message }), {
      status: 500,
    });
  }
}

export async function GET() {
  try {
    await connectDB();
    const products = await Product.find();
    return new Response(JSON.stringify(products), { status: 200 });
  } catch (error) {
    return new Response(JSON.stringify({ error: error.message }), {
      status: 500,
    });
  }
}
