import * as z from "zod";

export const invoiceFormBody = z.object({
  id: z
    .string(),
  name: z
    .string()
    .min(1, "Name must not be empty"),
  email: z
    .string()
    .email(),
  company: z
    .string(),
  amount: z
    .coerce
    .number()
    .gt(0, "Amount must be higher than 0"),
  status: z
    .enum(['pending', 'paid']),
});
