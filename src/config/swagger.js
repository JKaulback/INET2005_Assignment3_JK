const swaggerJsdoc = require('swagger-jsdoc');
const swaggerUi = require('swagger-ui-express');

const options = {
  definition: {
    openapi: '3.0.0',
    info: {
      title: 'Products API',
      version: '1.0.0',
      description: 'A RESTful API for managing products with MongoDB',
    },
    servers: [
      {
        url: 'http://localhost:3000',
        description: 'Development server',
      },
    ],
    components: {
      schemas: {
        Product: {
          type: 'object',
          required: ['ISBN', 'name', 'department', 'price'],
          properties: {
            _id: {
              type: 'string',
              description: 'MongoDB ObjectId',
            },
            ISBN: {
              type: 'string',
              description: 'Product ISBN (UUID format)',
            },
            name: {
              type: 'string',
              description: 'Product name',
            },
            department: {
              type: 'string',
              description: 'Product department',
            },
            price: {
              type: 'number',
              description: 'Product price',
            },
            description: {
              type: 'string',
              description: 'Product description',
            },
            adjective: {
              type: 'string',
              description: 'Product adjective',
            },
            material: {
              type: 'string',
              description: 'Product material',
            },
            country_of_origin: {
              type: 'string',
              description: 'Country of origin',
            },
          },
        },
        Error: {
          type: 'object',
          properties: {
            error: {
              type: 'string',
            },
            details: {
              type: 'string',
            },
          },
        },
      },
    },
  },
  apis: ['./routes/*.js'], // Path to the API docs
};

const specs = swaggerJsdoc(options);

module.exports = {
  specs,
  swaggerUi,
};