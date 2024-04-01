import React from 'react';
import "../../page/PageContact/StyleContact.css"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
    faLocationDot,
    faClock,
    faPhoneVolume,
    faEnvelope
} from "@fortawesome/free-solid-svg-icons";
const Contact = () => {
    return (
        <div className='box_contain_contacts'>
            <section className='box_intro'>
                <img className='img_intro' src='http://bizweb.dktcdn.net/100/492/035/themes/919334/assets/breadcrumb.jpg?1704344199488' alt=''></img>
                <div className='box_title_intro'>
                    <div className='title_beard_cumb'>
                        Giới Thiệu
                    </div>
                    <ul class="breadcrumb">
                        <li class="home">
                            <a className='path_hone' href="/"><span className='page_first'>Trang chủ</span></a>
                            <span class="mr_lr">&nbsp;<svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="chevron-right" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512" class="svg-inline--fa fa-chevron-right fa-w-10"><path fill="currentColor" d="M285.476 272.971L91.132 467.314c-9.373 9.373-24.569 9.373-33.941 0l-22.667-22.667c-9.357-9.357-9.375-24.522-.04-33.901L188.505 256 34.484 101.255c-9.335-9.379-9.317-24.544.04-33.901l22.667-22.667c9.373-9.373 24.569-9.373 33.941 0L285.475 239.03c9.373 9.372 9.373 24.568.001 33.941z" class=""></path></svg>&nbsp;</span>
                        </li>
                        <li className='introtion'>
                            <strong className='item_intro'>
                                <span className='nameIntro'>Giới thiệu</span>
                            </strong>
                        </li>
                    </ul>

                </div>
                <div className='overflow_display'></div>
            </section>
            <div className='contain_contact'>
                <div className='box_support_and_map'>
                    <div className='box_left'>
                        <div className='contain_detail'>
                            <div className='detail_contact'>
                                <h2 className='name_shops'>Cửa hàng Dola Bakery</h2>
                                <div className='detail_select_option'>
                                    <div className='box_contact_four'>
                                        <div className='address_shop'>
                                            <div className='icon_item'>
                                                <FontAwesomeIcon className='logo_icon_contact' icon={faLocationDot} />
                                            </div>
                                            <div className='infor_address_shop'>
                                                <div className='adress'>Địa chỉ</div>
                                                <div className='infor_address'>70 Lữ Gia, Phường 15</div>
                                                <div className=''> Quận 11, TP.HCM</div>

                                            </div>
                                        </div>
                                        <div className='time_work'>
                                            <div className='icon_item'>
                                                <FontAwesomeIcon className='logo_icon_contact' icon={faClock} />
                                            </div>
                                            <div className='Time_work'>
                                                <div className='working'>Thời gian làm việc</div>
                                                <div className='time_working'>8h - 22h</div>
                                                <div>Từ thứ 2 đến chủ nhật</div>
                                            </div>
                                        </div>
                                        <div className='hotline'>
                                            <div className='icon_item'>
                                                <FontAwesomeIcon className='logo_icon_contact' icon={faPhoneVolume} />
                                            </div>
                                            <div className='Hotline'>
                                                <div className='hot_line'>Hotline</div>
                                                <span className='number_hotline'>1900 6750</span>
                                            </div>
                                        </div>
                                        <div className='send_letter'>
                                            <div className='icon_item'>
                                                <FontAwesomeIcon className='logo_icon_contact' icon={faEnvelope} />
                                            </div>
                                            <div className='letter'>
                                                <div className='e_mail'>Email</div>
                                                <div className='contact_email'>support@sapo.vn</div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className='contain_help_clients'>
                                <div className='head_support_clients'>
                                    <h2 className='name_shops'>Liên hệ chúng tôi</h2>
                                    <p className='contents_help_clients'>Nếu bạn có thắc mắc gì, có thể gửi yêu cầu cho chúng tôi,
                                        và chúng tôi sẽ liên lạc lại với bạn sớm nhất có thể .</p>
                                </div>
                                <div className='box_custormer'>
                                    <div className='box_fullName'>
                                        <input className='fullName' placeholder='Họ và tên'></input>
                                    </div>
                                    <div className='box_email'>
                                        <input className='email' placeholder='Email'></input>
                                    </div>
                                    <div className='box_phone_number'>
                                        <input className='phone_number_client' placeholder='Số điện thoại'></input>
                                    </div>
                                    <div className='box_submit_clinets'>
                                        <textarea className='submit_clients' placeholder='Nội dung'></textarea>
                                    </div>
                                    <div className='sent_infor'>
                                        Gửi thông tin 
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className='contain_map'>
                    <div className='box_map'>
                            <iframe className='box_map' src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d29786.383434276435!2d105.76285165622771!3d21.060759707470638!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3135aacbe4e764dd%3A0x50d5ec2755863f9f!2zNTkgUGjhuqFtIFbEg24gxJDhu5NuZywgWHXDom4gxJDhu4luaCwgQuG6r2MgVOG7qyBMacOqbSwgSMOgIE7hu5lpLCBWaeG7h3QgTmFt!5e0!3m2!1svi!2s!4v1705810027094!5m2!1svi!2s" eferrerpolicy="no-referrer-when-downgrade"></iframe>
                    </div>

                    </div>
                   
                </div>
            </div>
        </div>
    );
};

export default Contact;