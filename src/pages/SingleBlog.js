import React from 'react';
import BreadCrumb from '../components/BreadCrumb';
import Meta from '../components/Meta';
import { Link } from 'react-router-dom';
import { HiOutlineArrowLeft } from "react-icons/hi";
import blog from "../images/blog-1.jpg";
import Container from '../components/Container';

const SingleBlog = () => {
    return (
        <>
            <Meta title={"Dynamic Blog Name"} />
            <BreadCrumb title="Dynamic Blog Name" />
            <Container class1="blog-wrapper home-wrapper-2 py-5">
                <div className="row">
                    <div className="col-12">
                        <div className="single-blog-card">
                            <Link to="/blogs" className='d-flex align-items-center gap-10'><HiOutlineArrowLeft className='fs-5' /> Go back to Blogs</Link>
                            <h3 className='title'>A Beautiful Sunday Morning Renaissance</h3>
                            <img src={blog} className='img-fluid w-100 my-4' alt="blog" />
                            <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Illo, consectetur. At doloribus perferendis tempore possimus mollitia, pariatur laboriosam omnis iusto beatae, facere suscipit cum voluptatibus vero ex asperiores natus sunt aperiam sapiente optio culpa? Ipsam cum minima impedit sint, reiciendis incidunt architecto animi maiores, repellat, iste illum vitae non iusto minus ut beatae eum obcaecati. Quidem pariatur officiis ipsum dolores nam animi, facilis, suscipit delectus, libero debitis sunt ipsa cumque perspiciatis numquam voluptates reiciendis mollitia aperiam dolore magnam possimus expedita sapiente.</p>
                        </div>
                    </div>
                </div>
            </Container>
        </>
    )
}

export default SingleBlog;