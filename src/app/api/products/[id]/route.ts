import { NextRequest, NextResponse } from "next/server";
import { products } from "@/data/products";

export async function GET(
  request: NextRequest,
  { params }: { params: Promise<{ id: string }> }
) {
  const { id } = await params;
  const product = products.find((p) => p.id === id);

  if (!product) {
    return NextResponse.json(
      { success: false, message: "Product not found" },
      { status: 404 }
    );
  }

  // Get related products (same category, excluding current)
  const relatedProducts = products
    .filter((p) => p.category === product.category && p.id !== id)
    .slice(0, 4);

  return NextResponse.json({
    success: true,
    data: product,
    related: relatedProducts,
  });
}
