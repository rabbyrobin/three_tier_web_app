#Use a lean Nginx image as the base

FROM nginx:alpine

#Copy the static HTML file from the frontend directory into the Nginx web root
#The default web root for Nginx is /usr/share/nginx/html

COPY index.html /usr/share/nginx/html/index.html

#Expose port 80 to the outside world

EXPOSE 80
