import { createClient } from "tinacms/dist/client";
import { queries } from "./types";
export const client = createClient({ url: 'https://content.tinajs.io/1.4/content/ad8c9448-49fe-4a0b-802f-e9f3318c4795/github/main', token: 'f150677af28ecc5821a23ce39f9a0d302bfaabda', queries,  });
export default client;
  