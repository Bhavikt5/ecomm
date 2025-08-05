import { connectDB } from "lib/db";
import Product from "lib/models/productModel";

export async function GET(req, { params }) {
  try {
    await connectDB();
    const product = await Product.findById(params.id);
    if (!product) return new Response("Not Found", { status: 404 });
    return new Response(JSON.stringify(product), { status: 200 });
  } catch (error) {
    return new Response(JSON.stringify({ error: error.message }), {
      status: 500,
    });
  }
}

export async function PUT(request, { params }) {
  try {
    await connectDB();
    const body = await request.json();
    const updatedProduct = await Product.findByIdAndUpdate(params.id, body, {
      new: true,
    });
    return new Response(JSON.stringify(updatedProduct), { status: 200 });
  } catch (error) {
    return new Response(JSON.stringify({ error: error.message }), {
      status: 500,
    });
  }
}

export async function DELETE(request, { params }) {
  try {
    await connectDB();
    await Product.findByIdAndDelete(params.id);
    return new Response(JSON.stringify({ message: "Product deleted" }), {
      status: 204,
    });
  } catch (error) {
    return new Response(JSON.stringify({ error: error.message }), {
      status: 500,
    });
  }
}
