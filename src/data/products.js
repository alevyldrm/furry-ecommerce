import product1 from "../assets/images/product1.jpg";
import product2 from "../assets/images/product2.jpg";
import product3 from "../assets/images/product3.jpg";
import product4 from "../assets/images/product4.jpg";
import product5 from "../assets/images/product5.jpg";
import product6 from "../assets/images/product6.jpg";
import product7 from "../assets/images/product7.jpg";
import product8 from "../assets/images/product8.jpg";
import product9 from "../assets/images/product9.jpg";
import product10 from "../assets/images/product10.jpg";
import product11 from "../assets/images/product11.jpg";
import product12 from "../assets/images/product12.jpg";
import medication1 from "../assets/images/medication1.jpg";
import medication2 from "../assets/images/medication2.jpg";
import clothing1 from "../assets/images/clothing1.jpg";
import clothing2 from "../assets/images/clothing2.jpg";
import clothing3 from "../assets/images/clothing3.jpg";
import foods1 from "../assets/images/foods1.jpg";
import foods2 from "../assets/images/foods2.jpg";
import foods3 from "../assets/images/foods3.jpg";
import foods4 from "../assets/images/foods4.jpg";



const products = [
    {
        id: 1,
        title: "Natural Dog Bed",
        price: "$49.99",
        image: product1,
        category: "Dog",
        text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Beatae, nam pariatur harum commodi exercitationem quo laboriosam. Et omnis molestiae dolorem?"
    },
    {
        id: 2,
        title: "Luxury Dog Bed",
        price: "$59.99",
        image: product2,
        category: "Dog",
        text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Beatae, nam pariatur harum commodi exercitationem quo laboriosam. Et omnis molestiae dolorem?"

    },
    {
        id: 3,
        title: "Dog Rope Toy",
        price: "$29.99",
        image: product3,
        category: "Dog",
        text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Beatae, nam pariatur harum commodi exercitationem quo laboriosam. Et omnis molestiae dolorem?"

    },
    {
        id: 4,
        title: "Small Exotic Bird Cage",
        price: "$44.99",
        image: product4,
        category: "Bird",
        text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Beatae, nam pariatur harum commodi exercitationem quo laboriosam. Et omnis molestiae dolorem?"
    },
    {
        id: 5,
        title: "Retractable Wand Toy",
        price: "$29.99",
        image: product5,
        category: "Cat",
        text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Beatae, nam pariatur harum commodi exercitationem quo laboriosam. Et omnis molestiae dolorem?"
    },
    {
        id: 6,
        title: "Highest Quality Dry Cat Food",
        price: "$64.99",
        image: product6,
        category: "Foods",
        text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Beatae, nam pariatur harum commodi exercitationem quo laboriosam. Et omnis molestiae dolorem?"
    },
    {
        id: 7,
        title: "Dry Cat Food",
        price: "$34.99",
        image: product7,
        category: "Cat",
        text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Beatae, nam pariatur harum commodi exercitationem quo laboriosam. Et omnis molestiae dolorem?"
    },
    {
        id: 8,
        title: "Natural Cat Bed",
        price: "$32.99",
        image: product8,
        category: "Cat",
        text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Beatae, nam pariatur harum commodi exercitationem quo laboriosam. Et omnis molestiae dolorem?"
    },
    {
        id: 9,
        title: "Cat Tree",
        price: "$36.99",
        image: product9,
        category: "Cat",
        text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Beatae, nam pariatur harum commodi exercitationem quo laboriosam. Et omnis molestiae dolorem?"
    },
    {
        id: 10,
        title: "Luxury Cat Tree",
        price: "$54.99",
        image: product10,
        category: "Cat",
        text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Beatae, nam pariatur harum commodi exercitationem quo laboriosam. Et omnis molestiae dolorem?"
    },
    {
        id: 11,
        title: "Bird Cage",
        price: "$32.99",
        image: product11,
        category: "Bird",
        text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Beatae, nam pariatur harum commodi exercitationem quo laboriosam. Et omnis molestiae dolorem?"
    },
    {
        id: 12,
        title: "Dog Toy",
        price: "$27.99",
        image: product12,
        category: "Dog",
        text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Beatae, nam pariatur harum commodi exercitationem quo laboriosam. Et omnis molestiae dolorem?"
    },
    {
        id: 13,
        title: "Natural Dog Vitamin",
        price: "$49.99",
        image: medication1,
        category: "Dog",
        categoryType: "Medication",
        text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Beatae, nam pariatur harum commodi exercitationem quo laboriosam. Et omnis molestiae dolorem?"
    },
    {
        id: 14,
        title: "Natural Bird anti-interference",
        price: "$29.99",
        image: medication2,
        category: "Bird",
        categoryType: "Medication",
        text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Beatae, nam pariatur harum commodi exercitationem quo laboriosam. Et omnis molestiae dolorem?"
    },
    {
        id: 15,
        title: "Clothing",
        price: "$27.99",
        image: clothing1,
        category: "Dog",
        categoryType: "Clothing",
        text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Beatae, nam pariatur harum commodi exercitationem quo laboriosam. Et omnis molestiae dolorem?"
    },
    {
        id: 16,
        title: "Clothing",
        price: "$39.99",
        image: clothing2,
        category: "Dog",
        categoryType: "Clothing",
        text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Beatae, nam pariatur harum commodi exercitationem quo laboriosam. Et omnis molestiae dolorem?"
    },
    {
        id: 17,
        title: "Clothing",
        price: "$59.99",
        image: clothing3,
        category: "Cat",
        categoryType: "Clothing",
        text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Beatae, nam pariatur harum commodi exercitationem quo laboriosam. Et omnis molestiae dolorem?"
    },
    {
        id: 18,
        title: "Wet Food",
        price: "$59.99",
        image: foods1,
        category: "Cat",
        categoryType: "Foods",
        text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Beatae, nam pariatur harum commodi exercitationem quo laboriosam. Et omnis molestiae dolorem?"
    },
    {
        id: 19,
        title: "Dog Biscuit",
        price: "$55.99",
        image: foods2,
        category: "Dog",
        categoryType: "Foods",
        text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Beatae, nam pariatur harum commodi exercitationem quo laboriosam. Et omnis molestiae dolorem?"
    },
    {
        id: 20,
        title: "Foods",
        price: "$49.99",
        image: foods3,
        category: "Dog",
        categoryType: "Foods",
        text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Beatae, nam pariatur harum commodi exercitationem quo laboriosam. Et omnis molestiae dolorem?"
    },
    {
        id: 21,
        title: "Mix",
        price: "$69.99",
        image: foods4,
        category: "Dog",
        categoryType: "Foods",
        text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Beatae, nam pariatur harum commodi exercitationem quo laboriosam. Et omnis molestiae dolorem?"
    },

];

export default products;