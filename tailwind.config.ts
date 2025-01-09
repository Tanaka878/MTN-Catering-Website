import type { Config } from "tailwindcss";

export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
      },
      backgroundImage: {
        'radial-gradient-custom': 'radial-gradient(ellipse 200% 100% at bottom left, #183EC2, #EAEFFE 66%)',
      },
    },
  },
  plugins: [],
} satisfies Config;
