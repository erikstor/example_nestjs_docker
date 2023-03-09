#build stage
FROM node:alpine AS build
WORKDIR /home/ubuntu/projects/example_nestjs_docker
COPY package*.json ./
RUN npm install
COPY . .
RUN npm run build

#prod stage
FROM node:alpine
WORKDIR /home/ubuntu/projects/example_nestjs_docker
ENV ENVIRONMENT=production
COPY --from=build /home/ubuntu/projects/example_nestjs_docker/dist ./dist
COPY package*.json ./
RUN npm install --only=production
RUN rm package*.json
EXPOSE 3000

CMD ["node", "dist/main.js"]

