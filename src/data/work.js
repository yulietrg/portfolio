/*IMAGES*/
import work1 from "../images/work1.png"
import work2 from "../images/work2.png"
import work3 from "../images/work3.png"
import work4 from "../images/work4.png"
import work5 from "../images/work5.png"
import work6 from "../images/work7.png"

const data =[
    {
        id: 0,
        subHeading : 'WEBSITE DEVELOPMENT AND AR EXPERIENCE',
        heading : 'SPOT COLOR',
        description : 'WP theme customization, WooCommerce Integration, Responsive development, AR and face recognition Virtual Try-on (work in progress).',
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
        description : 'Full WordPress implementation, ACF Pro advanced admin, custom franchise locator plugin, get a quote form algorithm.',
        image : work2,
        link : 'https://www.justinsurancebrokers.com/',
        aligment : 'left',
        page: false,
        btnText: 'Website'
    },
    {
        id: 2,
        subHeading : 'WEBSITE DEVELOPMENT AND AR EXPERIENCE',
        heading : 'CIRCA',
        description : 'WP theme customization, Responsive development.',
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
        description : 'Responsive development.',
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
        description : 'VR algorithims for Visual Fiel test using FOVE headset, VisuAll UI, UX design and fron-end.',
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
    description : 'is a perimeter designed for standardized and mobile assessment of the visual field. VisuALL  automatically analyzes the retinal sensitivity in patients with Glaucoma and other visual disorders. VisuALL enables the examination of multiple patients at a time increasing office productivity.<br> My role,<br>Designed UI, UX of responsive visuAll web app.<br> Developed visuAll web app front-end using  Angular,  Angular Material and Flexbox.<br> Developed Unity 3D app for a visuAll field test using FOVE (VR).',
    image : work6,
    link : '/',
    aligment : 'left',
    page: true,
    btnText: 'back'
}