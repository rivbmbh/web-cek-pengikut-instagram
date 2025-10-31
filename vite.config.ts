import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import path from "path";
import tailwindcss from "@tailwindcss/vite";
import { SEO } from "vite-plugin-seo";
// https://vite.dev/config/
export default defineConfig({
  plugins: [
    react(),
    tailwindcss(),
    SEO({
      title:
        "Cek Followers Instagram - Lihat Jumlah dan Analisis Akun IG Kamu - InstaCik",
      description:
        "mau cari tau siapa yang unfollow kamu di Instagram? yuk pakai InstaCik dan lihat siapa saja yang tidak follow kamu",
      canonical: "https://instaCik.vercel.app",
      og: {
        title: "Cek Followers Instagram Online Gratis - InstaCik",
        description:
          "Lihat siapa aja yang tidak ikuti kamu balik atau ghosting kamu",
        url: "https://instaCik.vercel.app",
        images: [
          {
            url: "https://instacik.vercel.app/og_image.png",
            width: 1200,
            height: 630,
            alt: "Tampilan alat dengan react cek followers Instagram online",
          },
        ],
        site_name: "Cek Followers Instagram - InstaCik",
      },
      twitter: {
        card: "summary_large_image",
        image: "https://instacik.vercel.app/og_image.png",
      },
    }),
  ],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
});
