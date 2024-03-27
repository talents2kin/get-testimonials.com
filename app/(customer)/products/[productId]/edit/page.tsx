import { Layout, LayoutTitle } from "@/components/layout";
import { PageParams } from "@/types/next";
import { ProductForm } from "./ProductForm";
import { requiredCurrentUser } from "@/auth/current-user";
import { prisma } from "@/prisma";
import { notFound } from "next/navigation";



export default async function RoutePage(props: PageParams<{
  productId: string;
}>) {
  const user = await requiredCurrentUser();
  const product = await prisma.product.findUnique({
    where : {
      id:props.params.productId,
      userId: user.id,
    },
  }) ;
  if(!product){
   notFound();
  }
  return (
    <Layout>
      <LayoutTitle>Create product</LayoutTitle>
      <ProductForm defaultValues={product} productId={product.id} />
    </Layout>
  ) ;
}