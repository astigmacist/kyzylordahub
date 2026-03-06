import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Статический экспорт для деплоя на обычный хостинг (ps.kz)
  output: "export",
  // Нужен для корректной работы путей на static hosting
  trailingSlash: true,
  // Отключаем оптимизацию изображений (не работает со static export)
  images: {
    unoptimized: true,
  },
};

export default nextConfig;
