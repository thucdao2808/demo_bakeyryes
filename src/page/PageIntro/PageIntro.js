import React from 'react';
import "../PageIntro/Intro.css"
const Introtance = (props) => {
    return (
        <div>
            <div>
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
                <div className='box_content_intro'>
                    <div className='boxclass_intro'>
                        <h2 className='line_introtion'>Giới Thiệu</h2>
                        <div className='list_contents_detail'>
                            <p className='contents_detail'>Dola Bakery là một tiệm bánh nằm ẩn mình giữa phố xá nhộn nhịp của thành phố. Với bề dày hơn 10 năm kinh nghiệm trong lĩnh vực làm bánh, Dola Bakery đã nhanh chóng trở thành điểm đến lý tưởng cho những ai đam mê bánh ngọt và muốn thưởng thức những món đặc sản tại địa phương.</p>
                            <p className='contents_detail'>Tiệm bánh nổi tiếng này tự hào sở hữu một đội ngũ nhân viên tận tâm và giàu kinh nghiệm. Họ không chỉ đảm bảo mang đến cho khách hàng những món bánh được làm tinh tế với sự tỉ mỉ và tình yêu, mà còn luôn sẵn lòng lắng nghe và đáp ứng mọi nhu cầu đặc biệt của khách hàng.</p>
                            <p className='contents_detail'>Sự phong phú và đa dạng của thực đơn tại Dola Bakery là một điểm nhấn đáng chú ý. Khách hàng có thể chọn từ một loạt các loại bánh tươi ngon như bánh mousse, bánh su kem, bánh tart, bánh gạo, bánh tiramisu, bánh phô mai, bánh cookie và nhiều loại bánh khác nữa. Mỗi món bánh đều được chế biến từ những nguyên liệu tươi ngon nhất và được trang trí tỉ mỉ, mang lại một trải nghiệm thưởng thức thật tuyệt vời.</p>
                            <p className='contents_detail'>Không chỉ chăm chút vào hương vị, Dola Bakery cũng đặc biệt quan tâm đến việc thể hiện sự sáng tạo và độc đáo trong từng chi tiết trên các món bánh của mình. Bạn có thể tìm thấy những chiếc bánh được trang trí tinh tế với hình dáng, màu sắc và hoa văn độc đáo. Những điểm nhấn này không chỉ làm cho bánh thêm đẹp mắt mà còn tạo nên một phong cách riêng biệt cho Dola Bakery.</p>
                            <p className='contents_detail'>Khách hàng đã trở thành fan hâm mộ của Dola Bakery không chỉ vì những món bánh ngon mà còn vì không gian ấm cúng và thoải mái tại tiệm. Với thiết kế sang trọng nhưng cổ điển, Dola Bakery tạo ra một môi trường lý tưởng để thư giãn và thưởng thức bánh ngọt. Bạn có thể ngồi thoải mái, thưởng thức một ly cà phê nóng và thúc đẩy hương vị bánh ngọt bằng những cuộn giấy nhiệt động mời mọc.</p>
                            <p className='contents_detail'>Dola Bakery không chỉ đáng để tham quan mà còn là điểm dừng chân lí tưởng để tìm mua những món bánh ngon nhất. Cho dù bạn muốn tổ chức một bữa tiệc, mua một chiếc bánh sinh nhật đặc biệt hay đơn giản là muốn thưởng thức một chiếc bánh nhỏ đầy mê hoặc, Dola Bakery sẽ luôn là sự lựa chọn hàng đầu của bạn.</p>
                            <p className='contents_detail'>Hãy đến với Dola Bakery và hãy để những món bánh tuyệt vời của chúng tôi làm cho cuộc sống bạn thêm ngọt ngào</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Introtance;