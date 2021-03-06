import { Request, Response } from 'express';

export const home = (request: Request, response: Response) => {
  const user = {
    name: 'Thiago',
    lastName: 'Cordeiro',
    age: 20,
  }
  let showOld: boolean = false;

  if(user.age >= 50) {
    showOld = true;
  }
  
  response.render('pages/home', {
    user, 
    showOld,  
    products: [
      {title: 'Produto X', price: 10},
      {title: 'Produto Y', price: 15},
      {title: 'Produto Z', price: 20}
    ],
    frasesdoDia: []
  });
}