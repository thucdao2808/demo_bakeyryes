import React, { useState } from 'react';
import "../../page/PageQuestion/StyleQuestion.css"
const QuestionNormal = (props) => {
    const [click, setClick] = useState(true)
    const [click_2, setClick_2] = useState(true)
    const [click_3, setClick_3] = useState(true)
    const [click_4, setClick_4] = useState(true)
    const [click_5, setClick_5] = useState(true)
    const [click_6, setClick_6] = useState(true)
    const [click_7, setClick_7] = useState(true)
    const [click_8, setClick_8] = useState(true)
    const [click_9, setClick_9] = useState(true)
    const [click_10, setClick_10] = useState(true)
    const [click_11, setClick_11] = useState(true)
    const handleClickConsult = () => {
        setClick(!click);
    }
    const handleClickConsult_2 = () => {
        setClick_2(!click_2);

    }
    const handleClickConsult_3 = () => {
        setClick_3(!click_3);
    }
    const handleClickConsult_4 = () => {
        setClick_4(!click_4);
    }
    const handleClickConsult_5 = () => {
        setClick_5(!click_5);
    }
    const handleClickConsult_6 = () => {
        setClick_6(!click_6);
    }
    const handleClickConsult_7 = () => {
        setClick_7(!click_7);
    }
    const handleClickConsult_8 = () => {
        setClick_8(!click_8);
    }
    const handleClickConsult_9 = () => {
        setClick_9(!click_9);
    }
    const handleClickConsult_10 = () => {
        setClick_10(!click_10);
    }
    const handleClickConsult_11 = () => {
        setClick_11(!click_11);
    }
    return (
        <div>
            <section className='box_intro'>
                <img className='img_intro' src='http://bizweb.dktcdn.net/100/492/035/themes/919334/assets/breadcrumb.jpg?1704344199488' alt=''></img>
                <div className='box_title_intro'>
                    <div className='title_beard_cumb'>
                        Câu hỏi thường gặp
                    </div>
                    <ul class="breadcrumb">
                        <li class="home">
                            <a className='path_hone' href="/"><span className='page_first'>Trang chủ</span></a>
                            <span class="mr_lr">&nbsp;<svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="chevron-right" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512" class="svg-inline--fa fa-chevron-right fa-w-10"><path fill="currentColor" d="M285.476 272.971L91.132 467.314c-9.373 9.373-24.569 9.373-33.941 0l-22.667-22.667c-9.357-9.357-9.375-24.522-.04-33.901L188.505 256 34.484 101.255c-9.335-9.379-9.317-24.544.04-33.901l22.667-22.667c9.373-9.373 24.569-9.373 33.941 0L285.475 239.03c9.373 9.372 9.373 24.568.001 33.941z" class=""></path></svg>&nbsp;</span>
                        </li>
                        <li className='introtion'>
                            <strong className='item_intro'>
                                <span className='nameIntro'>Câu hỏi thường gặp</span>
                            </strong>
                        </li>
                    </ul>

                </div>
                <div className='overflow_display'></div>
            </section>
            <div div className='contain_box_all_ques_clients'>
              <div className='box_contain_ques'>
                <div className='box_left_all_ques'>
                    <div className='box_all_ques_clients'>
                        <h2 className='title_consult_account'>Hỏi đáp về tài khoản</h2>
                        <div className='line_question'></div>
                        <div>
                            <div className='question_consult'>
                                <div className='box_question_conssult'>
                                    <div className='title_consult' onClick={handleClickConsult}> 1.làm thế nào để tôi trở thành thành viên của Dola ?</div>
                                    <p className={`contents_consult ${click ? 'show' : 'hide'}`}>
                                        Quý khách vui lòng nhấn vào nút “Đăng ký” ở thanh menu trên cùng của màn hình (Đối với Desktop) hoặc tại góc trái màn hình, chọn biểu tượng Menu rồi chọn “Đăng ký” (Đối với Mobile).
                                    </p>
                                </div>
                                <div className='box_question_conssult'>
                                    <div className={`title_consult_5 ${click_5 ? '' : 'clicked'}`} onClick={handleClickConsult_5} >2.Tại sao tôi không thể đăng nhập vào tài khoản của tôi</div>
                                    <p className={`contents_consult_5 ${click_5 ? 'hide' : 'show'}`}>
                                        Quý khách vui lòng kiểm tra kỹ về kiểu gõ hoặc phím Caps Lock/ IN HOA trong quá trình điền thông tin đăng nhập thành viên, trường hợp không thể đăng nhập thành công quý khách vui lòng chọn nút “Quên mật khẩu” ngay dưới ô mật khẩu và nhập email đã đăng ký.
                                    </p>
                                </div>
                                <div className='box_question_conssult'>
                                    <div className={`title_consult_3 ${click_2 ? '' : 'clicked'}`} onClick={handleClickConsult_2}>3.Tôi có thể sử dụng chung tài khoản với người khác được không?</div>
                                    <p className={`contents_consult_3 ${click_2 ? 'hide' : 'show'}`}>
                                        Quý khách nên sử dụng tài khoản cá nhân để đảm bảo độ tin cậy cũng như quyền lợi của bản thân khi mua sắm. Việc sử dụng chung tài khoản có thể dẫn đến những sai sót mà người chịu ảnh hưởng trực tiếp chính là quý khách hàng.
                                    </p>
                                </div>
                                <div className='box_question_conssult'>
                                    <div className={`title_consult_4 ${click_3 ? '' : 'clicked'}`} onClick={handleClickConsult_3}>4.Tại sao tôi nên đăng ký thành viên Dola?</div>
                                    <p className={`contents_consult_4 ${click_3 ? 'hide' : 'show'}`}>
                                        Việc đăng ký tài khoản là cơ hội giúp quý khách trở thành một trong những khách hàng thân thiết của Dola, được tiếp cận nhanh nhất các chương trình khuyến mãi, thông tin ưu đãi khi mua sắm.
                                    </p>
                                </div>
                                <div className='box_question_conssult'>
                                    <div className={`title_consult_5 ${click_4 ? '' : 'clicked'}`} onClick={handleClickConsult_4}> 5.Dola có chương trình ưu đãi nào hấp dẫn dành cho khách hàng thân thiết?</div>
                                    <p className={`contents_consult_5 ${click_4 ? 'hide' : 'show'}`}>
                                        Khi tổng giá trị đơn hàng của quý khách tích lũy đạt đủ điều kiện của từng mức hạng thành viên, quý khách sẽ nhận được ưu đãi giảm giá cho mọi đơn hàng tương, voucher sinh nhật tương ứng của hạng mức thành viên.
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div className=''>
                            <h2 className='title_consult_account'>Hỏi đáp về đặt hàng </h2>
                            <div className='line_question'></div>
                            <div className='question_consult'>
                                <div className='box_question_conssult'>
                                    <div className={`title_consult ${click_6 ? '' : 'clicked'}`} onClick={handleClickConsult_6}> 1. Tôi có thể đặt hàng bằng những hình thức nào? ?</div>
                                    <p className={`contents_consult ${click_6 ? 'show' : 'hide'}`}>
                                        Quý khách có thể mua hàng tại Dola bằng những hình thức sau:
                                        Đặt hàng trực tuyến tại website
                                        Đặt hàng trực tiếp với tư vấn viên qua Hotline 1900 6750
                                        Đặt hàng trực tuyến trên các sàn thương mại điện tử
                                        Mua hàng trực tiếp tại các hệ thống cửa hàng
                                        Dola luôn khuyến khích quý khách tạo tài khoản và đặt hàng online để được hưởng các chính sách ưu đãi thành viên tốt hơn.
                                    </p>
                                </div>
                                <div className='box_question_conssult'>
                                    <div className={`title_consult_7 ${click_7 ? '' : 'clicked'}`} onClick={handleClickConsult_7}>2. Tôi cần hỗ trợ mua hàng, làm cách nào để liên hệ với tư vấn viên?</div>
                                    <p className={`contents_consult_7 ${click_7 ? 'hide' : 'show'}`}>
                                        Để liên hệ với nhân viên tư vấn, quý khách vui lòng liên hệ qua Hotline 1900 6750 trong thời gian từ 9:00 – 18:00,  T2 – T6 hằng tuần.
                                    </p>
                                </div>
                                <div className='box_question_conssult'>
                                    <div className={`title_consult_8 ${click_8 ? '' : 'clicked'}`} onClick={handleClickConsult_8}>3.Dola có giới hạn về số lượng sản phẩm khi đặt hàng không??</div>
                                    <p className={`contents_consult_8 ${click_8 ? 'hide' : 'show'}`}>
                                        Quý khách có thể đặt hàng với số lượng sản phẩm tùy ý. Đối với các sản phẩm có giới hạn về số lượng (trong các dịp flashsale, sale các dịp lễ Tết), hệ thống sẽ cập nhật số lượng được  mua tối đa và chỉ ghi nhận đơn hàng có số lượng đặt mua trong giới hạn.
                                    </p>
                                </div>
                                <div className='box_question_conssult'>
                                    <div className={`title_consult_9 ${click_9 ? '' : 'clicked'}`} onClick={handleClickConsult_9}>4. Tôi muốn xem lại lịch sử đơn hàng đã mua??</div>
                                    <p className={`contents_consult_9 ${click_9 ? 'hide' : 'show'}`}>
                                        Quý khách vào trang tài khoản bằng cách bấm vào nút “Tài khoản” ở thanh menu trên cùng của màn hình (Đối với Desktop) hoặc tại góc trái màn hình, chọn biểu tượng Menu rồi chọn “Tài khoản” (Đối với Mobile). Sau đó chọn “Đơn hàng của bạn” để kiểm tra lại các sản phẩm đã đặt mua. Hoặc quý khách có thể kiểm tra lại những email Dola thông báo trạng thái đơn hàng.
                                    </p>
                                </div>
                                <div className='box_question_conssult'>
                                    <div className={`title_consult_10 ${click_10 ? '' : 'clicked'}`} onClick={handleClickConsult_10}> 5. Tôi cần làm gì để thay đổi hoặc hủy bỏ đơn hàng đã đặt?</div>
                                    <p className={`contents_consult_10 ${click_10 ? 'hide' : 'show'}`}>
                                        Quý khách vui lòng liên hệ tư vấn viên của Dola Hotline 1900 6750 để được hủy hoặc thay đổi sản phẩm trong đơn hàng.
                                        Lưu ý: Đơn hàng chỉ được hủy khi đơn hàng của quý khách chưa chuyển trạng thái cho đơn vị vận chuyển.
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div className=''>
                            <h2 className='title_consult_account'>Hỏi đáp về thanh toán </h2>
                            <div className='line_question'></div>
                            <div className='question_consult'>
                                <div className='box_question_conssult'>
                                    <div className={`title_consult ${click_11 ? '' : 'clicked'}`} onClick={handleClickConsult_11}> Tôi có thể thanh toán đơn hàng bằng những hình thức nào?</div>
                                    <p className={`contents_consult ${click_11 ? 'show' : 'hide'}`}>
                                        Thanh toán tại chỗ (Ship COD)
                                        Chuyển khoản trước: Khách hàng có thể chọn chuyển khoản trước vào tài khoản của Dola:
                                    </p>
                                </div>

                            </div>
                        </div>
                    </div>
                </div>
              </div>
                <div className='contain_repond_guide_clients'>
                    <div className='box_repond_guide_clients'>
                        <h2 className='title_relsove'>Giải đáp thắc mắc</h2>
                        <div className='line_question'></div>
                        <div>
                            <p className='content_reponds_clients'>Nếu bạn có thắc mắc gì, có thể gửi yêu cầu cho chúng tôi,
                                và chúng tôi sẽ liên lạc lại với bạn sớm nhất có thể .</p>
                            <div className='box_inputs_clients'>
                                <input className='input_clients' placeholder='Họ và tên'></input>
                            </div>
                            <div className='box_inputs_clients'>
                                <input className='input_clients' placeholder='email'></input>
                            </div>
                            <div className='box_inputs_clients'>
                                <input className='input_clients' placeholder='Điện thoại'></input>
                            </div>
                            <textarea className='contents_sent' placeholder='Nội dung'></textarea>
                          
                        </div>
                        <div className='sent_infors'>
                            <button className='btn_sent' >Gửi thông tin</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>

    );
};

export default QuestionNormal;