import { Menu } from "lucide-react";
import { Button } from "./ui/button";
import {
    Sheet,
    SheetContent,
    SheetDescription,
    SheetHeader,
    SheetTitle,
    SheetTrigger,
  } from "@/components/ui/sheet"
import SideBar from "./SideBar";
import Evaluate from "./Evaluate";

//   <main className="flex  flex-col items-center justify-between p-24 border-b border-b-yellow-400">
//     <div>
//       <Button>click me</Button>
//     </div>
//     </main>  
export default function Landing(){
//     return <div>
//        <div className=" w-fit h-screen border border-yellow-600 py-3 m-3 rounded-lg">
//     <Sheet>
//   <SheetTrigger asChild>
//     <Button variant={'ghost'} className="font-bold text-lg px-2"> ZuAi <Menu  /></Button>
//   </SheetTrigger>
//   <SheetContent side={'left'}>
//     <SheetHeader>
//       <SheetTitle>ZuAi beta</SheetTitle>
//     </SheetHeader>
//     <div>
//         <div className="rounded-xl w-fit hover:bg-blue-500 hover:p-1 ">
//             <img src="data:image/svg+xml;utf8;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAyNCAyNCI+PHBhdGggZD0iTTguNSAzaC0zYTIuNSAyLjUgMCAwIDAgMCA1aDNhMi41IDIuNSAwIDAgMCAwLTV6bTAgNGgtM2ExLjUgMS41IDAgMCAxIDAtM2gzYTEuNSAxLjUgMCAwIDEgMCAzem0wIDNoLTNBMi41IDIuNSAwIDAgMCAzIDEyLjV2NkEyLjUgMi41IDAgMCAwIDUuNSAyMWgzYTIuNSAyLjUgMCAwIDAgMi41LTIuNXYtNkEyLjUgMi41IDAgMCAwIDguNSAxMHptMS41IDguNUExLjUgMS41IDAgMCAxIDguNSAyMGgtM0ExLjUgMS41IDAgMCAxIDQgMTguNXYtNkExLjUgMS41IDAgMCAxIDUuNSAxMWgzYTEuNSAxLjUgMCAwIDEgMS41IDEuNXptOC41LTIuNWgtM2EyLjUgMi41IDAgMCAwIDAgNWgzYTIuNSAyLjUgMCAwIDAgMC01em0wIDRoLTNhMS41IDEuNSAwIDAgMSAwLTNoM2ExLjUgMS41IDAgMCAxIDAgM3ptMC0xN2gtM0EyLjUgMi41IDAgMCAwIDEzIDUuNXY2YTIuNSAyLjUgMCAwIDAgMi41IDIuNWgzYTIuNSAyLjUgMCAwIDAgMi41LTIuNXYtNkEyLjUgMi41IDAgMCAwIDE4LjUgM3ptMS41IDguNWExLjUgMS41IDAgMCAxLTEuNSAxLjVoLTNhMS41IDEuNSAwIDAgMS0xLjUtMS41di02QTEuNSAxLjUgMCAwIDEgMTUuNSA0aDNBMS41IDEuNSAwIDAgMSAyMCA1LjV6Ii8+PC9zdmc+" className="h-8 w-8"/>
//         </div>
//     </div>
//   </SheetContent>
// </Sheet>
// </div>
//     </div>

return <div className="flex">

          <SideBar/>
          <Evaluate/>
  
    
</div>
   
    
}