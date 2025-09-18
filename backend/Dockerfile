#Use the official Node.js 18 image as the base
FROM node:18

#Set the working directory inside the container
WORKDIR /app

#Copy package.json and package-lock.json to the container
COPY package*.json ./

#Install the dependencies
RUN npm install

#Copy the rest of the application code
COPY . .

#Expose the port the app runs on
EXPOSE 3000

#Run the application
CMD ["npm", "start"]
