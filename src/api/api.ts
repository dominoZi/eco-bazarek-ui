import { BASE_URL } from "./consts";
import wretch from "wretch";
import { CreateUserProfile } from "./types";

export const subscibe = (email: string) =>
  wretch(BASE_URL + "/subscribe").post({ email });

export const fetchSubscibe = (email: string) =>
  fetch(BASE_URL + "/subscribe", { body: JSON.stringify({ email }) });

export const loginUser = (email: string, password: string) =>
  wretch(BASE_URL + "/users/login").post({ email, password });

export const createUser = (newUser: CreateUserProfile) =>
  wretch(BASE_URL + "/users").post({ ...newUser });
