import React from 'react';
import "../../../css/bootstrap.min.css";
import "../../../css/style.css";
import "../../../lib/animate/animate.min.css";
import "../../../lib/owlcarousel/assets/owl.carousel.min.css";
import "https://code.jquery.com/jquery-3.4.1.min.js";
import "https://cdn.jsdelivr.net/npm/bootstrap@5.0.0/dist/js/bootstrap.bundle.min.js";
import "../../../lib/wow/wow.min.js";



const Header = () => {

    return(
 
    <div className="container-fluid header bg-white p-0">
        <div className="row g-0 align-items-center flex-column-reverse flex-md-row">
            <div className="col-md-6 p-5 mt-lg-5">
                <h1 className="display-5 animated fadeIn mb-4">Find A <span className="text-primary">Perfect Home</span> To Live With Your Family</h1>
                <p className="animated fadeIn mb-4 pb-2">Vero elitr justo clita lorem. Ipsum dolor at sed stet
                    sit diam no. Kasd rebum ipsum et diam justo clita et kasd rebum sea elitr.</p>
                <a href="" className="btn btn-primary py-3 px-5 me-3 animated fadeIn">Get Started</a>
            </div>
            <div className="col-md-6 animated fadeIn">
                <div className="owl-carousel header-carousel">
                    <div className="owl-carousel-item">
                        <img className="img-fluid" src="../../../img/carousel-1.jpg" alt=""/>
                    </div>
                    <div className="owl-carousel-item">
                        <img className="img-fluid" src="../../../img/carousel-2.jpg" alt=""/>
                    </div>
                </div>
            </div>
        </div>
    </div>
 
    )
}

export default Header;