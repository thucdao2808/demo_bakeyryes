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
   
        name: "Bánh Cuôn Trà Xanh 110G",
    },
    {
        id: "10",
        img_cake:
            "https://th.bing.com/th/id/OIF.QyJs47z1kNPfKZnRgXZLGQ?w=162&h=184&c=7&r=0&o=5&pid=1.7",
        price_currents: "157.000 đ",
        discount_percentage: "Sold out",
        name: "Bánh Kem tiệc cưới",
    },
    {
        id: "11",
        img_cake:
            "https://i.pinimg.com/originals/b0/b7/c8/b0b7c83a0fc3bc2c8985439569cab943.png",
        price_currents: "140.000 đ",
        discount_percentage: "Sold out",
        name: "Bánh Kem cắt lát",
    },
    {
        id: "12",
        img_cake:
            "https://th.bing.com/th/id/OIP.jZWqat4xFbruga7GZEL9ZAHaHa?w=207&h=207&c=7&r=0&o=5&pid=1.7",
        price_currents: "72.000 đ",
        discount_percentage: "Sold out",
        name: "Bánh Kem  sinh nhật",
    },
    {
        id: "13",
        img_cake:
            "https://th.bing.com/th/id/OIP.Qz4X1EhyCxplU04vk6Rl3AHaE7?w=290&h=193&c=7&r=0&o=5&pid=1.7",
        price_currents: "180.000 đ",
        discount_percentage: "Sold out",
        name: "Bánh Chocolate",
    },
    {
        id: "14",
        img_cake:
            "https://th.bing.com/th/id/OIP.4G9K29qngZcxMUNxm56oeAHaHP?w=199&h=195&c=7&r=0&o=5&pid=1.7",
        price_currents: "80.000 đ",
        discount_percentage: "Sold out",
        name: "Bánh Mini",
    },
    {
        id: "15",
        img_cake:
            "https://th.bing.com/th/id/OIP.7onNW-fMdXLVp_HBj_xm9gHaFj?w=235&h=180&c=7&r=0&o=5&pid=1.7",
        price_currents: "99.000 đ",
        discount_percentage: "Sold out",
        name: "Bánh mì ngọt nhân Custard",
    },
    {
        id: "16",
        img_cake:
            "https://th.bing.com/th/id/OIP.h-dzeDwCYjYsRTZ9IfuTYAHaD4?w=299&h=180&c=7&r=0&o=5&pid=1.7",
        price_currents: "110.000 đ",
        discount_percentage: "Sold out",
        name: "Bánh mì hoa Cúc",
    },
    {
        id: "17",
        img_cake:
            "https://th.bing.com/th/id/OIP.pBE-JYg-zD3AFYXUpcBdWgHaFj?w=242&h=184&c=7&r=0&o=5&pid=1.7",
        price_currents: "120.000 đ",
        discount_percentage: "Sold out",
        name: "Bánh kem Acusere",
    },
    {
        id: "18",
        img_cake:
            "https://th.bing.com/th/id/OIF.qzmQPKz8caxt7tqfOkr55g?w=250&h=180&c=7&r=0&o=5&pid=1.7",
        price_currents: "380.000 đ",
        discount_percentage: "Sold out",
        name: "Bánh Kem Endless Cusine",
    },
    {
        id: "19",
        img_cake:
            "https://th.bing.com/th/id/OIF.loKKFJBsZjJ9xjYiOfA5nA?w=190&h=190&c=7&r=0&o=5&pid=1.7",
        price_currents: "90.000 đ",
        discount_percentage: "Sold out",
        name: "Bánh Kem Emow Cake",
    },
    {
        id: "20",
        img_cake:
            "https://th.bing.com/th/id/OIP.5VAPuCnwmJnpenkah-9gFAAAAA?rs=1&pid=ImgDetMain",
        price_currents: "180.000 đ",
        discount_percentage: "New",
        name: "Bánh Kem dâu",
    },
];
export default listSellings