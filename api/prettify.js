module.exports = async (req, res) => {
  if (req.method !== 'POST') return res.status(405).json({error: 'POST only'});
  const { json } = req.body;
  
  try {
    const parsed = JSON.parse(json);
    res.json({ result: JSON.stringify(parsed, null, 2) });
  } catch (e) {
    res.status(400).json({error: e.message});
  }
};