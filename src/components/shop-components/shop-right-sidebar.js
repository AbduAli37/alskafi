import React, { Component, useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import parse from 'html-react-parser';
import Sidebar from './shop-sidebar';
import { useParams } from 'react-router-dom/cjs/react-router-dom.min';
import axios from 'axios';
import { useSelector } from 'react-redux';

const  ShopGridV1=()=> {
  let { id } = useParams();
  // console.log(id)
  const language = useSelector((state) => state.language.lang);

  const [pageLoading,setPageLoading]=useState(false)
  const [products,setProducts]=useState([])
  const [category,setCategory]=useState({})
  // console.log('erer')
const getProducts=()=>{
  setPageLoading(true)
  axios.get(`https://alskafisteel.com/alskafi/api/categories/category_products/${id}`)
  .then((res)=>{
  console.log(res)
    if(Array.isArray(res.data.result)){
      setProducts(res.data.result)
    }
  })
  .catch(e=>console.log(e))
  .finally(()=>{
    setPageLoading(false)
  })
}
const getCategoryDetails=()=>{
  axios.get(`https://alskafisteel.com/alskafi/api/categories/category_details/${id}`)
  .then((res)=>{
    if(res.data.status=='success'){
      setCategory(res.data.result)
    }
  })
  .catch((e)=>{console.log(e)})
}
useEffect(()=>{
  getProducts()
  getCategoryDetails()
},[id])
        let publicUrl = process.env.PUBLIC_URL+'/'

    return (
      <>
        {
          pageLoading?(
            <div></div>
          )
          :
          (
            <div>
			<div className="ltn__product-area ltn__product-gutter">
				<div className="container">
					<div className="row">
						<div className="col-lg-12  mb-100">

							<div className="tab-content">
							<div className="tab-pane fade active show" id="liton_product_grid">
								<div className="ltn__product-tab-content-inner ltn__product-grid-view">
                  <div className="row">
                    {
                      products&&products?.map((item,index)=>{
                        return(
                          <div className="col-xl-6 col-sm-6 col-12">
									<div className="ltn__product-item ltn__product-item-4 ltn__product-item-5 text-center---">
										<div className="product-img go-top">
										<Link to={`/product-details/${item?.id}`}><img style={{height:'300px',width:'100%'}} src={item.image} alt="#" /></Link>
										<div className="real-estate-agent">
											<div className="agent-img">
											{/* <Link to="/shop"><img src={publicUrl+"assets/img/blog/author.jpg"} alt="#" /></Link> */}
											</div>
										</div>
										</div>
										<div className="product-info">

										<h2 style={{textAlign:'center'}} className="product-title go-top"><Link to="/product-details">{language=='ar'?item.name_ar:item.name_en}</Link></h2>

										</div>

									</div>
									</div>
                        )
                      })
                    }
                  </div>
								</div>
							</div>
							<div className="tab-pane fade" id="liton_product_list">
								<div className="ltn__product-tab-content-inner ltn__product-list-view">
								<div className="row">
									<div className="col-lg-12">
									{/* Search Widget */}
									<div className="ltn__search-widget mb-30">
										<form action="#">
										<input type="text" name="search" placeholder="Search your keyword..." />
										<button type="submit"><i className="fas fa-search" /></button>
										</form>
									</div>
									</div>
									{/* ltn__product-item */}
									<div className="col-lg-12">
									<div className="ltn__product-item ltn__product-item-4 ltn__product-item-5">
										<div className="product-img go-top">
										<Link to="/product-details"><img src={publicUrl+"assets/img/product-3/1.jpg"} alt="#" /></Link>
										</div>
										<div className="product-info">
										<div className="product-badge-price">
											<div className="product-badge">

											</div>

										</div>
										<h2 className="product-title go-top"><Link to="/product-details">New Apartment Nice View</Link></h2>
										<div className="product-img-location go-top">
											<ul>
											<li>
												<Link to="/contact"><i className="flaticon-pin" /> Belmont Gardens, Chicago</Link>
											</li>
											</ul>
										</div>
										<ul className="ltn__list-item-2--- ltn__list-item-2-before--- ltn__plot-brief">
											<li><span>3 </span>
											Bed
											</li>
											<li><span>2 </span>
											Bath
											</li>
											<li><span>3450 </span>
											Square Ft
											</li>
										</ul>
										</div>
										<div className="product-info-bottom">
										<div className="real-estate-agent">
											<div className="agent-img">
											<Link to="/shop"><img src={publicUrl+"assets/img/blog/author.jpg"} alt="#" /></Link>
											</div>
											<div className="agent-brief">
											<h6><Link to="/team-details">William Seklo</Link></h6>
											<small>Estate Agents</small>
											</div>
										</div>
										<div className="product-hover-action">
											<ul>
											<li>
												<a href="#" title="Quick View" data-bs-toggle="modal" data-bs-target="#quick_view_modal">
												<i className="flaticon-expand" />
												</a>
											</li>
											<li>
												<a href="#" title="Wishlist" data-bs-toggle="modal" data-bs-target="#liton_wishlist_modal">
												<i className="flaticon-heart-1" /></a>
											</li>
											<li className="go-top">
												<Link to="/product-details" title="Product Details">
												<i className="flaticon-add" />
												</Link>
											</li>
											</ul>
										</div>
										</div>
									</div>
									</div>
									{/* ltn__product-item */}
									<div className="col-lg-12">
									<div className="ltn__product-item ltn__product-item-4 ltn__product-item-5">
										<div className="product-img go-top">
										<Link to="/product-details"><img src={publicUrl+"assets/img/product-3/2.jpg"} alt="#" /></Link>
										</div>

										<div className="product-info-bottom">
										<div className="real-estate-agent">
											<div className="agent-img">
											<Link to="/shop"><img src={publicUrl+"assets/img/blog/author.jpg"} alt="#" /></Link>
											</div>
											<div className="agent-brief">
											<h6><Link to="/team-details">William Seklo</Link></h6>
											<small>Estate Agents</small>
											</div>
										</div>
										<div className="product-hover-action">
											<ul>
											<li>
												<a href="#" title="Quick View" data-bs-toggle="modal" data-bs-target="#quick_view_modal">
												<i className="flaticon-expand" />
												</a>
											</li>
											<li>
												<a href="#" title="Wishlist" data-bs-toggle="modal" data-bs-target="#liton_wishlist_modal">
												<i className="flaticon-heart-1" /></a>
											</li>
											<li className="go-top">
												<Link to="/product-details" title="Product Details">
												<i className="flaticon-add" />
												</Link>
											</li>
											</ul>
										</div>
										</div>
									</div>
									</div>
									{/* ltn__product-item */}
									<div className="col-lg-12">
									<div className="ltn__product-item ltn__product-item-4 ltn__product-item-5">
										<div className="product-img go-top">
										<Link to="/product-details"><img src={publicUrl+"assets/img/product-3/3.jpg"} alt="#" /></Link>
										</div>
										<div className="product-info">
										<div className="product-badge-price">
											<div className="product-badge">
											<ul>
												<li className="sale-badg">For Rent</li>
											</ul>
											</div>

										</div>
										<h2 className="product-title go-top"><Link to="/product-details">New Apartment Nice View</Link></h2>
										<div className="product-img-location go-top">
											<ul>
											<li>
												<Link to="/contact"><i className="flaticon-pin" /> Belmont Gardens, Chicago</Link>
											</li>
											</ul>
										</div>
										<ul className="ltn__list-item-2--- ltn__list-item-2-before--- ltn__plot-brief">
											<li><span>3 </span>
											Bed
											</li>
											<li><span>2 </span>
											Bath
											</li>
											<li><span>3450 </span>
											Square Ft
											</li>
										</ul>
										</div>
										<div className="product-info-bottom">
										<div className="real-estate-agent">
											<div className="agent-img">
											<Link to="/shop"><img src={publicUrl+"assets/img/blog/author.jpg"} alt="#" /></Link>
											</div>
											<div className="agent-brief">
											<h6><Link to="/team-details">William Seklo</Link></h6>
											<small>Estate Agents</small>
											</div>
										</div>
										<div className="product-hover-action">
											<ul>
											<li>
												<a href="#" title="Quick View" data-bs-toggle="modal" data-bs-target="#quick_view_modal">
												<i className="flaticon-expand" />
												</a>
											</li>
											<li>
												<a href="#" title="Wishlist" data-bs-toggle="modal" data-bs-target="#liton_wishlist_modal">
												<i className="flaticon-heart-1" /></a>
											</li>
											<li className="go-top">
												<Link to="/product-details" title="Product Details">
												<i className="flaticon-add" />
												</Link>
											</li>
											</ul>
										</div>
										</div>
									</div>
									</div>
									{/* ltn__product-item */}
									<div className="col-lg-12">
									<div className="ltn__product-item ltn__product-item-4 ltn__product-item-5">
										<div className="product-img go-top">
										<Link to="/product-details"><img src={publicUrl+"assets/img/product-3/4.jpg"} alt="#" /></Link>
										</div>
										<div className="product-info">
										<div className="product-badge-price">
											<div className="product-badge">
											<ul>
												<li className="sale-badg">For Rent</li>
											</ul>
											</div>

										</div>
										<h2 className="product-title go-top"><Link to="/product-details">New Apartment Nice View</Link></h2>
										<div className="product-img-location go-top">
											<ul>
											<li>
												<Link to="/contact"><i className="flaticon-pin" /> Belmont Gardens, Chicago</Link>
											</li>
											</ul>
										</div>
										<ul className="ltn__list-item-2--- ltn__list-item-2-before--- ltn__plot-brief">
											<li><span>3 </span>
											Bed
											</li>
											<li><span>2 </span>
											Bath
											</li>
											<li><span>3450 </span>
											Square Ft
											</li>
										</ul>
										</div>
										<div className="product-info-bottom">
										<div className="real-estate-agent">
											<div className="agent-img">
											<Link to="/shop"><img src={publicUrl+"assets/img/blog/author.jpg"} alt="#" /></Link>
											</div>
											<div className="agent-brief">
											<h6><Link to="/team-details">William Seklo</Link></h6>
											<small>Estate Agents</small>
											</div>
										</div>
										<div className="product-hover-action">
											<ul>
											<li>
												<a href="#" title="Quick View" data-bs-toggle="modal" data-bs-target="#quick_view_modal">
												<i className="flaticon-expand" />
												</a>
											</li>
											<li>
												<a href="#" title="Wishlist" data-bs-toggle="modal" data-bs-target="#liton_wishlist_modal">
												<i className="flaticon-heart-1" /></a>
											</li>
											<li className="go-top">
												<Link to="/product-details" title="Product Details">
												<i className="flaticon-add" />
												</Link>
											</li>
											</ul>
										</div>
										</div>
									</div>
									</div>
									{/* ltn__product-item */}
									<div className="col-lg-12">
									<div className="ltn__product-item ltn__product-item-4 ltn__product-item-5">
										<div className="product-img go-top">
										<Link to="/product-details"><img src={publicUrl+"assets/img/product-3/5.jpg"} alt="#" /></Link>
										</div>
										<div className="product-info">
										<div className="product-badge-price">
											<div className="product-badge">
											<ul>
												<li className="sale-badg">For Rent</li>
											</ul>
											</div>

										</div>
										<h2 className="product-title go-top"><Link to="/product-details">New Apartment Nice View</Link></h2>
										<div className="product-img-location go-top">
											<ul>
											<li>
												<Link to="/contact"><i className="flaticon-pin" /> Belmont Gardens, Chicago</Link>
											</li>
											</ul>
										</div>
										<ul className="ltn__list-item-2--- ltn__list-item-2-before--- ltn__plot-brief">
											<li><span>3 </span>
											Bed
											</li>
											<li><span>2 </span>
											Bath
											</li>
											<li><span>3450 </span>
											Square Ft
											</li>
										</ul>
										</div>
										<div className="product-info-bottom">
										<div className="real-estate-agent">
											<div className="agent-img">
											<Link to="/shop"><img src={publicUrl+"assets/img/blog/author.jpg"} alt="#" /></Link>
											</div>
											<div className="agent-brief">
											<h6><Link to="/team-details">William Seklo</Link></h6>
											<small>Estate Agents</small>
											</div>
										</div>
										<div className="product-hover-action">
											<ul>
											<li>
												<a href="#" title="Quick View" data-bs-toggle="modal" data-bs-target="#quick_view_modal">
												<i className="flaticon-expand" />
												</a>
											</li>
											<li>
												<a href="#" title="Wishlist" data-bs-toggle="modal" data-bs-target="#liton_wishlist_modal">
												<i className="flaticon-heart-1" /></a>
											</li>
											<li className="go-top">
												<Link to="/product-details" title="Product Details">
												<i className="flaticon-add" />
												</Link>
											</li>
											</ul>
										</div>
										</div>
									</div>
									</div>
									{/*  */}
								</div>
								</div>
							</div>
							</div>
							{/* <div className="ltn__pagination-area text-center">
							<div className="ltn__pagination">
								<ul>
								<li><Link to="#"><i className="fas fa-angle-double-left" /></Link></li>
								<li><Link to="#">1</Link></li>
								<li className="active"><Link to="#">2</Link></li>
								<li><Link to="#">3</Link></li>
								<li><Link to="#">...</Link></li>
								<li><Link to="#">10</Link></li>
								<li><Link to="#"><i className="fas fa-angle-double-right" /></Link></li>
								</ul>
							</div>
							</div> */}
						</div>
						{/* <Sidebar /> */}
					</div>
				</div>
			</div>

			<div className="ltn__modal-area ltn__add-to-cart-modal-area">
				<div className="modal fade" id="liton_wishlist_modal" tabIndex={-1}>
					<div className="modal-dialog modal-md" role="document">
					<div className="modal-content">
						<div className="modal-header">
						<button type="button" className="close" data-bs-dismiss="modal" aria-label="Close">
							<span aria-hidden="true">×</span>
						</button>
						</div>
						<div className="modal-body">
						<div className="ltn__quick-view-modal-inner">
							<div className="modal-product-item">
							<div className="row">
								<div className="col-12">
								<div className="modal-product-img">
									<img src={publicUrl+"assets/img/product/7.png"} alt="#" />
								</div>
								<div className="modal-product-info go-top">
									<h5><Link to="/product-details">Brake Conversion Kit</Link></h5>
									<p className="added-cart"><i className="fa fa-check-circle" />  Successfully added to your Wishlist</p>
									<div className="btn-wrapper">
									<Link to="/wishlist" className="theme-btn-1 btn btn-effect-1">View Wishlist</Link>
									</div>
								</div>
								{/* additional-info */}
								<div className="additional-info d-none">
									<p>We want to give you <b>10% discount</b> for your first order, <br />  Use discount code at checkout</p>
									<div className="payment-method">
									<img src={publicUrl+"assets/img/icons/payment.png"} alt="#" />
									</div>
								</div>
								</div>
							</div>
							</div>
						</div>
						</div>
					</div>
					</div>
				</div>
			</div>

			<div className="ltn__modal-area ltn__quick-view-modal-area">
				<div className="modal fade" id="quick_view_modal" tabIndex={-1}>
					<div className="modal-dialog modal-lg" role="document">
					<div className="modal-content">
						<div className="modal-header">
						<button type="button" className="close" data-bs-dismiss="modal" aria-label="Close">
							<span aria-hidden="true">×</span>
							{/* <i class="fas fa-times"></i> */}
						</button>
						</div>
						<div className="modal-body">
						<div className="ltn__quick-view-modal-inner">
							<div className="modal-product-item">
							<div className="row">
								<div className="col-lg-6 col-12">
								<div className="modal-product-img">
									<img src={publicUrl+"assets/img/product/4.png"} alt="#" />
								</div>
								</div>
								<div className="col-lg-6 col-12">
								<div className="modal-product-info">
									<div className="product-ratting">
									<ul>
										<li><a href="#"><i className="fas fa-star" /></a></li>
										<li><a href="#"><i className="fas fa-star" /></a></li>
										<li><a href="#"><i className="fas fa-star" /></a></li>
										<li><a href="#"><i className="fas fa-star-half-alt" /></a></li>
										<li><a href="#"><i className="far fa-star" /></a></li>
										<li className="review-total"> <a href="#"> ( 95 Reviews )</a></li>
									</ul>
									</div>
									<h3>Brake Conversion Kit</h3>
									<div className="product-price">
									<span>$149.00</span>
									<del>$165.00</del>
									</div>
									<div className="modal-product-meta ltn__product-details-menu-1">
									<ul>
										<li>
										<strong>Categories:</strong>
										<span className="go-top">
											<Link to="/blog">Parts</Link>
											<Link to="/blog">Car</Link>
											<Link to="/blog">Seat</Link>
											<Link to="/blog">Cover</Link>
										</span>
										</li>
									</ul>
									</div>
									<div className="ltn__product-details-menu-2">
									<ul>
										<li>
										<div className="cart-plus-minus">
											<input type="text" defaultValue="02" name="qtybutton" className="cart-plus-minus-box" />
										</div>
										</li>
										<li>
										<a href="#" className="theme-btn-1 btn btn-effect-1" title="Add to Cart" data-bs-toggle="modal" data-bs-target="#add_to_cart_modal">
											<i className="fas fa-shopping-cart" />
											<span>ADD TO CART</span>
										</a>
										</li>
									</ul>
									</div>
									<hr />
									<div className="ltn__social-media">
									<ul>
										<li>Share:</li>
										<li><a href="#" title="Facebook"><i className="fab fa-facebook-f" /></a></li>
										<li><a href="#" title="Twitter"><i className="fab fa-twitter" /></a></li>
										<li><a href="#" title="Linkedin"><i className="fab fa-linkedin" /></a></li>
										<li><a href="#" title="Instagram"><i className="fab fa-instagram" /></a></li>
									</ul>
									</div>
								</div>
								</div>
							</div>
							</div>
						</div>
						</div>
					</div>
					</div>
				</div>
			</div>

			<div className="ltn__modal-area ltn__add-to-cart-modal-area">
				<div className="modal fade" id="add_to_cart_modal" tabIndex={-1}>
					<div className="modal-dialog modal-md" role="document">
					<div className="modal-content">
						<div className="modal-header">
						<button type="button" className="close" data-bs-dismiss="modal" aria-label="Close">
							<span aria-hidden="true">×</span>
						</button>
						</div>
						<div className="modal-body">
						<div className="ltn__quick-view-modal-inner">
							<div className="modal-product-item">
							<div className="row">
								<div className="col-12">
								<div className="modal-product-img">
									<img src={publicUrl+"assets/img/product/1.png"} alt="#" />
								</div>
								<div className="modal-product-info go-top">
									<h5 className="go-top"><Link to="/product-details">Brake Conversion Kit</Link></h5>
									<p className="added-cart"><i className="fa fa-check-circle" />Successfully added to your Cart</p>
									<div className="btn-wrapper">
									<Link to="/cart" className="theme-btn-1 btn btn-effect-1">View Cart</Link>
									<Link to="/checkout" className="theme-btn-2 btn btn-effect-2">Checkout</Link>
									</div>
								</div>
								{/* additional-info */}
								<div className="additional-info d-none">
									<p>We want to give you <b>10% discount</b> for your first order, <br />  Use discount code at checkout</p>
									<div className="payment-method">
									<img src={publicUrl+"assets/img/icons/payment.png"} alt="#" />
									</div>
								</div>
								</div>
							</div>
							</div>
						</div>
						</div>
					</div>
					</div>
				</div>
			</div>


			</div>

          )
        }
      </>
    )
        }


export default ShopGridV1
