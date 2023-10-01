"use client"

import supabase from "@/config/supabaseClient"
import {useEffect, useState} from "react"
import Image from "next/image"

function page() {

    const [data, setData] = useState<any>(null)

    useEffect(() => {
        supabase.from('users').select('*').then(({data}) => {
            setData(data)
        })
    
    })

  return (
    <>
    hello
    {data && <Image src={data.img} width={400} height={400} alt="img" />}
    </>
    )
}
export default page