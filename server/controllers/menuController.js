import Menu from '../models/Menu.js';

export const getMenus = async (req, res) => {
  try {
    const filter = req.query.day ? { day: req.query.day } : {};
    const menus = await Menu.find(filter).sort({ meal: 1, time: 1 });
    res.json(menus);
  } catch (error) { res.status(500).json({ message: error.message }); }
};

export const createMenu = async (req, res) => {
  try {
    const menu = await Menu.create(req.body);
    res.status(201).json(menu);
  } catch (error) { res.status(400).json({ message: error.message }); }
};
