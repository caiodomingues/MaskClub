import React, { useState, useEffect, useContext, createContext } from "react";
import api from "../services/api";

import {
  AuthContextProps,
  LoginCredentials,
  RegisterCredentials,
  UserProps,
} from "../types";

// Not sure if we need to implement the Auth already
// But I'll leave the AuthContext done already, so we can use it later

const AuthContext = createContext<Partial<AuthContextProps>>({});

/**
 * The AuthProvider, implements `login`, `logout`, `register`, `saveUser` and exports the signed, user and loading read-only values.
 *
 * @component
 * @example
 * return (
 *   <AuthContext.Provider
 *     value={{
 *       signed,
 *       loading,
 *       user,
 *       signIn,
 *       signOut,
 *       register,
 *     }}
 *   >
 *     {children}
 *   </AuthContext.Provider>
 * );
 */
export function AuthProvider({ children }: any) {
  const [loading, setLoading] = useState(true);
  const [user, setUser] = useState("");
  const [signed, setSigned] = useState(false);

  useEffect(() => {
    async function loadStorageData() {
      setLoading(true);
      const storagedToken = localStorage.getItem("maskclub_token");
      const _user = localStorage.getItem("maskclub_user");

      if (storagedToken) {
        setSigned(true);
        api.defaults.headers.Authorization = `Bearer ${storagedToken}`;
        setUser(_user!);
      } else {
        setSigned(false);
      }
      setLoading(false);
    }
    loadStorageData();
  }, []);

  /**
   * Save the user on browser's localStorage
   * @param {string} token A Bearer token
   * @param {UserProps} user The user object
   *
   * You can retrieve user information by acessing the `user` value from `useAuth()`;
   */
  async function saveUser(token: string, user: UserProps) {
    localStorage.setItem("maskclub_token", token);
    localStorage.setItem("maskclub_user", JSON.stringify(user));
  }

  /**
   * Login method, it will call `saveUser()` and set user signed in if the promise runs successfully
   * @param {object} credentials Object that receives `email` and `password`.
   *
   * After setting user signed in, the Bearer token is setted as a default header for any api call
   */
  async function signIn(credentials: LoginCredentials) {
    setLoading(true);
    await api
      .post("/login", credentials)
      .then(async (res) => {
        console.log(res);
        // await saveUser(res.data.data.token, res.data.user);
        setSigned(true);
        setLoading(false);
      })
      .catch((err) => {
        setLoading(false);
        console.log(err);
      });
  }

  /**
   * This functions simply removes the Token and User from browser's localStorage
   */
  async function signOut() {
    setLoading(true);
    localStorage.removeItem("maskclub_token");
    localStorage.removeItem("maskclub_user");
    setSigned(false);
    setLoading(false);
  }

  /**
   * Register method, it will call `saveUser()` and set user signed in if the promise runs successfully
   * @param {object} credentials Object that receives `name`, `email`, `password` and `c_password`
   * You can retrieve user information by acessing the `user` value from `useAuth()`;
   * After setting user signed in, the Bearer token is setted as a default header for any api call
   */
  async function register(credentials: RegisterCredentials) {
    setLoading(true);
    await api
      .post("/register", credentials)
      .then(async (res) => {
        console.log(res);
        // await saveUser(res.data.token, res.data.user);
        setSigned(true);
        setLoading(false);
      })
      .catch((err) => {
        setLoading(false);
        console.log(err);
      });
  }

  return (
    <AuthContext.Provider
      value={{
        signed,
        loading,
        user,
        signIn,
        signOut,
        register,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
}

/**
 * Used to consume the AuthContext
 * @returns context
 */
export function useAuth() {
  const context = useContext(AuthContext);

  if (!context) {
    throw new Error("useAuth must be used within an AuthProvider.");
  }

  return context;
}

export default AuthContext;
