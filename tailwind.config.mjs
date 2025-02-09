/** @type {import('tailwindcss').Config} */

export default {
  content: ["./src/**/*.{astro,md,mdx,ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        dejavu: ["DejavuSansMono", "monospace"],
      },
    },
  },
  safelist: ["external-link"],
};
