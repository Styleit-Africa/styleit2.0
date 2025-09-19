import React from "react"
import FashionDesignersList from "@/components/dashboard/creator/fashionDesigners/FashionDesignersList";

const FashionDesigners = ()=>{
    return(
        <section data-testid="fashion-page" className=" px-4 md:px-0 font-lato">
            <FashionDesignersList/>
        </section>
    )
}

export default FashionDesigners



