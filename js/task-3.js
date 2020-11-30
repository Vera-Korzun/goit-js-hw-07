const images = [
    {
      url:'https://images.pexels.com/photos/140134/pexels-photo-140134.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
      alt:'White and Black Long Fur Cat',
    },
    {
      url:'https://images.pexels.com/photos/213399/pexels-photo-213399.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
      alt:'Orange and White Koi Fish Near Yellow Koi Fish',
    },
    {
      url:'https://images.pexels.com/photos/219943/pexels-photo-219943.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
      alt:'Group of Horses Running',
    },
  ];

  let getUl=document.querySelector('#gallery');

  const createLi=function(item){
    getUl.insertAdjacentHTML('afterbegin', '<li><img></li>');
    let getLi=document.querySelector('#gallery li')
    let getImg=document.querySelector('#gallery img');
    getImg.setAttribute('src', item.url);
    getImg.setAttribute('alt', item.alt);
    getUl.setAttribute('class', 'list');
    getLi.setAttribute('class', 'list__item');
    getImg.setAttribute('class', 'list__item--img');
  };
  images.forEach(createLi)
    console.log(getUl);
    