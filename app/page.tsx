
import Landing from "@/components/Landing";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import { useState } from "react";
import { create } from "zustand";

// const useStore = create((set)=>({
//   counter:0,
//   increaseCount:()=> set((state : any)=>({ counter: state.counter + 1})),
//   removeCount:()=>set({counter:0}),
//   updateCount:(newCount:any)=>set({counter: newCount}),
//   decreaseCount:()=> set((state:any)=>({counter:state.counter-1}))
// }))

export default function Home() {

  // const counter = useStore((state :any)=> state.counter)
  // const increaseCount = useStore((state:any)=> state.increaseCount)
  // const decreaseCount = useStore((state:any)=> state.decreaseCount)
  // const removeCount = useStore((state:any)=>state.removeCount)
  // const updateCount = useStore((state:any)=>state.updateCount)
  return (
   <div className="bg-slate-300 min-h-screen">
    <Landing/>
   </div>
    )
  }