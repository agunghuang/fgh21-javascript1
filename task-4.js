let data = {
  id: 1,
  name: "Leanne Graham",
  username: "Bret",
  email: "Sincere@april.biz",
  hobby: "fishing",
  address:
  {
  street: "Kulas Light",
  suite: "Apt. 556",
  city: "Gwenborough",
  zipcode: "92998-3874",
  },
  phone: "1-770-736-8031 x56442",
  website: "hildegard.org",
  };

  const newData = {
    ...data,
    name: "Agung Prabowo",
    email: "agungprabowo92@gmail.com",
    hobby: "fishing",
  };
  
  console.log(newData);
