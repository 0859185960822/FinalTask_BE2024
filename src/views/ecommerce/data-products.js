import { Img1, Img2, Img3, Img4, Img5, Img6 } from "@/assets/images/product/data"

const clothsData = [
    {
        id: 1,
        product: Img1,
        discount: 10,
        name: 'Half sleeve T-shirt',
        oldprice: 450,
        newprice: 405,
        feature: ['Fit Type: Regular Fit', 'highest quality fabric', 'Suitable for all weather condition', 'Excellent Washing and Light Fastness'],
        specification: [{
            key: 'size',
            value: 'M'
        },
        {
            key: 'color',
            value: 'Red'
        }],
        images: [Img1, Img5, Img3, Img6],
        colorVariant: [{
            key: 'Red',
            value: Img1
        },
        {
            key: 'Black',
            value: Img1
        }]
    },
    {
        id: 2,
        product: Img2,
        name: 'Light blue T-shirt',
        discount: 20,
        oldprice: 225,
        newprice: 175,
        feature: ['Fit Type: Regular Fit', 'highest quality fabric', 'Suitable for all weather condition', 'Excellent Washing and Light Fastness'],
        specification: [{
            key: 'size',
            value: 'M'
        },
        {
            key: 'Color',
            value: 'Light Blue'
        }],
        images: [Img2, Img1, Img5, Img3],
        colorVariant: [{
            key: 'Red',
            value: Img2
        },
        {
            key: 'Yellow',
            value: Img2
        },
        {
            key: 'Green',
            value: Img2
        }]
    },
    {
        id: 3,
        product: Img3,
        discount: 14,
        name: 'Black Color T-shirt',
        oldprice: 177,
        newprice: 152,
        feature: ['Fit Type: Regular Fit', 'highest quality fabric', 'Suitable for all weather condition', 'Excellent Washing and Light Fastness'],
        specification: [{
            key: 'size',
            value: 'M'
        },
        {
            key: 'color',
            value: 'Black'
        }],
        images: [Img3, Img1, Img5, Img2],
        colorVariant: [{
            key: 'Black',
            value: Img3
        },
        {
            key: 'Yellow',
            value: Img3
        }]
    },
    {
        id: 4,
        product: Img4,
        name: 'Hoodie (Blue)',
        discount: 5,
        oldprice: 150,
        newprice: 145,
        feature: ['Fit Type: Regular Fit', 'highest quality fabric', 'Suitable for all weather condition', 'Excellent Washing and Light Fastness'],
        specification: [{
            key: 'size',
            value: 'M'
        },
        {
            key: 'color',
            value: 'Blue'
        }],
        images: [Img4, Img4, Img4, Img4],
        colorVariant: [{
            key: 'Blue',
            value: Img4
        },
        {
            key: 'Pink',
            value: Img4
        }]
    },
    {
        id: 5,
        product: Img5,
        discount: 14,
        name: 'Half sleeve T-Shirt',
        oldprice: 177,
        newprice: 152,
        feature: ['Fit Type: Regular Fit', 'highest quality fabric', 'Suitable for all weather condition', 'Excellent Washing and Light Fastness'],
        specification: [{
            key: 'size',
            value: 'M'
        },
        {
            key: 'color',
            value: 'Pink'
        }],
        images: [Img5, Img1, Img2, Img3],
        colorVariant: [{
            key: 'Pink',
            value: Img5
        },
        {
            key: 'Yellow',
            value: Img5
        }]
    },
    {
        id: 6,
        product: Img6,
        discount: 22,
        name: 'Green color T-shirt',
        oldprice: 240,
        newprice: 225,
        feature: ['Fit Type: Regular Fit', 'highest quality fabric', 'Suitable for all weather condition', 'Excellent Washing and Light Fastness'],
        specification: [{
            key: 'size',
            value: 'M'
        },
        {
            key: 'color',
            value: 'Green'
        }],
        images: [Img6, Img3, Img2, Img1],
        colorVariant: [{
            key: 'Black',
            value: Img6
        },
        {
            key: 'Yellow',
            value: Img6
        }]
    }
];

const checkboxesData = [
    {
        id: "productdiscountCheck1",
        value: false,
        name: "discountCheckbox",
        uncheckedValue: "not_accepted",
        label: "Less than 10%",
        threshold: 10,
    },
    {
        id: "productdiscountCheck2",
        value: false,
        name: "discountCheckbox",
        uncheckedValue: "not_accepted",
        label: "10% or more",
        threshold: 10,
    },
    {
        id: "productdiscountCheck3",
        value: false,
        name: "discountCheckbox",
        uncheckedValue: "not_accepted",
        label: "20% or more",
        threshold: 20,
    },
    {
        id: "productdiscountCheck4",
        value: false,
        name: "discountCheckbox",
        uncheckedValue: "not_accepted",
        label: "30% or more",
        threshold: 30,
    },
    {
        id: "productdiscountCheck5",
        value: false,
        name: "discountCheckbox",
        uncheckedValue: "not_accepted",
        label: "40% or more",
        threshold: 40,
    },
    {
        id: "productdiscountCheck6",
        value: false,
        name: "discountCheckbox",
        uncheckedValue: "not_accepted",
        label: "50% or more",
        threshold: 50,
    },
]

const ratingData = [
    {
        id: "checkbox-1",
        name: "checkbox-1",
        value: "accepted",
        uncheckedValue: "not_accepted",
        rateValue: 4,
    },
    {
        id: "checkbox-2",
        name: "checkbox-2",
        value: "accepted",
        uncheckedValue: "not_accepted",
        rateValue: 3,
    },
    {
        id: "checkbox-3",
        name: "checkbox-3",
        value: "accepted",
        uncheckedValue: "not_accepted",
        rateValue: 2,
    },
    {
        id: "checkbox-4",
        name: "checkbox-4",
        value: "accepted",
        uncheckedValue: "not_accepted",
        rateValue: 1,
    },
]

export { clothsData, checkboxesData, ratingData };