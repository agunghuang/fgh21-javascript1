let data = {
    id: 1,
    name: "Agung Prabowo",
    username: "Beceng",
    email: "agungprabowo92@gmail.com",
    address: 
    {
    street: "Ngantay",
    suite: "no.35",
    city: "Cianjur",
    zipcode: "43291",
    },
    phone: "0895397222055",
    website: "binance.com",
    }
    const {
        address: { street, city }
      } = data;
      
      console.log(street); 
      console.log(city);  
      