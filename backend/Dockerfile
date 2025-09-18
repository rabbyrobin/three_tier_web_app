#Use the official Node.js 18 image as the base
FROM node:18

#Set the working directory inside the container
WORKDIR /app

#Copy package.json, package-lock.json, and the .env file
COPY package*.json ./

#We copy the .env file here so it's available when the container runs
COPY .env ./

#Install the dependencies
RUN npm install

#Copy the rest of the application code
COPY . .

#Expose the port the app runs on
EXPOSE 3000

#Run the application
CMD ["npm", "start"]
