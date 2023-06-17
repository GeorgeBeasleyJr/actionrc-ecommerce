const SHOP_DATA = [
  {
    title: 'cars',
    items: [
      {
        "id": 1,
      "name": "Sport Drift Car",
      "imageUrl": "https://www.exhobby.com/cdn/shop/products/1_14master_5.jpg?v=1669270200",
      "price": 50
      },
      {
        "id": 2,
        "name": "GT Racing Car",
        "imageUrl": "https://m.media-amazon.com/images/I/61PqHp+PmLL.jpg",
        "price": 32
      },
      {
        "id": 3,
        "name": "GT Drift Car",
        "imageUrl": "https://images-cdn.ubuy.co.in/635258851751a177c075d859-gt-rc-drift-cars-1-14-remote-control-car.jpg",
        "price": 35
      },
      {
        "id": 4,
        "name": "RC Cars for Kids",
        "imageUrl": "https://traxxas.com/sites/default/files/images/products/24054-61_ORNG.jpg",
        "price": 200
      },
      {
        "id": 5,
        "name": "Offroad Racing Car",
        "imageUrl": "https://i5.walmartimages.com/asr/12db1b36-fc83-4a19-b19a-71679704993f.a979e3fa9283e5c585eb646b05277657.jpeg?odnHeight=612&odnWidth=612&odnBg=FFFFFF",
        "price": 25
      },
      {
        "id": 6,
        "name": "Tamiya VW Bus",
        "imageUrl": "https://m.media-amazon.com/images/I/61Fdw6EpQ5L._AC_SX679_.jpg",
        "price": 186
      },
      {
        "id": 7,
        "name": "Bugatti Chiron",
        "imageUrl": "https://cdn.shopify.com/s/files/1/0282/3300/7207/products/cdcccc1.jpg?v=1665783989",
        "price": 18
      },
      {
        "id": 8,
        "name": "Hoonigan Hoonicorn",
        "imageUrl": "https://cdn.shopify.com/s/files/1/0014/2943/8517/products/HA338HCRT-AST-1.jpg?v=1658127010",
        "price": 396
      },
      {
        "id": 9,
        "name": "GoolRC RC Drift Car",
        "imageUrl": "https://m.media-amazon.com/images/I/610QKQ2Ji4L.jpg",
        "price": 46
      }
    ]
  },
  {
    title: 'trucks',
    items: [
      {
        "id": 21,
      "name": "Stampede",
      "imageUrl": "https://images-na.ssl-images-amazon.com/images/I/6102xTQmVGL._SL1200_.jpg",
      "price": 450
      },
      {
        "id": 22,
        "name": "Savage 25",
        "imageUrl": "https://th.bing.com/th/id/R.afdfd7419a7b8306bd462e40fec5161c?rik=lU9dNzjPtf9%2fbA&riu=http%3a%2f%2f2.bp.blogspot.com%2f-yU-UvHCSc2Q%2fTyh2-xsVHqI%2fAAAAAAAAEro%2fqR631v13-sU%2fs1600%2frc_trucks_wallpapers.jpg005.jpg&ehk=SK7d7dU4%2fogsPUPL3r5BSWRZosCBuM5wWyk%2bU2y4yAk%3d&risl=&pid=ImgRaw&r=0",
        "price": 320
      },
      {
        "id": 23,
        "name": "Revo",
        "imageUrl": "https://adigitallamp.com/wp-content/uploads/2018/07/The-Perfect-RC-Truck.jpg",
        "price": 365
      },
      {
        "id": 24,
        "name": "Giant",
        "imageUrl": "https://www.rccaraction.com/wp-content/uploads/2018/05/Giant-1-ft-img.jpg",
        "price": 475
      },
      {
        "id": 25,
        "name": "X-Max",
        "imageUrl": "https://i.pinimg.com/736x/0e/c8/bb/0ec8bb7a3883b54665737c002a15b843.jpg",
        "price": 525
      },
      {
        "id": 26,
        "name": "Bigfoot",
        "imageUrl": "https://th.bing.com/th/id/R.f1f951e887a9005ec3a0a62e6be741ba?rik=N9Rf8KWytyyxBA&riu=http%3a%2f%2frctruckstop.com%2fwp-content%2fuploads%2f2012%2f08%2fbigfoot.jpg&ehk=Ot%2f0TolYtCntxTLCLJLrmVP9C%2bJui3bsZ3WfgAnyW3E%3d&risl=&pid=ImgRaw&r=0",
        "price": 186
      },
      {
        "id": 27,
        "name": "Big Rig Mudder",
        "imageUrl": "https://i.pinimg.com/originals/18/51/8f/18518f45b1b14ebe654bc52feba8b5f5.jpg",
        "price": 18
      },
      {
        "id": 28,
        "name": "Monster",
        "imageUrl": "https://images-na.ssl-images-amazon.com/images/I/71gP3W63D0L._SL1000_.jpg",
        "price": 396
      },
      {
        "id": 29,
        "name": "Wildmax",
        "imageUrl": "https://images-na.ssl-images-amazon.com/images/I/61a8ZzL2oRL.jpg",
        "price": 46
      }
    ]
  },
  {
    title: 'planes',
    items: [
      {
        "id": 41,
      "name": "F4u Corsair",
      "imageUrl": "https://i.redd.it/4r90lp8v0qv41.jpg",
      "price": 190
      },
      {
        "id": 42,
        "name": "BM-028 Bomber",
        "imageUrl": "https://m.media-amazon.com/images/I/61PqHp+PmLL.jpg",
        "price": 835
      },
      {
        "id": 43,
        "name": "Avro Vulcan B-2",
        "imageUrl": "https://live.staticflickr.com/7514/15881147387_4c01b32dc2.jpg",
        "price": 35
      },
      {
        "id": 44,
        "name": "P40 ARF Warhawk",
        "imageUrl": "https://ae01.alicdn.com/kf/HTB1aBD0LSzqK1RjSZPcq6zTepXak/Large-scale-foam-rc-planes-P40-ARF-Warhawk.jpg",
        "price": 269
      },
      {
        "id": 45,
        "name": "F-100D Super Sabre",
        "imageUrl": "https://images.amainhobbies.com/cdn-cgi/image/f=auto,width=475/images/large/fpm/fpm4070a.jpg",
        "price": 525
      },
      {
        "id": 46,
        "name": "F-16 Thunderbird",
        "imageUrl": "https://images.amainhobbies.com/cdn-cgi/image/f=auto,width=475/images/large/efl/efl87950.jpg",
        "price": 598
      },
      {
        "id": 47,
        "name": "A-10 Thunderbolt II",
        "imageUrl": "https://images.amainhobbies.com/cdn-cgi/image/f=auto,width=475/images/large/efl/efl011500.jpg",
        "price": 435
      },
      {
        "id": 48,
        "name": "D-18 Beechcraft",
        "imageUrl": "https://images.amainhobbies.com/cdn-cgi/image/f=auto,width=475/images/large/efl/efl106250.jpg",
        "price": 459
      },
      {
        "id": 49,
        "name": "F4U-4 Corsair",
        "imageUrl": "https://images.amainhobbies.com/cdn-cgi/image/f=auto,width=475/images/large/efl/efl18550.jpg",
        "price": 46
      }
    ]
  },
  {
    title: 'drones',
    items: [
      {
        "id": 61,
      "name": "Typhoon H Plus",
      "imageUrl": "https://i1.wp.com/thercdronehub.com/wp-content/uploads/2017/02/Yuneec_Typhoon_H.jpg",
      "price": 550
      },
      {
        "id": 62,
        "name": "Gyro Quadcopter for Kids",
        "imageUrl": "https://i5.walmartimages.com/asr/76809ab1-5fe8-41b8-bf0c-32f9105bf155.6d7966c6d87309adb39ebc46b30b3e9b.jpeg?odnWidth=1000&odnHeight=1000&odnBg=ffffff",
        "price": 32
      },
      {
        "id": 63,
        "name": "DJI Mini 2",
        "imageUrl": "https://i.pinimg.com/736x/6f/b8/34/6fb8347ee88447ad8b75010ad7396df0.jpg",
        "price": 47
      },
      {
        "id": 64,
        "name": "Snaptain S5C Pro",
        "imageUrl": "https://pisces.bbystatic.com/image2/BestBuy_US/images/products/6473/6473301cv11d.jpg;maxHeight=640;maxWidth=550",
        "price": 85
      },
      {
        "id": 65,
        "name": "KOOME Q8 LED Drone",
        "imageUrl": "https://th.bing.com/th/id/R.a722cf4dc271361f91150f9977744b21?rik=nfCJAoVx9dK%2beg&riu=http%3a%2f%2fpickrightly.com%2fwp-content%2fuploads%2f2020%2f02%2f51840-3.jpg&ehk=JumOvts8GjmYfd7AtjkL%2fckHS8NzlGFY8JslyZ3EMpc%3d&risl=&pid=ImgRaw&r=0",
        "price": 25
      },
      {
        "id": 66,
        "name": "HC652W Mouse Drone",
        "imageUrl": "https://img.tttcdn.com/product/xy/2000/2000/p/gu1/R/C/RM9650C/RM9650C-1-1082-GeNY.jpg",
        "price": 46
      },
      {
        "id": 67,
        "name": "Predator U842",
        "imageUrl": "https://images-na.ssl-images-amazon.com/images/I/71JZ%2BWg0TtL._SX522_.jpg",
        "price": 318
      },
      {
        "id": 68,
        "name": "Racer 25 PRO",
        "imageUrl": "https://img.staticbg.com/thumb/large/oaupload/banggood/images/A8/0C/ab11cdd4-7d01-46af-a63c-76286ad49b77.jpg",
        "price": 396
      },
      {
        "id": 69,
        "name": "Visuo XS809W",
        "imageUrl": "https://i.pinimg.com/originals/8d/e8/2b/8de82b135b46ec22c730227d3eec387f.jpg",
        "price": 46
      }
    ]
  },
  {
    title: 'boats',
    items: [
      {
        "id": 81,
      "name": "RC Sailboat",
      "imageUrl": "https://cimg3.ibsrv.net/gimg/www.rcuniverse.com-vbulletin/1500x2000/c_42_red_4_bd4beedbfe8d75cf04350b37492d5d922458199f.jpg",
      "price": 50
      },
      {
        "id": 82,
        "name": "Traxxas Spartan",
        "imageUrl": "https://i.ytimg.com/vi/p81P0GHGOr4/maxresdefault.jpg",
        "price": 32
      },
      {
        "id": 83,
        "name": "FT012 Racing Boat",
        "imageUrl": "https://th.bing.com/th/id/R.fa4ebb0a5a57d7c4f554e8bc897ed335?rik=KJ1zHN61tL2j6A&riu=http%3a%2f%2fae01.alicdn.com%2fkf%2fUTB8wRqav8ahduJk43Jaq6zM8FXaT.jpg&ehk=0Hm%2b2TCjG%2b%2fU3wSXcTBmBIOhJ1LFNe%2fMi1D%2bN%2fcvGDk%3d&risl=&pid=ImgRaw&r=0",
        "price": 35
      },
      {
        "id": 84,
        "name": "RC Cars for Kids",
        "imageUrl": "https://traxxas.com/sites/default/files/images/products/24054-61_ORNG.jpg",
        "price": 200
      },
      {
        "id": 85,
        "name": "E32 Black",
        "imageUrl": "https://i.ebayimg.com/images/g/b3wAAOSwec5kWVj-/s-l1600.jpg",
        "price": 225
      },
      {
        "id": 86,
        "name": "757 NQD",
        "imageUrl": "https://4.bp.blogspot.com/_OUInV-QR9rU/TDc7vHMaKlI/AAAAAAAAAOw/7V3vV8hYdQ4/s1600/boat+nqd757.jpg",
        "price": 186
      },
      {
        "id": 87,
        "name": "2006 Gas Racer",
        "imageUrl": "https://i.pinimg.com/originals/13/37/85/1337854a10095705507454d74e472aac.jpg",
        "price": 18
      },
      {
        "id": 88,
        "name": "Racing Gas RC",
        "imageUrl": "https://www.rctech.net/forum/attachments/rc-boating/763820d1307480325-whats-good-rc-boat-forum-dsc02580.jpg",
        "price": 396
      },
      {
        "id": 89,
        "name": "Arrow",
        "imageUrl": "https://th.bing.com/th/id/OIP.TJOoYWMkjJ71MZPcAGs3QgAAAA?pid=ImgDet&rs=1",
        "price": 46
      }
    ]
  },
  {
    title: 'helicopters',
    items: [
      {
        "id": 101,
      "name": "EC Gigantic",
      "imageUrl": "https://i.ytimg.com/vi/VHrDHVg84LM/maxresdefault.jpg",
      "price": 950
      },
      {
        "id": 102,
        "name": "Heli Slim",
        "imageUrl": "https://th.bing.com/th/id/R.a237c6eced3ab98de7c636fb4f5134fd?rik=%2fMfwz0TzIBbw1Q&riu=http%3a%2f%2fstore-images.s-microsoft.com%2fimage%2fapps.15413.9007199266532132.2b9b0985-8d7d-4c6e-ba0a-f5e3a12e7f2a.d4a1e367-3959-4d75-87c9-c2a16ec9189a&ehk=2d%2fTq%2fB6xomIYe7K7CvG8xmehN2biafv9AsIbYOdhBg%3d&risl=&pid=ImgRaw&r=0",
        "price": 32
      },
      {
        "id": 103,
        "name": "Trex 500",
        "imageUrl": "https://www.thoughtco.com/thmb/2goAdNv7pngSiwPvPBA5PJdcv9M=/768x0/filters:no_upscale():max_bytes(150000):strip_icc()/7917479942_ce80b40592_b-56a7dbb03df78cf7729a0090.jpg",
        "price": 235
      },
      {
        "id": 104,
        "name": "S31 Eagle",
        "imageUrl": "https://www.thanksbuyer.com/image/cache/data/201404/28539/1398437903-3-750x750.jpg",
        "price": 120
      },
      {
        "id": 105,
        "name": "S109G",
        "imageUrl": "https://m.media-amazon.com/images/I/61sw88lxwvL._AC_SX522_.jpg",
        "price": 40
      },
      {
        "id": 106,
        "name": "CH-46 Sea Knight",
        "imageUrl": "https://i.etsystatic.com/8961591/r/il/f80aca/3964302147/il_794xN.3964302147_mdab.jpg",
        "price": 110
      },
      {
        "id": 107,
        "name": "68th Assault Helicopter",
        "imageUrl": "https://i.etsystatic.com/21077080/r/il/e23b7a/4668007503/il_794xN.4668007503_exn3.jpg",
        "price": 18
      },
      {
        "id": 108,
        "name": "DE23 LED Lights",
        "imageUrl": "https://i.ebayimg.com/images/g/LAQAAOSw~lpkaERT/s-l1600.png",
        "price": 56
      },
      {
        "id": 109,
        "name": "STAT Medivac",
        "imageUrl": "https://i.ytimg.com/vi/tk7Tc6laFBU/maxresdefault.jpg",
        "price": 346
      }
    ]
  }
];

export default SHOP_DATA;