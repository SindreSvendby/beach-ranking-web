import { Router } from 'express';
import superagent from 'superagent';

const router = new Router();
const api = process.env.API;

router.get('/rankinglist/:year/:gender/', (req, res) => {
  superagent.get(api + '/ranking/' + req.params.year + '/' + req.params.gender,
    function(err, response) {
    if (err) {
      return res.json({'error': err});
    }
    return res.send(response.body);
  });
});

export default router;
