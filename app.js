const express = require('express');
const wholesalerRoutes = require('./src/routes/wholesalerRoutes');
const retailerRoutes = require('./src/routes/retailerRoutes');

const app = express();
const sequalize = require('./src/config/sequalize')
const port = process.env.PORT || 3000;

app.use(express.json());


// const wholesalerRoutes = require('./routes/wholesalerRoutes');
// const retailerRoutes = require('./routes/retailerRoutes');

// app.use('/api/wholesalers', wholesalerRoutes);
// app.use('/api/retailers', retailerRoutes);

sequalize.authenticate()
  .then(() => console.log('Database connected...'))
  .catch(err => console.error('Unable to connect to the database:', err));

  app.get('/', (req, res) => {
    res.send('Hi there');
  });
  

app.use('/api/wholesalers', wholesalerRoutes);
app.use('/api/retailers', retailerRoutes);

app.listen(port, () => { 
  console.log(`Server running on port ${port}`);
});
