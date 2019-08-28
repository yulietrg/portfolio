/*IMAGES*/
import work1 from "../images/work1.png"
import work2 from "../images/work2.png"
import work3 from "../images/work3.png"
import work4 from "../images/work4.png"
import work5 from "../images/work5.png"
import work6 from "../images/work6.png"

const data =[
    {
        id: 0,
        subHeading : 'E-COMMERCE WEBSITE AND AR EXPERIENCE',
        heading : 'PANTONE',
        description : "is an online retailer of prescription glasses and sunglasses.<br>Developement of a Wordpress site with WooCommerce Integration, customazing single-product template to achieve a personalized layout. Currently working on Virtual Try-on using jeeliz and three.js libraries.",
        image : work1,
        link : 'https://www.spotcoloreyewear.com/',
        aligment : 'right',
        page: false,
        btnText: 'Website'
    },
    {
        id: 1,
        subHeading : 'WEBSITE DEVELOPMENT ',
        heading : 'JUST INSURANCE',
        description : 'is a family-owned and operated insurance agency serving diverse communities of the state of Florida.<br>Full WordPress implementation using Advance Custom Fields and Wordpress REST API to develop a directory plugin for franchises locations and owners. Get a quote form algorithm searching by zip code the nearest location to the user requesting a quote.',
        image : work2,
        link : 'https://www.justinsurancebrokers.com/',
        aligment : 'left',
        page: false,
        btnText: 'Website'
    },
    {
        id: 2,
        subHeading : 'WEBSITE DEVELOPMENT',
        heading : 'CIRCA',
        description : 'is an experienced player in the world of higher-ed digital marketing, Circa commands mastery of the full Enrollment Management Lifecycle.<br>Customized Wordpress theme to meet the required needs and provide a responsive development.',
        image : work3,
        link : 'https://circaedu.com/',
        aligment : 'right',
        page: false,
        btnText: 'Website'
    },
    {
        id: 3,
        subHeading : 'MOBILE LANDING PAGE',
        heading : 'AUTONATION',
        description : 'is an automotive retailer, which provides new and pre-owned vehicles and associated services.<br>Responsive mobile landing page development with Bootstrap for a marketing campaign.',
        image : work4,
        link : 'https://www.autonation.com/techxperts',
        aligment : 'left',
        page: false,
        btnText: 'Website'
    },
    {
        id: 4,
        subHeading : 'DESIGN & DEVELOPMENT WEB APP',
        heading : 'OLLEYES',
        description : 'is a medical device company for eye-care industry, focused on developing mobile and home-based diagnostic products.<br>VR algorithims for Visual Field test using FOVE headset and VisuAll UI, UX design and Front-end.',
        image : work5,
        link : '/visuAll/',
        aligment : 'right',
        page: true,
        btnText: 'Learn More'
    }
]

export default data

export const visuAll = {
    subHeading : 'WEB APP',
    heading : 'VisuAll',
    description : 'is a perimeter designed for standardized and mobile assessment of the visual field. VisuALL  automatically analyzes the retinal sensitivity in patients with Glaucoma and other visual disorders. VisuALL enables the examination of multiple patients at a time increasing office productivity.<br> My role,<br>Designed UI, UX of visuAll web app.<br> Developed visuAll web app front-end using  Angular,  Angular Material and Flexbox.<br> Developed Unity 3D app for a visuAll field test using FOVE (VR).',
    image : work6,
    link : '/',
    aligment : 'left',
    page: true,
    btnText: 'back'
}