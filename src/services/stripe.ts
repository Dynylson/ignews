import Stripe from "stripe";
import { version } from "../../package.json";

export const stripe = new Stripe(
  "sk_test_51LGx8PECxCKV3EN4RsaWnVirMVogBoONA4YeB2LTOCk8vuzoOK1SL3QH8VctbuzoqdQBPQIMBVyAilffgrxZ4rdu00BgfePKE7",
  {
    apiVersion: "2020-08-27",
    appInfo: {
      name: "Ignews",
      version,
    },
  }
);
