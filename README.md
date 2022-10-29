# Assignment-1 Image Processing API
The Application is 

# What I learnt
- JavaScript Modules
- NodeJS and Node Package Manager (NPM)
- Apply TypeScript to develop application
- Unit testing and test-driven development (TDD) using Jasmine
- Working with Express and using the File System Module

# Run Command
To run the command Eslint, Prettier and Jasmine to run test senarios

## 1. Run Lint
This is a tool to test syntax
```
npm run lint
```

## 2. Run Prettier
This is a tool to check style
```
npm run prettier
```

## 3. Run Test
```
npm run test
```

## Build and start the server
Following these steps to build and start the server
1. Run Build to install packager `npm run build`
2. Start the application by `npm run start`
3. After starting the application, we can interact with it on local server: http://localhost:4000
4. Resize endpoint
Build the API with npm run build and then execute it with npm run start. Go to http://localhost:4000/ and then create your query `?fileName=<name_of_image>&height=<desired_height>&width=<desired_width>`
For example: http://localhost:4000/api/image?filename=city&width=200&height=200

![alt text](https://github.com/NgoDuyVu1993/Assignment-1/blob/main/image/resize_500_600.PNG)

