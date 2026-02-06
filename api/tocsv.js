const convert = require('json-to-csv');

module.exports = async (req, res) => {
  if (req.method !== 'POST') return res.status(405).json({error: 'POST only'});
  const { json } = req.body;
  
  try {
    const parsed = JSON.parse(json);
    const csv = convert(parsed);
    res.json({ result: csv });
  } catch (e) {
    res.status(400).json({error: e.message});
  }
};