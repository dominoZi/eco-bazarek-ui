import { BASE_URL } from "./consts";
import wretch from "wretch";

export const subscibe = (email: string) =>
  wretch(BASE_URL + "/subscribe").post({ email });
