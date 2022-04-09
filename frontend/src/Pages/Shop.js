import React, { useEffect } from "react";
import { connect } from "react-redux";
import productActions from "../redux/actions/productActions";
import ProductsCard from "../components/ProductsCard";

import NavBar from "../components/NavBar";
import Footer from "../components/Footer";
import '../Styles/shop.css'




function Shop(props) {

    useEffect(() => {
        window.scrollTo(0, 0)
        props.getAllProducts()

    }, [])

    return (
        <div className="container-shop">
            <NavBar />
            <div className="container-filterAndShop">
                <div className="container-cards">

                    <ProductsCard />
                </div>
            </div>
            <Footer />
        </div>
    )

}

// const mapStateToProps = (state) => {
//     return {
//         allProducts: state.productReducer.allProducts
//     }
// }

const mapDispatchToProps = {
    getAllProducts: productActions.getAllProducts
}


export default connect(null, mapDispatchToProps)(Shop);
