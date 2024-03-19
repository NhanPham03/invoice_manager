import { unstable_noStore as noStore } from "next/cache";

const tempData = [
  { id: "1", name: "Adam Smith", amount: 100, status: 'pending' },
  { id: "2", name: "Mary Anne", amount: 150, status: 'paid' },
  { id: "3", name: "Samantha Parker", amount: 203, status: 'pending' },
  { id: "4", name: "Marcus Johnson", amount: 76, status: 'pending' },
  { id: "5", name: "Emily Carter", amount: 120, status: 'pending' },
  { id: "6", name: "Joshua Bennett", amount: 30, status: 'paid' }
];

export async function fetchAllInvoices() {
  noStore();

  try {
    // GET DATA (ALL INVOICES)
    // DATA TO PROCESS FOR CARDS { name: string, amount: number, status: 'pending'|'paid' } IN ARRAY
  } catch (error) {
    console.error("ERROR FETCHING DATA:", error);
    throw new Error("Failed fetching all Invoices.");
  }
}

export async function fetchInvoiceById(id: string) {
  noStore();

  try {
    // GET DATA (INVOICE) FROM SERVER THEN FILTER BY ID
    // DATA TO PROCESS FOR EDITING { name: string, email: string, company: string, amount: number, status: 'pending'|'paid' }
  } catch (error) {
    console.error("ERROR FETCHING DATA:", error);
    throw new Error("Failed fetching Invoice by ID.");
  }
}

export async function fetchInvoiceByQuery(query: string) {
  noStore();

  try {
    // GET DATA (INVOICE) FROM SERVER THEN FILTER BY QUERY (Query can be name, email, company -> Increase complexity if possible)
    // If increase complexity for filter not possible, do basic name filter
    // DATA TO PROCESS FOR EDITING { name: string, email: string, company: string, amount: number, status: 'pending'|'paid' }
  } catch (error) {
    console.error("ERROR FETCHING DATA:", error);
    throw new Error("Failed fetching Invoice by ID.");
  }
}
