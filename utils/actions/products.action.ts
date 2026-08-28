"use server";

import { createClient } from "@/utils/supabase/server";

export async function fetchProducts() {
  const supabase = await createClient();

  const { data: products, error } = await supabase.from("products").select("*");

  if (error) {
    console.error("Error fetching products:", error);
    return [];
  }

  return products;
}
