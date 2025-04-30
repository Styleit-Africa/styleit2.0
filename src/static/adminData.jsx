import { format } from "date-fns"

const adminLinks = [
    {
        id:1,
        name:'creators',
        links:['subscriptions','payments']
    },
    {
        id:2,
        name:'client',
        links:['subscriptions','payments']
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
        businessName:'stitching lord',
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
        businessName:'stitching lord',
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
        gender:'male',
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
        gender:'male',
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
        ref:'12346456289',
        amount:1000,
        status:'pending',
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
        id:2,
        name:'abdullahi fatai',
        date:'2025-03-01',
        email:'sulaiman@gmail.com ',
        ref:'12346456289',
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
        id:4,
        name:'salam Yusuf',
        date:'2025-03-01',
        email:'sulaiman@gmail.com ',
        ref:'12346456289',
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

const check = ()=>{
    const p = creatorPayments.map(pay=>{
    console.log(format(new Date(pay.date),'MMMM do, yyyy'))
    // console.log(format(new Date(pay.to),'MMMM do, yyyy'))
    })
     
}

export {adminLinks,creators,creatorSubscriptions,creatorPayments,check}