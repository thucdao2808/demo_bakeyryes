import React from 'react';
import Header from './components/Header/Container/Head/Header';
import HomePage from './page/Home_page/HomePage/HomePage';
import Footer from './components/Footer/Footer';
import Introtance from './page/PageIntro/PageIntro';
import Product from './page/Products/page_product/Product';
import InformationNew from './page/InformationNew/InformationNew';
import Contact from './page/PageContact/Contact';
import SystemStore from './page/SystemShop/SystemStore';
import QuestionNormal from './page/PageQuestion/QuestionNormal';
import DetailProduct from './page/Detail_prd/DetailProduct';
const App = () => {
    return (
        <div>
           <Header/>
           {/* <HomePage></HomePage> */}
            {/* <Introtance/> */}
            {/* <Product/> */}
            {/* <InformationNew/> */}
            {/* <Contact/> */}
            {/* <SystemStore/> */}
             {/* <QuestionNormal/> */}
             {/* <DetailProduct/> */}
            <Footer/>
        </div>
    );
};

export default App;