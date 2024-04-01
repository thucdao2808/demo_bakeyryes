import React from 'react';
import "../page_product/StyleProduct.css"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
    faArrowDownZA,
    faMagnifyingGlass,
    faCartPlus,
    faAnglesRight
} from "@fortawesome/free-solid-svg-icons";
import listSellings from "../../../api/data.js"
const Product = (props) => {

    return (
        <div className=''>
            <section className='box_intro'>
                <img className='img_intro' src='http://bizweb.dktcdn.net/100/492/035/themes/919334/assets/breadcrumb.jpg?1704344199488' alt=''></img>
                <div className='box_title_intro'>
                    <div className='title_beard_cumb'>
                        Tất Cả Sản Phẩm
                    </div>
                    <ul class="breadcrumb">
                        <li class="home">
                            <a className='path_hone' href="/"><span className='page_first'>Trang chủ</span></a>
                            <span class="mr_lr">&nbsp;<svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="chevron-right" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512" class="svg-inline--fa fa-chevron-right fa-w-10"><path fill="currentColor" d="M285.476 272.971L91.132 467.314c-9.373 9.373-24.569 9.373-33.941 0l-22.667-22.667c-9.357-9.357-9.375-24.522-.04-33.901L188.505 256 34.484 101.255c-9.335-9.379-9.317-24.544.04-33.901l22.667-22.667c9.373-9.373 24.569-9.373 33.941 0L285.475 239.03c9.373 9.372 9.373 24.568.001 33.941z" class=""></path></svg>&nbsp;</span>
                        </li>
                        <li className='introtion'>
                            <strong className='item_intro'>
                                <span className='nameIntro'>Tất cả sản phẩm</span>
                            </strong>
                        </li>
                    </ul>

                </div>
                <div className='overflow_display'></div>
            </section>
            <div className="select_breader">
                <div className="box_slide_bread">
                    <div className="cake_sticky">
                        <img
                            className="painting_cake"
                            src="https://bizweb.dktcdn.net/100/492/035/themes/919334/assets/danhmuc_1.jpg?1700207327272"
                            alt=""
                        ></img>
                        <div class="overlay">
                            <h3 className="conttitle_content_cakeent_bread">Bánh kếp</h3>{" "}
                            <a
                                className="click_viewing"
                                href="/san-pham-noi-bat"
                                title="Bánh su kem"
                            >
                                Xem ngay
                            </a>
                        </div>
                    </div>
                    <div className="cake_sticky">
                        <img
                            className="painting_cake"
                            src="https://bizweb.dktcdn.net/100/492/035/themes/919334/assets/danhmuc_2.jpg?1700207327272"
                            alt=""
                        ></img>
                        <div class="overlay">
                            <h3 className="conttitle_content_cakeent_bread">Bánh su kem</h3>{" "}
                            <a
                                className="click_viewing"
                                href="/san-pham-noi-bat"
                                title="Bánh su kem"
                            >
                                Xem ngay
                            </a>
                        </div>
                    </div>
                    <div className="cake_sticky">
                        <img
                            className="painting_cake"
                            src="https://bizweb.dktcdn.net/100/492/035/themes/919334/assets/danhmuc_3.jpg?1700207327272"
                            alt=""
                        ></img>
                        <div class="overlay">
                            <h3 className="conttitle_content_cakeent_bread">
                                Bánh mì nướng
                            </h3>{" "}
                            <a
                                className="click_viewing"
                                href="/san-pham-noi-bat"
                                title="Bánh su kem"
                            >
                                Xem ngay
                            </a>
                        </div>
                    </div>
                    <div className="cake_sticky">
                        <img
                            className="painting_cake"
                            src="https://bizweb.dktcdn.net/100/492/035/themes/919334/assets/danhmuc_4.jpg?1700207327272"
                            alt=""
                        ></img>
                        <div class="overlay">
                            <h3 className="conttitle_content_cakeent_bread">Bánh khác</h3>
                            <a
                                className="click_viewing"
                                href="/san-pham-noi-bat"
                                title="Bánh su kem"
                            >
                                Xem ngay
                            </a>
                        </div>
                    </div>
                </div>
            </div>
            <div className=''>
                <div className='box_all_product'>
                    <h2 className='title_all_goods'>Tất cả sản phẩm </h2>
                    <img className='image_logo' src='https://bizweb.dktcdn.net/100/492/035/themes/919334/assets/title.png?1704344199488' alt='' ></img>
                </div>
                <div className='container_all_product'>
                    <div className='box_internal_prd'>
                        <div className='cate_pro'>
                            <div className='box_categalory'>
                                <div className='title_pro'>Danh mục sản phẩm</div>
                                <ul className=''>
                                    <li className='item_bread_prd'>Bánh kem </li>
                                    <li className='item_bread_prd'>Bánh mì</li>
                                    <li className='item_bread_prd'>Bánh ngọt</li>
                                    <li className='item_bread_prd'>Bánh tráng miệng</li>
                                    <li className='item_bread_prd'>Bánh khô</li>
                                    <li className='item_bread_prd'>Bánh lạnh</li>
                                    <li className='item_bread_prd'>Đồ uống</li>
                                </ul>
                            </div>
                            <div className='box_filter_prd'>
                                <div className='filter_prd'>
                                    <h3 className='set_filter_prd'> Bộ lọc sản phẩm</h3>
                                    <p className='contents_set'>Giúp bạn tìm sản phẩm nhanh hơn</p>
                                </div>
                            </div>
                            <div className='box_select_price'>
                                <div className='level_price'>
                                    Chọn mức giá
                                </div>
                                <div className='select_price_level'>
                                    <div className='item_level_price'> <input className='check_price' type='checkbox'></input><span className='option_price'>Dưới 10.000 đ</span></div>
                                    <div className='item_level_price'> <input className='check_price' type='checkbox'></input><span className='option_price'>Từ 10.000đ-50.000đ</span></div>
                                    <div className='item_level_price'> <input className='check_price' type='checkbox'></input><span className='option_price'>Từ 50.000đ-100.000đ</span></div>
                                    <div className='item_level_price'> <input className='check_price' type='checkbox'></input><span className='option_price'>Từ 100.000đ-200.000đ</span></div>
                                    <div className='item_level_price'> <input className='check_price' type='checkbox'></input><span className='option_price'>Từ 300.000đ-400.000đ</span></div>
                                    <div className='item_level_price'> <input className='check_price' type='checkbox'></input><span className='option_price'>Từ 400.000đ-500.000đ</span></div>
                                    <div className='item_level_price'> <input className='check_price' type='checkbox'></input><span className='option_price'>Từ 500.000đ-600.000đ</span></div>
                                    <div className='item_level_price'> <input className='check_price' type='checkbox'></input><span className='option_price'>Từ 600.000đ-700.000đ</span></div>
                                    <div className='item_level_price'> <input className='check_price' type='checkbox'></input><span className='option_price'>Từ 700.000đ-800.000đ</span></div>
                                    <div className='item_level_price'> <input className='check_price' type='checkbox'></input><span className='option_price'>Từ 800.000đ-900.000đ</span></div>
                                    <div className='item_level_price'> <input className='check_price' type='checkbox'></input><span className='option_price'>Trên 1 triệu</span></div>
                                </div>
                            </div>
                            <div className='box_select_price'>
                                <div className='level_price'>
                                    Loại
                                </div>
                                <div className='select_classify_level'>
                                    <div className='item_level_classify'> <input className='check_classify' type='checkbox'></input><span className='option_classify'>Bánh kem</span></div>
                                    <div className='item_level_classify'> <input className='check_classify' type='checkbox'></input><span className='option_classify'>Bánh Khô</span></div>
                                    <div className='item_level_classify'> <input className='check_classify' type='checkbox'></input><span className='option_classify'>Bnahs Mì</span></div>
                                    <div className='item_level_classify'> <input className='check_classify' type='checkbox'></input><span className='option_classify'>Bánh miếng</span></div>
                                    <div className='item_level_classify'> <input className='check_classify' type='checkbox'></input><span className='option_classify'>Bánh miếng</span></div>
                                    <div className='item_level_classify'> <input className='check_classify' type='checkbox'></input><span className='option_classify'>Bánh mousse</span></div>
                                    <div className='item_level_classify'> <input className='check_classify' type='checkbox'></input><span className='option_classify'>Bánh ngọt</span></div>
                                    <div className='item_level_classify'> <input className='check_classify' type='checkbox'></input><span className='option_classify'>Bánh tráng miệng</span></div>
                                </div>
                            </div>
                            <div className='box_select_price'>
                                <div className='level_price'>
                                    Trọng lượng
                                </div>
                                <div className='select_classify_level'>
                                    <div className='item_level_classify'> <input className='check_classify' type='checkbox'></input><span className='option_classify'>70g</span></div>
                                    <div className='item_level_classify'> <input className='check_classify' type='checkbox'></input><span className='option_classify'>100g</span></div>
                                    <div className='item_level_classify'> <input className='check_classify' type='checkbox'></input><span className='option_classify'>107g</span></div>
                                    <div className='item_level_classify'> <input className='check_classify' type='checkbox'></input><span className='option_classify'>120g</span></div>
                                    <div className='item_level_classify'> <input className='check_classify' type='checkbox'></input><span className='option_classify'>200g</span></div>
                                    <div className='item_level_classify'> <input className='check_classify' type='checkbox'></input><span className='option_classify'>250g</span></div>
                                    <div className='item_level_classify'> <input className='check_classify' type='checkbox'></input><span className='option_classify'>400g</span></div>
                                    <div className='item_level_classify'> <input className='check_classify' type='checkbox'></input><span className='option_classify'>500g</span></div>
                                    <div className='item_level_classify'> <input className='check_classify' type='checkbox'></input><span className='option_classify'>700g</span></div>
                                    <div className='item_level_classify'> <input className='check_classify' type='checkbox'></input><span className='option_classify'>900g</span></div>
                                    <div className='item_level_classify'> <input className='check_classify' type='checkbox'></input><span className='option_classify'>1,4kg</span></div>
                                </div>
                            </div>
                        </div>
                        <div className='box_right_contain_prd'>
                            <div className='box_arange_prd'>
                                <div className='anrrange_prd'>
                                    <div className='name_arnge'>
                                        <FontAwesomeIcon icon={faArrowDownZA} /> Sắp xếp theo:
                                    </div>
                                    <div className='item_fil'>Tên A-Z</div>
                                    <div className='item_fil'>Tên Z-A</div>
                                    <div className='item_fil'>Hàng mới</div>
                                    <div className='item_fil'>Giá thấp đến cao</div>
                                    <div className='item_fil'>Giá cao xuống thấp</div>
                                </div>
                            </div>
                            <div className='prd_sectin_2'>
                                <div className='all_container_prd'>
                                    <div className='container_prd'>
                                        {listSellings.map((item, index) => (
                                            <div className='box_list_prd' key={item}>
                                                <div className='packet_prd'>
                                                    <img className='img_prd' alt='' src={item.img_cake}></img>
                                                    <div className='foot_prd'>
                                                        <h5 className='name_prd'>{item.name}</h5>
                                                        <div className='combine_prd'>
                                                            <span className='now_price'>{item.price_currents}</span>
                                                            <span className='past_price'>{item.price_discount}</span>
                                                        </div>
                                                        <div className='box_logo_icon'>
                                                            <div className='effect_icon'>
                                                                <FontAwesomeIcon className='icon_effect' icon={faMagnifyingGlass} />
                                                            </div>
                                                            <div className='effect_icon'>
                                                                <FontAwesomeIcon className='icon_effect' icon={faCartPlus} />
                                                            </div>
                                                        </div>
                                                        <div className='state_order'>{item.discount_percentage}</div>
                                                    </div>
                                                </div>

                                            </div>
                                        ))}
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='nagivative'>
                     <div className='item_nagive' id='number_vagavative'>1</div>
                     <div className='item_nagive'>2</div>
                     <div className='item_nagive'>3</div>
                     <div className='item_nagive'>
                     <FontAwesomeIcon icon={faAnglesRight} />
                     </div>
                </div>
            </div>
        </div>


    );
};

export default Product;