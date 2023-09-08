import api from "@/api";
import {
  AuthenticationResponse,
  LoginData,
  LoginResponse,
  Routes,
  User,
} from "@/types";
import { defineStore } from "pinia";

export const useLoginStore = defineStore("login", {
  state: (): { email: string } => ({ email: "" }),
  getters: {
    getEmail(): string {
      console.log('===email', this.email)
      return this.email;
    },
    isLoggedIn(): boolean {
      return !!this.email
    }
  },
  actions: {
    async login(form: LoginData) {
      this.email = form.email

      try {
        const res = await api.post<LoginResponse>(Routes.AuthLogin, form);
        return res;
      } catch (error) {
        // Todo: notify user
        console.error(error);
      }
    },
  }
});

export const useAuthStore = defineStore("auth", {
  persist: true,
  state: (): { user: null | User } => {
    return {
      user: null,
    };
  },
  getters: {
    isAuthenticated(): boolean {
      return Boolean(this.user?.token?.length);
    },
  },
  actions: {
    async authenticate(otp: string) {
      const loginStore = useLoginStore();

      try {
        const res = await api.post<AuthenticationResponse>(Routes.AuthOtp, {
          otp,
          email: loginStore.getEmail,
        });

        this.user = res.data;
        return res;
      } catch (error) {
        // Todo: notify user
        console.error(error);
      }
    },
  },
});
