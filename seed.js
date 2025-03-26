const sequelize = require('./src/config/sequalize');
const Wholesaler = require('./src/model/wholesaler');
const Retailer = require('./src/model/retailer');
const Stock = require('./src/model/stock');





const seed = async () => {
    try {
      // Drop and recreate all tables (force sync)
      await sequelize.sync({ force: true });
      console.log('Database synced!');
  
      // Create wholesalers
      const wholesalers = await Wholesaler.bulkCreate([
        { name: 'Wholesaler A', mobile_number: '111-111-1111' },
        { name: 'Wholesaler B', mobile_number: '222-222-2222' }
      ]);
  
      // Create retailers
      const retailers = await Retailer.bulkCreate([
        { name: 'Retailer X', mobile_number: '333-333-3333' },
        { name: 'Retailer Y', mobile_number: '444-444-4444' },
        { name: 'Retailer Z', mobile_number: '555-555-5555' }
      ]);
  
      // Generate stock data for each month in 2021
      const stockEntries = [];
      const getRandomStockAmount = () => Math.floor(Math.random() * 1000) + 100;
  
      for (let month = 0; month < 12; month++) {
        const currentMonthDate = new Date(2021, month, 1);
        wholesalers.forEach(wholesaler => {
          retailers.forEach(retailer => {
            stockEntries.push({
              wholesaler_id: wholesaler.id,
              retailer_id: retailer.id,
              stock_amount: getRandomStockAmount(),
              date: new Date(currentMonthDate)
            });
          });
        });
      }
  
      await Stock.bulkCreate(stockEntries);
      console.log('Seed data created successfully!');
      process.exit();
    } catch (error) {
      console.error('Error seeding data:', error);
      process.exit(1);
    }
  };
  
  seed();