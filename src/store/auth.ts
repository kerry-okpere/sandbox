import api from "@/api";
import { DEFAULT_BUSINESS } from "@/constants";
import {
  AuthenticationResponse,
  Business,
  LoginData,
  LoginResponse,
  Routes,
  User,
} from "@/types";
import { defineStore } from "pinia";

export const useLoginStore = defineStore("login", {
  state: (): { email: string, password: string } => ({ email: "", password: "" }),
  getters: {
    getEmail(): string {
      return this.email;
    },
    isLoggedIn(): boolean {
      return !!this.email && !!this.password
    },
  },
  actions: {
    async login(form: LoginData) {
      this.email = form.email
      this.password = form.password

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
    defaultBusiness(): Business | undefined {
      return this.user?.businesses[DEFAULT_BUSINESS]
    }
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
