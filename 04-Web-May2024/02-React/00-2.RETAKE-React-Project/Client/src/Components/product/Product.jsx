import { useEffect, useState } from 'react';
import $ from 'jquery';
import 'slick-carousel';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

import partsAPI from '../../api/parts-api';
import LatestPart from './latestParts/LatestPart';

export default function Product() {
    const [latestParts, setLatestParts] = useState([]);

    useEffect(() => {
        (async () => {
            try {
                const result = await partsAPI.getAll();
                if (!Array.isArray(result) || result.length === 0) {
                    console.warn("No parts available");
                    setLatestParts([]); // Set an empty array if no data
                    return;
                }

                const latest = result.slice().reverse().slice(0, 10); // Avoid mutating the original array
                setLatestParts(latest);
            } catch (error) {
                console.error("Error fetching parts:", error);
                setLatestParts([]); // Handle errors gracefully
            }
        })();
    }, []);

    useEffect(() => {
        if (latestParts.length > 0) {
            // First unslick any existing slider to prevent duplicates
            if ($('.uren-slick-slider').hasClass('slick-initialized')) {
                $('.uren-slick-slider').slick('unslick');
            }
            
            // Initialize slick slider only when latestParts is updated
            $('.uren-slick-slider').not('.slick-initialized').slick({
                slidesToShow: 6,
                arrows: true,
                prevArrow: '<button class="slick-prev product-slick-prev" style="width: 50px; height: 50px; display: flex; align-items: center; justify-content: flex-end; padding-right: 17px;"><i class="ion-ios-arrow-back" style="font-size: 40px;"></i></button>',
                nextArrow: '<button class="slick-next product-slick-next" style="width: 50px; height: 50px; display: flex; align-items: center; justify-content: flex-start; padding-left: 0px;"><i class="ion-ios-arrow-forward" style="font-size: 40px;"></i></button>',
                responsive: [
                    { breakpoint: 1501, settings: { slidesToShow: 4 } },
                    { breakpoint: 1200, settings: { slidesToShow: 3 } },
                    { breakpoint: 992, settings: { slidesToShow: 2 } },
                    { breakpoint: 767, settings: { slidesToShow: 1 } },
                    { breakpoint: 480, settings: { slidesToShow: 1 } }
                ]
            });
            
            // Clean up arrow duplicates
            setTimeout(() => {
                // Handle next arrows - keep only the first one
                const productNextArrows = document.querySelectorAll('.product-slider .slick-next');
                if (productNextArrows.length > 1) {
                    // Keep the first one, remove the rest
                    for (let i = 1; i < productNextArrows.length; i++) {
                        if (productNextArrows[i] && productNextArrows[i].parentNode) {
                            productNextArrows[i].parentNode.removeChild(productNextArrows[i]);
                        }
                    }
                }
                
                // Handle prev arrows - keep only the first one
                const productPrevArrows = document.querySelectorAll('.product-slider .slick-prev');
                if (productPrevArrows.length > 1) {
                    // Keep the first one, remove the rest
                    for (let i = 1; i < productPrevArrows.length; i++) {
                        if (productPrevArrows[i] && productPrevArrows[i].parentNode) {
                            productPrevArrows[i].parentNode.removeChild(productPrevArrows[i]);
                        }
                    }
                }

                // Fix carousel items to have same height
                equalizeItemHeights();
            }, 100);
        }
        
        // Function to equalize heights of carousel items
        const equalizeItemHeights = () => {
            // First get all slide items
            const slideItems = document.querySelectorAll('.product-slider .slick-slide:not(.slick-cloned) .single-product');
            
            if (slideItems.length === 0) return;
            
            // Reset heights first to get natural height
            slideItems.forEach(item => {
                item.style.height = 'auto';
            });
            
            // Find tallest item
            let maxHeight = 0;
            slideItems.forEach(item => {
                const height = item.offsetHeight;
                maxHeight = Math.max(maxHeight, height);
            });
            
            // Apply max height to all items
            if (maxHeight > 0) {
                slideItems.forEach(item => {
                    item.style.height = `${maxHeight}px`;
                });
                
                // Also apply to cloned items for infinite loop
                const clonedItems = document.querySelectorAll('.product-slider .slick-slide.slick-cloned .single-product');
                clonedItems.forEach(item => {
                    item.style.height = `${maxHeight}px`;
                });
            }
        };
        
        // Handle resize events to adjust heights
        const handleResize = () => {
            if ($('.uren-slick-slider').hasClass('slick-initialized')) {
                equalizeItemHeights();
            }
        };
        
        window.addEventListener('resize', handleResize);
        
        // Clean up function to unslick on unmount
        return () => {
            window.removeEventListener('resize', handleResize);
            if ($('.uren-slick-slider').hasClass('slick-initialized')) {
                $('.uren-slick-slider').slick('unslick');
            }
        };
    }, [latestParts]); // Re-run this effect only when latestParts changes

    return (
        <div className="uren-product_area">
            <div className="container-fluid">
                <div className="row">
                    <div className="col-lg-12">
                        <div className="section-title_area">
                            <span>Last 10 Ads Added</span>
                            <h3>New Arrivals Products</h3>
                        </div>
                        <div className="product-slider uren-slick-slider slider-navigation_style-1 img-hover-effect_area">
                            {latestParts.length > 0 
                            ? latestParts.map(part => <LatestPart key={part._id} {...part} />) 
                            : <p>Loading...</p>
                            }                   
                        </div>
                    </div>
                </div>
            </div>
            <style>
                {`
                /* Ensure carousel items have same height */
                .product-slider .slick-track {
                    display: flex !important;
                }
                .product-slider .slick-slide {
                    height: inherit !important;
                    display: flex !important;
                }
                .product-slider .slick-slide > div {
                    width: 100%;
                    display: flex;
                }
                .product-slider .single-product {
                    display: flex;
                    flex-direction: column;
                    width: 100%;
                }
                .product-slider .product-content {
                    flex-grow: 1;
                    display: flex;
                    flex-direction: column;
                }
                `}
            </style>
        </div>
    );
}