export interface UserContextType {
  user?: UserInfo | null;
  loginToken: (token: string) => void;
  logoutUser: () => void;
}

export interface UserInfo {
  isInitialized: boolean;
  userId?: number;
  userToken?: string;
}

export interface PhoneNumber {
  countryCode?: number;
  normalizedNumber?: string;
  nationalNumber?: string;
}

export interface User {
  id?: number;
  name?: string;
  kakaoId?: number;
  profile?: string;
  email?: string;
  regTs: number;
  isSignUp: boolean;
  token?: string;
  phoneNumber?: PhoneNumber;
  address?: string;
  addressDetail?: string;
  zipCode?: string;
  birthday?: string;
  isIdentified?: boolean;
  membershipLevel: 'NONE' | '프로' | '마스터' | 'TOP3_기본' | 'TOP3_프로' | 'TOP3_마스터';
}
