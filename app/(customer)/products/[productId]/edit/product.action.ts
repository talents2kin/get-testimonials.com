"use server";

import { ActionError, userAction } from "@/safe-action";
import { ProductSchema } from "./product.schema";
import { prisma } from "@/prisma";
import { z } from "zod";
const verifySlugUniqueness = async (slug : string , productId?:string )=>{
//verify if slud already exists
const slugExists = await prisma.product.count({
  where:{
    slug: slug,
    id: productId ? {
      not: productId,
    } :undefined
  },
});
if(slugExists){
  throw new ActionError("Slug already exists");
}
}
export const createProductAction = userAction(
  ProductSchema,
  async (input, context) => {
    await verifySlugUniqueness(input.slug);
    const product = await prisma.product.create({
      data: {
        ...input,
        userId: context.user.id,
      },
    });
    return product;
  }
);
export const updateProductAction = userAction(
  z.object({
    id: z.string(),
    data: ProductSchema,
  }) , 
  async (input,context)=>{
    
    await verifySlugUniqueness(input.data.slug, input.id);
    const updatedProduct = await prisma.product.update({
      where:{
        id: input.id,
        userId: context.user.id,
      },
      data: input.data,
    });
    return updatedProduct;
  }
)