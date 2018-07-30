/**
 * Mocking client-server processing
 */
const _products = {
  "items": [
    {
      "restaurant": {
        "activities": [
          {
            "attribute": "17.0",
            "description": "新用户下单立减17元",
            "icon_color": "70bc46",
            "icon_name": "首",
            "id": 1312579465,
            "is_exclusive_with_food_activity": true,
            "name": "华北四组新用户",
            "tips": "新用户下单立减17元",
            "type": 103
          },
          {
            "attribute": "{\"120\": {\"1\": 18.0, \"0\": 0}, \"50\": {\"1\": 7.0, \"0\": 0}, \"90\": {\"1\": 13.0, \"0\": 0}, \"70\": {\"1\": 10.0, \"0\": 0}}",
            "description": "满50减7，满70减10，满90减13，满120减18",
            "icon_color": "f07373",
            "icon_name": "减",
            "id": 1328883281,
            "is_exclusive_with_food_activity": true,
            "name": "101's满减",
            "tips": "满50减7，满70减10，满90减13，满120减18",
            "type": 102
          },
          {
            "description": "单品定价",
            "icon_color": "f1884f",
            "icon_name": "特",
            "id": 1345934177,
            "name": "单品定价",
            "tips": "单品定价"
          },
          {
            "description": "五折特惠套餐",
            "icon_color": "f07373",
            "icon_name": "折",
            "id": 1328868713,
            "name": "五折特惠套餐",
            "tips": "五折特惠套餐"
          },
          {
            "description": "五折特惠套餐",
            "icon_color": "f07373",
            "icon_name": "折",
            "id": 1328867489,
            "name": "五折特惠套餐",
            "tips": "五折特惠套餐"
          },
          {
            "description": "单品折扣",
            "icon_color": "f07373",
            "icon_name": "折",
            "id": 1300849537,
            "name": "单品折扣",
            "tips": "单品折扣"
          },
          {
            "description": "单品折扣",
            "icon_color": "f07373",
            "icon_name": "折",
            "id": 1300849369,
            "name": "单品折扣",
            "tips": "单品折扣"
          }
        ],
        "address": "辽宁省大连高新园区小平岛邻海街36号",
        "authentic_id": 2333350835368501,
        "description": "我们只做小平岛最专业的pizza店！",
        "distance": 2669,
        "favored": false,
        "flavors": [
          {
            "id": 211,
            "name": "披萨意面"
          },
          {
            "id": 234,
            "name": "炸鸡炸串"
          }
        ],
        "float_delivery_fee": 3,
        "float_minimum_order_amount": 50,
        "has_story": false,
        "id": 649501,
        "image_path": "data:image/webp;base64,UklGRnwFAABXRUJQVlA4IHAFAADQHgCdASqCAIIAPpFEnUulo6KhpHXZILASCWdu4XEnDgkBl4G+AdJzkXK2f7f4N+LHyN7T8jCId2L/lPKPv12td2zAB+Tf0z/g+Db/RegH1o/yHqe/lX+49Ef9B4SX07/M+wH/Hf6//zf7J+TPyQ/9H9887/1D7BX64dYL9zPYz/aoahkAIlCpd84cio1+x93LLsaD2MoVymPCbEEh8r4xs9nU0BVyVKG7/B+WhllGT+A25OuqIiUKrr/G3qlHz6RBIvbajhQH/nQlWYNFqxhNAitx34875GteCeoyC7rz7iey6rBsdjtTnally1npZeIMgBEoVLvnDkVGv2QAbAAA/v8AQAy1WWpWVm9y1cu/qHm+mGrcd4/ztlaOc5zE/+3LRTw+h7SiL3d86nbOUTpJ9DT9/ByJBqt44/1oe6XgPhTXnZRTWZkvWEduhg7yuWUjJN7QnpAJ4nZZreP418eNQxfYabe8rE+8KLiCI6hIE3abWn8lakascO0Yh/Ul+nQmLaNtaW6myBUqAOj282j+Oc8GD4kYiqx08lnf448J2O7IM0O4V012kA5ySeoKVY27/5Kvn200bff4cFGYDL3br75iDZJ1LvOoaOBeB+YSyR1Ki5SqA+VZeRX/Tvg9UQVQ3RYtP7C6WEyFyfGJ6jLy/0Re4CmUzsB5VBsvhqSi0aRsdLtvU8KkQVZm/NW9bx9L7ctsgz7lrFeH9w8lZ/e8B+rExZ0j//oefr7B9c+a/9JV4KnujiOGZ81HzQt//a8KTUNcs8/rwsNHl8EF1UEb017fm2ZafsjiFVyHO0uel/VuK9b01MzUNa85ywYoPUoEn4Ar7OB808QxfKkmzUDYhviw3a3AVhZXu/qJ8HLKvOcRzfItvfpy4Tf0WmJdP/SuPqOvTqcNWbQwreM8pvcnZki+3bGg7YNBHD7TgEF1R2Bt50FxRp2ZkE7wfMkh3bLC8tu3unq+bcV7s2HRhzNX+uXEq3ZzADoyFvckeHjFXKPRmsMkjL0fDAOMSVu9STc1MhrIqsZXSwVAY7D7o4vPrlSMSpcPSgnprQ67azgIW1U040MuTopFY0F7rq0LRVfeK+BAN8Hh6F3SH4dTOS/22lZ26XPDulOKqGRSzboV4phg4tRlgkyUCRHyZ0Ja3SaS3PcgfeHUXuC2lj3E7UJXKM9xPOc0MBm1aZ7hPjpImqO0Sz8Bw73cN+Tn9hER0PsQeJuxGMXhaw+fAbbpDXejy6irrR8RsqR1w7WtRSw0VXEBlSOCj0OipSxv4NAExx/mNll3V/dlsKzbtFHJx6cnc7EXXVE2+M9gFK9iWNX+1jok7ifo/kn9M5Zj+Du4gRLcW/pFuPr12DxcyZ4L6+5VaoxhYAWvsBUemAzEf8TMY8hb8h8tHu775JVhhifwuUW2W6YO9XhDK2VoIPCCH3tzOgr/PWG+5e4NG5Le/X9mZIIduv1bXTJaXS35DiW0usVat+3vWyogh36f2mcQUX8yQXvcvZO/J3xdno9P27cXOIrgeQOemIn9vtNewu88/o0jtAFLMxhFiCOqTPtFOLlDkP6iAG+F0gdPgFErKK4PJE8KdP4+uCf3iX9Ic741YbgS8LrNaltm4kFzKF1+K91J+gtKNwfUcDZJop3B9gpA+RwtGLOCwfer8eLDC1BRN/QwQUSKdXUu2bU5CULn+dM3h7+7QTTvqO5lF/4l0dsxM2O5WlB2SSxUdkrxjBpq86FY+OjHbAOzjeWqqHJj06CUWlaR4ncOpA8dgiCy5vjwlgqtsixUKY94P6pZk5z2Ik18iulHyhRrDfL8DoXzL5UaB6NhjVyjjqnHK2YDTRgPY/sBwYZxVdXZalXOY1eAAAA=",
        "is_new": false,
        "is_premium": true,
        "is_stock_empty": 0,
        "is_valid": 1,
        "latitude": 38.836172,
        "longitude": 121.503225,
        "max_applied_quantity_per_order": -1,
        "name": "101比萨（小平岛店）",
        "next_business_time": "",
        "only_use_poi": false,
        "opening_hours": [
          "10:00/20:00"
        ],
        "order_lead_time": 39,
        "phone": "0411-84779101",
        "piecewise_agent_fee": {
          "description": "配送费¥3",
          "extra_fee": 0,
          "is_extra": false,
          "rules": [
            {
              "fee": 3,
              "price": 50
            }
          ],
          "tips": "配送费¥3"
        },
        "platform": 0,
        "posters": [],
        "promotion_info": "大连海胆比萨荣获2018年上海国际比萨大师赛季军产品!工作日精选4款超值单人餐22元起！",
        "rating": 4.9,
        "rating_count": 0,
        "recent_order_num": 602,
        "recommend": {
          "color": "#e8470b",
          "image_hash": "ac124c767ffa7fd296d3e2d6f01798c6png",
          "is_ad": false,
          "reason": "口碑人气好店"
        },
        "recommend_reasons": [
          {
            "name": "回头客多"
          }
        ],
        "regular_customer_count": 0,
        "scheme": "eleme://catering?restaurant_id=649501",
        "status": 1,
        "support_tags": [
          {
            "border": "dddddd",
            "color": "666666",
            "icon": "4e20966ca2a516de3f02fb9c7fd1bc6dpng",
            "text": "披萨意面",
            "type": 1
          }
        ],
        "supports": [
          {
            "border": "90dddddd",
            "description": "该商家支持开发票，请在下单时填写好发票抬头",
            "icon_color": "999999",
            "icon_name": "票",
            "id": 4,
            "name": "开发票",
            "text_color": "666666",
            "two_characters_icon_name": "发票"
          }
        ],
        "tags": [],
        "theme": {
          "default_color": "2395ff",
          "header_style": 1,
          "hongbao_style": 0,
          "price_color": "ff5339",
          "third_tab_name": "商家",
          "vanish_fields": []
        },
        "type": 0
      }
    },
    {
      "restaurant": {
        "activities": [
          {
            "attribute": "17.0",
            "description": "新用户下单立减17元",
            "icon_color": "70bc46",
            "icon_name": "首",
            "id": 1312586369,
            "is_exclusive_with_food_activity": true,
            "name": "华北四组新用户",
            "tips": "新用户下单立减17元",
            "type": 103
          }
        ],
        "address": "辽宁省大连市甘井子区瑞丰园32-2号",
        "authentic_id": 7323360826022690,
        "description": "本店推荐您在饿了么网上订餐—饭点较忙，电话常占线，本店优先配送网络订单 2>请确保您的电话开机及铃声状态以便送餐员能联系上您 3>本店餐品统一冷链供应，质量保证，鲜香麻辣口感佳，外卖制作+配送都需要时间，希望大家提前进行预订外卖，避开高峰拥堵提前，有加辣等要求请备注哦~",
        "distance": 1489,
        "favored": false,
        "flavors": [
          {
            "id": 235,
            "name": "鸭脖卤味"
          },
          {
            "id": 237,
            "name": "地方小吃"
          }
        ],
        "float_delivery_fee": 3,
        "float_minimum_order_amount": 15,
        "folding_restaurant_brand": "绝味鸭脖",
        "folding_restaurants": [
          {
            "distance": 1574,
            "id": 161653614,
            "name": "绝味鸭脖(大连高新华录店)",
            "order_lead_time": 21,
            "scheme": "eleme://catering?restaurant_id=161653614",
            "type": 0
          }
        ],
        "has_story": false,
        "id": 155933190,
        "image_path": "data:image/webp;base64,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",
        "is_new": false,
        "is_premium": true,
        "is_stock_empty": 0,
        "is_valid": 1,
        "latitude": 38.846675,
        "longitude": 121.518487,
        "max_applied_quantity_per_order": -1,
        "name": "绝味鸭脖(大连七贤岭店)",
        "next_business_time": "",
        "only_use_poi": false,
        "opening_hours": [
          "09:00/23:30"
        ],
        "order_lead_time": 25,
        "phone": "15942429819",
        "piecewise_agent_fee": {
          "description": "配送费¥3",
          "extra_fee": 0,
          "is_extra": false,
          "rules": [
            {
              "fee": 3,
              "price": 15
            }
          ],
          "tips": "配送费¥3"
        },
        "platform": 0,
        "posters": [],
        "promotion_info": "没有什么是一根绝味鸭脖解决不了的，一根不行那就两根，爽的你直喊还想要！闪电客服：400-999-5917，小鸭鸭竭诚为您服务！",
        "rating": 4.9,
        "rating_count": 0,
        "recent_order_num": 268,
        "recommend": {
          "color": "#e8470b",
          "image_hash": "ac124c767ffa7fd296d3e2d6f01798c6png",
          "is_ad": false,
          "reason": "口碑人气好店"
        },
        "recommend_reasons": [
          {
            "name": "配送飞快"
          }
        ],
        "regular_customer_count": 0,
        "scheme": "eleme://catering?restaurant_id=155933190",
        "status": 1,
        "support_tags": [
          {
            "border": "dddddd",
            "color": "666666",
            "icon": "4e20966ca2a516de3f02fb9c7fd1bc6dpng",
            "text": "鸭脖卤味",
            "type": 1
          }
        ],
        "supports": [],
        "theme": {
          "default_color": "2395ff",
          "header_style": 1,
          "hongbao_style": 0,
          "price_color": "ff5339",
          "third_tab_name": "商家",
          "vanish_fields": []
        },
        "type": 0
      }
    },
    {
      "restaurant": {
        "activities": [
          {
            "attribute": "17.0",
            "description": "新用户下单立减17元",
            "icon_color": "70bc46",
            "icon_name": "首",
            "id": 800689850,
            "is_exclusive_with_food_activity": true,
            "name": "新用户立减(不与其他活动共享)",
            "tips": "新用户下单立减17元",
            "type": 103
          },
          {
            "attribute": "{\"35\": {\"1\": 18.0, \"0\": 0}, \"77\": {\"1\": 32.0, \"0\": 0}, \"30\": {\"1\": 15.0, \"0\": 0}, \"55\": {\"1\": 29.0, \"0\": 0}}",
            "description": "满30减15，满35减18，满55减29，满77减32",
            "icon_color": "f07373",
            "icon_name": "减",
            "id": 1345955209,
            "is_exclusive_with_food_activity": true,
            "name": "品牌满减活动",
            "tips": "满30减15，满35减18，满55减29，满77减32",
            "type": 102
          },
          {
            "description": "夏季战役-六折美食",
            "icon_color": "f07373",
            "icon_name": "折",
            "id": 1289150553,
            "name": "夏季战役-六折美食",
            "tips": "夏季战役-六折美食"
          },
          {
            "description": "夏季战役-五折美食",
            "icon_color": "f07373",
            "icon_name": "折",
            "id": 1289682321,
            "name": "夏季战役-五折美食",
            "tips": "夏季战役-五折美食"
          },
          {
            "description": "超值换购",
            "icon_color": "f1884f",
            "icon_name": "换",
            "id": 1286666905,
            "name": "超值换购",
            "tips": "超值换购"
          },
          {
            "description": "单品定价",
            "icon_color": "f1884f",
            "icon_name": "特",
            "id": 1261178753,
            "name": "单品定价",
            "tips": "单品定价"
          }
        ],
        "address": "辽宁省大连市甘井子区凌北路90-3号",
        "authentic_id": 4393390836919924,
        "description": "",
        "distance": 4984,
        "favored": false,
        "flavors": [
          {
            "id": 223,
            "name": "东北菜"
          },
          {
            "id": 265,
            "name": "简餐"
          }
        ],
        "float_delivery_fee": 7,
        "float_minimum_order_amount": 15,
        "has_story": false,
        "id": 150997224,
        "image_path": "data:image/webp;base64,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",
        "is_new": false,
        "is_premium": false,
        "is_stock_empty": 0,
        "is_valid": 1,
        "latitude": 38.88707236179,
        "longitude": 121.52783675868,
        "max_applied_quantity_per_order": -1,
        "name": "和珅府甏肉馆（理工店）",
        "next_business_time": "",
        "only_use_poi": false,
        "opening_hours": [
          "09:30/20:00"
        ],
        "order_lead_time": 43,
        "phone": "15942882312 0411-84176769",
        "piecewise_agent_fee": {
          "description": "配送费¥7",
          "extra_fee": 4.5,
          "is_extra": true,
          "rules": [
            {
              "fee": 7,
              "price": 15
            }
          ],
          "tips": "配送费¥7"
        },
        "platform": 0,
        "posters": [],
        "promotion_info": "亲爱的顾客您好！中午订餐高峰！请您提前下预定单标注好您送达时间！店家所有的餐是由蜂鸟团队配送！商家是没有配送团队！配送过程有问题请您致电饿了客服10105757，菜品有问题请您致电15942882312，感谢您的支持！",
        "rating": 4.8,
        "rating_count": 0,
        "recent_order_num": 5549,
        "recommend": {
          "color": "#e8470b",
          "image_hash": "ac124c767ffa7fd296d3e2d6f01798c6png",
          "is_ad": false,
          "reason": "口碑人气好店"
        },
        "recommend_reasons": [
          {
            "name": "味道超赞"
          },
          {
            "name": "回头客多"
          }
        ],
        "regular_customer_count": 0,
        "scheme": "eleme://catering?restaurant_id=150997224",
        "status": 1,
        "support_tags": [
          {
            "border": "dddddd",
            "color": "666666",
            "icon": "4e20966ca2a516de3f02fb9c7fd1bc6dpng",
            "text": "东北菜",
            "type": 1
          }
        ],
        "supports": [
          {
            "border": "90dddddd",
            "description": "该商户食品安全已由国泰产险承担，食品安全有保障",
            "icon_color": "999999",
            "icon_name": "保",
            "id": 7,
            "name": "食安保",
            "text_color": "666666",
            "two_characters_icon_name": "保险"
          },
          {
            "border": "90dddddd",
            "description": "该商家支持开发票，开票订单金额20元起，请在下单时填写好发票抬头",
            "icon_color": "999999",
            "icon_name": "票",
            "id": 4,
            "name": "开发票",
            "text_color": "666666",
            "two_characters_icon_name": "发票"
          }
        ],
        "tags": [],
        "theme": {
          "default_color": "2395ff",
          "header_style": 1,
          "hongbao_style": 0,
          "price_color": "ff5339",
          "third_tab_name": "商家",
          "vanish_fields": []
        },
        "type": 0
      }
    },
    {
      "restaurant": {
        "activities": [
          {
            "attribute": "14.0",
            "description": "新用户下单立减14元",
            "icon_color": "70bc46",
            "icon_name": "首",
            "id": 800206066,
            "is_exclusive_with_food_activity": true,
            "name": "新用户立减(不与其他活动共享)",
            "tips": "新用户下单立减14元",
            "type": 103
          },
          {
            "attribute": "{\"100\": {\"1\": 22.0, \"0\": 0}, \"10\": {\"1\": 2.0, \"0\": 0}, \"20\": {\"1\": 4.0, \"0\": 0}, \"50\": {\"1\": 10.0, \"0\": 0}, \"30\": {\"1\": 6.0, \"0\": 0}}",
            "description": "满10减2，满20减4，满30减6，满50减10，满100减22",
            "icon_color": "f07373",
            "icon_name": "减",
            "id": 1224434065,
            "is_exclusive_with_food_activity": true,
            "name": "自营销复杂满减活动",
            "tips": "满10减2，满20减4，满30减6，满50减10，满100减22",
            "type": 102
          }
        ],
        "address": "辽宁省大连市高新园区亲海街45号",
        "authentic_id": 2363340835104693,
        "bidding": "{\"core\":{\"index\":3,\"extraInfo\":\"{\\\"bidding\\\":\\\"{}\\\",\\\"rankId\\\":\\\"435fac3dfc23438999889bfa5324600d\\\",\\\"rankTime\\\":\\\"1532935860\\\",\\\"cityId\\\":\\\"20\\\"}\",\"target\":{\"restaurantId\":147214593,\"weight\":80,\"probability\":0.041930001229047775},\"come_from\":0,\"next\":{\"restaurantId\":314925,\"weight\":110,\"probability\":0.030139999464154243}}}",
        "delivery_mode": {
          "border": "",
          "color": "2395FF",
          "gradient": {
            "rgb_from": "00AAFF",
            "rgb_to": "0085FF"
          },
          "icon_hash": "b9b45d2f6ff0dbeef3a78ef0e4e90abapng",
          "id": 1,
          "is_solid": true,
          "text": "蜂鸟专送",
          "text_color": "FFFFFF"
        },
        "description": "",
        "distance": 2386,
        "favored": false,
        "flavors": [
          {
            "id": 234,
            "name": "炸鸡炸串"
          },
          {
            "id": 265,
            "name": "简餐"
          }
        ],
        "float_delivery_fee": 4.5,
        "float_minimum_order_amount": 20,
        "has_story": false,
        "id": 147214593,
        "image_path": "data:image/webp;base64,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",
        "is_new": false,
        "is_premium": false,
        "is_stock_empty": 0,
        "is_valid": 1,
        "latitude": 38.837533,
        "longitude": 121.506314,
        "max_applied_quantity_per_order": -1,
        "name": "不二先生炸鸡饭&蛋包包",
        "next_business_time": "",
        "only_use_poi": false,
        "opening_hours": [
          "09:30/20:50"
        ],
        "order_lead_time": 29,
        "phone": "15524887175",
        "piecewise_agent_fee": {
          "description": "配送费¥4.5",
          "extra_fee": 0.5,
          "is_extra": true,
          "rules": [
            {
              "fee": 4.5,
              "price": 20
            }
          ],
          "tips": "配送费¥4.5"
        },
        "platform": 0,
        "posters": [],
        "promotion_info": "",
        "rating": 4.7,
        "rating_count": 0,
        "recent_order_num": 417,
        "recommend": {
          "image_hash": "731111f3f9379e772eedf4855beae8a1jpeg",
          "is_ad": true,
          "reason": "广告",
          "track": "{\"rankType\":\"8\"}"
        },
        "recommend_reasons": [
          {
            "name": "配送飞快"
          }
        ],
        "regular_customer_count": 0,
        "scheme": "eleme://catering?restaurant_id=147214593",
        "status": 1,
        "support_tags": [
          {
            "border": "dddddd",
            "color": "666666",
            "icon": "4e20966ca2a516de3f02fb9c7fd1bc6dpng",
            "text": "炸鸡炸串",
            "type": 1
          },
          {
            "border": "dddddd",
            "color": "333333",
            "text": "品质联盟"
          }
        ],
        "supports": [
          {
            "border": "90dddddd",
            "description": "该商户食品安全已由国泰产险承担，食品安全有保障",
            "icon_color": "999999",
            "icon_name": "保",
            "id": 7,
            "name": "食安保",
            "text_color": "666666",
            "two_characters_icon_name": "保险"
          }
        ],
        "theme": {
          "default_color": "2395ff",
          "header_style": 0,
          "hongbao_style": 0,
          "price_color": "ff5339",
          "third_tab_name": "商家",
          "vanish_fields": []
        },
        "type": 0
      }
    },
    {
      "restaurant": {
        "activities": [
          {
            "attribute": "14.0",
            "description": "新用户下单立减14元",
            "icon_color": "70bc46",
            "icon_name": "首",
            "id": 800962242,
            "is_exclusive_with_food_activity": true,
            "name": "新用户立减(不与其他活动共享)",
            "tips": "新用户下单立减14元",
            "type": 103
          },
          {
            "attribute": "{\"25\": {\"1\": 3.0, \"0\": 0}, \"35\": {\"1\": 5.0, \"0\": 0}, \"45\": {\"1\": 6.0, \"0\": 0}, \"85\": {\"1\": 10.0, \"0\": 0}, \"55\": {\"1\": 7.0, \"0\": 0}}",
            "description": "满25减3，满35减5，满45减6，满55减7，满85减10",
            "icon_color": "f07373",
            "icon_name": "减",
            "id": 1130219417,
            "is_exclusive_with_food_activity": true,
            "name": "自营销复杂满减活动",
            "tips": "满25减3，满35减5，满45减6，满55减7，满85减10",
            "type": 102
          },
          {
            "attribute": "{\"35.0\": {\"quantity\": 1, \"must_pay_online\": 1, \"name\": \"\\u679c\\u5473\\u996e\\u6599?\"}, \"108.0\": {\"quantity\": 1, \"must_pay_online\": 1, \"name\": \"\\u5927\\u6876\\u53ef\\u4e50\\u6216\\u662f\\u96ea\\u78a7\\u968f\\u673a\"}}",
            "description": "满108元赠送大桶可乐或是雪碧随机1份，满35元赠送果味饮料?1份",
            "icon_color": "3cc791",
            "icon_name": "赠",
            "id": 469334801,
            "is_exclusive_with_food_activity": true,
            "name": "满赠",
            "tips": "满108元赠送大桶可乐或是雪碧随机1份，满35元赠送果味饮料?1份",
            "type": 106
          },
          {
            "description": "甜一夏-单品特价3.9元",
            "icon_color": "f1884f",
            "icon_name": "特",
            "id": 456682425,
            "name": "甜一夏-单品特价3.9元",
            "tips": "甜一夏-单品特价3.9元"
          },
          {
            "description": "甜一夏-单品特价9.9元",
            "icon_color": "f1884f",
            "icon_name": "特",
            "id": 456679401,
            "name": "甜一夏-单品特价9.9元",
            "tips": "甜一夏-单品特价9.9元"
          },
          {
            "description": "麻辣猪蹄子，老烤糊了！加热备注",
            "icon_color": "f1884f",
            "icon_name": "特",
            "id": 347706570,
            "name": "麻辣猪蹄子，老烤糊了！加热备注",
            "tips": "麻辣猪蹄子，老烤糊了！加热备注"
          },
          {
            "description": "久久鸭货，天天有特价",
            "icon_color": "f1884f",
            "icon_name": "特",
            "id": 347706338,
            "name": "久久鸭货，天天有特价",
            "tips": "久久鸭货，天天有特价"
          },
          {
            "description": "主食，蛋炒饭，牛肉炒河粉",
            "icon_color": "f1884f",
            "icon_name": "特",
            "id": 347705930,
            "name": "主食，蛋炒饭，牛肉炒河粉",
            "tips": "主食，蛋炒饭，牛肉炒河粉"
          }
        ],
        "address": "辽宁省大连高新技术园区黄浦路782号1层106-110室",
        "authentic_id": 5393350848307725,
        "bidding": "{\"core\":{\"index\":4,\"extraInfo\":\"{\\\"bidding\\\":\\\"{}\\\",\\\"rankId\\\":\\\"435fac3dfc23438999889bfa5324600d\\\",\\\"rankTime\\\":\\\"1532935860\\\",\\\"cityId\\\":\\\"20\\\"}\",\"target\":{\"restaurantId\":314925,\"weight\":110,\"probability\":0.030139999464154243},\"come_from\":0,\"next\":{\"restaurantId\":610689,\"weight\":110,\"probability\":0.02937999926507473}}}",
        "description": "精心卤制熟食，各种鸭货，特色凉拌菜！新开(万顺家常菜馆)打折优惠",
        "distance": 1815,
        "favored": false,
        "flavors": [
          {
            "id": 235,
            "name": "鸭脖卤味"
          }
        ],
        "float_delivery_fee": 5,
        "float_minimum_order_amount": 20,
        "has_story": false,
        "id": 314925,
        "image_path": "data:image/webp;base64,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",
        "is_new": false,
        "is_premium": false,
        "is_stock_empty": 0,
        "is_valid": 1,
        "latitude": 38.851531,
        "longitude": 121.523864,
        "max_applied_quantity_per_order": -1,
        "name": "张记熟食",
        "next_business_time": "",
        "only_use_poi": false,
        "opening_hours": [
          "08:30/02:00"
        ],
        "order_lead_time": 31,
        "phone": "13842663096",
        "piecewise_agent_fee": {
          "description": "配送费¥5",
          "extra_fee": 0,
          "is_extra": false,
          "rules": [
            {
              "fee": 5,
              "price": 20
            }
          ],
          "tips": "配送费¥5"
        },
        "platform": 0,
        "posters": [],
        "promotion_info": "如有加热忌口的请备注！如有商品或配送出现问题请与店家电话沟通，给你一个满意的答复，有问题咱们一起解决，如有怠慢请多多包容和理解！！",
        "rating": 4.7,
        "rating_count": 0,
        "recent_order_num": 471,
        "recommend": {
          "image_hash": "731111f3f9379e772eedf4855beae8a1jpeg",
          "is_ad": true,
          "reason": "广告",
          "track": "{\"rankType\":\"8\"}"
        },
        "recommend_reasons": [
          {
            "name": "配送飞快"
          }
        ],
        "regular_customer_count": 0,
        "scheme": "eleme://catering?restaurant_id=314925",
        "status": 1,
        "support_tags": [
          {
            "border": "dddddd",
            "color": "666666",
            "icon": "4e20966ca2a516de3f02fb9c7fd1bc6dpng",
            "text": "鸭脖卤味",
            "type": 1
          }
        ],
        "supports": [
          {
            "border": "90dddddd",
            "description": "该商户食品安全已由国泰产险承担，食品安全有保障",
            "icon_color": "999999",
            "icon_name": "保",
            "id": 7,
            "name": "食安保",
            "text_color": "666666",
            "two_characters_icon_name": "保险"
          }
        ],
        "theme": {
          "default_color": "2395ff",
          "header_style": 0,
          "hongbao_style": 0,
          "price_color": "ff5339",
          "third_tab_name": "商家",
          "vanish_fields": []
        },
        "type": 0
      }
    },
    {
      "restaurant": {
        "activities": [
          {
            "attribute": "17.0",
            "description": "新用户下单立减17元",
            "icon_color": "70bc46",
            "icon_name": "首",
            "id": 1312579697,
            "is_exclusive_with_food_activity": true,
            "name": "华北四组新用户",
            "tips": "新用户下单立减17元",
            "type": 103
          },
          {
            "attribute": "{\"50\": {\"1\": 7.0, \"0\": 0}, \"35\": {\"1\": 5.0, \"0\": 0}, \"100\": {\"1\": 20.0, \"0\": 0}, \"70\": {\"1\": 9.0, \"0\": 0}}",
            "description": "满35减5，满50减7，满70减9，满100减20",
            "icon_color": "f07373",
            "icon_name": "减",
            "id": 1347708650,
            "is_exclusive_with_food_activity": true,
            "name": "满减-大连亚惠",
            "tips": "满35减5，满50减7，满70减9，满100减20",
            "type": 102
          },
          {
            "description": "单品折扣",
            "icon_color": "f07373",
            "icon_name": "折",
            "id": 1345788665,
            "name": "单品折扣",
            "tips": "单品折扣"
          },
          {
            "description": "超值换购",
            "icon_color": "f1884f",
            "icon_name": "换",
            "id": 1345658778,
            "name": "超值换购",
            "tips": "超值换购"
          },
          {
            "description": "立减15.8元，享特色精简套餐！",
            "icon_color": "f07373",
            "icon_name": "折",
            "id": 464093266,
            "name": "立减15.8元，享特色精简套餐！",
            "tips": "立减15.8元，享特色精简套餐！"
          },
          {
            "attribute": "2.0",
            "description": "本店新用户立减2元",
            "icon_color": "00b762",
            "icon_name": "新",
            "id": 464055530,
            "is_exclusive_with_food_activity": true,
            "name": "门店新客立减",
            "tips": "本店新用户立减2元",
            "type": 108
          },
          {
            "description": "观世界杯，享5折八象便当！",
            "icon_color": "f07373",
            "icon_name": "折",
            "id": 411074385,
            "name": "观世界杯，享5折八象便当！",
            "tips": "观世界杯，享5折八象便当！"
          }
        ],
        "address": "辽宁省大连高新技术产业园区黄浦路620-1号",
        "authentic_id": 7313300836976481,
        "delivery_mode": {
          "border": "",
          "color": "2395FF",
          "gradient": {
            "rgb_from": "00AAFF",
            "rgb_to": "0085FF"
          },
          "icon_hash": "b9b45d2f6ff0dbeef3a78ef0e4e90abapng",
          "id": 1,
          "is_solid": true,
          "text": "蜂鸟专送",
          "text_color": "FFFFFF"
        },
        "description": "",
        "distance": 2176,
        "favored": false,
        "flavors": [
          {
            "id": 215,
            "name": "包子粥店"
          },
          {
            "id": 265,
            "name": "简餐"
          }
        ],
        "float_delivery_fee": 4.5,
        "float_minimum_order_amount": 20,
        "has_story": false,
        "id": 2243081,
        "image_path": "data:image/webp;base64,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",
        "is_new": false,
        "is_premium": true,
        "is_stock_empty": 0,
        "is_valid": 1,
        "latitude": 38.854797,
        "longitude": 121.526723,
        "max_applied_quantity_per_order": -1,
        "name": "亚惠美食(七贤中路店)",
        "next_business_time": "",
        "only_use_poi": false,
        "opening_hours": [
          "07:00/09:00",
          "09:30/19:00"
        ],
        "order_lead_time": 24,
        "phone": "0411-81760700",
        "piecewise_agent_fee": {
          "description": "配送费¥4.5",
          "extra_fee": 0.5,
          "is_extra": true,
          "rules": [
            {
              "fee": 4.5,
              "price": 20
            }
          ],
          "tips": "配送费¥4.5"
        },
        "platform": 0,
        "posters": [],
        "promotion_info": "顾客您好！本店承接大份盒饭，请同店面联系；\n食品安全温馨提示：请您在接餐后30分钟内食用完毕！",
        "rating": 4.9,
        "rating_count": 0,
        "recent_order_num": 1402,
        "recommend": {
          "color": "#e8470b",
          "image_hash": "ac124c767ffa7fd296d3e2d6f01798c6png",
          "is_ad": false,
          "reason": "口碑人气好店"
        },
        "recommend_reasons": [
          {
            "name": "回头客多"
          },
          {
            "name": "配送飞快"
          }
        ],
        "regular_customer_count": 0,
        "scheme": "eleme://catering?restaurant_id=2243081",
        "status": 1,
        "support_tags": [
          {
            "border": "dddddd",
            "color": "666666",
            "icon": "4e20966ca2a516de3f02fb9c7fd1bc6dpng",
            "text": "包子粥店",
            "type": 1
          },
          {
            "border": "dddddd",
            "color": "333333",
            "text": "品质联盟"
          }
        ],
        "supports": [],
        "tags": [],
        "theme": {
          "default_color": "2395ff",
          "header_style": 1,
          "hongbao_style": 0,
          "price_color": "ff5339",
          "third_tab_name": "商家",
          "vanish_fields": []
        },
        "type": 0
      }
    },
    {
      "restaurant": {
        "activities": [
          {
            "attribute": "14.0",
            "description": "新用户下单立减14元",
            "icon_color": "70bc46",
            "icon_name": "首",
            "id": 800406106,
            "is_exclusive_with_food_activity": true,
            "name": "新用户立减(不与其他活动共享)",
            "tips": "新用户下单立减14元",
            "type": 103
          },
          {
            "attribute": "{\"40\": {\"1\": 8.0, \"0\": 0}, \"60\": {\"1\": 10.0, \"0\": 0}, \"20\": {\"1\": 4.0, \"0\": 0}}",
            "description": "满20减4，满40减8，满60减10",
            "icon_color": "f07373",
            "icon_name": "减",
            "id": 1337638769,
            "is_exclusive_with_food_activity": true,
            "name": "自营销复杂满减活动",
            "tips": "满20减4，满40减8，满60减10",
            "type": 102
          },
          {
            "description": "超值换购",
            "icon_color": "f1884f",
            "icon_name": "换",
            "id": 1300507033,
            "name": "超值换购",
            "tips": "超值换购"
          }
        ],
        "address": "辽宁省大连高新技术产业园区善水街23-24号4-2-1-6号",
        "authentic_id": 4373370839679324,
        "delivery_mode": {
          "border": "",
          "color": "2395FF",
          "gradient": {
            "rgb_from": "00AAFF",
            "rgb_to": "0085FF"
          },
          "icon_hash": "b9b45d2f6ff0dbeef3a78ef0e4e90abapng",
          "id": 1,
          "is_solid": true,
          "text": "蜂鸟专送",
          "text_color": "FFFFFF"
        },
        "description": "欢迎光临",
        "distance": 3109,
        "favored": false,
        "flavors": [
          {
            "id": 234,
            "name": "炸鸡炸串"
          }
        ],
        "float_delivery_fee": 5.5,
        "float_minimum_order_amount": 20,
        "has_story": false,
        "id": 659324,
        "image_path": "data:image/webp;base64,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",
        "is_new": false,
        "is_premium": false,
        "is_stock_empty": 0,
        "is_valid": 1,
        "latitude": 38.862098,
        "longitude": 121.533836,
        "max_applied_quantity_per_order": -1,
        "name": "雅米家韩国炸鸡&拌饭",
        "next_business_time": "",
        "only_use_poi": false,
        "opening_hours": [
          "10:00/20:30"
        ],
        "order_lead_time": 35,
        "phone": "0411-88148981",
        "piecewise_agent_fee": {
          "description": "配送费¥5.5",
          "extra_fee": 1.5,
          "is_extra": true,
          "rules": [
            {
              "fee": 5.5,
              "price": 20
            }
          ],
          "tips": "配送费¥5.5"
        },
        "platform": 0,
        "posters": [],
        "promotion_info": "如需开票请在备注中说明，谢谢合作！",
        "rating": 4.8,
        "rating_count": 0,
        "recent_order_num": 1168,
        "recommend": {
          "color": "#e8470b",
          "image_hash": "ac124c767ffa7fd296d3e2d6f01798c6png",
          "is_ad": false,
          "reason": "口碑人气好店"
        },
        "recommend_reasons": [
          {
            "name": "回头客多"
          }
        ],
        "regular_customer_count": 0,
        "scheme": "eleme://catering?restaurant_id=659324",
        "status": 1,
        "support_tags": [
          {
            "border": "dddddd",
            "color": "666666",
            "icon": "4e20966ca2a516de3f02fb9c7fd1bc6dpng",
            "text": "炸鸡炸串",
            "type": 1
          },
          {
            "border": "dddddd",
            "color": "333333",
            "text": "品质联盟"
          }
        ],
        "supports": [
          {
            "border": "90dddddd",
            "description": "该商家支持开发票，开票订单金额20元起，请在下单时填写好发票抬头",
            "icon_color": "999999",
            "icon_name": "票",
            "id": 4,
            "name": "开发票",
            "text_color": "666666",
            "two_characters_icon_name": "发票"
          }
        ],
        "theme": {
          "default_color": "2395ff",
          "header_style": 0,
          "hongbao_style": 0,
          "price_color": "ff5339",
          "third_tab_name": "商家",
          "vanish_fields": []
        },
        "type": 0
      }
    },
    {
      "restaurant": {
        "activities": [
          {
            "attribute": "17.0",
            "description": "新用户下单立减17元",
            "icon_color": "70bc46",
            "icon_name": "首",
            "id": 801586418,
            "is_exclusive_with_food_activity": true,
            "name": "新用户立减(不与其他活动共享)",
            "tips": "新用户下单立减17元",
            "type": 103
          },
          {
            "attribute": "{\"55\": {\"1\": 25.0, \"0\": 0}, \"30\": {\"1\": 15.0, \"0\": 0}, \"22\": {\"1\": 10.0, \"0\": 0}, \"45\": {\"1\": 20.0, \"0\": 0}}",
            "description": "满22减10，满30减15，满45减20，满55减25",
            "icon_color": "f07373",
            "icon_name": "减",
            "id": 1339681449,
            "is_exclusive_with_food_activity": true,
            "name": "杨铭宇高新",
            "tips": "满22减10，满30减15，满45减20，满55减25",
            "type": 102
          }
        ],
        "address": "大连高新园区爱贤街54-9号",
        "authentic_id": 8323370838214069,
        "description": "饿了么专送，谢绝店内自取，最专业的加盟连锁品牌，大成鲜鸡腿肉，东北长粒米，高品质，好味道。",
        "distance": 1330,
        "favored": false,
        "flavors": [
          {
            "id": 227,
            "name": "鲁菜"
          },
          {
            "id": 267,
            "name": "黄焖鸡米饭"
          }
        ],
        "float_delivery_fee": 3,
        "float_minimum_order_amount": 15,
        "has_story": false,
        "id": 1768769,
        "image_path": "data:image/webp;base64,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",
        "is_new": false,
        "is_premium": false,
        "is_stock_empty": 0,
        "is_valid": 1,
        "latitude": 38.860143,
        "longitude": 121.514412,
        "max_applied_quantity_per_order": -1,
        "name": "杨铭宇黄焖鸡米饭(高新园区店)",
        "next_business_time": "",
        "only_use_poi": false,
        "opening_hours": [
          "09:30/20:30"
        ],
        "order_lead_time": 25,
        "phone": "13322249822",
        "piecewise_agent_fee": {
          "description": "配送费¥3",
          "extra_fee": 0,
          "is_extra": false,
          "rules": [
            {
              "fee": 3,
              "price": 15
            }
          ],
          "tips": "配送费¥3"
        },
        "platform": 0,
        "posters": [],
        "promotion_info": "全国连锁黄焖鸡品牌，吃的放心。大成鸡腿肉，东北五常大米。",
        "rating": 4.7,
        "rating_count": 0,
        "recent_order_num": 2218,
        "recommend": {
          "is_ad": false,
          "reason": ""
        },
        "recommend_reasons": [
          {
            "name": "味道超赞"
          },
          {
            "name": "回头客多"
          },
          {
            "name": "配送飞快"
          }
        ],
        "regular_customer_count": 0,
        "scheme": "eleme://catering?restaurant_id=1768769",
        "status": 1,
        "support_tags": [
          {
            "border": "dddddd",
            "color": "666666",
            "icon": "4e20966ca2a516de3f02fb9c7fd1bc6dpng",
            "text": "鲁菜",
            "type": 1
          },
          {
            "border": "dddddd",
            "color": "333333",
            "text": "品质联盟"
          }
        ],
        "supports": [
          {
            "border": "90dddddd",
            "description": "该商户食品安全已由国泰产险承担，食品安全有保障",
            "icon_color": "999999",
            "icon_name": "保",
            "id": 7,
            "name": "食安保",
            "text_color": "666666",
            "two_characters_icon_name": "保险"
          }
        ],
        "tags": [],
        "theme": {
          "default_color": "2395ff",
          "header_style": 0,
          "hongbao_style": 0,
          "price_color": "ff5339",
          "third_tab_name": "商家",
          "vanish_fields": []
        },
        "type": 0
      }
    }
  ],
  "meta": {
    "rank_id": "435fac3dfc23438999889bfa5324600d"
  }
}

export default {
  getProducts (cb) {
    setTimeout(() => cb(_products), 100)
  },

  buyProducts (products, cb, errorCb) {
    setTimeout(() => {
      // simulate random checkout failure.
      (Math.random() > 0.5 || navigator.userAgent.indexOf('PhantomJS') > -1)
        ? cb()
        : errorCb()
    }, 100)
  },
  getShopList (cb) {
    setTimeout(() => cb(_products), 100)
  },
}
