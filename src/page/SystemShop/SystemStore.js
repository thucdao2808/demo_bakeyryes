import React from 'react';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
    faStore,
    faUsers,
    faClock,
    faChevronDown
} from "@fortawesome/free-solid-svg-icons";
import "../../page/SystemShop/StyleStore.css";
import data_api from '../../api/DataSys';
const SystemStore = () => {
    return (
        <div>
            <section className='box_intro'>
                <img className='img_intro' src='http://bizweb.dktcdn.net/100/492/035/themes/919334/assets/breadcrumb.jpg?1704344199488' alt=''></img>
                <div className='box_title_intro'>
                    <div className='title_beard_cumb'>
                        Hệ thống cửa hàng
                    </div>
                    <ul class="breadcrumb">
                        <li class="home">
                            <a className='path_hone' href="/"><span className='page_first'>Trang chủ</span></a>
                            <span class="mr_lr">&nbsp;<svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="chevron-right" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512" class="svg-inline--fa fa-chevron-right fa-w-10"><path fill="currentColor" d="M285.476 272.971L91.132 467.314c-9.373 9.373-24.569 9.373-33.941 0l-22.667-22.667c-9.357-9.357-9.375-24.522-.04-33.901L188.505 256 34.484 101.255c-9.335-9.379-9.317-24.544.04-33.901l22.667-22.667c9.373-9.373 24.569-9.373 33.941 0L285.475 239.03c9.373 9.372 9.373 24.568.001 33.941z" class=""></path></svg>&nbsp;</span>
                        </li>
                        <li className='introtion'>
                            <strong className='item_intro'>
                                <span className='nameIntro'>Hệ thống cửa hàng</span>
                            </strong>
                        </li>
                    </ul>

                </div>
                <div className='overflow_display'></div>
            </section>
            <div className='box_wrap_option'>
                <div className='system_option_store_banner'>
                    <div className='container_sys_store'>
                        <div className='faStore'>
                            <FontAwesomeIcon icon={faStore} />
                        </div>
                        <div className='contents_sys'>
                            <div className='text_message'>Hệ thống 8 cửa hàng</div>
                            <div className='text_message'>Trên toàn quốc</div>
                        </div>
                    </div>
                    <div className='container_sys_store'>
                        <div className='faUsers'>
                            <FontAwesomeIcon icon={faUsers} />
                        </div>
                        <div className='contents_sys'>
                            <div className='text_message'>Hơn 100 nhân viên </div>
                            <div className='text_message'>Để phục vụ quý khách</div>
                        </div>
                    </div>
                    <div className='container_sys_store'>
                        <div className='faClock'>
                            <FontAwesomeIcon icon={faClock} />
                        </div>
                        <div className='contents_sys'>
                            <div className='text_message'>Mở cửa 8-22h </div>
                            <div className='text_message'>Cả chủ nhật</div>
                        </div>
                    </div>
                </div>
            </div>
            <div className='box_destination'>
                <div className='box_search_street'>
                    <div className='option_destination'>
                        <div className='box_select_des'>
                            <div className='select_street'>
                                <div>
                                    Chọn tỉnh thành
                                </div>
                                <div className='faChevronDown'>
                                    <FontAwesomeIcon icon={faChevronDown} />
                                </div>
                            </div>
                            <div className='select_district'>
                                <div>
                                    Chọn Quận Huyện
                                </div>
                                <div className='faChevronDown'>
                                    <FontAwesomeIcon icon={faChevronDown} />
                                </div>
                            </div>
                        </div>
                        <div className='list_destination'>
                            {data_api.map((item, index) => (
                                <div className='component_des' key={index}>
                                    <h3 className='title_destination'>{item.title}</h3>
                                    <div className='address_destination'><span className='live_shop'>Địa chỉ:</span><span className='detail_address_des'>{item.address}</span></div>
                                    <div className='Hotline_sever'><span className='live_shop'>Hotline:</span><span className='detail_hotline__sever'>{item.Number}</span></div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
                <div className='contain_research_map'>
                    <iframe className='map_select' src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d479269.07312253845!2d105.92660507195167!3d20.205282014287622!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x31360c2151521bdf%3A0xc8eba2bffe25df62!2zTmFtIMSQ4buLbmgsIFZp4buHdCBOYW0!5e0!3m2!1svi!2s!4v1705845947603!5m2!1svi!2s" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
                </div>
            </div>
        </div>
    );
};

export default SystemStore;  