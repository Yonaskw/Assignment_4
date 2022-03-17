
db.products.remove({});
const ProdDB = [
  {
    id: 1,
    name: 'Brown Denim',
    category: 'Jeans',
    price: 77,
    imageURL: 'https://tinyurl.com/3evtk3pu',
  },

  {
    id: 2,
    name: 'Sunglass',
    category: 'Accessories',
    price: 100,
    imageURL: 'https://tinyurl.com/mub6afuh',
  },
  {
    id: 3,
    name: 'Sports Coat',
    category: 'Jackets',
    price: 80,
    imageURL: 'https://tinyurl.com/mub6afuh',
  },
  {
    id: 4,
    name: 'Cardigans',
    category: 'Sweaters',
    price: 78,
    imageURL: 'https://tinyurl.com/mub6afuh',
  },
  {
    id: 5,
    name: 'Blue Shirts',
    category: 'Shirts',
    price: 80,
    imageURL: 'https://tinyurl.com/mub6afuh',
  },

];

db.products.insertMany(ProdDB);
const count = db.products.count();
print('Inserted', count, 'products');
db.counters.remove({ _id: 'products' });
db.counters.insert({ _id: 'products', current: count });
db.products.createIndex({ id: 1 }, { unique: true });
db.products.createIndex({ name: 1 });
db.products.createIndex({ category: 1 });
db.products.createIndex({ price: 1 });
