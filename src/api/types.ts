export interface UserProfile {
  id: string;
  city: string;
  country: string;
  county: string;
  district: string;
  email: string;
  farmDesc: string;
  farmName: string;
  firstName: string;
  flatNumber: string;
  lastName: string;
  phone: string;
  postCode: string;
  street: string;
  streetNumber: string;
  voivodeship: string;
}

export interface LoginUserResponse {
  token: string;
  user: UserProfile;
}

export interface CreateUserProfile extends Omit<UserProfile, "id"> {
  password: string;
  repeatPassword?: string;
}

export interface ResouceBase {
  id: string;
  name: string;
}

export interface Category extends ResouceBase {
  type: string;
  iconUrl: string;
}
