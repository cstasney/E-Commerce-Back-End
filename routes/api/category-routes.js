const router = require('express').Router();
const { Category, Product } = require('../../models');

// The `/api/categories` endpoint

router.get('/', (req, res) => {
  // find all categories
  Category.findAll({
    // be sure to include its associated Products
    include: [{ model: Product }]
  });
  if (!categoryData) {
    res.status(404).json({ message: "No Categories in the database! " })
    return;
  };
  res.status(200).json(categoryData)
    .catch(err => {
      console.log(err);
      res.status(500).json;
    })
});

router.get('/:id', (req, res) => {
  // find one category by its `id` value
  Category.findByPk({
    // be sure to include its associated Products
    include: [{ model: Product }]
  });
  if (!categoryData) {
    res.status(404).json({ message: "Category not found!" })
    return;
  };
  res.status(200).json(categoryData)
    .catch(err => {
      console.log(err);
      res.status(500).json;
    });
});

router.post('/', (req, res) => {
  // create a new category
  const categoryData = Category.create(req.body)
  res.status(200).json(categoryData)
    .catch(err => {
      console.log(err);
      res.status(500).json;
    });
});

router.put('/:id', (req, res) => {
  // update a category by its `id` value
});

router.delete('/:id', (req, res) => {
  // delete a category by its `id` value
});

module.exports = router;
