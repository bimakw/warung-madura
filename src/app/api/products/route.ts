import { NextRequest, NextResponse } from "next/server";
import { products, categories } from "@/data/products";

export async function GET(request: NextRequest) {
  const { searchParams } = new URL(request.url);
  const category = searchParams.get("category");
  const search = searchParams.get("search");
  const sort = searchParams.get("sort");

  let filteredProducts = [...products];

  // Filter by category
  if (category && category !== "Semua") {
    filteredProducts = filteredProducts.filter(
      (product) => product.category === category
    );
  }

  // Filter by search query
  if (search) {
    filteredProducts = filteredProducts.filter((product) =>
      product.name.toLowerCase().includes(search.toLowerCase())
    );
  }

  // Sort products
  if (sort) {
    switch (sort) {
      case "price-asc":
        filteredProducts.sort((a, b) => a.price - b.price);
        break;
      case "price-desc":
        filteredProducts.sort((a, b) => b.price - a.price);
        break;
      case "name-asc":
        filteredProducts.sort((a, b) => a.name.localeCompare(b.name));
        break;
      case "name-desc":
        filteredProducts.sort((a, b) => b.name.localeCompare(a.name));
        break;
    }
  }

  return NextResponse.json({
    success: true,
    data: filteredProducts,
    total: filteredProducts.length,
  });
}
