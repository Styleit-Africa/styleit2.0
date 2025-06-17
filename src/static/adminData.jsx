import profile from '@/images/profile_i.png'

const adminLinks = [
    {
        id:1,
        name:'creators',
        links:['subscriptions','payments']
    },
    {
        id:2,
        name:'clients',
        links:['bookings','complaints & disputes']
    },
    {
        id:3,
        name:'bookings',
        links:['subscriptions','payments']
    },
    {
        id:4,
        name:'platform management',
        links:['subscriptions','payments']
    },
    {
        id:5,
        name:'analytics & reports',
        links:['subscriptions','payments']
    },
    {
        id:6,
        name:'supports & notifications',
        links:['subscriptions','payments']
    },
    {
        id:6,
        name:'admin',
        links:['activities','payments']
    },
    {
        id:7,
        name:'super admin'
    },
    
]

const period = [
    {
        id:1,
        name:'daily',
        times:7
    },
    {
        id:2,
        name:'weekly',
        times:3
    },
    {
        id:3,
        name:'monthly',
        times:14
    },
    {
        id:4,
        name:'yearly',
        times:44
    }
]

const admins = [
    {
        id:1,
        name:'uthman fatai',
        activities:[
            {
                id:1,
                activityName:'active times',
                activity:6,
            },
            {
                id:2,
                activityName:'banned users',
                activity:13,
            },
            {
                id:4,
                activityName:'suspended users',
                activity:12
            },
            {
                id:3,
                activityName:'reset password',
                activity:16,

            }
        ]
    },
    {
        id:2,
        name:'abdullahi fatai',
        activities:[
            {
                id:1,
                activityName:'active times',
                activity:4,
            },
            {
                id:2,
                activityName:'banned users',
                activity:5,
            },
            {
                id:4,
                activityName:'suspended users',
                activity:20
            },
            {
                id:3,
                activityName:'reset password',
                activity:20,

            }
        ]
    },
    {
        id:3,
        name:'Faruq Sulaiman',
        activities:[
            {
                id:1,
                activityName:'active times',
                activity:9,
            },
            {
                id:2,
                activityName:'banned users',
                activity:130,
            },
            {
                id:4,
                activityName:'suspended users',
                activity:43
            },
            {
                id:3,
                activityName:'reset password',
                activity:60,

            }
        ]
    },
    {
        id:4,
        name:'salam Yusuf',
        activities:[
            {
                id:1,
                activityName:'active times',
                activity:6,
            },
            {
                id:2,
                activityName:'banned users',
                activity:13,
            },
            {
                id:4,
                activityName:'suspended users',
                activity:2
            },
            {
                id:3,
                activityName:'reset password',
                activity:16,

            }
        ]
    },
    {
        id:5,
        name:'fatai Yusrat ',
        activities:[
            {
                id:1,
                activityName:'active times',
                activity:6,
            },
            {
                id:2,
                activityName:'banned users',
                activity:13,
            },
            {
                id:4,
                activityName:'suspended users',
                activity:1
            },
            {
                id:3,
                activityName:'reset password',
                activity:16,

            }
        ]
    },
    {
        id:6,
        name:'Adeleke Muminat',
        activities:[
            {
                id:1,
                activityName:'active times',
                activity:6,
            },
            {
                id:2,
                activityName:'banned users',
                activity:13,
            },
            {
                id:4,
                activityName:'suspended users',
                activity:12
            },
            {
                id:3,
                activityName:'reset password',
                activity:16,
            }
        ]
    }
]


const creators = [
    {
        id:1,
        name:'uthman fatai',
        email:'u@gmail.com',
        status:'suspended',
        gender:'male',
        phoneNumber:'07040834109',
        businessName:'Noble stiches',
        street:'49,Suraju Orile Iganmu',
        state:'Lagos',
        lga:'Surulere',
        country:'Nigeria',
    },
    {
        id:2,
        name:'abdullahi fatai',
        email:'u@gmail.com',
        status:'banned',
        gender:'male',
        phoneNumber:'07040834109',
        businessName:'The neatly done',
        street:'49,Suraju Orile Iganmu',
        state:'Lagos',
        lga:'Surulere',
        country:'Nigeria',
    },
    {
        id:3,
        name:'Faruq Sulaiman',
        email:'u@gmail.com',
        status:'approved',
        gender:'female',
        phoneNumber:'07040834109',
        businessName:'stitching lord',
        street:'49,Suraju Orile Iganmu',
        state:'Lagos',
        lga:'Surulere',
        country:'Nigeria',
    },
    {
        id:4,
        name:'salam Yusuf',
        email:'a@gmail.com',
        status:'banned',
        gender:'male',
        phoneNumber:'07040834109',
        businessName:'stitching lord',
        street:'49,Suraju Orile Iganmu',
        state:'Lagos',
        lga:'Surulere',
        country:'Nigeria',
    },
    {
        id:5,
        name:'fatai Yusrat ',
        email:'c@gmail.com',
        status:'banned',
        gender:'female',
        phoneNumber:'07040834109',
        businessName:'stitching lord',
        street:'49,Suraju Orile Iganmu',
        state:'Lagos',
        lga:'Surulere',
        country:'Nigeria',
    },
    {
        id:6,
        name:'Adeleke Muminat',
        email:'b@gmail.com',
        status:'suspended',
        gender:'male',
        phoneNumber:'07040834109',
        businessName:'stitching lord',
        street:'49,Suraju Orile Iganmu',
        state:'Lagos',
        lga:'Surulere',
        country:'Nigeria',
    },
    {
        id:7,
        name:'uthman fatai',
        email:'o@gmail.com',
        status:'approved',
        gender:'male',
        phoneNumber:'07040834109',
        businessName:'stitching lord',
        street:'49,Suraju Orile Iganmu',
        state:'Lagos',
        lga:'Surulere',
        country:'Nigeria',
    },
    {
        id:8,
        name:'uthman fatai',
        email:'p@gmail.com',
        status:'banned',
        gender:'male',
        phoneNumber:'07040834109',
        businessName:'stitching lord',
        street:'49,Suraju Orile Iganmu',
        state:'Lagos',
        lga:'Surulere',
        country:'Nigeria',
    },
    {
        id:9,
        name:'uthman fatai',
        email:'u@gmail.com',
        status:'suspended',
        gender:'male',
        phoneNumber:'07040834109',
        businessName:'stitching lord',
        street:'49,Suraju Orile Iganmu',
        state:'Lagos',
        lga:'Surulere',
        country:'Nigeria',
    },
]


const bookings = [
    {
        id:1,
        receiver:'ariky stitches',
        name:'Ademola Decode',
        bookingDate:'2024-11-10',
        bookingTime:'12:30',
        collectionDate:'2024-11-15',
        collectionTime:'15:20',
        status:'accepted',
        reason:'Hi, i am sorry i have a tight schedule this month.Kindly book ahead in the coming month if not urgent.I will be available'
    },
    {
        id:2,
        receiver:'ariky stitches',
        name:'Sulaiman fatai',
        bookingDate:'2024-11-10',
        bookingTime:'12:30',
        collectionDate:'2024-11-15',
        collectionTime:'15:20',
        status:'declined',
        reason:'Hi, i am sorry i have a tight schedule this month.Kindly book ahead in the coming month if not urgent.I will be available'
    },
    {
        id:3,
        receiver:'noble stitches',
        name:'Ademola Decode',
        bookingDate:'2024-11-10',
        bookingTime:'12:30',
        collectionDate:'2024-11-15',
        collectionTime:'15:20',
        status:'accepted',
        reason:'Hi, i am sorry i have a tight schedule this month.Kindly book ahead in the coming month if not urgent.I will be available'
    },
    {
        id:4,
        receiver:'ariky stitches',
        name:'Ademola Decode',
        bookingDate:'2024-11-10',
        bookingTime:'12:30',
        collectionDate:'2024-11-15',
        collectionTime:'15:20',
        status:'declined',
        reason:'Hi, i am sorry i have a tight schedule this month.Kindly book ahead in the coming month if not urgent.I will be available'
    },
    {
        id:5,
        receiver:'ariky stitches',
        name:'Ademola Decode',
        bookingDate:'2024-11-10',
        bookingTime:'12:30',
        collectionDate:'2024-11-15',
        collectionTime:'15:20',
        status:'declined',
        reason:'Hi, i am sorry i have a tight schedule this month.Kindly book ahead in the coming month if not urgent.I will be available'
    },
    {
        id:6,
        receiver:'ariky stitches',
        name:'Ademola Decode',
        bookingDate:'2024-11-10',
        bookingTime:'12:30',
        collectionDate:'2024-11-15',
        collectionTime:'12:00',
        status:'pending',
        reason:'Hi, i am sorry i have a tight schedule this month.Kindly book ahead in the coming month if not urgent.I will be available'
    },
    {
        id:7,
        receiver:'ariky stitches',
        name:'Yunus Abdullateef',
        bookingDate:'2025-02-31',
        bookingTime:'03:55',
        collectionDate:'2024-11-15',
        collectionTime:'14:32',
        status:'pending',
        reason:'Hi, i am sorry i have a tight schedule this month.Kindly book ahead in the coming month if not urgent.I will be available'
    },
    {
        id:8,
        receiver:'ariky stitches',
        name:'Yunus Abdullateef',
        bookingDate:'2025-02-31',
        bookingTime:'05:02',
        collectionDate:'2024-11-15',
        collectionTime:'14:32',
        status:'pending',
        reason:'Hi, i am sorry i have a tight schedule this month.Kindly book ahead in the coming month if not urgent.I will be available'
    },
    {
        id:9,
        receiver:'ariky stitches',
        name:'Yunus Abdullateef',
        bookingDate:'2025-03-31',
        bookingTime:'18:22',
        collectionDate:'2025-11-15',
        collectionTime:'14:32',
        status:'pending',
        reason:'Hi, i am sorry i have a tight schedule this month.Kindly book ahead in the coming month if not urgent.I will be available'
    },
    {
        id:10,
        receiver:'noble stitches',
        name:'Yunus Abdullateef',
        bookingDate:'2025-03-31',
        bookingTime:'18:25',
        collectionDate:'2025-11-15',
        collectionTime:'14:32',
        status:'pending',
        reason:'Hi, i am sorry i have a tight schedule this month.Kindly book ahead in the coming month if not urgent.I will be available'
    },
    {
        id:11,
        receiver:'ariky stitches',
        name:'Yunus Abdullateef',
        bookingDate:'2025-03-31',
        bookingTime:'18:26',
        collectionDate:'2025-11-15',
        collectionTime:'14:32',
        status:'pending',
        reason:'Hi, i am sorry i have a tight schedule this month.Kindly book ahead in the coming month if not urgent.I will be available'
    },
    {
        id:12,
        receiver:'the industrous',
        name:'Yunus Abdullateef',
        bookingDate:'2025-04-02',
        bookingTime:'22:10',
        collectionDate:'2025-11-15',
        collectionTime:'14:32',
        status:'pending',
        reason:'Hi, i am sorry i have a tight schedule this month.Kindly book ahead in the coming month if not urgent.I will be available'
    },
    {
        id:13,
        receiver:'elegant one',
        name:'Yunus Abdullateef',
        bookingDate:'2025-03-31',
        bookingTime:'20:38',
        collectionDate:'2025-11-15',
        collectionTime:'14:32',
        status:'accepted',
        reason:'Hi, i am sorry i have a tight schedule this month.Kindly book ahead in the coming month if not urgent.I will be available'
    },
]


const creatorSubscriptions = [

    {
        id:1,
        name:'uthman fatai',
        plan:'4 months ',
        status:'expired',
        from:'2025-05-01',
        to:'2025-08-01',
        lastSubscriptions:[
                {
        id:5,
        name:'fatai Yusrat ',
        plan:'4 months ',
        status:'expired',
        from:'2025-05-01',
        to:'2025-08-01',
    },
    {
        id:5,
        name:'fatai Yusrat ',
        plan:'4 months ',
        status:'expired',
        from:'2025-05-01',
        to:'2025-08-01',
    },
    {
        id:5,
        name:'fatai Yusrat ',
        plan:'4 months ',
        status:'expired',
        from:'2025-05-01',
        to:'2025-08-01',
    }
        ]
    },
    {
        id:2,
        name:'abdullahi fatai',
        plan:'4 months ',
        status:'expired',
        from:'2025-03-01',
        to:'2025-08-01',
        lastSubscriptions:[
                {
        id:5,
        name:'fatai Yusrat ',
        plan:'4 months ',
        status:'expired',
        from:'2025-05-01',
        to:'2025-08-01',
    },
    {
        id:5,
        name:'fatai Yusrat ',
        plan:'4 months ',
        status:'expired',
        from:'2025-05-01',
        to:'2025-08-01',
    },
    {
        id:5,
        name:'fatai Yusrat ',
        plan:'4 months ',
        status:'expired',
        from:'2025-05-01',
        to:'2025-08-01',
    }
        ]
    },
    {
        id:3,
        name:'Faruq Sulaiman',
        plan:'4 months ',
        status:'active',
        from:'2025-05-01',
        to:'2025-08-01',
        lastSubscriptions:[
                {
        id:5,
        name:'fatai Yusrat ',
        plan:'4 months ',
        status:'expired',
        from:'2025-05-01',
        to:'2025-08-01',
    },
    {
        id:5,
        name:'fatai Yusrat ',
        plan:'4 months ',
        status:'expired',
        from:'2025-05-01',
        to:'2025-08-01',
    },
    {
        id:5,
        name:'fatai Yusrat ',
        plan:'4 months ',
        status:'expired',
        from:'2025-05-01',
        to:'2025-08-01',
    }
        ]
    },
    {
        id:4,
        name:'salam Yusuf',
        plan:'4 months ',
        status:'active',
        from:'2025-03-01',
        to:'2026-08-01',
        lastSubscriptions:[
                {
        id:5,
        name:'fatai Yusrat ',
        plan:'4 months ',
        status:'expired',
        from:'2025-05-01',
        to:'2025-08-01',
    },
    {
        id:5,
        name:'fatai Yusrat ',
        plan:'4 months ',
        status:'expired',
        from:'2025-05-01',
        to:'2025-08-01',
    },
    {
        id:5,
        name:'fatai Yusrat ',
        plan:'4 months ',
        status:'expired',
        from:'2025-05-01',
        to:'2025-08-01',
    }
        ]
    },
    {
        id:5,
        name:'fatai Yusrat ',
        plan:'4 months ',
        status:'expired',
        from:'2025-05-01',
        to:'2025-08-01',
        lastSubscriptions:[
                {
        id:5,
        name:'fatai Yusrat ',
        plan:'4 months ',
        status:'expired',
        from:'2025-05-01',
        to:'2025-08-01',
    },
    {
        id:5,
        name:'fatai Yusrat ',
        plan:'4 months ',
        status:'expired',
        from:'2025-05-01',
        to:'2025-08-01',
    },
    {
        id:5,
        name:'fatai Yusrat ',
        plan:'4 months ',
        status:'expired',
        from:'2025-05-01',
        to:'2025-08-01',
    }
        ]
    },
    {
        id:6,
        name:'Adeleke Muminat',
        plan:'4 months ',
        status:'active',
        from:'2025-05-01',
        to:'2027-08-01',
        lastSubscriptions:[
                {
        id:5,
        name:'fatai Yusrat ',
        plan:'4 months ',
        status:'expired',
        from:'2025-05-01',
        to:'2025-08-01',
    },
    {
        id:5,
        name:'fatai Yusrat ',
        plan:'4 months ',
        status:'expired',
        from:'2025-05-01',
        to:'2025-08-01',
    },
    {
        id:5,
        name:'fatai Yusrat ',
        plan:'4 months ',
        status:'expired',
        from:'2025-05-01',
        to:'2025-08-01',
    }
        ]
    },
    {
        id:7,
        name:'uthman fatai',
        plan:'4 months ',
        status:'active',
        from:'2025-02-01',
        to:'2025-08-01',
        lastSubscriptions:[
                {
        id:5,
        name:'fatai Yusrat ',
        plan:'4 months ',
        status:'expired',
        from:'2025-05-01',
        to:'2025-08-01',
    },
    {
        id:5,
        name:'fatai Yusrat ',
        plan:'4 months ',
        status:'expired',
        from:'2025-05-01',
        to:'2025-08-01',
    },
    {
        id:5,
        name:'fatai Yusrat ',
        plan:'4 months ',
        status:'expired',
        from:'2025-05-01',
        to:'2025-08-01',
    }
        ]
    },
    {
        id:8,
        name:'uthman fatai',
        plan:'4 months ',
        status:'active',
        from:'2025-05-01',
        to:'2025-08-01',
        lastSubscriptions:[
                {
        id:5,
        name:'fatai Yusrat ',
        plan:'4 months ',
        status:'expired',
        from:'2025-05-01',
        to:'2025-08-01',
    },
    {
        id:5,
        name:'fatai Yusrat ',
        plan:'4 months ',
        status:'expired',
        from:'2025-05-01',
        to:'2025-08-01',
    },
    {
        id:5,
        name:'fatai Yusrat ',
        plan:'4 months ',
        status:'expired',
        from:'2025-05-01',
        to:'2025-08-01',
    }
        ]
    },
    {
        id:9,
        name:'uthman fatai',
        plan:'4 months ',
        status:'expired',
        from:'2025-05-01',
        to:'2025-08-01',
        lastSubscriptions:[
                {
        id:5,
        name:'fatai Yusrat ',
        plan:'4 months ',
        status:'expired',
        from:'2025-05-01',
        to:'2025-08-01',
    },
    {
        id:5,
        name:'fatai Yusrat ',
        plan:'4 months ',
        status:'expired',
        from:'2025-05-01',
        to:'2025-08-01',
    },
    {
        id:5,
        name:'fatai Yusrat ',
        plan:'4 months ',
        status:'expired',
        from:'2025-05-01',
        to:'2025-08-01',
    }
        ]
    }
]



const creatorPayments = [

    {
        id:1,
        
        name:'uthman fatai',
        date:'2025-05-01',
        email:'sulaiman@gmail.com ',
        ref:'12646456289',
        amount:1000,
        status:'pending',
        lastPayments:[
                        {
                id:1,
                name:'fatai Yusrat ',
                date:'2025-05-01',
                email:'sulaiman@gmail.com ',
                ref:'12246456289',
                amount:1000,
                status:'declined',
                to:'2025-08-01',
            },
            {
                id:2,
                name:'fatai Yusrat ',
                date:'2025-05-01',
                email:'sulaiman@gmail.com ',
                ref:'123446456289',
                amount:1000,
                status:'successful',
                to:'2025-08-01',
            },
            {
                id:3,
                name:'fatai Yusrat ',
                date:'2025-05-01',
                email:'sulaiman@gmail.com ',
                ref:'12346456289',
                amount:1000,
                status:'declined',
                to:'2025-08-01',
            }
        ]
    },
    {
        id:2,
        name:'abdullahi fatai',
        date:'2025-03-01',
        email:'sulaiman@gmail.com ',
        ref:'12546456289',
        amount:1000,
        status:'declined',
        to:'2025-08-01',
        lastPayments:[
                        {
                id:1,
                name:'fatai Yusrat ',
                date:'2025-05-01',
                email:'sulaiman@gmail.com ',
                ref:'12346456289',
                amount:1000,
                status:'declined',
                to:'2025-08-01',
            },
            {
                id:2,
                name:'fatai Yusrat ',
                date:'2025-05-01',
                email:'sulaiman@gmail.com ',
                ref:'12346456289',
                amount:1000,
                status:'successful',
                to:'2025-08-01',
            },
            {
                id:3,
                name:'fatai Yusrat ',
                date:'2025-05-01',
                email:'sulaiman@gmail.com ',
                ref:'12346456289',
                amount:1000,
                status:'declined',
                to:'2025-08-01',
            }
        ]
    },
    {
        id:3,
        name:'Faruq Sulaiman',
        date:'2025-05-01',
        email:'sulaiman@gmail.com ',
        ref:'12846456289',
        amount:1000,
        status:'successful',
        to:'2025-08-01',
        lastPayments:[
                        {
                id:1,
                name:'fatai Yusrat ',
                date:'2025-05-01',
                email:'sulaiman@gmail.com ',
                ref:'12346456289',
                amount:1000,
                status:'declined',
                to:'2025-08-01',
            },
            {
                id:2,
                name:'fatai Yusrat ',
                date:'2025-05-01',
                email:'sulaiman@gmail.com ',
                ref:'12346456289',
                amount:1000,
                status:'successful',
                to:'2025-08-01',
            },
            {
                id:3,
                name:'fatai Yusrat ',
                date:'2025-05-01',
                email:'sulaiman@gmail.com ',
                ref:'12346456289',
                amount:1000,
                status:'declined',
                to:'2025-08-01',
            }
        ]
    },
    {
        id:4,
        name:'salam Yusuf',
        date:'2025-03-01',
        email:'sulaiman@gmail.com ',
        ref:'12746456289',
        amount:1000,
        status:'successful',
        to:'2026-08-01',
        lastPayments:[
                        {
                id:1,
                name:'fatai Yusrat ',
                date:'2025-05-01',
                email:'sulaiman@gmail.com ',
                ref:'12346456289',
                amount:1000,
                status:'declined',
                to:'2025-08-01',
            },
            {
                id:2,
                name:'fatai Yusrat ',
                date:'2025-05-01',
                email:'sulaiman@gmail.com ',
                ref:'12346456289',
                amount:1000,
                status:'successful',
                to:'2025-08-01',
            },
            {
                id:3,
                name:'fatai Yusrat ',
                date:'2025-05-01',
                email:'sulaiman@gmail.com ',
                ref:'12346456289',
                amount:1000,
                status:'declined',
                to:'2025-08-01',
            }
        ]
    },
    {
        id:5,
        name:'fatai Yusrat ',
        date:'2025-05-01',
        email:'sulaiman@gmail.com ',
        ref:'12846456289',
        amount:1000,
        status:'pending',
        to:'2025-08-01',
        lastPayments:[
                        {
                id:1,
                name:'fatai Yusrat ',
                date:'2025-05-01',
                email:'sulaiman@gmail.com ',
                ref:'12346456289',
                amount:1000,
                status:'declined',
                to:'2025-08-01',
            },
            {
                id:2,
                name:'fatai Yusrat ',
                date:'2025-05-01',
                email:'sulaiman@gmail.com ',
                ref:'12346456289',
                amount:1000,
                status:'successful',
                to:'2025-08-01',
            },
            {
                id:3,
                name:'fatai Yusrat ',
                date:'2025-05-01',
                email:'sulaiman@gmail.com ',
                ref:'12346456289',
                amount:1000,
                status:'declined',
                to:'2025-08-01',
            }
        ]
    },
    {
        id:6,
        name:'Adeleke Muminat',
        date:'2025-05-01',
        email:'sulaiman@gmail.com ',
        ref:'12346456289',
        amount:1000,
        status:'successful',
        to:'2027-08-01',
        lastPayments:[
                        {
                id:1,
                name:'fatai Yusrat ',
                date:'2025-05-01',
                email:'sulaiman@gmail.com ',
                ref:'12346456289',
                amount:1000,
                status:'declined',
                to:'2025-08-01',
            },
            {
                id:2,
                name:'fatai Yusrat ',
                date:'2025-05-01',
                email:'sulaiman@gmail.com ',
                ref:'12346456289',
                amount:1000,
                status:'successful',
                to:'2025-08-01',
            },
            {
                id:3,
                name:'fatai Yusrat ',
                date:'2025-05-01',
                email:'sulaiman@gmail.com ',
                ref:'12346456289',
                amount:1000,
                status:'declined',
                to:'2025-08-01',
            }
        ]
    },
    {
        id:7,
        name:'uthman fatai',
        date:'2025-02-01',
        email:'sulaiman@gmail.com ',
        ref:'12346456289',
        amount:1000,
        status:'successful',
        to:'2025-08-01',
        lastPayments:[
                        {
                id:1,
                name:'fatai Yusrat ',
                date:'2025-05-01',
                email:'sulaiman@gmail.com ',
                ref:'12346456289',
                amount:1000,
                status:'declined',
                to:'2025-08-01',
            },
            {
                id:2,
                name:'fatai Yusrat ',
                date:'2025-05-01',
                email:'sulaiman@gmail.com ',
                ref:'12346456289',
                amount:1000,
                status:'successful',
                to:'2025-08-01',
            },
            {
                id:3,
                name:'fatai Yusrat ',
                date:'2025-05-01',
                email:'sulaiman@gmail.com ',
                ref:'12346456289',
                amount:1000,
                status:'declined',
                to:'2025-08-01',
            }
        ]
    },
    {
        id:8,
        name:'uthman fatai',
        date:'2025-05-01',
        email:'sulaiman@gmail.com ',
        ref:'12346456289',
        amount:1000,
        status:'successful',
        to:'2025-08-01',
        lastPayments:[
                        {
                id:1,
                name:'fatai Yusrat ',
                date:'2025-05-01',
                email:'sulaiman@gmail.com ',
                ref:'12346456289',
                amount:1000,
                status:'declined',
                to:'2025-08-01',
            },
            {
                id:2,
                name:'fatai Yusrat ',
                date:'2025-05-01',
                email:'sulaiman@gmail.com ',
                ref:'12346456289',
                amount:1000,
                status:'successful',
                to:'2025-08-01',
            },
            {
                id:3,
                name:'fatai Yusrat ',
                date:'2025-05-01',
                email:'sulaiman@gmail.com ',
                ref:'12346456289',
                amount:1000,
                status:'declined',
                to:'2025-08-01',
            }
        ]
    },
    {
        id:9,
        name:'uthman fatai',
        date:'2025-05-01',
        email:'sulaiman@gmail.com ',
        ref:'12346456289',
        amount:1000,
        status:'pending',
        to:'2025-08-01',
        lastPayments:[
                        {
                id:1,
                name:'fatai Yusrat ',
                date:'2025-05-01',
                email:'sulaiman@gmail.com ',
                ref:'12346456289',
                amount:1000,
                status:'declined',
                to:'2025-08-01',
            },
            {
                id:2,
                name:'fatai Yusrat ',
                date:'2025-05-01',
                email:'sulaiman@gmail.com ',
                ref:'12346456289',
                amount:1000,
                status:'successful',
                to:'2025-08-01',
            },
            {
                id:3,
                name:'fatai Yusrat ',
                date:'2025-05-01',
                email:'sulaiman@gmail.com ',
                ref:'12346456289',
                amount:1000,
                status:'declined',
                to:'2025-08-01',
            }
        ]
    }
]

const complaints = [
    {
        id:1,
        userId:2,
        name:'uthman Bello',
        image:profile,
        message:' Lorem ipsum dolor sit amet consectetur adipisicing elit. Unde omnis cumque, itaque, corporis nam, praesentium iure neque alias dolorum nostrum earum dolor est dignissimos necessitatibus cum. Molestias quaerat ullam repudiandae.',
        replies:[
            {
                id:1,
                userId:3,
                name:'Yusuf ibrahim',
                response:' Lorem ipsum dolor sit amet consectetur adipisicing elit. Unde omnis cumque, itaque, corporis nam, praesentium iure neque alias dolorum nostrum earum dolor est dignissimos necessitatibus cum. Molestias quaerat ullam repudiandae.',
            },
            {
                id:2,
                userId:3,
                name:'Yusuf ibrahim',
                response:' Lorem ipsum dolor sit amet consectetur adipisicing elit. Unde omnis cumque, itaque, corporis nam, praesentium iure neque alias dolorum nostrum earum dolor est dignissimos necessitatibus cum. Molestias quaerat ullam repudiandae.',
            },
            {
                id:3,
                userId:3,
                name:'Yusuf ibrahim',
                response:' Lorem ipsum dolor sit amet consectetur adipisicing elit. Unde omnis cumque, itaque, corporis nam, praesentium iure neque alias dolorum nostrum earum dolor est dignissimos necessitatibus cum. Molestias quaerat ullam repudiandae.',
            },
            {
                id:4,
                userId:3,
                name:'Yusuf ibrahim',
                response:' Lorem ipsum dolor sit amet consectetur adipisicing elit. Unde omnis cumque, itaque, corporis nam, praesentium iure neque alias dolorum nostrum earum dolor est dignissimos necessitatibus cum. Molestias quaerat ullam repudiandae.',
            },
       ],
    },
    {
        id:2,
        userId:2,
        name:'fatai sulaiman',
        image:'',
        message:' Lorem ipsum dolor sit amet consectetur adipisicing elit. Unde omnis cumque, itaque, corporis nam, praesentium iure neque alias dolorum nostrum earum dolor est dignissimos necessitatibus cum. Molestias quaerat ullam repudiandae.',
        replies:[
            {
                id:3,
                userId:3,
                name:'Yusuf ibrahim',
                response:' Lorem ipsum dolor sit amet consectetur adipisicing elit. Unde omnis cumque, itaque, corporis nam, praesentium iure neque alias dolorum nostrum earum dolor est dignissimos necessitatibus cum. Molestias quaerat ullam repudiandae.',
            },
            {
                id:4,
                userId:3,
                name:'Yusuf ibrahim',
                response:' Lorem ipsum dolor sit amet consectetur adipisicing elit. Unde omnis cumque, itaque, corporis nam, praesentium iure neque alias dolorum nostrum earum dolor est dignissimos necessitatibus cum. Molestias quaerat ullam repudiandae.',
            },
       ],
    },
    {
        id:3,
        userId:2,
        name:'dele Japa',
        image:'',
        message:' Lorem ipsum dolor sit amet consectetur adipisicing elit. Unde omnis cumque, itaque, corporis nam, praesentium iure neque alias dolorum nostrum earum dolor est dignissimos necessitatibus cum. Molestias quaerat ullam repudiandae.',
        replies:[
            {
                id:5,
                userId:3,
                name:'Yusuf ibrahim',
                response:' Lorem ipsum dolor sit amet consectetur adipisicing elit. Unde omnis cumque, itaque, corporis nam, praesentium iure neque alias dolorum nostrum earum dolor est dignissimos necessitatibus cum. Molestias quaerat ullam repudiandae.',
            },
            {
                id:6,
                userId:3,
                name:'Yusuf ibrahim',
                response:' Lorem ipsum dolor sit amet consectetur adipisicing elit. Unde omnis cumque, itaque, corporis nam, praesentium iure neque alias dolorum nostrum earum dolor est dignissimos necessitatibus cum. Molestias quaerat ullam repudiandae.',
            },
       ],
    },
    {
        id:4,
        userId:2,
        name:'Salman Yusuf',
        image:profile,
        message:' Lorem ipsum dolor sit amet consectetur adipisicing elit. Unde omnis cumque, itaque, corporis nam, praesentium iure neque alias dolorum nostrum earum dolor est dignissimos necessitatibus cum. Molestias quaerat ullam repudiandae.',
        replies:[
            {
                id:7,
                userId:3,
                name:'Yusuf ibrahim',
                response:' Lorem ipsum dolor sit amet consectetur adipisicing elit. Unde omnis cumque, itaque, corporis nam, praesentium iure neque alias dolorum nostrum earum dolor est dignissimos necessitatibus cum. Molestias quaerat ullam repudiandae.',
            },
            {
                id:8,
                userId:3,
                name:'Yusuf ibrahim',
                response:' Lorem ipsum dolor sit amet consectetur adipisicing elit. Unde omnis cumque, itaque, corporis nam, praesentium iure neque alias dolorum nostrum earum dolor est dignissimos necessitatibus cum. Molestias quaerat ullam repudiandae.',
            },
       ],
    },
    {
        id:5,
        userId:2,
        name:'uthman Bello',
        image:'',
        message:' Lorem ipsum dolor sit amet consectetur adipisicing elit. Unde omnis cumque, itaque, corporis nam, praesentium iure neque alias dolorum nostrum earum dolor est dignissimos necessitatibus cum. Molestias quaerat ullam repudiandae.',
        replies:[
            {
                id:9,
                userId:3,
                name:'Yusuf ibrahim',
                response:' Lorem ipsum dolor sit amet consectetur adipisicing elit. Unde omnis cumque, itaque, corporis nam, praesentium iure neque alias dolorum nostrum earum dolor est dignissimos necessitatibus cum. Molestias quaerat ullam repudiandae.',
            },
            {
                id:10,
                userId:3,
                name:'Yusuf ibrahim',
                response:' Lorem ipsum dolor sit amet consectetur adipisicing elit. Unde omnis cumque, itaque, corporis nam, praesentium iure neque alias dolorum nostrum earum dolor est dignissimos necessitatibus cum. Molestias quaerat ullam repudiandae.',
            },
       ],
    },
    {
        id:6,
        userId:2,
        name:'Ademola Hakeem',
        image:'',
        message:' Lorem ipsum dolor sit amet consectetur adipisicing elit. Unde omnis cumque, itaque, corporis nam, praesentium iure neque alias dolorum nostrum earum dolor est dignissimos necessitatibus cum. Molestias quaerat ullam repudiandae.',
        replies:[
            {
                id:11,
                userId:3,
                name:'Yusuf ibrahim',
                response:' Lorem ipsum dolor sit amet consectetur adipisicing elit. Unde omnis cumque, itaque, corporis nam, praesentium iure neque alias dolorum nostrum earum dolor est dignissimos necessitatibus cum. Molestias quaerat ullam repudiandae.',
            },
            {
                id:12,
                userId:3,
                name:'Yusuf ibrahim',
                response:' Lorem ipsum dolor sit amet consectetur adipisicing elit. Unde omnis cumque, itaque, corporis nam, praesentium iure neque alias dolorum nostrum earum dolor est dignissimos necessitatibus cum. Molestias quaerat ullam repudiandae.',
            },
       ],
    },
    {
        id:7,
        userId:2,
        name:'Yunus Abdullateef',
        image:'',
        message:' Lorem ipsum dolor sit amet consectetur adipisicing elit. Unde omnis cumque, itaque, corporis nam, praesentium iure neque alias dolorum nostrum earum dolor est dignissimos necessitatibus cum. Molestias quaerat ullam repudiandae.',
        replies:[
            {
                id:13,
                userId:3,
                name:'Yusuf ibrahim',
                response:' Lorem ipsum dolor sit amet consectetur adipisicing elit. Unde omnis cumque, itaque, corporis nam, praesentium iure neque alias dolorum nostrum earum dolor est dignissimos necessitatibus cum. Molestias quaerat ullam repudiandae.',
            },
            {
                id:14,
                userId:3,
                name:'Yusuf ibrahim',
                response:' Lorem ipsum dolor sit amet consectetur adipisicing elit. Unde omnis cumque, itaque, corporis nam, praesentium iure neque alias dolorum nostrum earum dolor est dignissimos necessitatibus cum. Molestias quaerat ullam repudiandae.',
            },
       ],
    },
    {
        id:8,
        userId:2,
        name:'Bamidele Mutiat',
        image:'',
        message:' Lorem ipsum dolor sit amet consectetur adipisicing elit. Unde omnis cumque, itaque, corporis nam, praesentium iure neque alias dolorum nostrum earum dolor est dignissimos necessitatibus cum. Molestias quaerat ullam repudiandae.',
        replies:[
            {
                id:15,
                userId:3,
                name:'Yusuf ibrahim',
                response:' Lorem ipsum dolor sit amet consectetur adipisicing elit. Unde omnis cumque, itaque, corporis nam, praesentium iure neque alias dolorum nostrum earum dolor est dignissimos necessitatibus cum. Molestias quaerat ullam repudiandae.',
            },
            {
                id:16,
                userId:3,
                name:'Yusuf ibrahim',
                response:' Lorem ipsum dolor sit amet consectetur adipisicing elit. Unde omnis cumque, itaque, corporis nam, praesentium iure neque alias dolorum nostrum earum dolor est dignissimos necessitatibus cum. Molestias quaerat ullam repudiandae.',
            },
       ],
    },
    {
        id:9,
        userId:2,
        name:'uthman Bello',
        image:'',
        message:' Lorem ipsum dolor sit amet consectetur adipisicing elit. Unde omnis cumque, itaque, corporis nam, praesentium iure neque alias dolorum nostrum earum dolor est dignissimos necessitatibus cum. Molestias quaerat ullam repudiandae.',
        replies:[
            {
                id:17,
                userId:3,
                name:'Yusuf ibrahim',
                response:' Lorem ipsum dolor sit amet consectetur adipisicing elit. Unde omnis cumque, itaque, corporis nam, praesentium iure neque alias dolorum nostrum earum dolor est dignissimos necessitatibus cum. Molestias quaerat ullam repudiandae.',
            },
            {
                id:18,
                userId:3,
                name:'Yusuf ibrahim',
                response:' Lorem ipsum dolor sit amet consectetur adipisicing elit. Unde omnis cumque, itaque, corporis nam, praesentium iure neque alias dolorum nostrum earum dolor est dignissimos necessitatibus cum. Molestias quaerat ullam repudiandae.',
            },
       ],
    },
    {
        id:10,
        userId:2,
        name:'uthman Bello',
        image:'',
        message:' Lorem ipsum dolor sit amet consectetur adipisicing elit. Unde omnis cumque, itaque, corporis nam, praesentium iure neque alias dolorum nostrum earum dolor est dignissimos necessitatibus cum. Molestias quaerat ullam repudiandae.',
        replies:[
            {
                id:19,
                userId:3,
                name:'Yusuf ibrahim',
                response:' Lorem ipsum dolor sit amet consectetur adipisicing elit. Unde omnis cumque, itaque, corporis nam, praesentium iure neque alias dolorum nostrum earum dolor est dignissimos necessitatibus cum. Molestias quaerat ullam repudiandae.',
            },
            {
                id:20,
                userId:3,
                name:'Yusuf ibrahim',
                response:' Lorem ipsum dolor sit amet consectetur adipisicing elit. Unde omnis cumque, itaque, corporis nam, praesentium iure neque alias dolorum nostrum earum dolor est dignissimos necessitatibus cum. Molestias quaerat ullam repudiandae.',
            },
       ],
    },
]


const bgColors = [
    'bg-red-500', 'bg-purple-500', 
    'bg-blue-500', 'bg-yellow-500', 
    'bg-indigo-500', 'bg-green-500', 
    'bg-violet-500', 'bg-black-500', 
    'bg-cyan-500', 'bg-teal-500', 
]

const randomIndex = ()=>Math.floor(Math.random()*bgColors.length)


export {adminLinks,creators,creatorSubscriptions,bgColors,
    bookings,creatorPayments,complaints,randomIndex,admins,period}