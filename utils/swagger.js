import swaggerJSDoc from "swagger-jsdoc"
 
const nodEnv = process.env.NODE_ENV


const options = {
  definition: {
    openapi: '3.0.0',
    info: {
      title: 'income/expense API',
      version: '1.0.0',
      description: 'API documentation for our income/expense backend'
    },
    servers: [
      {
        url: nodEnv == "development" ? 'http://localhost:5000' : 'https://incomeapiproject.onrender.com'
      }
    ],
    components: {
      securitySchemes: {
        bearerAuth: {
          type: 'http',
          scheme: 'bearer',
          bearerFormat: 'JWT'
        }
      }
    },
    security: [
      {
        bearerAuth: []
      }
    ]
  },
  apis: ['./routes/*.js'] // Where your route files live
};

export const swaggerJSdOp = swaggerJSDoc(options)