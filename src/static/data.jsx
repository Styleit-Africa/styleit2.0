import imageUrl from '../images/bobby.png'
import logo from '../images/logo.png'
import profile from '../images/profile.png'
import profile_h from '../images/profile_h.png'
import receipt from '../images/receipt-edit.png'
import receipt_h from '../images/receipt-edit_h.png'
import calendar_h from '../images/calendar-edit_h.png'
import calendar from '../images/calendar-edit.png'
import userEdit from '../images/user-edit.png'
import history from '../images/note.png'
import subscription from '../images/cards.png'
import createPost from '../images/edit.png'
import postImage from '../images/post_i.png'



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

const dashboardTabs = {
    creatorTabs: [
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
    ],
    clientTabs: [
        {
            id:1,
            name:'profile',
            icon:profile,
            activeIcon:profile_h
        },
        {
            id:2,
            name:'liked post',
            icon:receipt,
            activeIcon:receipt_h
        },
        {
            id:3,
            name:'appointment details',
            icon:calendar,
            activeIcon:calendar_h
        },
    ],
}


const userProfile = {
    image:'',
    firstName:'Micheal',
    lastName:'Moses',
    mobile:'09066778876',
    email:'michaelmoses@gmail.com',
    // description:'lorem'
    description:"i'm a fashion designer with 5 years of experience in designing fashionable clothes i'm a fashion designer with 5 years of experience in designing fashionable clothes i'm a fashion designer with 5 years of experience in designing fashionable clothes i'm a fashion designer with 5 years of experience in designing fashionable clothes i'm a fashion designer with 5 years of experience in designing fashionable clothes",
    lga:'ifako-ijaye',
    address:'181, fola Azeez Cresent, Akuko',
    accountNumber:'00192207800',
    bankName:'Guarantee trust bank'
}

const appointments = [
    {
        id:1,
        name:'Ademola Decode',
        bookingDate:'2024-11-10',
        bookingTime:'12:30',
        collectionDate:'2024-11-15',
        collectionTime:'2:00',
        status:'accepted',
        reason:'Hi, i am sorry i have a tight schedule this month.Kindly book ahead in the coming month if not urgent.I will be available'
    },
    {
        id:2,
        name:'Ademola Decode',
        bookingDate:'2024-11-10',
        bookingTime:'12:30',
        collectionDate:'2024-11-15',
        collectionTime:'2:00',
        status:'declined',
        reason:'Hi, i am sorry i have a tight schedule this month.Kindly book ahead in the coming month if not urgent.I will be available'
    },
    {
        id:3,
        name:'Ademola Decode',
        bookingDate:'2024-11-10',
        bookingTime:'12:30',
        collectionDate:'2024-11-15',
        collectionTime:'2:00',
        status:'accepted',
        reason:'Hi, i am sorry i have a tight schedule this month.Kindly book ahead in the coming month if not urgent.I will be available'
    },
    {
        id:4,
        name:'Ademola Decode',
        bookingDate:'2024-11-10',
        bookingTime:'12:30',
        collectionDate:'2024-11-15',
        collectionTime:'2:00',
        status:'declined',
        reason:'Hi, i am sorry i have a tight schedule this month.Kindly book ahead in the coming month if not urgent.I will be available'
    },
    {
        id:5,
        name:'Ademola Decode',
        bookingDate:'2024-11-10',
        bookingTime:'12:30',
        collectionDate:'2024-11-15',
        collectionTime:'2:00',
        status:'declined',
        reason:'Hi, i am sorry i have a tight schedule this month.Kindly book ahead in the coming month if not urgent.I will be available'
    },
    {
        id:6,
        name:'Ademola Decode',
        bookingDate:'2024-11-10',
        bookingTime:'12:30',
        collectionDate:'2024-11-15',
        collectionTime:'2:00',
        status:'pending',
        reason:'Hi, i am sorry i have a tight schedule this month.Kindly book ahead in the coming month if not urgent.I will be available'
    },
    {
        id:7,
        name:'Yunus Abdullateef',
        bookingDate:'2025-02-31',
        bookingTime:'03:55',
        collectionDate:'2024-11-15',
        collectionTime:'3:00:08',
        status:'pending',
        reason:'Hi, i am sorry i have a tight schedule this month.Kindly book ahead in the coming month if not urgent.I will be available'
    },
    {
        id:8,
        name:'Yunus Abdullateef',
        bookingDate:'2025-02-31',
        bookingTime:'05:02',
        collectionDate:'2024-11-15',
        collectionTime:'3:00:08',
        status:'pending',
        reason:'Hi, i am sorry i have a tight schedule this month.Kindly book ahead in the coming month if not urgent.I will be available'
    },
    {
        id:9,
        name:'Yunus Abdullateef',
        bookingDate:'2025-03-31',
        bookingTime:'18:22',
        collectionDate:'2025-11-15',
        collectionTime:'3:00:08',
        status:'pending',
        reason:'Hi, i am sorry i have a tight schedule this month.Kindly book ahead in the coming month if not urgent.I will be available'
    },
    {
        id:10,
        name:'Yunus Abdullateef',
        bookingDate:'2025-03-31',
        bookingTime:'18:25',
        collectionDate:'2025-11-15',
        collectionTime:'3:00:08',
        status:'pending',
        reason:'Hi, i am sorry i have a tight schedule this month.Kindly book ahead in the coming month if not urgent.I will be available'
    },
    {
        id:11,
        name:'Yunus Abdullateef',
        bookingDate:'2025-03-31',
        bookingTime:'18:26',
        collectionDate:'2025-11-15',
        collectionTime:'3:00:08',
        status:'pending',
        reason:'Hi, i am sorry i have a tight schedule this month.Kindly book ahead in the coming month if not urgent.I will be available'
    },
    {
        id:12,
        name:'Yunus Abdullateef',
        bookingDate:'2025-03-31',
        bookingTime:'18:27',
        collectionDate:'2025-11-15',
        collectionTime:'3:00:08',
        status:'pending',
        reason:'Hi, i am sorry i have a tight schedule this month.Kindly book ahead in the coming month if not urgent.I will be available'
    },
    {
        id:13,
        name:'Yunus Abdullateef',
        bookingDate:'2025-03-31',
        bookingTime:'18:50',
        collectionDate:'2025-11-15',
        collectionTime:'3:00:08',
        status:'paid',
        reason:'Hi, i am sorry i have a tight schedule this month.Kindly book ahead in the coming month if not urgent.I will be available'
    },
]

const sidebarLinks = {
    creator:[
        {
            id:1,
            name:'Create a post',
            icon:createPost,
            route:'/create-post'
        },
        {
            id:2,
            name:'Subscription',
            icon:subscription,
            route:'/subscriptions'
        },
        {
            id:3,
            name:'History',
            icon:history,
            route:'/history'
        },
    ],
    client:[
        {
            id:1,
            name:'Liked posts',
            icon:history,
            route:'/likedPosts'
        },
        {
            id:2,
            name:'Appointment details',
            icon:history,
            route:'/appointmentDetails'
        },
        {
            id:3,
            name:'Settings',
            icon:history,
            route:'/settings'
        },
        {
            id:4,
            name:'Report issues',
            icon:history,
            route:'/reportIssues'
        },
    ],
}

const posts = [
    {
        id:1,
        userId:2,
        description:"i started my journey of stylist in the year 2005 with just a come and hair divider. I was managing at my friend's shop at a very extreme com..",
        comments:[
            {
                userId:3,
                name:'kolade',
                description:"incredible jouney!... i'm so glad you made it",
                replies:[
                    {
                        userId:2,
                        name:'kolade',
                        description:"incredible jouney!... i'm so glad you made it",
                    }
                ]
            },
            {
                userId:4,
                name:'james',
                description:"Wow...that's a rough starting point,glad you made it",
                replies:[
                    {
                        userId:2,
                        name:'kolade',
                        description:"incredible jouney!... i'm so glad you made it",
                    }
                ]
            },
        ]
    },
    {
        id:2,
        userId:2,
        description:"i started my journey of stylist in the year 2005 with just a come and hair divider. I was managing at my friend's shop at a very extreme com..",
        comments:[
            {
                userId:3,
                name:'kolade',
                description:"incredible jouney!... i'm so glad you made it",
                replies:[
                    {
                        userId:2,
                        name:'kolade',
                        description:"Thank you",
                    }
                ]
            },
            {
                userId:4,
                name:'james',
                description:"Wow...that's a rough starting point,glad you made it",
                replies:[
                    {
                        userId:2,
                        name:'kolade',
                        description:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed in tenetur beatae, quasi voluptatibus quisquam quis magni praesentium assumenda molestiae mollitia error repellendus officiis unde cupiditate. Necessitatibus aliquid quos nihil.",
                    }
                ]
            },
            {
                userId:4,
                name:'fatai',
                description:"Wow...that's a rough starting point,glad you made it",
                replies:[
                    {
                        userId:2,
                        name:'kolade',
                        description:"incredible jouney!... i'm so glad you made it",
                    }
                ]
            },
        ]
    },
    {
        id:3,
        userId:2,
        description:"i started my journey of stylist in the year 2005 with just a come and hair divider. I was managing at my friend's shop at a very extreme com..",
        comments:[
            {
                userId:3,
                name:'kolade',
                description:"incredible jouney!... i'm so glad you made it",
                replies:[
                    {
                        userId:2,
                        name:'kolade',
                        description:"Thank you",
                    }
                ]
            },
            {
                userId:4,
                name:'james',
                description:"Wow...that's a rough starting point,glad you made it",
                replies:[
                    {
                        userId:2,
                        name:'kolade',
                        description:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed in tenetur beatae, quasi voluptatibus quisquam quis magni praesentium assumenda molestiae mollitia error repellendus officiis unde cupiditate. Necessitatibus aliquid quos nihil.",
                    }
                ]
            },
            {
                userId:4,
                name:'fatai',
                description:"Wow...that's a rough starting point,glad you made it",
                replies:[
                    {
                        userId:2,
                        name:'kolade',
                        description:"incredible jouney!... i'm so glad you made it",
                    }
                ]
            },
        ]
    }
]

const myPosts = [
    {
        id:1,
        title:'Crosset',
        description:' Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nostrum ducimus molestiae, tenetur tempore eum deleniti?',
        imageUrl:postImage
    },
    {
        id:2,
        title:'Ankara',
        description:' Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nostrum ducimus molestiae, tenetur tempore eum deleniti?',
        imageUrl:postImage
    },
    {
        id:3,
        title:'seven star material',
        description:' Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nostrum ducimus molestiae, tenetur tempore eum deleniti?',
        imageUrl:postImage
    },
    {
        id:4,
        title:'Crosset',
        description:' Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nostrum ducimus molestiae, tenetur tempore eum deleniti?',
        imageUrl:postImage
    },
    {
        id:5,
        title:'Crosset',
        description:' Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nostrum ducimus molestiae, tenetur tempore eum deleniti?',
        imageUrl:postImage
    },
    {
        id:6,
        title:'Crosset',
        description:' Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nostrum ducimus molestiae, tenetur tempore eum deleniti?',
        imageUrl:postImage
    },
    {
        id:7,
        title:'Crosset',
        description:' Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nostrum ducimus molestiae, tenetur tempore eum deleniti?',
        imageUrl:postImage
    },
    {
        id:8,
        title:'Crosset',
        description:' Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nostrum ducimus molestiae, tenetur tempore eum deleniti?',
        imageUrl:postImage
    },
    {
        id:9,
        title:'Crosset',
        description:' Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nostrum ducimus molestiae, tenetur tempore eum deleniti?',
        imageUrl:postImage
    },
    {
        id:10,
        title:'Crosset',
        description:' Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nostrum ducimus molestiae, tenetur tempore eum deleniti?',
        imageUrl:postImage
    },
    {
        id:11,
        title:'Crosset',
        description:' Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nostrum ducimus molestiae, tenetur tempore eum deleniti?',
        imageUrl:postImage
    },
    {
        id:12,
        title:'Crosset',
        description:' Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nostrum ducimus molestiae, tenetur tempore eum deleniti?',
        imageUrl:postImage
    }
]

const subscriptions = [
    {
        id:1,
        period:'monthly',
        discount:'no discount benefits',
        amount:600,
    },
    {
        id:2,
        period:'quarterly',
        discount:'Enjoy 20% discount',
        amount:1550,
    },
    {
        id:3,
        period:'half year ',
        discount:'Enjoy 30% discount',
        amount:2700,
    },
    {
        id:4,
        period:'monthly',
        discount:'Enjoy 30% discount',
        amount:4750,
    }
]


const subscriptionDetails = [
    {
        id:1,
        date:'18-08-2024',
        time:'12:00pm',
        planType:'monthly',
        startDate:'18-08-2024',
        endDate:'18-08-2024',
        paymentStatus:'pending',
        subStatus:'deactive'
    },
    {
        id:2,
        date:'18-08-2024',
        time:'12:00pm',
        planType:'monthly',
        startDate:'18-08-2024',
        endDate:'18-08-2024',
        paymentStatus:'pending',
        subStatus:'deactive'
    },
    {
        id:3,
        date:'18-08-2024',
        time:'12:00pm',
        planType:'monthly',
        startDate:'18-08-2024',
        endDate:'18-08-2024',
        paymentStatus:'paid',
        subStatus:'active'
    },
    {
        id:4,
        date:'18-08-2024',
        time:'12:00pm',
        planType:'half year',
        startDate:'18-08-2024',
        endDate:'18-08-2024',
        paymentStatus:'paid',
        subStatus:'active'
    },
    {
        id:5,
        date:'18-08-2024',
        time:'12:00pm',
        planType:'yearly',
        startDate:'18-08-2024',
        endDate:'18-08-2024',
        paymentStatus:'paid',
        subStatus:'active'
    },
    {
        id:6,
        date:'18-08-2024',
        time:'12:00pm',
        planType:'monthly',
        startDate:'18-08-2024',
        endDate:'18-08-2024',
        paymentStatus:'paid',
        subStatus:'active'
    },
]

export {
    happyClients,reasons,countries,dashboardTabs,posts,subscriptionDetails
    ,userProfile,appointments,sidebarLinks,myPosts,subscriptions
}