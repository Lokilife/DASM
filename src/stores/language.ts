import { persistentAtom } from "@nanostores/persistent";
import { Language } from "../pages/types";

export const language = persistentAtom("language", Language.English, {
  encode: JSON.stringify,
  decode: JSON.parse,
});
