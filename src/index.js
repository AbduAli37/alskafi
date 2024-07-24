import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, HashRouter, Route, Switch } from "react-router-dom";
import HomeV1 from './components/home-v1';
import HomeV2 from './components/home-v2';
import HomeV3 from './components/home-v3';
import HomeV4 from './components/home-v4';
import HomeV5 from './components/home-v5';
import HomeV6 from './components/home-v6';
import HomeV7 from './components/home-v7';
import HomeV8 from './components/home-v8';
import HomeV9 from './components/home-v9';
import HomeV10 from './components/home-v11';

import About from './components/about';
import Service from './components/service';
import ServiceDetails from './components/service-details';
import Portfolio from './components/portfolio';
import PortfolioV2 from './components/portfolio-v2';
import PortfolioDetails from './components/portfolio-details';
import Team from './components/team';
import TeamDetails from './components/team-details';
import Faq from './components/faq';
import ComingSoon from './components/coming-soon';
import Error  from './components/404';
import Location  from './components/location';

import Shop from './components/shop';
import ShopGrid from './components/shop-grid';
import ProdductDetails from './components/product-details';
import ShopLeftSidebar from './components/shop-left-sidebar';
import ShopRightSidebar from './components/shop-right-sidebar';

import BlogGrid from './components/blog-grid';
import BlogLeftSidebar from './components/blog-left-sidebar';
import BlogRightSidebar from './components/blog-right-sidebar';
import Blog from './components/blog';
// import 'react-toastify/dist/ReactToastify.css';
import 'rsuite/styles/index.less'; // or 'rsuite/dist/rsuite.min.css'
import BlogDetails from './components/blog-details';
import Contact from './components/contact';
import Cart from './components/cart';
import Checkout from './components/checkout';
import MyAccount from './components/my-account';
import Login from './components/login';
import Register from './components/register';
import AddListing from './components/add-listing';
import Wishlist from './components/wishlist';
import OrderTracking from './components/order-tracking';
import History from './components/history';
import { Provider } from 'react-redux';
import {store} from './store'
import { Toaster } from 'react-hot-toast';
import App from './App';
// import { ToastContainer } from 'react-toastify';

class Root extends Component {
    render() {
        return(
          <Provider store={store}>
            <HashRouter basename="/">
              <App/>
            </HashRouter>
            <Toaster />
            {/* <ToastContainer /> */}
          </Provider>
        )
    }
}

export default Root;

ReactDOM.render(<Root />, document.getElementById('quarter'));
