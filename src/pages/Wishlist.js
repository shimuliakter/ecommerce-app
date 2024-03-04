import React from 'react';
import BreadCrumb from '../components/BreadCrumb';
import Meta from '../components/Meta';
import cross from "../images/cross.svg";
import watch from "../images/watch.jpg";
import Container from '../components/Container';


const Wishlist = () => {
    return (
        <>
            <Meta title={"Wishlist"} />
            <BreadCrumb title="Wishlist" />
            <Container class1="wishlist-wrapper home-wrapper-2 py-5">
                <div className="row">
                    <div className="col-3">
                        <div className="wishlist-card position-relative">
                            <img src={cross} alt="cross" className='position-absolute cross img-fluid' />
                            <div className="whishlist-card-image">
                                <img src={watch} className="img-fluid w-100" alt="watch" />
                            </div>
                            <div className='py-3 px-3'>
                                <h5 className='title'>Honor T1 7.0.7 GB ROM 7 Inch With Wi-Fi+3G Tablet</h5>
                                <h6 className='price mb-3 mt-3'>$ 100</h6>
                            </div>
                        </div>
                    </div>
                    <div className="col-3">
                        <div className="wishlist-card position-relative">
                            <img src={cross} alt="cross" className='position-absolute cross img-fluid' />
                            <div className="whishlist-card-image">
                                <img src={watch} className="img-fluid w-100" alt="watch" />
                            </div>
                            <div className='py-3 px-3'>
                                <h5 className='title'>Honor T1 7.0.7 GB ROM 7 Inch With Wi-Fi+3G Tablet</h5>
                                <h6 className='price mb-3 mt-3'>$ 100</h6>
                            </div>
                        </div>
                    </div>
                    <div className="col-3">
                        <div className="wishlist-card position-relative">
                            <img src={cross} alt="cross" className='position-absolute cross img-fluid' />
                            <div className="whishlist-card-image">
                                <img src={watch} className="img-fluid w-100" alt="watch" />
                            </div>
                            <div className='py-3 px-3'>
                                <h5 className='title'>Honor T1 7.0.7 GB ROM 7 Inch With Wi-Fi+3G Tablet</h5>
                                <h6 className='price mb-3 mt-3'>$ 100</h6>
                            </div>
                        </div>
                    </div>
                </div>
            </Container>
        </>
    )
}

export default Wishlist;