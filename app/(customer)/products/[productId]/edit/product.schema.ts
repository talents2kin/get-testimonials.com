import { z } from "zod";

export const ProductSchema = z.object({  
  name: z.string(),
  slug: z
  .string()
  .regex (/^[a-zA-Z0-9_-]*$/)
  .min(5)
  .max(20),
  noteText : z.string().optional().nullable(),
  informationText : z.string().optional().nullable(),
  reviewText:z.string().optional().nullable(),
  thansText:z.string().optional().nullable(),
  backgroundColor: z.string().optional().nullable(),
});

export type ProductType = z.infer<typeof ProductSchema>;

export const GRADIENTS_CLASSES =["bg-gradient-to-r from-red-500 to-orange-500","bg-gradient-to-r from-rose-400 to-red-500","bg-gradient-to-r from-amber-200 to-yellow-400",
"bg-gradient-to-r from-amber-500 to-pink-500", "bg-gradient-to-r from-teal-200 to-teal-500","bg-gradient-to-r from-blue-600 to-violet-600",
"bg-gradient-to-r from-blue-800 to-indigo-900", "bg-gradient-to-r from-emerald-500 to-emerald-900", "bg-gradient-to-r from-slate-900 to-slate-700"

]  