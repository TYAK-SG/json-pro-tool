const Ajv = require('ajv');
const ajv = new Ajv();

module.exports = async (req, res) => {
  if (req.method !== 'POST') return res.status(405).json({error: 'POST only'});
  const { json } = req.body;
  if (!json) return res.status(400).json({error: 'Missing json'});
  
  try {
    JSON.parse(json);
    res.json({ valid: true });
  } catch (e) {
    res.json({ valid: false, errors: [e.message] });
  }
};