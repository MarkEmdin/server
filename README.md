# server
Доступные Api

Для Users
    Добавление нового пользователя
      post запрос:  http://localhost:8080/api/users/ 
      body:{
          "name": "Nik",
          "city": "SPB"
      }

    Получение всех пользователей / одного пользователя по id
      get запрос: http://localhost:8080/api/users/
      get запрос: http://localhost:8080/api/users/1

    редактирование данных ползьвателя по id
      put запрос: http://localhost:8080/api/users/9
      body:{
          "name": "Nik",
          "city": "SPB"
      }

    Удаление пользователя по id
      delete запрос: http://localhost:8080/api/users/12
    
Для Ads
    Создание товара для пользователя с выбранным user_id
      post запрос  http://localhost:8080/api/ads?id=10
      body: 
      {
      "title": "Кровать",
      "picture_url": "https://cdn1.speedsize.com/e3baa240-c8b7-44c1-b56d-ea0acff325fc/https://www.homecenter.co.il//images/Fittings/homecenter/Prod_pic/7272300323/7272300323_Big.jpg",
      "location": "Petah-Tikva",
      "telephone": "88005553535",
      "description": "Кровать 140/90 удобная, раньше была деревом"
      }
       
     Получение всех товаров
      get запрос http://localhost:8080/api/ads/
      
     Получение товаров определенного пользователя по user_id
      get запрос http://localhost:8080/api/ads/user?id=8
      
     Получение товара по id товара
      get запрос http://localhost:8080/api/ads/1
     


