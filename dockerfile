# Этап 1: Сборка фронтенда
FROM node:16 AS build

# Устанавливаем рабочую директорию
WORKDIR /app

# Копируем package.json и package-lock.json
COPY package*.json ./

# Устанавливаем зависимости
RUN npm install

# Копируем все остальные файлы в контейнер
COPY . ./

# Добавляем переменную окружения
ARG REACT_APP_API_URL
ENV REACT_APP_API_URL=$REACT_APP_API_URL

# Собираем фронтенд для продакшн-среды
RUN npm run build

# Этап 2: Обслуживание фронтенда через Nginx
FROM nginx:alpine

# Копируем собранный фронтенд из предыдущего этапа в каталог для статических файлов Nginx
COPY --from=build /app/build /usr/share/nginx/html

# Экспонируем порт 80 для сервера
EXPOSE 80

# Запускаем nginx для обслуживания фронтенда
CMD ["nginx", "-g", "daemon off;"]
