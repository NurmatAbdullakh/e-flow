export const FormIds = {
  PersonalInfo: "personal-info-form",
  ChangePassword: "change-password-form",
} as const;

export type FormIdsType = (typeof FormIds)[keyof typeof FormIds];

export const FormType = {
  create: "create",
  edit: "edit",
} as const;

export type FormTypeType = (typeof FormType)[keyof typeof FormType];

export const Roles = {
  USER: "USER",
  ADMIN: "ADMIN",
} as const;

export type RolesType = (typeof Roles)[keyof typeof Roles];

export type User = {
  id: string;
  client_type_id: string;
  role_id: string;
  first_name: string;
  last_name: string;
  surname: string;
  pinfl: string;
  email: string;
  phone: string;
  login: string;
  birth_date: string;
  gender: string;
  image: string;
  company: string;
  website: string;
  bio: string;
  note: string;
  twitter: string;
  linkedin: string;
  tags: null | string[];
  email_verified: boolean;
  phone_verified: boolean;
  is_active: boolean;
  last_login: string;
  failed_login_attempts: number;
  locked_until: string;
  password_changed_at: string;
  two_factor_enabled: boolean;
  created_at: string;
  updated_at: string;
  role: {
    id: string;
    name: string;
    client_type_id: string;
    created_at: string;
    updated_at: string;
  };
};

export type UserDetails = {
  user: User;
  role: {
    id: string;
    name: string;
    client_type_id: string;
    created_at: string;
    updated_at: string;
  };
};
