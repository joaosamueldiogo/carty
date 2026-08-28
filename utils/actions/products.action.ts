"use server";

import { ProductParams } from "@/shared.types";
import { createClient } from "@/utils/supabase/server";

export async function fetchProducts(): Promise<ProductParams[]> {
  const supabase = await createClient();

  const { data: products, error } = await supabase.from("products").select("*");

  if (error) {
    console.error("Error fetching products:", error);
    return [];
  }

  return products;
}

export async function fetchProductById(
  id: string,
): Promise<ProductParams | null> {
  const supabase = await createClient();

  const { data: product, error } = await supabase
    .from("products")
    .select("*")
    .eq("id", id)
    .single();

  if (error) {
    console.error("Error fetching product by ID:", error);
    return null;
  }

  return product;
}
