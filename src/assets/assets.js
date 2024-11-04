import p1 from './Images/p_image_1.jpg';
import p2 from './Images/p_image_2.jpg';
import p3 from './Images/p_image_3.jpg';
import p4 from './Images/p_image_4.jpg';
import p5 from './Images/p_image_5.jpg';
import p6 from './Images/p_image_6.jpg';
import p7 from './Images/p_image_7.jpg';
import p8 from './Images/p_image_8.jpg';
import p9 from './Images/p_image_9.jpg';
import p10 from './Images/p_image_10.jpg';
import p11 from './Images/p_image_11.jpg';
import p12 from './Images/p_image_12.jpg';
// import p13 from './pImg13.jpg';
// import p14 from './pImg14.jpg';
// import p15 from './pImg15.jpg';
// import p16 from './pImg16.jpg';
// import p17 from './pImg17.jpg';
// import p18 from './pImg18.jpg';
// import p19 from './pImg19.jpg';
// import p20 from './pImg20.jpg';
// import p21 from './pImg21.jpg';
// import p22 from './pImg22.jpg';
// import p23 from './pImg23.jpg';
// import p24 from './pImg24.jpg';
// import p25 from './pImg25.jpg';
// import p26 from './pImg26.jpg';
// import p27 from './pImg27.jpg';
// import p28 from './pImg28.jpg';
// import p29 from './pImg29.jpg';
// import p30 from './pImg30.jpg';
// import p31 from './pImg31.jpg';
// import p32 from './pImg32.jpg';
// import p33 from './pImg33.jpg';
// import p34 from './pImg34.jpg';
// import p35 from './pImg35.jpg';
// import p36 from './pImg36.jpg';
// import p37 from './pImg37.jpg';
// import p38 from './pImg38.jpg';
// import p39 from './pImg39.jpg';
// import p40 from './pImg40.jpg';
// import p41 from './pImg41.jpg';
// import p42 from './pImg42.jpg';
// import p43 from './pImg43.jpg';
// import p44 from './pImg44.jpg';
// import p45 from './pImg45.jpg';
// import p46 from './pImg46.jpg';
// import p47 from './pImg47.jpg';
// import p48 from './pImg48.jpg';
// import p49 from './pImg49.jpg';
// import p50 from './pImg50.jpg';
// import p51 from './pImg51.jpg';
// import p52 from './pImg52.jpg';
// import p53 from './pImg53.jpg';
// import p54 from './pImg54.jpg';
// import p55 from './pImg55.jpg';
// import p56 from './pImg56.jpg';
// import p57 from './pImg57.jpg';
// import p58 from './pImg58.jpg';
// import p59 from './pImg59.jpg';
// import p60 from './pImg60.jpg';
// import p61 from './pImg61.jpg';
// import p62 from './pImg62.jpg';
// import p63 from './pImg63.jpg';
// import p64 from './pImg64.jpg';
// import p65 from './pImg65.jpg';
// import p66 from './pImg66.jpg';
// import p67 from './pImg67.jpg';
// import p68 from './pImg68.jpg';
// import p69 from './pImg69.jpg';
// import p70 from './pImg70.jpg';
// import p71 from './pImg71.jpg';
// import p72 from './pImg72.jpg';
// import p73 from './pImg73.jpg';
// import p74 from './pImg74.jpg';
// import p75 from './pImg75.jpg';
// import p76 from './pImg76.jpg';
// import p77 from './pImg77.jpg';
// import p78 from './pImg78.jpg';
// import p79 from './pImg79.jpg';
// import p80 from './pImg80.jpg';


export const products = [
    {
        _id: "undr001",
        name: "Men's UA Tech 2.0 Short Sleeve T-Shirt",
        description: "Lightweight and breathable, the UA Tech fabric dries quickly and wicks sweat away from the skin.",
        price: 25,
        image: [p1],
        category: "Men",
        subCategory: "Topwear",
        sizes: ["S", "M", "L", "XL", "XXL"],
        date: 1716634345448,
        bestseller: true
    },
    {
        _id: "undr002",
        name: "Women's UA RUSH Seamless Sports Bra",
        description: "A comfortable sports bra that provides support and moisture-wicking technology for high-impact workouts.",
        price: 40,
        image: [p2],
        category: "Women",
        subCategory: "Activewear",
        sizes: ["S", "M", "L"],
        date: 1716621345448,
        bestseller: true
    },
    {
        _id: "undr003",
        name: "Men's UA Charged Assert 8 Running Shoes",
        description: "These running shoes provide a lightweight and responsive ride, perfect for any runner.",
        price: 80,
        image: [p3],
        category: "Men",
        subCategory: "Footwear",
        sizes: ["8", "9", "10", "11", "12"],
        date: 1716634345449,
        bestseller: false
    },
    {
        _id: "undr004",
        name: "Women's UA HOVR Infinite Running Shoes",
        description: "With UA HOVR technology, these shoes provide a 'zero gravity' feel to maintain energy return.",
        price: 130,
        image: [p4],
        category: "Women",
        subCategory: "Footwear",
        sizes: ["6", "7", "8", "9", "10"],
        date: 1716634345450,
        bestseller: false
    },
    {
        _id: "undr005",
        name: "Men's UA ColdGear Infrared Fitted Mock",
        description: "This mock is designed to keep you warm during cold weather workouts with its thermal technology.",
        price: 60,
        image: [p5],
        category: "Men",
        subCategory: "Topwear",
        sizes: ["M", "L", "XL"],
        date: 1716634345451,
        bestseller: true
    },
    {
        _id: "undr006",
        name: "Women's UA Fly-By Running Shorts",
        description: "Lightweight and breathable shorts that provide comfort and mobility for your runs.",
        price: 30,
        image: [p6],
        category: "Women",
        subCategory: "Bottomwear",
        sizes: ["S", "M", "L"],
        date: 1716634345452,
        bestseller: true
    },
    {
        _id: "undr007",
        name: "Men's UA Storm Fleece Hoodie",
        description: "This hoodie features water-resistant fabric to keep you dry and comfortable in inclement weather.",
        price: 70,
        image: [p7],
        category: "Men",
        subCategory: "Outerwear",
        sizes: ["M", "L", "XL"],
        date: 1716634345453,
        bestseller: false
    },
    {
        _id: "undr008",
        name: "Women's UA Elemental Zip-Up Jacket",
        description: "A lightweight jacket with a fitted design, perfect for layering during outdoor activities.",
        price: 75,
        image: [p8],
        category: "Women",
        subCategory: "Outerwear",
        sizes: ["S", "M", "L"],
        date: 1716634345454,
        bestseller: false
    },
    {
        _id: "undr009",
        name: "Men's UA Tech Mesh Shorts",
        description: "These shorts feature breathable mesh panels for optimal ventilation during workouts.",
        price: 30,
        image: [p9],
        category: "Men",
        subCategory: "Bottomwear",
        sizes: ["S", "M", "L", "XL"],
        date: 1716634345455,
        bestseller: true
    },
    {
        _id: "undr010",
        name: "Women's UA HeatGear Armour Leggings",
        description: "Compression leggings that provide support and wick away sweat for a comfortable fit.",
        price: 50,
        image: [p10],
        category: "Women",
        subCategory: "Bottomwear",
        sizes: ["S", "M", "L", "XL"],
        date: 1716634345456,
        bestseller: true
    },
    {
        _id: "undr011",
        name: "Men's UA Tactical Stealth Gloves",
        description: "Durable gloves designed for tactical use with excellent grip and protection.",
        price: 35,
        image: [p11],
        category: "Men",
        subCategory: "Accessories",
        sizes: ["M", "L"],
        date: 1716634345457,
        bestseller: false
    },
    {
        _id: "undr012",
        name: "Women's UA Sport Wireless Earbuds",
        description: "Stay connected with these wireless earbuds designed for comfort during workouts.",
        price: 100,
        image: [p12],
        category: "Women",
        subCategory: "Accessories",
        sizes: ["One Size"],
        date: 1716634345458,
        bestseller: false
    },
    // {
    //     _id: "undr013",
    //     name: "Men's UA Run Visor",
    //     description: "Lightweight visor designed to keep the sun out of your eyes during your runs.",
    //     price: 20,
    //     image: [p13],
    //     category: "Men",
    //     subCategory: "Accessories",
    //     sizes: ["One Size"],
    //     date: 1716634345459,
    //     bestseller: false
    // },
    // {
    //     _id: "undr014",
    //     name: "Women's UA Performance Headbands",
    //     description: "Keep your hair in place and sweat away from your face with these stylish headbands.",
    //     price: 15,
    //     image: [p14],
    //     category: "Women",
    //     subCategory: "Accessories",
    //     sizes: ["One Size"],
    //     date: 1716634345460,
    //     bestseller: true
    // },
    // {
    //     _id: "undr015",
    //     name: "Men's UA Streaker Run Long Sleeve T-Shirt",
    //     description: "A lightweight long sleeve shirt designed for runners, featuring sweat-wicking fabric.",
    //     price: 55,
    //     image: [p15],
    //     category: "Men",
    //     subCategory: "Topwear",
    //     sizes: ["S", "M", "L", "XL"],
    //     date: 1716634345461,
    //     bestseller: false
    // },
    // {
    //     _id: "undr016",
    //     name: "Women's UA Fly Fast Training Shorts",
    //     description: "These training shorts are designed for ultimate comfort and mobility during workouts.",
    //     price: 35,
    //     image: [p16],
    //     category: "Women",
    //     subCategory: "Bottomwear",
    //     sizes: ["S", "M", "L"],
    //     date: 1716634345462,
    //     bestseller: true
    // },
    // {
    //     _id: "undr017",
    //     name: "Men's UA Ripple Running Shoes",
    //     description: "Lightweight running shoes that offer comfort and support for everyday runs.",
    //     price: 85,
    //     image: [p17],
    //     category: "Men",
    //     subCategory: "Footwear",
    //     sizes: ["8", "9", "10", "11"],
    //     date: 1716634345463,
    //     bestseller: false
    // },
    // {
    //     _id: "undr018",
    //     name: "Women's UA Charged Bandit 5 Running Shoes",
    //     description: "These running shoes feature responsive cushioning for a smooth ride and a secure fit.",
    //     price: 120,
    //     image: [p18],
    //     category: "Women",
    //     subCategory: "Footwear",
    //     sizes: ["6", "7", "8", "9", "10"],
    //     date: 1716634345464,
    //     bestseller: true
    // },
    // {
    //     _id: "undr019",
    //     name: "Men's UA Impact Training Tank",
    //     description: "A lightweight training tank that provides optimal breathability and freedom of movement.",
    //     price: 30,
    //     image: [p19],
    //     category: "Men",
    //     subCategory: "Topwear",
    //     sizes: ["M", "L", "XL"],
    //     date: 1716634345465,
    //     bestseller: false
    // },
    // {
    //     _id: "undr020",
    //     name: "Women's UA Vanish Woven Running Shorts",
    //     description: "These running shorts are lightweight and designed for maximum airflow during your runs.",
    //     price: 40,
    //     image: [p20],
    //     category: "Women",
    //     subCategory: "Bottomwear",
    //     sizes: ["S", "M", "L"],
    //     date: 1716634345466,
    //     bestseller: true
    // },
    // {
    //     _id: "undr021",
    //     name: "Men's UA Perpetual Full-Zip Hoodie",
    //     description: "A comfortable full-zip hoodie designed for warmth and layering during cool-weather workouts.",
    //     price: 70,
    //     image: [p21],
    //     category: "Men",
    //     subCategory: "Outerwear",
    //     sizes: ["M", "L", "XL"],
    //     date: 1716634345467,
    //     bestseller: false
    // },
    // {
    //     _id: "undr022",
    //     name: "Women's UA Mesh Back Tank",
    //     description: "This tank top features a mesh back for ventilation and a flattering fit.",
    //     price: 35,
    //     image: [p22],
    //     category: "Women",
    //     subCategory: "Topwear",
    //     sizes: ["S", "M", "L"],
    //     date: 1716634345468,
    //     bestseller: true
    // },
    // {
    //     _id: "undr023",
    //     name: "Men's UA Windbreaker Jacket",
    //     description: "This windbreaker jacket provides protection from the elements while remaining breathable.",
    //     price: 85,
    //     image: [p23],
    //     category: "Men",
    //     subCategory: "Outerwear",
    //     sizes: ["M", "L", "XL"],
    //     date: 1716634345469,
    //     bestseller: false
    // },
    // {
    //     _id: "undr024",
    //     name: "Women's UA Lightweight Vest",
    //     description: "This lightweight vest is perfect for layering and provides warmth without bulk.",
    //     price: 60,
    //     image: [p24],
    //     category: "Women",
    //     subCategory: "Outerwear",
    //     sizes: ["S", "M", "L"],
    //     date: 1716634345470,
    //     bestseller: true
    // },
    // {
    //     _id: "undr025",
    //     name: "Men's UA Essential 7-inch Shorts",
    //     description: "These shorts are designed for comfort and performance during any workout.",
    //     price: 40,
    //     image: [p25],
    //     category: "Men",
    //     subCategory: "Bottomwear",
    //     sizes: ["S", "M", "L", "XL"],
    //     date: 1716634345471,
    //     bestseller: false
    // },
    // {
    //     _id: "undr026",
    //     name: "Women's UA Fly By Printed Leggings",
    //     description: "Stylish leggings designed for comfort and support during your workouts.",
    //     price: 50,
    //     image: [p26],
    //     category: "Women",
    //     subCategory: "Bottomwear",
    //     sizes: ["S", "M", "L"],
    //     date: 1716634345472,
    //     bestseller: true
    // },
    // {
    //     _id: "undr027",
    //     name: "Men's UA Speed Pocket 7-inch Running Shorts",
    //     description: "These running shorts feature a secure pocket for storing essentials while you run.",
    //     price: 45,
    //     image: [p27],
    //     category: "Men",
    //     subCategory: "Bottomwear",
    //     sizes: ["S", "M", "L"],
    //     date: 1716634345473,
    //     bestseller: false
    // },
    // {
    //     _id: "undr028",
    //     name: "Women's UA Fleece Pants",
    //     description: "These fleece pants offer warmth and comfort for cold-weather workouts.",
    //     price: 55,
    //     image: [p28],
    //     category: "Women",
    //     subCategory: "Bottomwear",
    //     sizes: ["S", "M", "L"],
    //     date: 1716634345474,
    //     bestseller: true
    // },
    // {
    //     _id: "undr029",
    //     name: "Men's UA ColdGear Infrared Leggings",
    //     description: "These leggings are designed to keep you warm and comfortable in cold weather.",
    //     price: 60,
    //     image: [p29],
    //     category: "Men",
    //     subCategory: "Bottomwear",
    //     sizes: ["M", "L", "XL"],
    //     date: 1716634345475,
    //     bestseller: false
    // },
    // {
    //     _id: "undr030",
    //     name: "Women's UA SpeedForm Slingwrap Running Shoes",
    //     description: "These running shoes offer a snug fit and exceptional comfort for your runs.",
    //     price: 110,
    //     image: [p30],
    //     category: "Women",
    //     subCategory: "Footwear",
    //     sizes: ["6", "7", "8", "9"],
    //     date: 1716634345476,
    //     bestseller: true
    // },
    // {
    //     _id: "undr031",
    //     name: "Men's UA Project Rock 4 Training Shoes",
    //     description: "These training shoes are designed for support and stability during intense workouts.",
    //     price: 120,
    //     image: [p31],
    //     category: "Men",
    //     subCategory: "Footwear",
    //     sizes: ["8", "9", "10", "11", "12"],
    //     date: 1716634345477,
    //     bestseller: true
    // },
    // {
    //     _id: "undr032",
    //     name: "Women's UA Threadborne Seamless T-Shirt",
    //     description: "A seamless t-shirt that provides a comfortable fit and breathability for your workouts.",
    //     price: 45,
    //     image: [p32],
    //     category: "Women",
    //     subCategory: "Topwear",
    //     sizes: ["S", "M", "L"],
    //     date: 1716634345478,
    //     bestseller: false
    // },
    // {
    //     _id: "undr033",
    //     name: "Men's UA 9-inch Running Shorts",
    //     description: "These running shorts provide comfort and support for long-distance runs.",
    //     price: 40,
    //     image: [p33],
    //     category: "Men",
    //     subCategory: "Bottomwear",
    //     sizes: ["S", "M", "L"],
    //     date: 1716634345479,
    //     bestseller: true
    // },
    // {
    //     _id: "undr034",
    //     name: "Women's UA Mid Rise Crop Leggings",
    //     description: "These crop leggings offer a flattering fit and support for your workouts.",
    //     price: 50,
    //     image: [p34],
    //     category: "Women",
    //     subCategory: "Bottomwear",
    //     sizes: ["S", "M", "L"],
    //     date: 1716634345480,
    //     bestseller: true
    // },
    // {
    //     _id: "undr035",
    //     name: "Men's UA Storm Waterproof Jacket",
    //     description: "This jacket provides protection from rain and wind while remaining breathable.",
    //     price: 95,
    //     image: [p35],
    //     category: "Men",
    //     subCategory: "Outerwear",
    //     sizes: ["M", "L", "XL"],
    //     date: 1716634345481,
    //     bestseller: false
    // },
    // {
    //     _id: "undr036",
    //     name: "Women's UA Cozy Fleece Hoodie",
    //     description: "A soft fleece hoodie that offers warmth and comfort for everyday wear.",
    //     price: 70,
    //     image: [p36],
    //     category: "Women",
    //     subCategory: "Outerwear",
    //     sizes: ["S", "M", "L"],
    //     date: 1716634345482,
    //     bestseller: true
    // },
    // {
    //     _id: "undr037",
    //     name: "Men's UA Speed Stride 2-in-1 Shorts",
    //     description: "These shorts feature a built-in brief for comfort and support during your workouts.",
    //     price: 50,
    //     image: [p37],
    //     category: "Men",
    //     subCategory: "Bottomwear",
    //     sizes: ["S", "M", "L"],
    //     date: 1716634345483,
    //     bestseller: false
    // },
    // {
    //     _id: "undr038",
    //     name: "Women's UA Fly Fast Training Tank",
    //     description: "A lightweight training tank designed for breathability and comfort during workouts.",
    //     price: 30,
    //     image: [p38],
    //     category: "Women",
    //     subCategory: "Topwear",
    //     sizes: ["S", "M", "L"],
    //     date: 1716634345484,
    //     bestseller: true
    // },
    // {
    //     _id: "undr039",
    //     name: "Men's UA 5-inch Compression Shorts",
    //     description: "These compression shorts provide support and a locked-in feel during workouts.",
    //     price: 40,
    //     image: [p39],
    //     category: "Men",
    //     subCategory: "Bottomwear",
    //     sizes: ["M", "L", "XL"],
    //     date: 1716634345485,
    //     bestseller: false
    // },
    // {
    //     _id: "undr040",
    //     name: "Women's UA HeatGear Capri Leggings",
    //     description: "These capri leggings are lightweight and designed to keep you cool during your workouts.",
    //     price: 50,
    //     image: [p40],
    //     category: "Women",
    //     subCategory: "Bottomwear",
    //     sizes: ["S", "M", "L"],
    //     date: 1716634345486,
    //     bestseller: true
    // },
    // {
    //     _id: "undr041",
    //     name: "Men's UA Performance Polo",
    //     description: "A performance polo that combines style and functionality for everyday wear.",
    //     price: 50,
    //     image: [p41],
    //     category: "Men",
    //     subCategory: "Topwear",
    //     sizes: ["M", "L", "XL"],
    //     date: 1716634345487,
    //     bestseller: true
    // },
    // {
    //     _id: "undr042",
    //     name: "Women's UA Rush Seamless Sports Bra",
    //     description: "This sports bra offers comfort and support during high-impact activities.",
    //     price: 35,
    //     image: [p42],
    //     category: "Women",
    //     subCategory: "Underwear",
    //     sizes: ["S", "M", "L"],
    //     date: 1716634345488,
    //     bestseller: false
    // },
    // {
    //     _id: "undr043",
    //     name: "Men's UA Tactical Short Sleeve Shirt",
    //     description: "This tactical shirt is designed for durability and functionality in various conditions.",
    //     price: 60,
    //     image: [p43],
    //     category: "Men",
    //     subCategory: "Topwear",
    //     sizes: ["M", "L", "XL"],
    //     date: 1716634345489,
    //     bestseller: true
    // },
    // {
    //     _id: "undr044",
    //     name: "Women's UA Reflective Running Jacket",
    //     description: "This running jacket is designed for visibility and comfort during nighttime runs.",
    //     price: 80,
    //     image: [p44],
    //     category: "Women",
    //     subCategory: "Outerwear",
    //     sizes: ["S", "M", "L"],
    //     date: 1716634345490,
    //     bestseller: false
    // },
    // {
    //     _id: "undr045",
    //     name: "Men's UA Tactical Fleece Jacket",
    //     description: "A warm fleece jacket designed for comfort and mobility in the outdoors.",
    //     price: 75,
    //     image: [p45],
    //     category: "Men",
    //     subCategory: "Outerwear",
    //     sizes: ["M", "L", "XL"],
    //     date: 1716634345491,
    //     bestseller: true
    // },
    // {
    //     _id: "undr046",
    //     name: "Women's UA Charged Cotton Long Sleeve T-shirt",
    //     description: "A long sleeve t-shirt made with Charged Cotton for ultimate comfort.",
    //     price: 50,
    //     image: [p46],
    //     category: "Women",
    //     subCategory: "Topwear",
    //     sizes: ["S", "M", "L"],
    //     date: 1716634345492,
    //     bestseller: false
    // },
    // {
    //     _id: "undr047",
    //     name: "Men's UA Streaker 2.0 Running Singlet",
    //     description: "A lightweight running singlet designed for maximum breathability.",
    //     price: 35,
    //     image: [p47],
    //     category: "Men",
    //     subCategory: "Topwear",
    //     sizes: ["M", "L", "XL"],
    //     date: 1716634345493,
    //     bestseller: true
    // },
    // {
    //     _id: "undr048",
    //     name: "Women's UA High Rise Leggings",
    //     description: "These high-rise leggings offer support and a flattering fit for any workout.",
    //     price: 60,
    //     image: [p48],
    //     category: "Women",
    //     subCategory: "Bottomwear",
    //     sizes: ["S", "M", "L"],
    //     date: 1716634345494,
    //     bestseller: false
    // },
    // {
    //     _id: "undr049",
    //     name: "Men's UA Iso-Chill Polo",
    //     description: "This polo shirt is designed to keep you cool and comfortable on hot days.",
    //     price: 55,
    //     image: [p49],
    //     category: "Men",
    //     subCategory: "Topwear",
    //     sizes: ["M", "L", "XL"],
    //     date: 1716634345495,
    //     bestseller: true
    // },
    // {
    //     _id: "undr050",
    //     name: "Women's UA Performance Mesh Tank",
    //     description: "A breathable tank designed for comfort and style during workouts.",
    //     price: 30,
    //     image: [p50],
    //     category: "Women",
    //     subCategory: "Topwear",
    //     sizes: ["S", "M", "L"],
    //     date: 1716634345496,
    //     bestseller: false
    // },
    // {
    //     _id: "undr051",
    //     name: "Men's UA HeatGear Short Sleeve Compression Shirt",
    //     description: "A compression shirt designed to keep you cool and supported during workouts.",
    //     price: 45,
    //     image: [p51],
    //     category: "Men",
    //     subCategory: "Topwear",
    //     sizes: ["M", "L", "XL"],
    //     date: 1716634345497,
    //     bestseller: true
    // },
    // {
    //     _id: "undr052",
    //     name: "Women's UA Fly By Leggings",
    //     description: "Stylish leggings with a comfortable fit for your daily workouts.",
    //     price: 50,
    //     image: [p52],
    //     category: "Women",
    //     subCategory: "Bottomwear",
    //     sizes: ["S", "M", "L"],
    //     date: 1716634345498,
    //     bestseller: false
    // },
    // {
    //     _id: "undr053",
    //     name: "Men's UA Tech 1/2 Zip Pullover",
    //     description: "A versatile pullover that offers breathability and comfort for all-day wear.",
    //     price: 65,
    //     image: [p53],
    //     category: "Men",
    //     subCategory: "Topwear",
    //     sizes: ["M", "L", "XL"],
    //     date: 1716634345499,
    //     bestseller: true
    // },
    // {
    //     _id: "undr054",
    //     name: "Women's UA Seamless Sports Bra",
    //     description: "A comfortable sports bra that provides support without the bulk.",
    //     price: 40,
    //     image: [p54],
    //     category: "Women",
    //     subCategory: "Underwear",
    //     sizes: ["S", "M", "L"],
    //     date: 1716634345500,
    //     bestseller: false
    // },
    // {
    //     _id: "undr055",
    //     name: "Men's UA Graphic T-shirt",
    //     description: "A stylish graphic t-shirt perfect for casual wear or workouts.",
    //     price: 35,
    //     image: [p55],
    //     category: "Men",
    //     subCategory: "Topwear",
    //     sizes: ["M", "L", "XL"],
    //     date: 1716634345501,
    //     bestseller: true
    // },
    // {
    //     _id: "undr056",
    //     name: "Women's UA Crossback Sports Bra",
    //     description: "This sports bra features a crossback design for added support and style.",
    //     price: 38,
    //     image: [p56],
    //     category: "Women",
    //     subCategory: "Underwear",
    //     sizes: ["S", "M", "L"],
    //     date: 1716634345502,
    //     bestseller: false
    // },
    // {
    //     _id: "undr057",
    //     name: "Men's UA Rival Fleece Joggers",
    //     description: "Comfortable joggers made with soft fleece, perfect for lounging or workouts.",
    //     price: 60,
    //     image: [p57],
    //     category: "Men",
    //     subCategory: "Bottomwear",
    //     sizes: ["M", "L", "XL"],
    //     date: 1716634345503,
    //     bestseller: true
    // },
    // {
    //     _id: "undr058",
    //     name: "Women's UA Lightweight Anorak",
    //     description: "A lightweight anorak that offers protection from wind and rain.",
    //     price: 75,
    //     image: [p58],
    //     category: "Women",
    //     subCategory: "Outerwear",
    //     sizes: ["S", "M", "L"],
    //     date: 1716634345504,
    //     bestseller: false
    // },
    // {
    //     _id: "undr059",
    //     name: "Men's UA Tech Long Sleeve T-shirt",
    //     description: "A long sleeve t-shirt designed for breathability and comfort during workouts.",
    //     price: 50,
    //     image: [p59],
    //     category: "Men",
    //     subCategory: "Topwear",
    //     sizes: ["M", "L", "XL"],
    //     date: 1716634345505,
    //     bestseller: true
    // },
    // {
    //     _id: "undr060",
    //     name: "Women's UA Strappy Sports Bra",
    //     description: "This sports bra features a strappy design for a stylish and supportive fit.",
    //     price: 36,
    //     image: [p60],
    //     category: "Women",
    //     subCategory: "Underwear",
    //     sizes: ["S", "M", "L"],
    //     date: 1716634345506,
    //     bestseller: false
    // },
    // {
    //     _id: "undr061",
    //     name: "Men's UA Storm 1/2 Zip Jacket",
    //     description: "A versatile 1/2 zip jacket that offers weather protection and style.",
    //     price: 85,
    //     image: [p61],
    //     category: "Men",
    //     subCategory: "Outerwear",
    //     sizes: ["M", "L", "XL"],
    //     date: 1716634345507,
    //     bestseller: true
    // },
    // {
    //     _id: "undr062",
    //     name: "Women's UA ColdGear Mock Turtleneck",
    //     description: "This mock turtleneck provides warmth and comfort for cold-weather workouts.",
    //     price: 55,
    //     image: [p62],
    //     category: "Women",
    //     subCategory: "Topwear",
    //     sizes: ["S", "M", "L"],
    //     date: 1716634345508,
    //     bestseller: false
    // },
    // {
    //     _id: "undr063",
    //     name: "Men's UA Speedpocket Running Shorts",
    //     description: "These running shorts feature a secure pocket for essentials while you run.",
    //     price: 40,
    //     image: [p63],
    //     category: "Men",
    //     subCategory: "Bottomwear",
    //     sizes: ["M", "L", "XL"],
    //     date: 1716634345509,
    //     bestseller: true
    // },
    // {
    //     _id: "undr064",
    //     name: "Women's UA Essential Tank Top",
    //     description: "A versatile tank top for everyday wear and workouts.",
    //     price: 25,
    //     image: [p64],
    //     category: "Women",
    //     subCategory: "Topwear",
    //     sizes: ["S", "M", "L"],
    //     date: 1716634345510,
    //     bestseller: false
    // },
    // {
    //     _id: "undr065",
    //     name: "Men's UA Storm Packable Jacket",
    //     description: "A packable jacket designed for convenience and protection against the elements.",
    //     price: 90,
    //     image: [p65],
    //     category: "Men",
    //     subCategory: "Outerwear",
    //     sizes: ["M", "L", "XL"],
    //     date: 1716634345511,
    //     bestseller: true
    // },
    // {
    //     _id: "undr066",
    //     name: "Women's UA Charged Cotton Hoodie",
    //     description: "A comfortable hoodie made with Charged Cotton for warmth and style.",
    //     price: 70,
    //     image: [p66],
    //     category: "Women",
    //     subCategory: "Outerwear",
    //     sizes: ["S", "M", "L"],
    //     date: 1716634345512,
    //     bestseller: false
    // },
    // {
    //     _id: "undr067",
    //     name: "Men's UA Compression Leggings",
    //     description: "Compression leggings designed for support and comfort during workouts.",
    //     price: 45,
    //     image: [p67],
    //     category: "Men",
    //     subCategory: "Bottomwear",
    //     sizes: ["M", "L", "XL"],
    //     date: 1716634345513,
    //     bestseller: true
    // },
    // {
    //     _id: "undr068",
    //     name: "Women's UA Seamless Long Sleeve T-shirt",
    //     description: "A seamless long sleeve t-shirt designed for comfort and style.",
    //     price: 48,
    //     image: [p68],
    //     category: "Women",
    //     subCategory: "Topwear",
    //     sizes: ["S", "M", "L"],
    //     date: 1716634345514,
    //     bestseller: false
    // },
    // {
    //     _id: "undr069",
    //     name: "Men's UA Flyweight Shorts",
    //     description: "Lightweight shorts designed for comfort during workouts.",
    //     price: 30,
    //     image: [p69],
    //     category: "Men",
    //     subCategory: "Bottomwear",
    //     sizes: ["M", "L", "XL"],
    //     date: 1716634345515,
    //     bestseller: true
    // },
    // {
    //     _id: "undr070",
    //     name: "Women's UA Flyweight Crop Top",
    //     description: "A stylish crop top designed for workouts and casual wear.",
    //     price: 32,
    //     image: [p70],
    //     category: "Women",
    //     subCategory: "Topwear",
    //     sizes: ["S", "M", "L"],
    //     date: 1716634345516,
    //     bestseller: false
    // },
    // {
    //     _id: "undr071",
    //     name: "Men's UA Charged Cotton Graphic Hoodie",
    //     description: "A graphic hoodie made with Charged Cotton for a comfortable fit.",
    //     price: 65,
    //     image: [p71],
    //     category: "Men",
    //     subCategory: "Outerwear",
    //     sizes: ["M", "L", "XL"],
    //     date: 1716634345517,
    //     bestseller: true
    // },
    // {
    //     _id: "undr072",
    //     name: "Women's UA ColdGear Leggings",
    //     description: "Leggings designed to keep you warm during cold-weather workouts.",
    //     price: 60,
    //     image: [p72],
    //     category: "Women",
    //     subCategory: "Bottomwear",
    //     sizes: ["S", "M", "L"],
    //     date: 1716634345518,
    //     bestseller: false
    // },
    // {
    //     _id: "undr073",
    //     name: "Men's UA Tech Graphic T-shirt",
    //     description: "A graphic t-shirt designed for comfort during workouts.",
    //     price: 40,
    //     image: [p73],
    //     category: "Men",
    //     subCategory: "Topwear",
    //     sizes: ["M", "L", "XL"],
    //     date: 1716634345519,
    //     bestseller: true
    // },
    // {
    //     _id: "undr074",
    //     name: "Women's UA All Out Stride Tights",
    //     description: "These tights are perfect for running and training, offering support and comfort.",
    //     price: 70,
    //     image: [p74],
    //     category: "Women",
    //     subCategory: "Bottomwear",
    //     sizes: ["S", "M", "L"],
    //     date: 1716634345520,
    //     bestseller: false
    // },
    // {
    //     _id: "undr075",
    //     name: "Men's UA Rival Fleece Hoodie",
    //     description: "A comfortable hoodie made with soft fleece, perfect for cool days.",
    //     price: 70,
    //     image: [p75],
    //     category: "Men",
    //     subCategory: "Outerwear",
    //     sizes: ["M", "L", "XL"],
    //     date: 1716634345521,
    //     bestseller: true
    // },
    //     {
    //     _id: "undr076",
    //     name: "Men's UA Road Running Shoes",
    //     description: "Lightweight running shoes designed for speed and comfort.",
    //     price: 120,
    //     image: [p76],
    //     category: "Men",
    //     subCategory: "Footwear",
    //     sizes: ["8", "9", "10", "11"],
    //     date: 1716634345522,
    //     bestseller: true
    // },
    //     {
    //     _id: "undr077",
    //     name: "Women's UA HOVR Infinite Running Shoes",
    //     description: "These running shoes provide excellent cushioning and energy return.",
    //     price: 130,
    //     image: [p77],
    //     category: "Women",
    //     subCategory: "Footwear",
    //     sizes: ["6", "7", "8", "9"],
    //     date: 1716634345523,
    //     bestseller: false
    // },
    //     {
    //     _id: "undr078",
    //     name: "Men's UA Charged Escape 3 Running Shoes",
    //     description: "Comfortable running shoes designed for performance and support.",
    //     price: 110,
    //     image: [p78],
    //     category: "Men",
    //     subCategory: "Footwear",
    //     sizes: ["8", "9", "10", "11"],
    //     date: 1716634345524,
    //     bestseller: true
    // },
    //     {
    //     _id: "undr079",
    //     name: "Women's UA HOVR Sonic Running Shoes",
    //     description: "These running shoes are lightweight and provide a responsive feel.",
    //     price: 120,
    //     image: [p79],
    //     category: "Women",
    //     subCategory: "Footwear",
    //     sizes: ["6", "7", "8", "9"],
    //     date: 1716634345525,
    //     bestseller: false
    // },
    //     {
    //     _id: "undr080",
    //     name: "Men's UA Speedform Apollo Running Shoes",
    //     description: "Lightweight and breathable running shoes designed for speed.",
    //     price: 100,
    //     image: [p80],
    //     category: "Men",
    //     subCategory: "Footwear",
    //     sizes: ["8", "9", "10", "11"],
    //     date: 1716634345526,
    //     bestseller: true
    // },
] 