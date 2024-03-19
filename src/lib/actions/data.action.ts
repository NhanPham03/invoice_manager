import { revalidatePath } from "next/cache";
import { invoiceFormBody } from "../schema/invoice.schema";
import { redirect } from "next/navigation";

const CreateInvoice = invoiceFormBody.omit({ id: true });
const UpdateInvoice = invoiceFormBody.omit({ id: true });

export type State = {
  errors?: {
    name?: string[];
    amount?: string[];
    status?: string[];
  };
  message?: string | null;
};

export async function createInvoice(prevState: State, formData: FormData) {
  const validatedFields = CreateInvoice.safeParse({
    name: formData.get("name"),
    email: formData.get("email"),
    company: formData.get("company"),
    amount: formData.get("amount"),
    status: formData.get("status")
  });

  if (!validatedFields.success) {
    return {
      errors: validatedFields.error.flatten().fieldErrors,
      message: "Missing fields. Failed to create Invoice."
    };
  }

  const { name, email, company, amount, status } = validatedFields.data;

  try {
    // INSERT NEW INVOICE
  } catch (error) {
    return {
      message: `Database error: ${error}`
    };
  }

  revalidatePath("/home/invoice");
  redirect("/home/invoice");
}

export async function updateInvoice(id: string, prevState: State, formData: FormData) {
  const validatedFields = UpdateInvoice.safeParse({
    name: formData.get("name"),
    email: formData.get("email"),
    company: formData.get("company"),
    amount: formData.get("amount"),
    status: formData.get("status")
  });

  if (!validatedFields.success) {
    return {
      errors: validatedFields.error.flatten().fieldErrors,
      message: "Missing fields. Failed to update Invoice."
    };
  }

  const { name, email, company, amount, status } = validatedFields.data;

  try {
    // UPDATE INVOICE
  } catch (error) {
    return {
      message: `Database error: ${error}`
    };
  }

  revalidatePath("/home/invoice");
  redirect("/home/invoice");
}

export async function deleteInvoice(id: string) {
  try {
    // DELETE INVOICE
  } catch (error) {
    return {
      message: `Database error: ${error}`
    };
  }

  revalidatePath("/home/invoice");
}
