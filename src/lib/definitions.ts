export type Account = {
  username: string;
  password: string;
}

export type Invoice = {
  name: string;
  email: string;
  company: string;
  amount: number;
  status: 'pending' | 'paid';
}

