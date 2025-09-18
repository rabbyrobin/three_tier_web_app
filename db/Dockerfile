#Use the official MySQL 8.0 image as the base
FROM mysql:8.0

#Copy the SQL initialization script into the container's entrypoint directory
#Any .sql file in this directory will be executed when the container starts for the first time
COPY init.sql /docker-entrypoint-initdb.d/init.sql

#No need to expose a port here, as the backend will connect via the Docker network
EXPOSE 3306
#Set environment variables for the database
ENV MYSQL_ROOT_PASSWORD=1234
ENV MYSQL_DATABASE=demo_db
