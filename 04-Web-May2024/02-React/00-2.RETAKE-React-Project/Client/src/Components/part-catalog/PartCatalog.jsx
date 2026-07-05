import { Link } from 'react-router-dom';
import { useGetAllParts } from '../../hooks/useParts';

import PartCatalogItem from './part-catalog-item/PartCatalogItem';


export default function PartCatalog() {
    const [parts] = useGetAllParts();

    return (
        <>
            {/* <!-- Begin Uren's Breadcrumb Area --> */}
            <div className="breadcrumb-area">
                <div className="container">
                    <div className="breadcrumb-content">
                        <h2>Shop</h2>
                        <ul>
                            <li><Link to="/">Home</Link></li>
                            <li className="active">Catalog</li>
                        </ul>
                    </div>
                </div>
            </div>
            {/* <!-- Uren's Breadcrumb Area End Here --> */}

            {/* <!-- Begin Uren's Shop Left Sidebar Area --> */}
            <div className="shop-content_wrapper">
                <div className="container-fluid">
                    <div className="row">
                        <div className="col-lg-3 col-md-5 order-2 order-lg-1 order-md-1">
                            <div className="uren-sidebar-catagories_area">
                                <div className="category-module uren-sidebar_categories">
                                    <div className="category-module_heading">
                                        <h5>Categories</h5>
                                    </div>
                                    <div className="module-body">
                                        <ul className="module-list_item">
                                            <li>
                                                <Link to="#">Engine and Drivetrain <span>(12)</span></Link>
                                                <Link to="#">Suspension and Steering <span>(0)</span></Link>
                                                <Link to="#">Braking System <span>(0)</span></Link>
                                                <Link to="#">Electrical System <span>(0)</span></Link>
                                                <Link to="#">Exhaust System <span>(12)</span></Link>
                                                <Link to="#">Cooling System <span>(12)</span></Link>
                                                <Link to="#">Body and Exterior <span>(16)</span></Link>
                                                <Link to="#">Interior and Comfort <span>(2)</span></Link>
                                                <Link to="#">Wheels and Tires <span>(0)</span></Link>
                                                <Link to="#">Fuel System <span>(9)</span></Link>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                                <div className="uren-sidebar_categories">
                                    <div className="uren-categories_title">
                                        <h5>Price</h5>
                                    </div>
                                    <div className="price-filter">
                                        <div id="slider-range"></div>
                                        <div className="price-slider-amount">
                                            <div className="label-input">
                                                <label>price : </label>
                                                <input type="text" id="amount" name="price" placeholder="Add Your Price" />
                                            </div>
                                            {/* <button type="button">Filter</button> */}
                                        </div>
                                    </div>
                                </div>
                                <div className="uren-sidebar_categories">
                                    <div className="uren-categories_title">
                                        <h5>Color</h5>
                                    </div>
                                    <ul className="sidebar-checkbox_list">
                                        <li>
                                            <Link to="#">Black <span>(6)</span></Link>
                                        </li>
                                        <li>
                                            <Link to="#">Blue <span>(2)</span></Link>
                                        </li>
                                        <li>
                                            <Link to="#">Red <span>(3)</span></Link>
                                        </li>
                                        <li>
                                            <Link to="#">Yellow <span>(0)</span></Link>
                                        </li>
                                    </ul>
                                </div>
                                <div className="uren-sidebar_categories">
                                    <div className="uren-categories_title">
                                        <h5>Manufacturers</h5>
                                    </div>
                                    <ul className="sidebar-checkbox_list">
                                        <li>
                                            <Link to="#">Sanai <span>(10)</span></Link>
                                        </li>
                                        <li>
                                            <Link to="#">Xail <span>(2)</span></Link>
                                        </li>
                                        <li>
                                            <Link to="#">Chamcham <span>(1)</span></Link>
                                        </li>
                                        <li>
                                            <Link to="#">Meito <span>(3)</span></Link>
                                        </li>
                                        <li>
                                            <Link to="#">Walton <span>(0)</span></Link>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                            <div className="sidebar-banner_area">
                                <div className="banner-item img-hover_effect">
                                    <Link to="#">
                                        <img src="/images/shop/1.jpg" alt="Uren's Shop Banner Image" />
                                    </Link>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-9 col-md-7 order-1 order-lg-2 order-md-2">
                            <div className="shop-toolbar">
                                <div className="product-view-mode">
                                    <Link className="grid-1" data-target="gridview-1" data-toggle="tooltip" data-placement="top" title="1">1</Link>
                                    <Link className="grid-2" data-target="gridview-2" data-toggle="tooltip" data-placement="top" title="2">2</Link>
                                    <Link className="active grid-3" data-target="gridview-3" data-toggle="tooltip" data-placement="top" title="3">3</Link>
                                    <Link className="grid-4" data-target="gridview-4" data-toggle="tooltip" data-placement="top" title="4">4</Link>
                                    <Link className="grid-5" data-target="gridview-5" data-toggle="tooltip" data-placement="top" title="5">5</Link>
                                    <Link className="list" data-target="listview" data-toggle="tooltip" data-placement="top" title="List"><i className="fa fa-th-list"></i></Link>
                                </div>
                                <div className="product-item-selection_area">
                                    <div className="product-short">
                                        <label className="select-label">Sort By:</label>
                                        <select className="myniceselect nice-select">
                                            <option value="1">Default</option>
                                            <option value="2">Name, A to Z</option>
                                            <option value="3">Name, Z to A</option>
                                            <option value="4">Price, low to high</option>
                                            <option value="5">Price, high to low</option>
                                            <option value="5">Rating (Highest)</option>
                                            <option value="5">Rating (Lowest)</option>
                                            <option value="5">Model (A - Z)</option>
                                            <option value="5">Model (Z - A)</option>
                                        </select>
                                    </div>
                                    <div className="product-showing">
                                        <label className="select-label">Show:</label>
                                        <select className="myniceselect short-select nice-select">
                                            <option value="1">15</option>
                                            <option value="1">1</option>
                                            <option value="1">2</option>
                                            <option value="1">3</option>
                                            <option value="1">4</option>
                                        </select>
                                    </div>
                                </div>
                            </div>
                            <div className="shop-product-wrap grid gridview-3 img-hover-effect_area row">

                                {parts.length > 0
                               ? parts.map(part => <PartCatalogItem key={part._id} {...part} />)
                               :<p>Loading...</p>
                            }
                                
                            </div>
                            <div className="row">
                                <div className="col-lg-12">
                                    <div className="uren-paginatoin-area">
                                        <div className="row">
                                            <div className="col-lg-12">
                                                <ul className="uren-pagination-box primary-color">
                                                    <li className="active"><Link to="#">1</Link></li>
                                                    <li><Link to="#">2</Link></li>
                                                    <li><Link to="#">3</Link></li>
                                                    <li><Link to="#">4</Link></li>
                                                    <li><Link to="#">5</Link></li>
                                                    <li><Link className="Next" to="#">Next</Link></li>
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
            {/* <!-- Uren's Shop Left Sidebar Area End Here --> */}

        </>
    )
};