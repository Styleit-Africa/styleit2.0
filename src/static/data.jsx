import imageUrl from '../images/bobby.png'
import logo from '../images/logo.png'
import profile from '../images/profile.png'
import profile_h from '../images/profile_h.png'
import receipt from '../images/receipt-edit.png'
import receipt_h from '../images/receipt-edit_h.png'
import calendar_h from '../images/calendar-edit_h.png'
import calendar from '../images/calendar-edit.png'


const happyClients = [
    {
        name:'Mike.J',
        imageUrl,
        feedback:{
            comment:'Partnering with styleit africa turned out to be my best choice'
        }
    },
    {
        name:'Jane.R',
        imageUrl,
        feedback:{
            comment:'"This is one of the best fashionista platform out there that provides high quality service and security'
        }
    },
    {
        name:'uthman',
        imageUrl,
        feedback:{
            comment:'"Lorem ipsum dolor, sit amet consectetur adipisicing elit. Qui aspernatur pariatur quibusdam cum "'

        }
    },
    {
        name:'Fatai',
        imageUrl,
        feedback:{
            comment:'"Lorem ipsum dolor, sit amet consectetur adipisicing elit. Qui aspernatur pariatur quibusdam cum "'
        }
    },
    {
        name:'cally',
        imageUrl,
        feedback:{
            comment:'"Lorem ipsum dolor, sit amet consectetur adipisicing elit. Qui aspernatur pariatur quibusdam cum "'
        }
    },

]

const countries = [
    { name: "Nigeria", capital: "Abuja" },
    { name: "Ethiopia", capital: "Addis Ababa" },
    { name: "Egypt", capital: "Cairo" },
    { name: "Democratic Republic of the Congo", capital: "Kinshasa" },
    { name: "Tanzania", capital: "Dodoma" },
    { name: "South Africa", capital: "Pretoria" },
    { name: "Kenya", capital: "Nairobi" },
    { name: "Uganda", capital: "Kampala" },
    { name: "Algeria", capital: "Algiers" },
    { name: "Sudan", capital: "Khartoum" },
    { name: "Morocco", capital: "Rabat" },
    { name: "Angola", capital: "Luanda" },
    { name: "Ghana", capital: "Accra" },
    { name: "Mozambique", capital: "Maputo" },
    { name: "Madagascar", capital: "Antananarivo" },
    { name: "Cameroon", capital: "Yaoundé" },
    { name: "Côte d'Ivoire", capital: "Yamoussoukro" },
    { name: "Niger", capital: "Niamey" },
    { name: "Burkina Faso", capital: "Ouagadougou" },
    { name: "Mali", capital: "Bamako" },
    { name: "Zambia", capital: "Lusaka" }
];


const reasons = {
    clientLogin:['Direct contact with Clients','Product showcase on trending','Secure payment mode'],
    fashionLogin:['Direct contact with Creators','Book the service of a fashion designer','Prompt and secure service quality'],
    clientSignUp:['Direct contact with Clients','Product showcase on trending','Secure payment mode'],
    fashionSignUp:['Direct contact with Creators','Book the service of a fashion designer','Prompt and secure service quality'],
}

const dashboardTabs = [
    {
        id:1,
        name:'profile',
        icon:profile,
        activeIcon:profile_h
    },
    {
        id:2,
        name:'post',
        icon:receipt,
        activeIcon:receipt_h
    },
    {
        id:3,
        name:'bookings',
        icon:calendar,
        activeIcon:calendar_h
    },
]


const userProfile = {
    image:'',
    firstName:'Micheal',
    lastName:'Moses',
    mobile:'09066778876',
    email:'michaelmoses@gmail.com',
    description:"i'm a fashion designer with 5 years of experience in designing fashionable clothes i'm a fashion designer with 5 years of experience in designing fashionable clothes i'm a fashion designer with 5 years of experience in designing fashionable clothes i'm a fashion designer with 5 years of experience in designing fashionable clothes i'm a fashion designer with 5 years of experience in designing fashionable clothes",
    lga:'ifako-ijaye',
    address:'181, fola Azeez Cresent, Akuko'
}

const appointments = [
    {
        id:1,
        name:'Ademola Decode',
        bookingDate:'2024-11-10',
        bookingTime:'12:30',
         collectionDate:'2024-11-15',
         collectionTime:'2:00',

    },
    {
        id:2,
        name:'Ademola Decode',
        bookingDate:'2024-11-10',
        bookingTime:'12:30',
         collectionDate:'2024-11-15',
         collectionTime:'2:00',

    },
    {
        id:3,
        name:'Ademola Decode',
        bookingDate:'2024-11-10',
        bookingTime:'12:30',
         collectionDate:'2024-11-15',
         collectionTime:'2:00',

    },
    {
        id:4,
        name:'Ademola Decode',
        bookingDate:'2024-11-10',
        bookingTime:'12:30',
         collectionDate:'2024-11-15',
         collectionTime:'2:00',

    },
    {
        id:5,
        name:'Ademola Decode',
        bookingDate:'2024-11-10',
        bookingTime:'12:30',
         collectionDate:'2024-11-15',
         collectionTime:'2:00',

    },
    {
        id:6,
        name:'Ademola Decode',
        bookingDate:'2024-11-10',
        bookingTime:'12:30',
         collectionDate:'2024-11-15',
         collectionTime:'2:00',

    },
]

export {happyClients,reasons,countries,dashboardTabs,userProfile,appointments}