import React, { useState, useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
    faXmark, faMagnifyingGlass, faUser, faHeart, faBagShopping
} from "@fortawesome/free-solid-svg-icons";
import "../css/Header.css"
const Header = () => {  
    return (
       <div className="HEADER">
         <div className='top_bar'>
            <div className='topbar-logo'>
                <img className='logo-Header' src='https://bizweb.dktcdn.net/100/492/035/themes/919334/assets/logo.png?1700207327272s' alt=''></img>
            </div>
            <div className='Menu-Bar'>
                <div className=''>
                    <ul className='list-MenuBar'>
                        <li className='home_page'>
                            Trang Chủ

                        </li>
                        <li className='intro'>
                            Giới Thiệu

                        </li>
                        <li className='product'>
                            Sản Phẩm
                            <ul className='item_cake'>
                                <li className='cake'>Bánh Kem
                                    <ul className='item_food'>
                                        <li className='selection_food'>Bánh sinh nhật </li>
                                        <li className='selection_food'>Bánh sự kiện </li>
                                        <li className='selection_food'>Bánh cho trẻ em </li>
                                        <li className='selection_food'>Bánh kem đặt trước</li>
                                    </ul>
                                </li>
                                <li className='bread'>
                                    Bánh Mì
                                    <ul className='item_food'>
                                        <li className='selection_food'>Bánh mì kẹp</li>
                                        <li className='selection_food'>Bánh cán lớp  </li>
                                        <li className='selection_food'>Bánh mì gối  </li>
                                        <li className='selection_food'>Bánh mì bagutee</li>
                                        <li className='selection_food'>Bánh mì mặn </li>
                                        <li className='selection_food'>Bánh mì ngọt </li>
                                    </ul>
                                </li>
                                <li className='sweet'>Bánh Ngọt
                                    <ul className='item_food'>
                                        <li className='selection_food'>Bánh Tráng miệng </li>
                                        <li className='selection_food'>Bánh mousse Sữa Chua</li>
                                    </ul>
                                </li>
                                <li className='dessert_cake'>
                                    Bánh Tráng Miệng
                                    <ul className='item_food'>
                                        <li className='selection_food'>Bánh Bông lan </li>
                                        <li className='selection_food'>Bánh Chiffo</li>
                                        <li className='selection_food'>Bánh Cuộn </li>
                                        <li className='selection_food'>BÁnh Su Kem</li>
                                    </ul>
                                </li>
                                <li className='dry_bread'>
                                    Bánh Khô
                                    <ul className='item_food'>
                                        <li className='selection_food'>Bánh quy </li>
                                        <li className='selection_food'>Bánh MÌ nướng</li>
                                        <li className='selection_food'>BÁnh sừng bò mini</li>
                                    </ul>
                                </li>
                                <li className='frozen_cake'>
                                    Bánh Đông Lạnh
                                    <ul className='item_food'>
                                        <li className='selection_food'>BÁnh bao</li>
                                        <li className='selection_food'>Bánh Pizza</li>
                                    </ul>
                                </li>
                                <li className='seasonal_cakes'>
                                    Bánh Theo Mùa
                                    <ul className='item_food'>
                                        <li className='selection_food'>Bánh Quy Tết</li>
                                        <li className='selection_food'>Bánh Trung Thu</li>
                                        <li className='selection_food'>BÁnh Quy Noel</li>
                                        <li className='selection_food'>BÁnh KEm Noel</li>
                                    </ul>
                                </li>
                                <li className='beverage'>
                                    Đồ uống

                                </li>
                            </ul>
                        </li>
                        <li className='story'>
                            Tin tức

                        </li>
                        <li className='contact'>
                            Liên Hệ

                        </li>
                        <li className='system-store'>
                            Hệ Thống Cửa Hàng

                        </li>
                        <li className='reguulary-question'>
                            Câu Hỏi Thường Gặp
                        </li>
                    </ul>
                </div>
            </div>
            <div className="Header_control">
                <div className="icon_control">
                    <div className="box_icon">
                        <FontAwesomeIcon className="faMagnifyingGlass" icon={faMagnifyingGlass} />
                    </div>
                    <div className="box_icon">
                        <FontAwesomeIcon className="faUser" icon={faUser} />
                    </div>
                    <div className="box_icon">
                        <FontAwesomeIcon className="faHeart" icon={faHeart} />
                        <span className="heart_love">0</span>
                    </div>
                    <div className="box_icon">
                        <FontAwesomeIcon className="faBagShopping" icon={faBagShopping} />
                        <span className="add_cart">0</span>
                    </div>
                </div>
            </div>
        </div>
       </div>
    );
};
export default Header;