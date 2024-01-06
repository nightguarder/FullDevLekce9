import express from 'express';


const router = express.Router();

router.get('/api', (req, res) => {
  res.json({
    message: 'API - Endpoint',
  });
});


export default router;
