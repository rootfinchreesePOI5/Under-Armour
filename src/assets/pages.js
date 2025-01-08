import img1 from '../assets/Images/img1.jpg'
import img2 from '../assets/Images/img2.jpg'
import img3 from '../assets/Images/img3.jpg'
import img4 from '../assets/Images/img4.jpg'
import img1_1 from '../assets/Images/img1_1.avif'
import img2_1 from '../assets/Images/img2_1.avif'
import img3_1 from '../assets/Images/img3_1.avif'
import img4_1 from '../assets/Images/img4_1.avif'
import golf from '../assets/Images/golf.jpg'
import basketball from '../assets/Images/basketball.jpg'
import marathon from '../assets/Images/marathon.jpg'
import gym from '../assets/Images/gym.jpg'
import yoga from '../assets/Images/yoga.jpg'
import star from "../assets/Icons/star.svg";


export const pages  = [
    {img: img1 , name: "Men" , path: "/Men#New"},
    {img: img2 , name: "Women" , path: "/Women#New"},
    {img: img3 , name: "Kids" , path: "/Kids#New"},
    {img: img4 , name: "Shoes" , path: "/shoes#New"},
    {img: img1_1 , name: "Men" , path: "/Men#New"},
    {img: img2_1 , name: "Women" , path: "/Women#New"},
    {img: img3_1 , name: "Kids" , path: "/Kids#New"},
    {img: img4_1 , name: "Shoes" , path: "/shoes#New"},
    
]
export const category = [
    {
        name: "New" , 
        path: "", 
    },
    {name: "Men" , path: "/Men"},
    {name: "Women" , path: "/Women"},
    {name: "Kids" , path: "/Kids"},
    {name: "Shoes" , path: "/Shoes"},
    // {name: "Curry" , path: "/Curry"},
    // {name: "Collections" , path: "/Collections"},
]

export const sports = [
    {img: golf , name: "Shop Golf Collection" , path: "/men"},
    {img: basketball , name: "Shop Basketball Collection" , path: "/women"},
    {img: marathon , name: "Shop Marathon Collection" , path: "/kids"},
    {img: gym , name: "Shop Gym Collection" , path: "/shoes"},
    {img: yoga , name: "Shop Yoga Collection" , path: "/shoes"},
]

export const table_data = [
    {
        h: 'Help',
        t1: "007 803 651 0087",
        t2: "Help & FAQ",
        t3: "Affiliates"
    },
    {
        h: 'Customer Service',
        t1: "Contact Us",
        t2: "Size Guide",
        t3: "About Us" 
    },
    {
        h: 'About Under Armour',
        t1: "Closed on Public Holidays",
        t2: "Shipping And Delivery",
        t3: "Carrers"
    },
    {
        h: 'Ua Social',
        t1: "0800-1700(GMT +7)",
        t2: "Returns",
        t3: "Our Tech"
    },
    {
        h: 'Explore More',
        t1: "Order Tracking",
        t2: "Site Map",
        t3: "Explore UA"
    }
]


export const filterButton = [
    {
        type : {
            name: 'New & featured',
            t1: 'Men', 
            t2: 'Women',
            t3: 'Kids',
            t4: 'Shoes'
        }
    },
    {
        type : {
            name: 'Gender',
            t1:'Men' , 
            t2: 'Women',
            t3: 'Kids',
            t4: ''
        }
    },
    {
        type : {
            name: 'Product Category',
            t1: 'Shoes', 
            t2: 'Clothing' ,
            t3: 'Accessories',
            t4: 'Outwear'
        }
    }
]


export const rating = [
    {img : star},
    {img : star},
    {img : star},
    {img : star},
    {img : star},
]