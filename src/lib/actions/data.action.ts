import { invoiceFormBodyType } from "../schema/invoice.schema";

export const getAllInvoices = async () => {
  try {
    const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/api-view/invoice/`, {
      method: "GET",
    });

    if (!res.ok) {
      throw new Error("Get failed");
    }

    const resData = await res.json();

    console.log(resData);
    return resData;
  } catch (error) {
    console.error("ERROR GETTING INVOICES:", error);
    throw error;
  }
};

export const createInvoice = async (data: invoiceFormBodyType) => {
  try {
    const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/api-view/invoice/`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    });

    if (!res.ok) {
      throw new Error("Create failed");
    }

    const resData = await res.json();

    console.log(resData);
  } catch (error) {
    console.error("ERROR CREATING INVOICE:", error);
    throw error;
  }
};

export const editInvoice = async (data: invoiceFormBodyType) => {
  try {
    const res = await fetch("", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    });

    if (!res.ok) {
      throw new Error("Create failed");
    }

    const resData = await res.json();

    console.log(resData);
  } catch (error) {
    console.error("ERROR CREATING INVOICE:", error);
    throw error;
  }
};
