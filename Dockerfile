# Usa una imagen base de Node.js
FROM node:14

# Establece el directorio de trabajo en /app
WORKDIR /app

# Copia el package.json y el package-lock.json
COPY package*.json ./

# Instala las dependencias
RUN npm install

# Copia el resto del código de la aplicación
COPY . .

# Construye la aplicación de React
RUN npm run build

# Instala el paquete 'serve' globalmente
RUN npm install -g serve

# Expone el puerto 3000
EXPOSE 3000

# Comando para ejecutar 'serve' y servir la aplicación construida
CMD ["serve", "-s", "build", "-l", "3000"]
