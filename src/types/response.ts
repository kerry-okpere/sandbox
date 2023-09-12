export type ServerResponse = {
  status: boolean;
  message: string;
};

export type Currency = {
  currency: string;
  name: string;
  symbol: string;
};

export type CurrencyQuote = {
  currency: string;
  amount: number;
  human_readable_amount: number;
};

export type Quote = {
  reference: string;
  source: CurrencyQuote;
  target: CurrencyQuote;
  rate: number;
};

export type CurrenciesResponse = ServerResponse & {
  data: Currency[];
};

export type QuoteResponse = ServerResponse & {
  data: Quote;
};

export type QuotePayload = {
  amount: number;
  source_currency: string;
  target_currency: string;
};

export type AuthenticationResponse = ServerResponse & {
  data: User;
};

enum ApprovalStatus {
  APPROVED,
}

enum ServiceType {
  API,
}

export type Business = {
  id: string;
  account_number: string;
  name: string;
  email: string;
  phone_number: string;
  support_email: string | null;
  support_phone_number: string | null;
  description: string | null;
  address: string | null;
  secret_key: string;
  public_key: string;
  logo: string | null;
  live: boolean;
  verification_level: number;
  approval_status: ApprovalStatus;
  approver_message: string | null;
  service_type: ServiceType;
  created_at: Date;
  updated_at: Date;
};

export type User = {
  token: string;
  first_name: string;
  last_name: string;
  email: string;
  active: true;
  disabled: false;
  created_at: string;
  updated_at: string;
  last_login: string;
  businesses: Business[];
};
