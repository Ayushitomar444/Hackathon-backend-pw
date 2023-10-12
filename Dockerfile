# Specifying the base image
FROM public.ecr.aws/i3c5v1i2/node:16

# Working Directory in container, Commands will be issued relative to this dir
WORKDIR /usr/src/app

# Copy over package.json
COPY package*.json ./

# Install All Dependencies
RUN npm i --force

# Copy all Remaining Code/ Add folders like node_modules in .dockerignore
COPY . .

#Set command to run 
RUN npm run build

EXPOSE 4000

CMD ["node" , "dist/main"]
