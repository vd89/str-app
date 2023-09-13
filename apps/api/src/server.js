import express, {json, urlencoded} from 'express';
import cors from 'cors';
import helmet from 'helmet';
import swaggerJsdoc from 'swagger-jsdoc';
import {serve as swaggerServe, setup as swaggerSetup} from 'swagger-ui-express';
import swaggerDoc from './swaggerDoc.json' assert {type: 'json'};

export const createServer = () => {
  const app = express();
  app
    .disable('x-powered-by')
    .use(json())
    .use(urlencoded({extended: true}))
    .use(cors())
    .use(helmet())
    .use('/api-docs', swaggerServe, swaggerSetup(swaggerDoc))
    .get('/', (req, res, next) => {
      try {
        const healthCheck = {
          health_check: 'This is the the pong response',
          date: new Date(),
          url: req.url,
          header: Object.assign({}, req.headers),
          response: Object.assign({}, res.header),
        };
        return res.json({message: 'SUCCESS', data: healthCheck});
      } catch (err) {
        console.log(err.message);
        next(err);
      }
    });
  return app;
};
