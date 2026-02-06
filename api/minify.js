const jsonminify = require('jsonminify');

module.exports = async (req, res) => {
  if (req.method !== 'POST') return res.status(405).json({error: 'POST only'});
  const { json } = req.body;
  
  try {
    const minified = jsonminify(JSON.stringify(JSON.parse(json)));
    res.json({ result: minified });
  } catch (e) {
    res.status(400).json({error: e.message});
  }
};