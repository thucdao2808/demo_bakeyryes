import React from 'react';
import "../../components/Footer/StyleFooter.css"
const Footer = () => {
    return (
        <div className='container_footer'>
            <div className="box_footer">
                <div className='row_footer_1'>
                    <img className="img_footer" src="https://bizweb.dktcdn.net/100/492/035/themes/919334/assets/logo-ft.png?1704344199488"></img>
                    <p className="content_row_1">Hãy đến với Dola Bakery và hãy để những món bánh tuyệt vời của chúng tôi làm cho cuộc sống bạn thêm ngọt ngào</p>
                    <div className='check_out'>Hình Thức Thanh Toán </div>
                    <div className='img_module_checkout'>
                        <img className='module_checkOut' src="https://bizweb.dktcdn.net/100/492/035/themes/919334/assets/payment_1.png?1704344199488"></img>
                        <img className='module_checkOut' src="https://bizweb.dktcdn.net/100/492/035/themes/919334/assets/payment_2.png?1704344199488"></img>
                        <img className='module_checkOut' src="https://bizweb.dktcdn.net/100/492/035/themes/919334/assets/payment_3.png?1704344199488"></img>
                    </div>
                </div>
                <div className='row_footer_2'>
                    <div className='list_policy'>
                        <div className='policy'>
                            Chính sách
                        </div>
                        <div className='select_policy'>
                            <span className='item_policy'>Chính sách thành viên</span>
                            <span className='item_policy'>Chính sách thanh toán</span>
                            <span className='item_policy'>Hướng dẫn mua hàng</span>
                            <span className='item_policy'>Quà tặng tri ân</span>
                            <span className='item_policy'>Bảo mật thông tin cá nhân</span>
                        </div>
                    </div>
                </div>
                <div className='row_footer_3'>
                    <div className='infomation_comon'>
                        Thông Tin Chung
                    </div>
                    <div className='select_infomation_comon'>
                        <div>
                            <div className='item_resume'>Địa Chỉ:</div>70 Lữ Gia, Phường 15, Quận 11, TP.HCM
                            <div className='item_resume'>Điện thoại:<span className='number_phone'>19007656</span></div>
                            <div className='item_resume'>E-mail:<span  className='number_phone'>dthuc658@gmail.com</span></div>
                            <div className='item_resume'>Liên kết sàn:</div>
                        </div>
                        <div className='select_item_agreement'>
                            <img className='item_agreement' src='https://bizweb.dktcdn.net/100/492/035/themes/919334/assets/shopee.png?1704344199488' alt=''></img>
                            <img className='item_agreement' src='https://bizweb.dktcdn.net/100/492/035/themes/919334/assets/lazada.png?1704344199488' alt=''></img>
                            <img className='item_agreement' src='https://bizweb.dktcdn.net/100/492/035/themes/919334/assets/tiki.png?1704344199488' alt=''></img>
                            <img className='item_agreement' src='https://bizweb.dktcdn.net/100/492/035/themes/919334/assets/sendo.png?1704344199488' alt=''></img>
                        </div>
                    </div>
                </div>
                <div className='row_footer_4'>
                    <div className='support_information'>Hỗ trợ</div>
                    <div className=''>
                        <div className='pucharses'>MUA ONLINE (08:00 - 21:00 mỗi ngày)</div>
                        <div className='number_contact'>19006750</div>
                        <p className='schedule'>Tất cả các ngày trong tuần (Trừ tết Âm Lịch)</p>
                        <div  className='pucharses' >GÓP Ý & KHIẾU NẠI</div>

                            <div className='number_contact'> 19006765</div>
                           <div className='schedule'> Tất cả các ngày trong tuần (Trừ tết Âm Lịch)</div>               
                    </div>
                    <div className='media_logo'>
                        <div className='internet'>Mạng xã hội</div>
                        <div className='social_media'>
                            <img className='img_social' alt='' src='https://bizweb.dktcdn.net/100/492/035/themes/919334/assets/zalo.png?1704344199488'></img>
                            <img className='img_social' alt='' src='https://bizweb.dktcdn.net/100/492/035/themes/919334/assets/facebook.png?1704344199488'></img>
                            <img className='img_social' alt='' src='https://bizweb.dktcdn.net/100/492/035/themes/919334/assets/youtube.png?1704344199488'></img>
                            <img className='img_social' alt='' src='https://bizweb.dktcdn.net/100/492/035/themes/919334/assets/google.png?1704344199488'></img>
                        </div>
                    </div>
                </div>
            </div>
            <div className='final_footer'>BẢN QUYỀN ĐÀO NGỌC THỨC.CUNG CẤP:THUCDAO05</div>
        </div>
    );
};

export default Footer;