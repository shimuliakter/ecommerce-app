import React, { useState } from 'react';
import BreadCrumb from '../components/BreadCrumb';
import Meta from '../components/Meta';
import ProductCard from '../components/ProductCard';
import ReactStars from "react-rating-stars-component";
// import ReactImageZoom from 'react-image-zoom';
import ReactImageMagnify from 'react-image-magnify';
import watchImg1200 from '../../src/images/watch1200.jpg';
import watchImg300 from '../../src/images/watch300.jpg';
import Color from '../components/Color';
import { TbGitCompare } from 'react-icons/tb';
import { AiOutlineHeart } from 'react-icons/ai';
import Container from '../components/Container';

const SingleProduct = () => {
    // const props = {
    //     width: 400,
    //     height: 600,
    //     zoomWidth: 600,
    //     img: "https://images.pexels.com/photos/190819/pexels-photo-190819.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
    // };
    const watchImageUrl = 'https://images.pexels.com/photos/190819/pexels-photo-190819.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500';

    const [orderedProduct, setOrderedProduct] = useState(true);
    const copyToClipboard = (text) => {
        console.log('text', text)
        var textField = document.createElement('textarea')
        textField.innerText = text
        document.body.appendChild(textField)
        textField.select()
        document.execCommand('copy')
        textField.remove()
    };

    return (
        <>
            <Meta title={"Product Name"} />
            <BreadCrumb title="Product Name" />

            <Container class1="main-product-wrapper py-5 home-wrapper-2">
                <div className="row">
                    <div className="col-6">
                        <div className="main-product-image">
                            <div>
                                {/* <ReactImageZoom {...props} /> */}
                                <ReactImageMagnify {...{
                                    smallImage: {
                                        alt: 'Wristwatch by Ted Baker London',
                                        isFluidWidth: true,
                                        src: watchImg300
                                    },
                                    largeImage: {
                                        src: watchImg1200,
                                        width: 1200,
                                        height: 1200
                                    },
                                    // lensStyle: {background: 'rgba(0,0,0,.6'},
                                    isHintEnabled: true,
                                }} />
                            </div>
                        </div>

                        <div className="other-product-images d-flex flex-wrap gap-15">
                            <div>
                                <img src={watchImageUrl} className='img-fluid' alt="" />
                            </div>
                            <div>
                                <img src={watchImageUrl} className='img-fluid' alt="" />
                            </div>
                            <div>
                                <img src={watchImageUrl} className='img-fluid' alt="" />
                            </div>
                            <div>
                                <img src={watchImageUrl} className='img-fluid' alt="" />
                            </div>
                        </div>


                    </div>

                    <div className="col-6">
                        <div className="main-product-details">
                            <div className='border-bottom'>
                                <h3 className='title'>Kids Headphones Bulk 10 Pack Multi Colored For Students</h3>
                            </div>
                            <div className="border-bottom py-3">
                                <p className="price">$ 100</p>
                                <div className='d-flex align-items-center gap-10'>
                                    <ReactStars classNames="index"
                                        count={5}
                                        size={24} value={4} edit={false}
                                        activeColor="#ffd700"
                                    />
                                    <p className='mb-0 t-review'>( 2 Reviews )</p>
                                </div>
                                <a className='review-btn' href="#review">Write a Review</a>
                            </div>

                            <div className="py-3">

                                <div className='d-flex gap-10 align-items-center my-2'>
                                    <h3 className='product-heading'>Type :</h3>
                                    <p className='product-data'>Watch</p>
                                </div>

                                <div className='d-flex gap-10 align-items-center my-2'>
                                    <h3 className='product-heading'>Brand :</h3>
                                    <p className='product-data'>Havells</p>
                                </div>

                                <div className='d-flex gap-10 align-items-center my-2'>
                                    <h3 className='product-heading'>Category :</h3>
                                    <p className='product-data'>Watch</p>
                                </div>

                                <div className='d-flex gap-10 align-items-center my-2'>
                                    <h3 className='product-heading'>Tags :</h3>
                                    <p className='product-data'>Watch</p>
                                </div>

                                <div className='d-flex gap-10 align-items-center my-2'>
                                    <h3 className='product-heading'>Availabliry :</h3>
                                    <p className='product-data'>In Stock</p>
                                </div>

                                <div className='d-flex gap-10 flex-column mt-2 mb-3'>
                                    <h3 className='product-heading'>Size :</h3>
                                    <div className='d-flex flex-wrap gap-15'>
                                        <span className='badge border border-1 bg-white text-dark border-secondary'>S</span>
                                        <span className='badge border border-1 bg-white text-dark border-secondary'>M</span>
                                        <span className='badge border border-1 bg-white text-dark border-secondary'>XL</span>
                                        <span className='badge border border-1 bg-white text-dark border-secondary'>XXL</span>
                                    </div>
                                </div>

                                <div className='d-flex gap-10 flex-column mt-2 mb-3'>
                                    <h3 className='product-heading'>Color :</h3>
                                    <Color />
                                </div>

                                <div className='d-flex align-items-center flex-row gap-15 mt-2 mb-3'>
                                    <h3 className='product-heading'>Quantity :</h3>
                                    <div className=''>
                                        <input type="number" name=""
                                            min={1}
                                            max={10}
                                            placeholder={0}
                                            className='form-control'
                                            style={{ width: "70px" }}
                                            id="" />
                                    </div>
                                    <div className='d-flex align-items-center gap-30 ms-5'>
                                        <button className='button border-0' type='submit'>Add to Cart</button>
                                        <button to="/signup" className='button signup'>Buy it Now</button>
                                    </div>


                                </div>

                                <div className='d-flex align-items-center gap-15'>
                                    <div>
                                        <a href=""><TbGitCompare className='fs-5 me-2' /> Add to Compare</a>
                                    </div>
                                    <div>
                                        <a href=""><AiOutlineHeart className='fs-5 me-2' /> Add to Wishlist</a>
                                    </div>
                                </div>

                                <div className='d-flex gap-10 flex-column my-3'>
                                    <h3 className='product-heading'>Shipping & Returns :</h3>
                                    <p className='product-data'>Free shiping and returns available on all orders! <br /> We ship all US domestic orders within <b>5-10 business days!</b></p>
                                </div>

                                <div className='d-flex gap-10 align-items-center my-3'>
                                    <h3 className='product-heading'>Product Link :</h3>

                                    <a href="javascript:void(0);" onClick={() => {
                                        copyToClipboard("https://images.pexels.com/photos/190819/pexels-photo-190819.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500")
                                    }}>
                                        Copy Product Link
                                    </a>
                                </div>

                            </div>

                        </div>
                    </div>
                </div>
            </Container>

            <Container class1="description-wrapper py-5 home-wrapper-2">
                <div className="row">
                    <div className="col-12">
                        <h4>Description</h4>
                        <div className='bg-white p-3'>
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis perferendis quae veniam culpa error illo temporibus blanditiis. Nemo sunt quod deserunt officiis magnam aperiam quibusdam, hic cupiditate, tempora omnis voluptate?.</p>
                        </div>
                    </div>
                </div>
            </Container>

            <Container class1='reviews-wrapper home-wrapper-2'>
                <div className="row">
                    <div className="col-12">
                        <h3 id='review'>Reviews</h3>
                        <div className="review-inner-wrapper">
                            <div className="review-head d-flex justify-content-between align-items-end">
                                <div>
                                    <h4 className='mb-2'>Customer Reviews</h4>
                                    <div className='d-flex align-items-center gap-10'>
                                        <ReactStars
                                            count={5}
                                            size={24} value={4} edit={false}
                                            activeColor="#ffd700"
                                        />
                                        <p className='mb-0'>Based on 2 Reviews</p>
                                    </div>
                                </div>
                                {orderedProduct && (
                                    <div>
                                        <a className='text-dark text-decoration-underline' href="">Write a Review</a>
                                    </div>
                                )}
                            </div>
                            <div className="review-form py-4">
                                <h4>Write a Review</h4>
                                <form action="" className='d-flex flex-column gap-15'>
                                    <div>
                                        <ReactStars
                                            count={5}
                                            size={24} value={4} edit={true}
                                            activeColor="#ffd700"
                                        />
                                    </div>
                                    <div>
                                        <textarea name="" className='w-100 form-control' id="" cols="30" rows="4" placeholder='Comments'></textarea>
                                    </div>

                                    <div className='d-flex justify-content-end'>
                                        <button className='button border-0'>Submit Review</button>
                                    </div>

                                </form>
                            </div>
                            <div className='reviews mt-4'>
                                <div className='review'>
                                    <div className='d-flex gap-10 align-items-center'>
                                        <h6 className='mb-0'>Ashraful Islam</h6>
                                        <ReactStars
                                            count={5}
                                            size={24} value={4} edit={true}
                                            activeColor="#ffd700"
                                        />
                                    </div>
                                    <p className='mt-3'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Doloremque numquam ipsum dolorum sequi quo eum beatae temporibus maiores iusto dolorem facilis odit sapiente pariatur debitis vitae dolores, blanditiis consequuntur impedit.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </Container>

            <Container class1='popular-wrapper py-5 home-wrapper-2'>
                <div className="row">
                    <div className="col-12">
                        <h3 className='section-heading'>Our Popular Products</h3>
                    </div>
                    <ProductCard />
                </div>
            </Container>
        </>
    )
}

export default SingleProduct;