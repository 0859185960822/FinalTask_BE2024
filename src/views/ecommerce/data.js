import { Img1, Img2, Img3, Img4, Img5, Img6 } from "../../assets/images/product/data"


const productData = [
    {
        image: Img1,
        name: "Half sleeve T-shirt",
        color: "Maroon",
        price: 450.50,
        quantity: 2,
    },
    {
        image: Img2,
        name: "Light blue T-shirt",
        color: "Light blue",
        price: 225.40,
        quantity: 1,
    },
    {
        image: Img3,
        name: "Black Color T-shirt",
        color: "Black",
        price: 152.10,
        quantity: 2,
    },
    {
        image: Img4,
        name: "Hoodie (Blue)",
        color: "Blue",
        price: 145.25,
        quantity: 2,
    },
    {
        image: Img5,
        name: "Half sleeve T-Shirt",
        color: "Light orange",
        price: 138.20,
        quantity: 1,
    },
    {
        image: Img6,
        name: "Green color T-shirt",
        color: "Green",
        price: 152.10,
        quantity: 2,
    },
]

const columns = [
    { id: 1, stars: [1, 2, 3] },
    { id: 2, stars: [4, 5, 6] },
    { id: 3, stars: [7, 8, 9] }
]

const orderData = [
    { id: "cart-subtotal", label: "Grand Total :", value: "$ 1,857" },
    { id: "cart-discount", label: "Discount :", value: "- $ 157" },
    { id: "cart-shipping", label: "Shipping Charge :", value: "$ 25" },
    { id: "cart-tax", label: "Estimated Tax (12.5%) :", value: "$ 19.22" },
    { id: "cart-total", label: "Total :", value: "$ 1,744.22" },
]

const formFields = [
    { id: "input-name", label: "Name", placeholder: "Enter your name" },
    { id: "billing-email-address", label: "Email Address", placeholder: "Enter your email" },
    { id: "billing-phone", label: "Phone", placeholder: "Enter your Phone no." },
]

const paymentOptions = [
    {
        id: "paymentoptionsRadio1",
        name: "paymentoptionsRadio",
        checked: true,
        iconClass: "fab fa-cc-mastercard me-1 font-size-20 align-top",
        label: "Credit / Debit Card"
    },
    {
        id: "paymentoptionsRadio2",
        name: "paymentoptionsRadio",
        checked: false,
        iconClass: "fab fa-cc-paypal me-1 font-size-20 align-top",
        label: "Paypal"
    },
    {
        id: "paymentoptionsRadio3",
        name: "paymentoptionsRadio",
        checked: false,
        iconClass: "far fa-money-bill-alt me-1 font-size-20 align-top",
        label: "Cash on Delivery"
    },
]

export { productData, columns, orderData, formFields, paymentOptions }