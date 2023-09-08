export type LoginResponse = {
  status: boolean;
  message: string;
};

export type AuthenticationResponse = LoginResponse & {
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
