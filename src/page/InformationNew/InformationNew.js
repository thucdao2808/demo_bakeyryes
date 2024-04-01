import React, { useState } from 'react';
import dataInformation from '../../api/DataInformation';
import "../../page/InformationNew/StyleInformation.css"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
    faPlus,
    faMinus
} from "@fortawesome/free-solid-svg-icons";
const InformationNew = () => {
    const [showList, setshowList] = useState(true);
    const effectClick = () =>{
        const flip =document.getElementById()
    }
    const handleClick = () => {
        setshowList(!showList);
    }
    const list_name_post =[
        { 
            id:'1',
            img:'https://bizweb.dktcdn.net/100/492/035/articles/243062617-6096832187058353-42980.png?v=1692242235353',
            name:'Donut chir tuwf 8k taij dola',
            number:'1',
            date:'17/08/2003'
        },
        { 
            id:'2',
            img:'https://bizweb.dktcdn.net/100/492/035/articles/banner-trang-chu-1rs-64a539e43a5.png?v=1692242153870',
            name:'Đa dạng cách thức ',
            number:'2',
            date:'27/08/2024'
        },
        { 
            id:'3',
            img:'https://bizweb.dktcdn.net/100/492/035/articles/244507007-6116411681767070-43207.png?v=1692242112913',
            name:'bánh Tart thơm ngậy không thể bỏ lỡ',
            number:'3',
            date:'12/08/2018'
        },
        { 
            id:'4',
            img:'https://bizweb.dktcdn.net/100/492/035/articles/252489486-6283379875070249-34680.png?v=1692242014303',
            name:'Bánh đông lạnh tiện lợi ngon miệng',
            number:'4',
            date:'19/07/2019'
        },
        { 
            id:'5',
            img:'https://bizweb.dktcdn.net/100/492/035/articles/banh-ngot-a7e7f12b7e484627ad945b.png?v=1692241907540',
            name:'Bánh ngọt- các loại bánh ngọt được ưa chuộng tại Dola',
            number:'5',
            date:'19/07/2017'
        },
    ]
    return (
        <div>
            <div>
                <section className='box_intro'>
                    <img className='img_intro' src='http://bizweb.dktcdn.net/100/492/035/themes/919334/assets/breadcrumb.jpg?1704344199488' alt=''></img>
                    <div className='box_title_intro'>
                        <div className='title_beard_cumb'>
                            Tin Tức
                        </div>
                        <ul class="breadcrumb">
                            <li class="home">
                                <a className='path_hone' href="/"><span className='page_first'>Trang chủ</span></a>
                                <span class="mr_lr">&nbsp;<svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="chevron-right" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512" class="svg-inline--fa fa-chevron-right fa-w-10"><path fill="currentColor" d="M285.476 272.971L91.132 467.314c-9.373 9.373-24.569 9.373-33.941 0l-22.667-22.667c-9.357-9.357-9.375-24.522-.04-33.901L188.505 256 34.484 101.255c-9.335-9.379-9.317-24.544.04-33.901l22.667-22.667c9.373-9.373 24.569-9.373 33.941 0L285.475 239.03c9.373 9.372 9.373 24.568.001 33.941z" class=""></path></svg>&nbsp;</span>
                            </li>
                            <li className='introtion'>
                                <strong className='item_intro'>
                                    <span className='nameIntro'>Tin Tức</span>
                                </strong>
                            </li>
                        </ul>
                    </div>
                    <div className='overflow_display'></div>
                </section>
                <div>
                    <div className="container_information_new">
                        <div className='box_new_contain_post'>
                            <div className="information_new">
                                {
                                    dataInformation.map((item, index) => (
                                        <div className="box_information" key={index}>
                                            <img className='photo_information_new' src={item.img} alt=""></img>
                                            <div className="box_contents_news">
                                                <div className="name_contents">{item.name}</div>
                                                <div className="line_topic"></div>
                                                <p className="contents">{item.contents}</p>
                                            </div>
                                            <div className='the_time'>
                                                {item.date}
                                            </div>
                                        </div>
                                    ))
                                }
                            </div>
                        </div>
                        <div className='box_inforamtion_right'>
                            <div className='option_item_contents_menu'>
                                <h3 className='cate_information'>Danh mục tin tức</h3>
                                <ul className='list_information_new'>
                                    <li className='iem_information_new'>Trang chủ</li>
                                    <li className='iem_information_new'>Giới thiệu</li>
                                    <li className='iem_information_new_prd'>
                                            Sản Phẩm                                     
                                            <FontAwesomeIcon className='icon_show' onClick={handleClick} icon={showList ? faPlus : faMinus} />
                                    </li>
                                        <ul className={`user_list ${showList ? 'hide' : 'show'}`} id='click'>
                                                <li className='item_user_list_bread'>Bánh Kem</li>
                                                <li className='item_user_list_bread'>BÁnh Mì</li>
                                                <li className='item_user_list_bread'>Bánh ngọt</li>
                                                <li className='item_user_list_bread'>Bánh trang miệng</li>
                                                <li className='item_user_list_bread'>Bánh khô</li>
                                        </ul>
                                    <li className='iem_information_new'>Tin tức</li>
                                    <li className='iem_information_new'>Liên hệ</li>
                                    <li className='iem_information_new'>Hệ thống cửa hàng</li>
                                    <li className='iem_information_new'>Câu hỏi thường gặp</li>
                                </ul>
                            </div>
                            <div className='box_list_contents_prd_info'>
                               <h3 className='name_if'>Tin tức nổi bật</h3>
                            {list_name_post.map((item,index)=>(
                                <div key={index} className='caintain_contents'>
                                 <img className='pic_post' src={item.img} alt=''></img>
                                 <span className='count_numbers'>{item.id}</span>
                                 <div className='boxes_post'>
                                    <div className='contents_post'>{item.name}</div>
                                    <div className='date_post'>{item.date}</div>
                                 </div>
                               </div>
                            ))}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default InformationNew;