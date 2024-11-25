import { type Config } from "tailwindcss";
import daisyui from "daisyui";

export default {
  plugins: [daisyui as any],
  content: [
    "{routes,islands,components}/**/*.{ts,tsx,js,jsx}",
  ],
  daisyui: {
    themes: ["light", "dark", "cupcake"],
  },
} satisfies Config;
