import { Router } from 'express';

const routesMatches = Router();

routesMatches.get('/',(_req, res) => {
    res.status(200).json({ message: 'Login successful' });
  });

export default routesMatches;
