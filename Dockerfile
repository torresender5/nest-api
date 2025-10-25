# Usa una imagen base compatible con `linux-musl` y `arm64`
FROM node:lts-alpine

# Establece el directorio de trabajo dentro del contenedor
WORKDIR /api

# Copia el `package.json` y `package-lock.json`
COPY package*.json ./
COPY prisma ./prisma/

# Instala las dependencias del proyecto
RUN npm install

# Copia el resto del código de la aplicación
COPY . .

RUN npx prisma generate

# Expone el puerto donde tu aplicación escucha
RUN npm run build

CMD ["npm", "start", "start:dev"]

