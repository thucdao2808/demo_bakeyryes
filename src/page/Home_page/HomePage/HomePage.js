import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faMagnifyingGlass,
  faCartPlus,
  faAngleRight,
  faAngleLeft,
  faTimes,
  faHeart,
  faSquareInstagram
} from "@fortawesome/free-solid-svg-icons";
import Header from "../../../components/Header/Container/Head/Header";
import { useEffect, useState } from "react";
import Footer from "../../../components/Footer/Footer";
import "../HomePage/css/HomePage.css";
import ReactPlayer from "react-player";

const HomePage = () => {
  const listImgPage = [
    {
      id: "1",
      img: "https://bizweb.dktcdn.net/100/492/035/themes/919334/assets/slider_2.jpg?1700207327272",
    },
    {
      id: "2",
      img: "https://bizweb.dktcdn.net/100/492/035/themes/919334/assets/slider_1.jpg?1700207327272",
    },
  ];
  const listBread = [
    {
      id: "1",
      image_cake:
        "https://bizweb.dktcdn.net/thumb/large/100/492/035/products/26-52b2528f0cb542bbbcb7810df8e62.jpg?v=1692095091097",
      price_currents: "36.000 đ",
      price_discount: "40.000đ",
      name: "Bánh Sừng Bò Mini",
      discount_percentage: "-10%",
    },
    {
      id: "2",
      image_cake:
        "https://bizweb.dktcdn.net/thumb/large/100/492/035/products/2-862efa1275f7462c9e2680575e45da.jpg?v=1692094997170",
      price_currents: "15.000 đ",
      price_discount: "20.000 đ",
      name: "Bánh Mì Nướng Caranmen",
      discount_percentage: "-25%",
    },
    {
      id: "3",
      image_cake:
        "https://bizweb.dktcdn.net/thumb/large/100/492/035/products/quy-mut-dau-to-a0e6bb6421aa47bda.jpg?v=1692094744600",
      price_currents: "42.000 đ",
      price_discount: "50.000 đ",
      name: "Bánh Quy Bơ Mứt Dâu",
      discount_percentage: "-16%",
    },
    {
      id: "4",
      image_cake:
        "https://bizweb.dktcdn.net/thumb/large/100/492/035/products/caramel-d7c7ad0a5a654cac8f76208d.jpg?v=1692094359980",
      price_currents: "13.000 đ",
      price_discount: "18.000 đ",
      name: "Caramen",
      discount_percentage: "-28%",
    },
    {
      id: "5",
      image_cake:
        "https://bizweb.dktcdn.net/thumb/large/100/492/035/products/54-472bcbe688e046dea6add446c0fe1.jpg?v=1692094268307",
      price_currents: "31.000 đ",
      price_discount: "39.000 đ",
      name: "Mousse Chanh Leo",
      discount_percentage: "-21%",
    },
    {
      id: "6",
      image_cake:
        "https://bizweb.dktcdn.net/thumb/large/100/492/035/products/27-5c9d407149054a0caab958d17fc7a.jpg?v=1692094146947",
      price_currents: "36.000 đ",
      price_discount: "40.000 đ",
      name: "Bánh Opera 90G",
      discount_percentage: "-10%",
    },
    {
      id: "7",
      image_cake:
        "https://bizweb.dktcdn.net/thumb/large/100/492/035/products/thiet-ke-khong-ten-2-8c5a3322f.jpg?v=1692093730967",
      price_currents: "40.000 đ",
      price_discount: "50.000 đ",
      name: "Bánh Socola Sữa",
      discount_percentage: "-20%",
    },
    {
      id: "8",
      image_cake:
        "https://bizweb.dktcdn.net/thumb/large/100/492/035/products/20-f815cca7a6314f428132e9c6b0472.jpg?v=1692092825777",
      price_currents: "15.000 đ",
      price_discount: "20.000 đ",
      name: "Bánh Donut Socola Dâu",
      discount_percentage: "-14%",
    },
    {
      id: "9",
      image_cake:
        "https://bizweb.dktcdn.net/thumb/large/100/492/035/products/khong-co-tieu-de-728-90-px-1.jpg?v=1692092788207",
      price_currents: "20.000 đ",
      price_discount: "24.000 đ",
      name: "BÁnh Donut Soccola Trắng",
      discount_percentage: "-17%",
    },
    {
      id: "10",
      image_cake:
        "https://bizweb.dktcdn.net/thumb/large/100/492/035/products/hoang-kim-e25fdadbebec4330a975e6-min.png?v=1692091986087",
      price_currents: "320.000 đ",
      price_discount: "400.000 đ",
      name: "Bánh Hoàng Kim",
      discount_percentage: "-20%",
    },
  ];
  const listSellings = [
    {
      id: "1",
      img_cake:
        "https://bizweb.dktcdn.net/thumb/large/100/492/035/products/sua-chua-59d14133b74f49979da0edf.jpg?v=1692094394980",
      price_currents: "13.000 đ",
      discount_percentage: "Hết",
      name: "Sữa chua",
    },
    {
      id: "2",
      img_cake:
        "https://bizweb.dktcdn.net/thumb/large/100/492/035/products/thiet-ke-khong-ten-5-0619631ba.jpg?v=1692094227680",
      price_currents: "58.000 đ",
      discount_percentage: "NEW",
      name: "Bánh Red Velvet 90G",
    },
    {
      id: "3",
      img_cake:
        "https://bizweb.dktcdn.net/thumb/large/100/492/035/products/48-ba0acd283d9944f5bfa21d4026b29.jpg?v=1692093815550",
      price_currents: "30.000 đ",
      discount_percentage: "",
      name: "Bánh su kem nhân socola",
    },
    {
      id: "4",
      img_cake:
        "https://bizweb.dktcdn.net/thumb/large/100/492/035/products/thiet-ke-khong-ten-2-8c5a3322f.jpg?v=1692093730967",
      price_currents: "40.000 đ",
      price_discount: "48.000 đ",
      discount_percentage: "-20%",
      name: "BÁnh Gato Socola Sữa",
    },
    {
      id: "5",
      img_cake:
        "https://bizweb.dktcdn.net/thumb/large/100/492/035/products/thiet-ke-khong-ten-26-bb4406d9.jpg?v=1692093366447",
      price_currents: "36.000 đ",
      discount_percentage: "NEW",
      name: "Bánh Chiffon Trà Xanh",
    },
    {
      id: "6",
      img_cake:
        "https://bizweb.dktcdn.net/thumb/large/100/492/035/products/20-f815cca7a6314f428132e9c6b0472.jpg?v=1692092825777",
      price_currents: "15.000 đ",
      price_discount: "20.000 đ",
      discount_percentage: "-25%",

      name: "Bánh Donut Socola Dâu 45G",
    },
    {
      id: "7",
      img_cake:
        "https://bizweb.dktcdn.net/thumb/large/100/492/035/products/banh-tuoi-soi-ga-sot-teriyaki-1.jpg?v=1692092695367",
      price_currents: "15.000 đ",
      discount_percentage: "",
      name: "Bánh Mì Nhân Sợi Cà Rốt",
    },
    {
      id: "8",
      img_cake:
        "https://bizweb.dktcdn.net/thumb/large/100/492/035/products/thiet-ke-khong-ten-13-ecd4e91f.jpg?v=1692092584140",
      price_currents: "15.000 đ",
      discount_percentage: "Selling",
      name: "Bánh Croissant",
    },
    {
      id: "9",
      img_cake:
        "https://bizweb.dktcdn.net/thumb/large/100/492/035/products/43-38af50a70488465286ce3ff0040db.jpg?v=1692093451703",
      price_currents: "15.000 đ",
      discount_percentage: "",
      name: "Bánh Cuôn Trà Xanh 110G",
    },
    {
      id: "10",
      img_cake:
        "https://bizweb.dktcdn.net/thumb/large/100/492/035/products/endless-love-c7027cf9711b4fde9b6.png?v=1692091413697",
      price_currents: "380.000 đ",
      discount_percentage: "Sold out",
      name: "Bánh Kem Endless Love",
    },
  ];
  const list_all_break = [
    {
      id: "1",
      img: "https://bizweb.dktcdn.net/thumb/large/100/492/035/products/10-d7039cd288ac4c6a844771d4f448b-min.png?v=1692092146820",
      price: "380.000 đ",
      title: "Bánh Kem Macarona Delight",
    },
    {
      id: "2",
      img: "https://bizweb.dktcdn.net/thumb/large/100/492/035/products/hoang-kim-e25fdadbebec4330a975e6-min.png?v=1692091986087",
      price: "320.000 đ",
      title: "Bánh Hoàng Kim ",
    },
    {
      id: "3",
      img: "https://bizweb.dktcdn.net/thumb/large/100/492/035/products/2-removebg-preview-1-ba51f7d4e.png?v=1692091666957",
      price: "150.000 đ",
      title: "Bánh Kem Sweet Heart",
    },
    {
      id: "4",
      img: "https://bizweb.dktcdn.net/thumb/large/100/492/035/products/2-removebg-preview-1-ba51f7d4e.png?v=1692091666957",
      price: "230.000 đ",
      title: "Bánh Kem EndLess Love",
    },
    {
      id: "5",
      img: "https://bizweb.dktcdn.net/thumb/large/100/492/035/products/endless-love-c7027cf9711b4fde9b6.png?v=1692091413697",
      price: "350.000 đ",
      title: "Bánh Kem Dreamy Lady",
    },
    {
      id: "6",
      img: "https://bizweb.dktcdn.net/thumb/large/100/492/035/products/banh-kem-dreamy-lady-7754385160e.jpg?v=1692092024453",
      price: "299.000 đ",
      title: "Bánh Mousse Chocolate",
    },
    {
      id: "7",
      img: "https://bizweb.dktcdn.net/thumb/large/100/492/035/products/thiet-ke-chua-co-ten-a480f34a8c8.jpg?v=1692091849157",
      price: "280.000 đ",
      title: "Bánh Kem Amazzing Chocolate",
    },
    {
      id: "8",
      img: "https://bizweb.dktcdn.net/thumb/large/100/492/035/products/banh-kem-amazing-chocolate-1-c.png?v=1692091472963",
      price: "390.000 đ",
      title: "Bánh Kem Prinness",
    },
  ];
  const cate_img=[
    {
        id:'1',
        picture:'https://bizweb.dktcdn.net/100/492/035/themes/919334/assets/image_ins_1.png?1704344199488'
    },
    {
        id:'2',
        picture:'https://bizweb.dktcdn.net/100/492/035/themes/919334/assets/image_ins_2.png?1704344199488'
    },
    {
        id:'3',
        picture:'https://bizweb.dktcdn.net/100/492/035/themes/919334/assets/image_ins_3.png?1704344199488'
    },
    {
        id:'4',
        picture:'https://bizweb.dktcdn.net/100/492/035/themes/919334/assets/image_ins_4.png?1704344199488'
    },
    {
        id:'5',
        picture:'https://bizweb.dktcdn.net/100/492/035/themes/919334/assets/image_ins_5.png?1704344199488'
    },
]
  const listPostAssessment = [
    {
      id: '1',
      img: 'https://bizweb.dktcdn.net/100/492/035/articles/243062617-6096832187058353-42980.png?v=1692242235353',
      name: 'Donut chỉ từ 8k tại Dola',
      contents: 'Donut truyền thống có hình tròn và 1 lỗ nhỏ ở giữa. Tuy nhiên ngày nay, người ta có thể sáng tạo ra nhiều kiểu bánh Donut rất đặc biệt, nhiều hình thù cực kì đáng yêu. Bánh Donut thường được phủ kem, socola hoặc rất nhiều loại topping màu sắc.',
      date: '17/12/2023'
    },
    {
      id: '2',
      img: 'https://bizweb.dktcdn.net/100/492/035/articles/banner-trang-chu-1rs-64a539e43a5.png?v=1692242153870',
      name: 'Croissant ngàn lớp - đa dạng cách thưởng thức',
      contents: 'Những chiếc bánh sừng bò với hương bơ thơm béo đặc trưng lại còn đưa miệng với độ giòn xốp, dai dai từ "ngàn" lớp bánh. Nổi bật với hình dạng giống chiếc sừng ngộ nghĩnh, vàng duộm hấp dẫn, chiếc bánh đạt được độ ngon cả về thị giác lẫn vị giác.',
      date: '23/9/2023'
    },
    {
      id: '3',
      img: 'https://bizweb.dktcdn.net/100/492/035/articles/244507007-6116411681767070-43207.png?v=1692242112913',
      name: 'Bánh Tart thơm ngậy không thể bỏ lỡ',
      contents: 'Tart trứng là loại bánh đường phố nổi tiếng ở Hong Kong được rất nhiều người yêu thích. Không những thế, trong bảng xếp hạng 50 loại món ăn ngon nhất thế giới do CNN Go bình chọn, Tart trứng còn chễm chệ đứng ở vị trí thứ 16 nữa cơ đấy!',
      date: '02/08/2023'
    },
    {
      id: '4',
      img: 'https://bizweb.dktcdn.net/100/492/035/articles/252489486-6283379875070249-34680.png?v=1692242014303',
      name: 'Bánh đông lạnh tiện lợi - ngon miệng - Dễ chế biến',
      contents: ' Nhắc đến bánh Donut, dân sành thưởng thức hẳn không còn xa lạ gì với món ăn vặt rất phổ biến ở các nước phương Tây này. Dù có nguồn gốc từ nước Mỹ xa xôi song hiện tại, Donut đã và đang trở thành những món bánh ngọt được yêu thích tại Việt Nam.',
      date: '12/06/2022'
    },
    {
      id: '5',
      img: 'https://bizweb.dktcdn.net/100/492/035/articles/banh-ngot-a7e7f12b7e484627ad945b.png?v=1692241907540',
      name: 'Khám phá menu bánh quy khô thơm ngon, dinh dưỡng tại Dola',
      contents: 'Bánh quy khô là món ăn thơm ngon, bổ dưỡng, được nhiều người tiêu dùng ưa thích lựa chọn. Không giống những loại bánh khác, bánh quy đặc biệt với hương vị ngọt ngào, béo ngậy, mang đến cảm giác ngon miệng khó cưỡng.',
      date: '02/11/2021'
    },
    {
      id: '6',
      img: 'https://bizweb.dktcdn.net/100/492/035/articles/banh-quy-kho-1-2fb1b85ae77d4ca49.png?v=1692241736700d',
      name: 'Bánh ngọt - Các loại bánh ngọt được ưa chuộng tại Dola',
      contents: 'Đối với những người có niềm đam mê với đồ ngọt thì chắc chắn bánh ngọt đã trở thành một phần không thể thiếu. Những chiếc bánh ngọt hớp hồn người thưởng thức không chỉ bởi vị ngọt ngào khó cưỡng mà còn bởi những thiết kế độc đáo và lạ mắt. ',
      date: '12/06/2022'
    },
  ]
  const [isFlipped, setIsFlipped] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);
  const maxIndex = listBread.length - 1;
  const IndexMaxBanner = listImgPage.length - 1;
  const [currentIndexSlide, setCurrentIndexSlide] = useState(0);
  const nextDiscount = () => {
    setCurrentIndexSlide((currentIndexSlide + 1) % listBread.length);
    if (currentIndexSlide === maxIndex - 4) {
      setCurrentIndexSlide(0);
    }
  };
  const prevDiscount = () => {
    setCurrentIndexSlide(
      (currentIndexSlide - 1 + listBread.length) % listBread.length
    );
    if (currentIndexSlide === 0) {
      setCurrentIndexSlide(maxIndex - 4);
    }
  };
  const nextSlide = () => {
    setCurrentIndex((currentIndex + 1) % listBread.length);
    if (currentIndex === IndexMaxBanner) {
      setCurrentIndex(0);
    }
  };
  useEffect(() => {
    const autoPlay = setTimeout(() => {
      nextSlide();
    }, 5000);

    return () => {
      clearTimeout(autoPlay);
    };
  }, [currentIndex]);
  useEffect(() => {
    const flipBox = () => {
      setIsFlipped(true);

      setTimeout(() => {
        setIsFlipped(false);
      }, 2000);
    };

    const intervalId = setInterval(flipBox, 5000);
    return () => clearInterval(intervalId);
  }, []);
  const clickRemove = () => {
    const removeNotify = document.getElementById("display_notify");
    if (removeNotify) {
      removeNotify.style.display = "none";
    }
  };
  const clickDelete = () => {
    const deleteNotify = document.getElementById("remove_notify");
    if (deleteNotify) {
      deleteNotify.style.display = "none";
    }
  };
  const [showNotification, setShowNotification] = useState(false);
  const [clickCount, setClickCount] = useState(0);
  const [favoriteProducts, setFavoriteProducts] = useState([]);
  const handleCheckboxClick = (id) => {
    if (favoriteProducts.includes(id)) {
      // Nếu sản phẩm đã tồn tại trong danh sách yêu thích, loại bỏ nó
      setFavoriteProducts((prevFavorites) =>
        prevFavorites.filter((productId) => productId !== id)
      );
    } else {
      // Nếu sản phẩm chưa tồn tại trong danh sách yêu thích, thêm nó
      setFavoriteProducts((prevFavorites) => [...prevFavorites, id]);
    }
    setClickCount((prevCount) => prevCount + 1);

    setShowNotification(true);

    setTimeout(() => {
      setShowNotification(false);
    }, 14000);
  };
  useEffect(() => {
    if (showNotification) {
      const timeoutId = setTimeout(() => {
        setShowNotification(false);
      }, 14000);

      return () => clearTimeout(timeoutId);
    }
  }, [showNotification]);
  let [carousel, setCarousel] = useState(null);
  let isDragStart = false, prevPageX, prevScrollLeft;
  const dragStart = (e) => {
    isDragStart = true;
    prevPageX = e.pageX;
    console.log(e.pageX)
    prevScrollLeft = carousel.scrollLeft;

  }
  const dragging = (e) => {
    if (!isDragStart) return;
    e.preventDefault();
    let positionDiff = e.pageX - prevPageX;
    carousel.scrollLeft = prevScrollLeft - positionDiff;

  }
  const dragStop = () => {
    isDragStart = false;
  }
  return (
    <div className="HOME">
      <div className="container_header">
        <div className="header_important">
          <div className="iclude_img" onChange={nextSlide}>
            {listImgPage
              .slice(currentIndex, currentIndex + 1)
              .map((item, index) => (
                <div key={index} className="box_img">
                  <img className="img_control_banner" src={item.img} alt="" />
                </div>
              ))}
          </div>
          <div className={isFlipped ? "boxs_text flipInY " : "boxs_text"}>
            <div className="thumb-slider-text">
              <div className="slider_text">
                <div className="text_boxes">
                  <h2 className="item_refesh">Bánh tươi mỗi ngày</h2>
                  <p className="discount">Giảm đến 20% khi đặt hàng qua Web</p>
                  <button className="viewing">Xem Ngay</button>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="bodyWrap">
          <div className="swiper-wrap">
            <div className="free_deliver">
              <img
                className="img_service"
                src="https://bizweb.dktcdn.net/100/492/035/themes/919334/assets/chinhsach_1.png?1700207327272"
                alt=""
              ></img>
              <div className="swiper_slider">
                <span className="content_service"> Miễn Phí Vận Chuyển </span>
                <p className="support_clients">
                  Miễn phí tất cả các đơn hàng từ 300 nghìn
                </p>
              </div>
            </div>
            <div className="Exchange_easy">
              <img
                className="img_service"
                src="https://bizweb.dktcdn.net/100/492/035/themes/919334/assets/chinhsach_2.png?1700207327272"
                alt=""
              ></img>
              <div className="swiper_slider">
                <span className="content_service">Đổi Trả Dễ Dàng</span>
                <p className="support_clients">
                  Đổi ngay trong ngày neeis như bánh không đúng yêu cầu{" "}
                </p>
              </div>
            </div>
            <div className="Contact_support">
              <img
                className="img_service"
                src="https://bizweb.dktcdn.net/100/492/035/themes/919334/assets/chinhsach_3.png?1700207327272"
                alt=""
              ></img>
              <div className="swiper_slider">
                <span className="content_service">Hỗ trợ Nhanh Chóng</span>
                <p className="support_clients">
                  Gọi hotline:19006750 để được hỗ trợ{" "}
                </p>
              </div>
            </div>
            <div className="Check_out_diversy">
              <img
                className="img_service"
                src="https://bizweb.dktcdn.net/100/492/035/themes/919334/assets/chinhsach_4.png?1700207327272"
                alt=""
              ></img>
              <div className="swiper_slider">
                <span className="content_service">Thanh Toán Đa Dạng</span>
                <p className="support_clients">
                  Thanh toán khi nhận hàng Napas,Visa,chuyển khoản
                </p>
              </div>
            </div>
          </div>
        </div>
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
        <div className="flasale">
          <div className="box_discount">
            <h2 className="title_offer">Bánh đang giảm giá</h2>
            <img
              className="img__logo_paddy"
              alt=""
              src="https://bizweb.dktcdn.net/100/492/035/themes/919334/assets/title.png?1700207327272"
            />
            <div className="time_program">
              <span className=" content_program">
                Chương trình đã kết thúc ,hẹn gặp lại trong thời gian sớm nhất
              </span>
            </div>
            <div className="wrapper_slider_discount">
              <div className="por">
                <div className="product_infor">
                  {listBread
                    .slice(currentIndexSlide, currentIndexSlide + 5)
                    .map((item, index) => (
                      <div key={index} className="line_product_slide">
                        <div className="box_lazzy_load">
                          <img
                            className="img_loaded"
                            src={item.image_cake}
                            alt=""
                          />
                          <span className="discount_percentage">
                            {item.discount_percentage}
                          </span>
                          <div class="con-like">
                            <input class="like" type="checkbox" title="like" />
                            <div class="checkmark">
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                class="outline"
                                viewBox="0 0 24 24"
                              >
                                <path d="M17.5,1.917a6.4,6.4,0,0,0-5.5,3.3,6.4,6.4,0,0,0-5.5-3.3A6.8,6.8,0,0,0,0,8.967c0,4.547,4.786,9.513,8.8,12.88a4.974,4.974,0,0,0,6.4,0C19.214,18.48,24,13.514,24,8.967A6.8,6.8,0,0,0,17.5,1.917Zm-3.585,18.4a2.973,2.973,0,0,1-3.83,0C4.947,16.006,2,11.87,2,8.967a4.8,4.8,0,0,1,4.5-5.05A4.8,4.8,0,0,1,11,8.967a1,1,0,0,0,2,0,4.8,4.8,0,0,1,4.5-5.05A4.8,4.8,0,0,1,22,8.967C22,11.87,19.053,16.006,13.915,20.313Z"></path>
                              </svg>
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                class="filled"
                                viewBox="0 0 24 24"
                              >
                                <path d="M17.5,1.917a6.4,6.4,0,0,0-5.5,3.3,6.4,6.4,0,0,0-5.5-3.3A6.8,6.8,0,0,0,0,8.967c0,4.547,4.786,9.513,8.8,12.88a4.974,4.974,0,0,0,6.4,0C19.214,18.48,24,13.514,24,8.967A6.8,6.8,0,0,0,17.5,1.917Z"></path>
                              </svg>
                            </div>
                          </div>
                          <div className="search_and_BagCart">
                            <div className="searchPlus">
                              <FontAwesomeIcon
                                className="seemking"
                                icon={faMagnifyingGlass}
                              />
                            </div>
                            <div className="icon__bag">
                              <FontAwesomeIcon
                                className="faCartPlus"
                                icon={faCartPlus}
                              />
                            </div>
                          </div>
                        </div>
                        <div className="contain_information">
                          <h4 className="thisName_slider_select">
                            {item.name}
                          </h4>
                          <div className="product_envalue">
                            <span className="price_currents">
                              {item.price_currents}
                            </span>
                            <span className="price_discount">
                              {item.price_discount}
                            </span>
                          </div>
                        </div>
                      </div>
                    ))}
                </div>
                <div className="icon___slide">
                  <FontAwesomeIcon
                    className="left_angle"
                    icon={faAngleLeft}
                    onClick={prevDiscount}
                  />
                  <FontAwesomeIcon
                    className="right_angle"
                    icon={faAngleRight}
                    onClick={nextDiscount}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
        <div>
          <div className="boxes_selling">
            <h2 className="title_selling">Được Mua Nhiều Nhất</h2>
            <img
              className="img_logo_paddy"
              src="https://bizweb.dktcdn.net/100/492/035/themes/919334/assets/title.png?1700207327272"
              alt=""
            ></img>
            <div className="product_infor_selling">
              {listSellings.map((item, index) => (
                <div key={index} className="line_product_slide">
                  <div className="box_lazzy_load">
                    <img className="img_loaded" src={item.img_cake} alt="" />
                    <span className="discount_percentage">
                      {item.discount_percentage}
                    </span>
                    {listSellings.map((item, index) => (
                      <div key={index} class="con-like_selling">
                        <input
                          className="like"
                          type="checkbox"
                          title="like"
                          onClick={() => handleCheckboxClick(item.id)}
                        />
                        <div class="checkmark">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            class="outline"
                            viewBox="0 0 24 24"
                          >
                            <path d="M17.5,1.917a6.4,6.4,0,0,0-5.5,3.3,6.4,6.4,0,0,0-5.5-3.3A6.8,6.8,0,0,0,0,8.967c0,4.547,4.786,9.513,8.8,12.88a4.974,4.974,0,0,0,6.4,0C19.214,18.48,24,13.514,24,8.967A6.8,6.8,0,0,0,17.5,1.917Zm-3.585,18.4a2.973,2.973,0,0,1-3.83,0C4.947,16.006,2,11.87,2,8.967a4.8,4.8,0,0,1,4.5-5.05A4.8,4.8,0,0,1,11,8.967a1,1,0,0,0,2,0,4.8,4.8,0,0,1,4.5-5.05A4.8,4.8,0,0,1,22,8.967C22,11.87,19.053,16.006,13.915,20.313Z"></path>
                          </svg>
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            class="filled"
                            viewBox="0 0 24 24"
                          >
                            <path d="M17.5,1.917a6.4,6.4,0,0,0-5.5,3.3,6.4,6.4,0,0,0-5.5-3.3A6.8,6.8,0,0,0,0,8.967c0,4.547,4.786,9.513,8.8,12.88a4.974,4.974,0,0,0,6.4,0C19.214,18.48,24,13.514,24,8.967A6.8,6.8,0,0,0,17.5,1.917Z"></path>
                          </svg>
                        </div>
                      </div>
                    ))}
                    <div className="search_and_BagCart_selling">
                      <div className="searchPlus_selling">
                        <FontAwesomeIcon
                          className="seemking"
                          icon={faMagnifyingGlass}
                        />
                      </div>
                      <div className="icon__bag_selling">
                        <FontAwesomeIcon
                          className="faCartPlus"
                          icon={faCartPlus}
                        />
                      </div>
                    </div>
                  </div>
                  <div className="contain_information">
                    <h4 className="thisName_slider_select_selling">
                      {item.name}
                    </h4>
                    <div className="product_envalue_selling">
                      <span className="price_currents_selling">
                        {item.price_currents}
                      </span>
                      <span className="price_discount_selling">
                        {item.price_discount}
                      </span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
      <div className="notice">
        {showNotification && (
          <div className="box_annouce" id="display_notify">
            <div className="add_box">
              <div className="AddSucess">
                <span className="title_annouce">Thông báo </span>
                <FontAwesomeIcon
                  icon={faTimes}
                  className="icon_remove"
                  onClick={clickRemove}
                />
              </div>
              <p className="content_inform">Bạn đã thêm vào mục yêu thích</p>
            </div>
          </div>
        )}

        {showNotification && clickCount % 2 === 0 && (
          <div className="box_inform" id="remove_notify">
            <div className="add_box">
              <div className="AddSucess">
                <span className="title_annouce">Thông báo </span>
                <FontAwesomeIcon
                  icon={faTimes}
                  className="icon_remove"
                  onClick={clickDelete}
                />
              </div>
              <p className="title_remove_inform">
                Bạn đã bỏ sản phẩm ra khỏi danh sách yêu thích{" "}
              </p>
            </div>
          </div>
        )}
      </div>
      <div className="section">
        <div className="wall_banner">
          <div className="gagaer">
            <div className="dim">
              <img
                className="wallpaper"
                alt=""
                src="https://bizweb.dktcdn.net/100/492/035/themes/919334/assets/2banner_1.jpg?1700207327272"
              ></img>
              <div className="line_intro">
                <h3 className="title_poster">Bánh nướng & sữa</h3>
                <span className="taste">Vị béo</span>
              </div>
              <div className="blur">
                <div className="cover_in_cover">
                  <span className="explore">
                    KHÁM PHÁ NGAY
                    <div className="line_style"></div>
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="wall_banner_2">
          <div className="gagaer">
            <div className="dim">
              <img
                className="wallpaper"
                alt=""
                src="https://bizweb.dktcdn.net/100/492/035/themes/919334/assets/2banner_2.jpg?1700207327272"
              ></img>
              <div className="line_intro">
                <h3 className="title_poster">Bánh & Trà</h3>
                <span className="taste">Hương vị tươi</span>
              </div>
              <div className="blur">
                <div className="cover_in_cover">
                  <span className="explore">
                    KHÁM PHÁ NGAY
                    <div className="line_style"></div>
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="box_containter_break">
        <div className="contain_title_name">
          <div className="title_">
            <h2 className="almost_pro">Tất cả bánh</h2>
            <img
              className="picture_logos"
              src="https://bizweb.dktcdn.net/100/492/035/themes/919334/assets/title.png?1700207327272"
              alt=""
            ></img>
          </div>
        </div>
        <div className="tab_product">
          <div className="row-fix">
            <div className="distruebute_break">
              <div className="box_wrrap_break_1">Bánh kem </div>
              <div className="box_wrrap_break">Bánh Mì</div>
              <div className="box_wrrap_break">Bánh Ngọt</div>
              <div className="box_wrrap_break">Bánh Tráng Miệng</div>
              <div className="box_wrrap_break">Bánh Khô</div>
            </div>
            <div className="list_outstanding">
              <div className="munu">
                {list_all_break.map((item, index) => (
                  <div className="public_break" key={index}>
                    <div className="viewes">
                      <img className="painting_n" alt="" src={item.img}></img>
                      <div className="charateritic">
                        <span className="name_break">{item.title}</span>
                        <div className="line_sign"></div>
                        <span className="pucharse">{item.price}</span>
                        <div className=" contain_icon_all">
                          <div className="icon_stylish_1">
                            <FontAwesomeIcon className="look_for" icon={faMagnifyingGlass} />

                          </div>
                          <div className="icon_stylish_2">
                            <FontAwesomeIcon className="added_handbag" icon={faCartPlus} />

                          </div>
                          <div className="icon_stylish_3">
                            <FontAwesomeIcon className="like_import" icon={faHeart} />
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
              <div className="btn_show">
                <button className="show_all">Xem tất cả</button>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className='section__about_break'>
        <div className='about_cake'>
          <div className='form_position'>
            <img className="img_wrapperol" src="https://bizweb.dktcdn.net/100/492/035/themes/919334/assets/about_2.jpg?1700207327272" alt=""></img>
            <div className="line_1"></div>
            <div className="line_2"></div>
            <div className="line_3"></div>
            <div className="line_4"></div>

          </div>
          <div className='contentss'>
            <div className="contents__details">
              <div className="tle_intro_btn">
                <h2 className="title__about_cake">Bánh Mousse Sữa Chua</h2>
                <p className="introduction"> Những chiếc bánh mousse sữa chua béo thơm,mềm ngọt là món tráng miệng được nhiều người yêu thích trong những ngày oi bức</p>
                <button className="btn__choose"> Xem ngay</button>
              </div>
            </div>
          </div>
          <div className='contentss'>
            <div className="contents__details">
              <div className="tle_intro_btn">
                <h2 className="title__about_cake">Bánh Dark Chocolate</h2>
                <p className="introduction">
                  Nếu bạn là tín đồ của chocolate thì không thể bỏ qua loại bánh Dark Chocolate của Brodard. Không phải là vị đắng nhè nhẹ,
                  bánh đem lại cho người thưởng thức vị đắng đặc trưng nguyên thủy của socola mà chỉ cần thử một lần là sẽ mê đắm.
                </p>
                <button className="btn__choose">Xem ngay</button>
              </div>
            </div>
          </div>
          <div className='form_position'>
            <img className="img_wrapperol" alt="" src="https://bizweb.dktcdn.net/100/492/035/themes/919334/assets/about_1.jpg?1700207327272" ></img>
            <div className="line_5"></div>
            <div className="line_6"></div>
            <div className="line_7"></div>
            <div className="line_8"></div>
          </div>
        </div>
      </div>
      <div className="all_boxes_post">
        <div className="Is_title">
          <div className="title_details_and_focus">
            <h2 className="name_post_details"> Tin Tức Mới Nhất</h2>
            <img className='picture_logos' src="https://bizweb.dktcdn.net/100/492/035/themes/919334/assets/title.png?1700207327272" alt=""></img>
          </div>
        </div>
        <div className="details_poster_clients"
          onMouseDown={dragStart}
          onMouseMove={dragging}
          onMouseUp={dragStop}
          onMouseLeave={dragStop}
          ref={(ref) => (carousel = ref)}>
          {
            listPostAssessment.map((item, index) => (
              <div className="boxs_post" key={index}>
                <img className='posts_img' src={item.img} alt=""></img>
                <div className="pass_work">
                  <span className="name_posts">{item.name}</span>
                  <div className="styles_line_color"></div>
                  <p className="comments_posts">{item.contents}</p>
                </div>
              </div>
            ))
          }

        </div>
      </div>
      <div className='review-container'>
        <div className='image-container'>
          <img className="full_img_employees" src="https://th.bing.com/th/id/R.9993b2c8e63c3c0218f16075efe0b822?rik=zwOeVSfc%2b4zQ%2bg&pid=ImgRaw&r=0" alt="" /><div className='review-content-employee'>
            <div className='review-employee'>
              <div className='header-content_'>
                <h2 className="review-title">Khách Hàng Nói Gì</h2>
                <img className="review-icon" alt='' src="https://bizweb.dktcdn.net/100/492/035/themes/919334/assets/title.png?1700207327272" />
              </div>
               <div className="box___respond_staff">
               <div className='employee-details'>
                <div className='employee-info'>
                  {/* <div className='employee-image-details'> */}
                  <div className='employee-image-content'>                  
                      <div className='employee-image-description'>
                        <img className="employee-image" alt="" src="https://bizweb.dktcdn.net/100/492/035/themes/919334/assets/danhgia_1.jpg?1704344199488" />
                        <div className='employee-details-content'>
                          <div className='employee-details-inner'>
                            <h3 className="employee-name">Hoàng Dung</h3>
                            <span className="employee-position">Nhân Viên Văn Phòng</span>
                          </div>
                        </div>
                      </div>
                      <div className='details_descripion'>
                        <p className="employee-description">Tất cả các loại bánh của Dola Bakery đều rất ngon,
                          hương vị đặc biệt lại còn rất đa dạng. Nhân viên ở đây thì rất dễ thương, tư vấn rất nhiệt tình.
                          Cảm ơn Dola Bakery đã mang lại cho tôi trãi nghiệm tuyệt vời.
                          Tôi sẽ luôn ủng hộ.</p>
                      </div>
                    </div>
                    
                
                  {/* </div> */}
                </div>
                <div className='employee-info'>
                  {/* <div className='employee-image-details'> */}
                  <div className='employee-image-content'>                  
                      <div className='employee-image-description'>
                        <img className="employee-image" alt="" src="data:image/jpeg;base64,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" />
                        <div className='employee-details-content'>
                          <div className='employee-details-inner'>
                            <h3 className="employee-name">Ngọc Ánh</h3>
                            <span className="employee-position">Khách hàng thân quen</span>
                          </div>
                        </div>
                      </div>
                      <div className='details_descripion'>
                        <p className="employee-description">Tất cả các loại bánh của Dola Bakery đều rất ngon,
                          hương vị đặc biệt lại còn rất đa dạng. Nhân viên ở đây thì rất dễ thương, tư vấn rất nhiệt tình.
                          Cảm ơn Dola Bakery đã mang lại cho tôi trãi nghiệm tuyệt vời.
                          Tôi sẽ luôn ủng hộ.</p>
                      </div>
                    </div>
                    
                
                  {/* </div> */}
                </div>
               </div>
              </div>
            </div>
          </div>
        </div>

      </div>
      <div className="contain_mail_request">
         <div className="image_and_registation">
          <div className="lazzy_load">
            <img className="img_registaion" alt="" src='https://bizweb.dktcdn.net/100/492/035/themes/919334/assets/image_mailchimp.jpg?1704344199488'></img>
          </div>
          <div className="backgroud_sign">
            <div className="all_regist">
              <h2 className="title_regisstation">Đăng Kí Nhận Tin</h2>
              <p className="contents_sign">Đăng ký ngay và được giảm giá 15% cho lần đầu mua hàng đầu tiên và nhiều chương trình hấp dẫn dành cho bạn!</p>
              <div className="box_int_btn">
                <input className="input_registation" placeholder="Nhập e-mail nhận tin khuyến mãi"></input>
                <button className="btn_regis">Đăng kí</button>
              </div>
            </div>
          </div>
         </div>
      </div>
      <div className="container_module_follow">
        <div className="module_follow">
          <div className="box_follow">
            <h3 className="item_follow">Follow Instagram</h3>
            <span className="click_return_home">@dola_bakery</span>
          </div>
          <div className="box_list_pic_ins">
           {cate_img.map((item,index)=>(
            <div className='list_pic_ins' key={
              index
              }
            >
                 <img className='picture_ins' alt="" src={item.picture}></img>
                  <div className="over_flow">
                     <img className="overflow_pic_ins" alt='' src="https://th.bing.com/th/id/OIP.QH5gKFxERjtTRIGZAdEPVwHaHZ?w=206&h=205&c=7&r=0&o=5&dpr=1.5&pid=1.7"></img>
                 </div>
                 <div className="gallarry">
      
                 </div>
            </div>
           ))}
          </div>
        </div>
      </div>
      <div className="video__box">
        <ReactPlayer
             width= '80%'
             height= '80%'
             playing={true} 
             loop={true}
             volume={0}
             url='https://www.dropbox.com/scl/fi/ge1e9mrmjfnfgqi9u8jpo/flour_-_49549-1080p.mp4?rlkey=svv3pywf7s9z8iervjzf2a8b2&amp;raw=1'
             className='video-intro'
             autoPlays
       >
        </ReactPlayer>
      </div>
    </div>
  );
};

export default HomePage;
