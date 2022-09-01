import React, {useContext, useEffect, useState} from "react";
import './App.scss';
import 'bootstrap/dist/css/bootstrap.min.css';

import MainNavbar from "./components/MainNavbar";
import SecondNavbar from "./components/SecondNavbar";
import Footer from "./components/Footer";
import AppRouter from "./components/AppRouter";
import {BrowserRouter} from "react-router-dom";
import {observer} from "mobx-react-lite";
import {Context} from "./index";
import {check} from "./http/userAPI";


const App = observer(() => {
  const {user} = useContext(Context);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    check().then(data => {
      user.setUser(true);
      user.setIsAuth(true);
    }).finally(() => setLoading(false));
  });

  if (loading) {
    return (
      <div className="spinner-border" role="status">
        <span className="visually-hidden">Loading...</span>
      </div>
    )
  }


  const products = [
    {
      "id": "1",
      "title": "Люстра 1111/11 White",
      "price": "27999",
      "type": "chandelier",
      "imageUrl": "https://www.svetodom.ru/published/publicdata/SVETODOMRU/attachments/SC/products_pictures/638012308.jpg"
    },
    {
      "id": "2",
      "title": "Люстра 1112/11 White",
      "price": "27999",
      "type": "chandelier",
      "imageUrl": "https://www.svetodom.ru/published/publicdata/SVETODOMRU/attachments/SC/products_pictures/638012308.jpg"
    },
    {
      "id": "3",
      "title": "Люстра 1113/11 White",
      "price": "27999",
      "type": "chandelier",
      "imageUrl": "https://www.svetodom.ru/published/publicdata/SVETODOMRU/attachments/SC/products_pictures/638012308.jpg"
    },
    {
      "id": "4",
      "title": "Люстра 1113/11 White",
      "price": "27999",
      "type": "chandelier",
      "imageUrl": "https://www.svetodom.ru/published/publicdata/SVETODOMRU/attachments/SC/products_pictures/FR5011CL-08B.jpg"
    },
    {
      "id": "5",
      "title": "Люстра 1113/11 White",
      "price": "27999",
      "type": "chandelier",
      "imageUrl": "https://www.svetodom.ru/published/publicdata/SVETODOMRU/attachments/SC/products_pictures/fr5108pl-05ch_b311bff55199ea73882f7f04324e1eca_2_med.jpg"
    },
    {
      "id": "6",
      "title": "Люстра 1113/11 White",
      "price": "27999",
      "type": "chandelier",
      "imageUrl": "https://www.svetodom.ru/published/publicdata/SVETODOMRU/attachments/SC/products_pictures/fr2027pl-05n_380300f2977be97431f05aacf79c59d8_3_med.jpeg"
    },
    {
      "id": "7",
      "title": "Люстра 1113/11 White",
      "price": "27999",
      "type": "chandelier",
      "imageUrl": "https://www.svetodom.ru/published/publicdata/SVETODOMRU/attachments/SC/products_pictures/A9310LM-5WG.jpg"
    },
    {
      "id": "8",
      "title": "Люстра 1113/11 White",
      "price": "27999",
      "type": "chandelier",
      "imageUrl": "https://www.svetodom.ru/published/publicdata/SVETODOMRU/attachments/SC/products_pictures/A6198PL-6CC-1.jpg"
    },
    {
      "id": "9",
      "title": "Люстра 1113/11 White",
      "price": "27999",
      "type": "chandelier",
      "imageUrl": "https://www.svetodom.ru/published/publicdata/SVETODOMRU/attachments/SC/products_pictures/A8110LM-6WH_39833_med.jpg"
    },
    {
      "id": "10",
      "title": "Люстра 1113/11 White",
      "price": "27999",
      "type": "chandelier",
      "imageUrl": "https://www.svetodom.ru/published/publicdata/SVETODOMRU/attachments/SC/products_pictures/a9566lm-5wg_1a1d636c98f9e63b3cbb63f069ffe923_1_med.jpg"
    },
    {
      "id": "11",
      "title": "Бра 1113/11 White",
      "price": "22999",
      "type": "sconce",
      "imageUrl": "https://www.svetodom.ru/published/publicdata/SVETODOMRU/attachments/SC/products_pictures/A5518AP-1SS_11263_med.jpg"
    },
    {
      "id": "12",
      "title": "Бра 1113/11 White",
      "price": "29999",
      "type": "sconce",
      "imageUrl": "https://www.svetodom.ru/published/publicdata/SVETODOMRU/attachments/SC/products_pictures/A9246AP-2SS.jpg"
    },
    {
      "id": "13",
      "title": "Бра 1113/11 White",
      "price": "27999",
      "type": "sconce",
      "imageUrl": "https://www.svetodom.ru/published/publicdata/SVETODOMRU/attachments/SC/products_pictures/A5213AP-1BR_14764_med.jpg"
    },
    {
      "id": "14",
      "title": "Бра 1113/11 White",
      "price": "27999",
      "type": "sconce",
      "imageUrl": "https://www.svetodom.ru/published/publicdata/SVETODOMRU/attachments/SC/products_pictures/A9310AP-1WG_7719_med.jpg"
    },
    {
      "id": "15",
      "title": "Бра 1113/11 White",
      "price": "31000",
      "type": "sconce",
      "imageUrl": "https://www.svetodom.ru/published/publicdata/SVETODOMRU/attachments/SC/products_pictures/A8110AP-1WH_18849_med.jpg"
    },
    {
      "id": "16",
      "title": "Бра 1113/11 White",
      "price": "30155",
      "type": "sconce",
      "imageUrl": "https://www.svetodom.ru/published/publicdata/SVETODOMRU/attachments/SC/products_pictures/A7005AP-1SS_86762_med.jpg"
    },
    {
      "id": "17",
      "title": "Бра 1113/11 White",
      "price": "34500",
      "type": "sconce",
      "imageUrl": "https://www.svetodom.ru/published/publicdata/SVETODOMRU/attachments/SC/products_pictures/a1408ap-1bk_2fd5f04f14c31abddfab04a32ac430ee_1_med.jpg"
    },
    {
      "id": "18",
      "title": "Бра 1113/11 White",
      "price": "26799",
      "type": "sconce",
      "imageUrl": "https://www.svetodom.ru/published/publicdata/SVETODOMRU/attachments/SC/products_pictures/A1408AP-1AB_19813_med.jpg"
    },
    {
      "id": "19",
      "title": "Бра 1113/11 White",
      "price": "28755",
      "type": "sconce",
      "imageUrl": "https://www.svetodom.ru/published/publicdata/SVETODOMRU/attachments/SC/products_pictures/A4550AP-1CK2r.jpg"
    },
    {
      "id": "20",
      "title": "Бра 1113/11 White",
      "price": "27855",
      "type": "sconce",
      "imageUrl": "https://www.svetodom.ru/published/publicdata/SVETODOMRU/attachments/SC/products_pictures/A1292AP-1AB.jpg"
    },
    {
      "id": "21",
      "title": "Настольная лампа 1113/11 White",
      "price": "27855",
      "type": "lamp",
      "imageUrl": "https://www.svetodom.ru/published/publicdata/SVETODOMRU/attachments/SC/products_pictures/FR2033TL-01S_8226_med.jpg"
    },
    {
      "id": "22",
      "title": "Настольная лампа 1113/11 White",
      "price": "27888",
      "type": "lamp",
      "imageUrl": "https://www.svetodom.ru/published/publicdata/SVETODOMRU/attachments/SC/products_pictures/a2581lt-1ab_8999e46dff09c9971b5620996c5ac52d_1_med.jpeg"
    },
    {
      "id": "23",
      "title": "Настольная лампа 1113/11 White",
      "price": "26999",
      "type": "lamp",
      "imageUrl": "https://www.svetodom.ru/published/publicdata/SVETODOMRU/attachments/SC/products_pictures/a3990lt-1cc_17a9d213adc80dfca5544bde21b4ce41_4_med.jpg"
    },
    {
      "id": "24",
      "title": "Настольная лампа 1113/11 White",
      "price": "31500",
      "type": "lamp",
      "imageUrl": "https://www.svetodom.ru/published/publicdata/SVETODOMRU/attachments/SC/products_pictures/A6068LT-1WH_8519_med.jpg"
    },
    {
      "id": "25",
      "title": "Настольная лампа 1113/11 White",
      "price": "26999",
      "type": "lamp",
      "imageUrl": "https://www.svetodom.ru/published/publicdata/SVETODOMRU/attachments/SC/products_pictures/A1509LT-1PB_45278_med.jpg"
    },
    {
      "id": "26",
      "title": "Настольная лампа 1113/11 White",
      "price": "21899",
      "type": "lamp",
      "imageUrl": "https://www.svetodom.ru/published/publicdata/SVETODOMRU/attachments/SC/products_pictures/A2493LT-1AB-3.jpg"
    },
    {
      "id": "27",
      "title": "Торшер 1113/11 White",
      "price": "28999",
      "type": "floor",
      "imageUrl": "https://www.svetodom.ru/published/publicdata/SVETODOMRU/attachments/SC/products_pictures/A8926PN-1SS_6426_med.jpg"
    },
    {
      "id": "28",
      "title": "Торшер 1113/11 White",
      "price": "27999",
      "type": "floor",
      "imageUrl": "https://www.svetodom.ru/published/publicdata/SVETODOMRU/attachments/SC/products_pictures/A9569PN-2AB.jpg"
    },
    {
      "id": "29",
      "title": "Торшер 1113/11 White",
      "price": "28444",
      "type": "floor",
      "imageUrl": "https://www.svetodom.ru/published/publicdata/SVETODOMRU/attachments/SC/products_pictures/A9202PN-1BK_93217_med.jpg"
    },
    {
      "id": "30",
      "title": "Торшер 1113/11 White",
      "price": "36455",
      "type": "floor",
      "imageUrl": "https://www.svetodom.ru/published/publicdata/SVETODOMRU/attachments/SC/products_pictures/a7301pn-1pb_30b98d3cda85921f26db32b6ca171f5e_1_med.jpeg"
    },
    {
      "id": "31",
      "title": "Торшер 1113/11 White",
      "price": "31545",
      "type": "floor",
      "imageUrl": "https://www.svetodom.ru/published/publicdata/SVETODOMRU/attachments/SC/products_pictures/LSP-0332tz.jpg"
    },
    {
      "id": "32",
      "title": "Торшер 1113/11 White",
      "price": "32111",
      "type": "floor",
      "imageUrl": "https://www.svetodom.ru/published/publicdata/SVETODOMRU/attachments/SC/products_pictures/FR5186FL-01BS_5465_med.jpg"
    },
    {
      "id": "33",
      "title": "Торшер 1113/11 White",
      "price": "28799",
      "type": "floor",
      "imageUrl": "https://www.svetodom.ru/published/publicdata/SVETODOMRU/attachments/SC/products_pictures/FR5190FL-01BS_60466_med.jpg"
    },
    {
      "id": "34",
      "title": "Торшер 1113/11 White",
      "price": "24500",
      "type": "floor",
      "imageUrl": "https://www.svetodom.ru/published/publicdata/SVETODOMRU/attachments/SC/products_pictures/3001-02_PN-6.jpg"
    },
    {
      "id": "35",
      "title": "Торшер 1113/11 White",
      "price": "28000",
      "type": "floor",
      "imageUrl": "https://www.svetodom.ru/published/publicdata/SVETODOMRU/attachments/SC/products_pictures/A1921PN-1AB_22291_med.jpg"
    }
  ]


  return (

    <BrowserRouter>
      <div className="wrapper">
        <MainNavbar/>
        <SecondNavbar/>

        <AppRouter products={products}/>

        <Footer/>
      </div>
    </BrowserRouter>
  );
});

export default App;
