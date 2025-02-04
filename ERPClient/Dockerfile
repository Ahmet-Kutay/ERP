# 1️⃣ Angular için bir Nginx tabanlı Docker image kullanıyoruz
FROM node:18 AS build

WORKDIR /app

# 2️⃣ Proje dosyalarını kopyala
COPY . .

# 3️⃣ Bağımlılıkları yükle ve projeyi derle
RUN npm install
RUN npm run build --prod

# 4️⃣ Nginx ile serve etmek için image oluştur
FROM nginx:alpine

# 5️⃣ Angular derlenen dosyaları Nginx’e kopyala
COPY --from=build /app/dist /usr/share/nginx/html

# 6️⃣ Nginx portunu aç
EXPOSE 80

# 7️⃣ Nginx'i başlat
CMD ["nginx", "-g", "daemon off;"]
