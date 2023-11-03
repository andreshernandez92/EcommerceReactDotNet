# EcommerceReactDotNet
<img
                    src="https://github.com/andreshernandez92/andreshernandez92.github.io/blob/main/assets/Portfolio1.gif?raw=true"
                    class="img-fluid"
                    alt="Project Image"
                    width="600"
                    height="400"
                  />
## Introduction

 A robust and modern app built portfolio project using .NET and React! 
This project is designed to provide a basic shopping experience for users, featuring an intuitive and responsive user interface, 
efficient back-end architecture, and basic e-commerce functionalities.

**Features**
<br/>
-Browse and search for products.<br/>
-Add products to your cart and proceed to checkout using *stripe*.<br/>
-User-friendly account and authentication.<br/>
-Basic product management for admin users.<br/>
-Integration with PostgreSQL for data storage and management.<br/>

## Prerequisites

- .NET Core 7
- Node version 18
- Docker
- PostgreSQL

## Installation

1. **Restore API Dependencies:**
   Change to the `API` folder and use the following command to install dependencies for the API:

   ```shell
   cd API
   dotnet restore

2. **Node Dependencies**:Navigate to the client folder and use `npm install` to install Node dependencies.
     ```shell
   cd client
   npm install

3. **Redux Toolkit**: Install Redux Toolkit as it is required for this project.

4. **Running the Database Locally**

This program requires Docker to run in development mode. Use the following command to run the database locally in Docker:.

  ```bash
  docker run --name dev -e POSTGRES=appuser -e POSTGRES_PASSWORD=secret -p 5432:5432 -d postgres:latest
  ```


## Environment Variables
You need to set the following environment variables to make it work in development mode:
  ```shell
        "JWTSettings": {
        "TokenKey": "This is a secret key and needs to be at least 12 characters"
        }
```
```shell
"StripeSettings":{
    "PublishableKey": "<Your Publishable Key>",
    "SecretKey": "<Your Secret Key>"
}
```
The admin role is:
User: Admin
Password: Pa$$w0rd

For member role is:
User: Bob
Password: Pa$$w0rd

## Build
The Node build is inside the API folder in www/root.
  ```shell
   cd client
   npm run build
```
## License
This project is licensed under the MIT License
