import { Avatar, AvatarFallback, AvatarImage } from"@/components/ui/avatar";

export default function SideBar(){
    return <div className="p-4">
    <div className="flex flex-col justify-center">
    <div className="flex  justify-start">
    <div className=" w-fit h-screen border shadow-lg py-3 p-2 rounded-2xl bg-slate-200 ">

       <div className="flex flex-col mb-3">
           <span className="font-bold text-xl ">ZuAi</span>
           <span className="text-sm text-end text-slate-400">beta</span>
       </div>
       
       <div className="rounded-xl w-fit hover:bg-blue-500 hover:p-1 p-2" id="dashboard">
           <img src="data:image/svg+xml;utf8;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAyNCAyNCI+PHBhdGggZD0iTTguNSAzaC0zYTIuNSAyLjUgMCAwIDAgMCA1aDNhMi41IDIuNSAwIDAgMCAwLTV6bTAgNGgtM2ExLjUgMS41IDAgMCAxIDAtM2gzYTEuNSAxLjUgMCAwIDEgMCAzem0wIDNoLTNBMi41IDIuNSAwIDAgMCAzIDEyLjV2NkEyLjUgMi41IDAgMCAwIDUuNSAyMWgzYTIuNSAyLjUgMCAwIDAgMi41LTIuNXYtNkEyLjUgMi41IDAgMCAwIDguNSAxMHptMS41IDguNUExLjUgMS41IDAgMCAxIDguNSAyMGgtM0ExLjUgMS41IDAgMCAxIDQgMTguNXYtNkExLjUgMS41IDAgMCAxIDUuNSAxMWgzYTEuNSAxLjUgMCAwIDEgMS41IDEuNXptOC41LTIuNWgtM2EyLjUgMi41IDAgMCAwIDAgNWgzYTIuNSAyLjUgMCAwIDAgMC01em0wIDRoLTNhMS41IDEuNSAwIDAgMSAwLTNoM2ExLjUgMS41IDAgMCAxIDAgM3ptMC0xN2gtM0EyLjUgMi41IDAgMCAwIDEzIDUuNXY2YTIuNSAyLjUgMCAwIDAgMi41IDIuNWgzYTIuNSAyLjUgMCAwIDAgMi41LTIuNXYtNkEyLjUgMi41IDAgMCAwIDE4LjUgM3ptMS41IDguNWExLjUgMS41IDAgMCAxLTEuNSAxLjVoLTNhMS41IDEuNSAwIDAgMS0xLjUtMS41di02QTEuNSAxLjUgMCAwIDEgMTUuNSA0aDNBMS41IDEuNSAwIDAgMSAyMCA1LjV6Ii8+PC9zdmc+" className="h-8 w-8"/>
       </div>
      
       <div className="rounded-xl w-fit hover:bg-blue-500 hover:p-1 p-2 " id="copy">
       <svg className="w-fit h-7" xmlns="http://www.w3.org/2000/svg" enable-background="new 0 0 64 64" viewBox="0 0 64 64" id="copy"><path d="M49.89 17.78H22.69c-.54 0-.97-.43-.97-.97 0-.54.43-.97.97-.97h27.21c.54 0 .97.43.97.97C50.86 17.34 50.43 17.78 49.89 17.78zM49.89 27.25H22.69c-.54 0-.97-.43-.97-.97 0-.54.43-.97.97-.97h27.21c.54 0 .97.43.97.97C50.86 26.82 50.43 27.25 49.89 27.25zM49.89 36.73H22.69c-.54 0-.97-.43-.97-.97 0-.54.43-.97.97-.97h27.21c.54 0 .97.43.97.97C50.86 36.29 50.43 36.73 49.89 36.73zM49.89 46.2H22.69c-.54 0-.97-.43-.97-.97 0-.54.43-.97.97-.97h27.21c.54 0 .97.43.97.97C50.86 45.77 50.43 46.2 49.89 46.2z"></path><g><path d="M57.82,55.42H14.77c-0.54,0-0.97-0.43-0.97-0.97V0.97C13.8,0.43,14.23,0,14.77,0h34.47c0.26,0,0.5,0.1,0.69,0.28
                   l8.58,8.58c0.18,0.18,0.28,0.43,0.28,0.69v44.9C58.79,54.98,58.35,55.42,57.82,55.42z M15.74,53.48h41.11V9.95l-8.01-8.01h-33.1
                   V53.48z"></path><path d="M57.82,10.52h-8.58c-0.54,0-0.97-0.43-0.97-0.97V0.97C48.27,0.43,48.7,0,49.24,0c0.54,0,0.97,0.43,0.97,0.97v7.61h7.61
                   c0.54,0,0.97,0.43,0.97,0.97C58.79,10.08,58.35,10.52,57.82,10.52z"></path></g><g><path d="M49.23,64H6.18c-0.54,0-0.97-0.43-0.97-0.97V9.55c0-0.54,0.43-0.97,0.97-0.97h8.59c0.54,0,0.97,0.43,0.97,0.97
                   c0,0.54-0.43,0.97-0.97,0.97H7.15v51.54h41.11v-7.61c0-0.54,0.43-0.97,0.97-0.97s0.97,0.43,0.97,0.97v8.58
                   C50.2,63.57,49.77,64,49.23,64z"></path></g></svg>
</div>

       <div className="rounded-xl w-fit hover:bg-blue-500 hover:p-1 p-2" id="notes">
       <svg className="w-fit h-8" xmlns="http://www.w3.org/2000/svg" enable-background="new 0 0 48 48" viewBox="0 0 48 48" id="book"><path d="M12.5,45.5h27c0.55,0,1-0.45,1-1v-8v-33c0-0.55-0.45-1-1-1h-27c-2.76,0-5,2.24-5,5v33C7.5,43.26,9.74,45.5,12.5,45.5z
        M13.5,4.5h25v31h-25V4.5z M9.5,7.5c0-1.3,0.84-2.4,2-2.82V35.6c-0.74,0.15-1.42,0.48-2,0.92V7.5z M12.5,37.5h26v2h-10
       c-0.55,0-1,0.45-1,1s0.45,1,1,1h10v2h-26c-1.65,0-3-1.35-3-3S10.85,37.5,12.5,37.5z"></path><path d="M35.5,9.5h-19c-0.55,0-1,0.45-1,1v9c0,0.55,0.45,1,1,1h19c0.55,0,1-0.45,1-1v-9C36.5,9.95,36.05,9.5,35.5,9.5z M34.5,18.5
       h-17v-7h17V18.5z"></path></svg>
       </div>

       <div className="rounded-xl w-fit hover:bg-blue-500 hover:p-1 p-2" id="help">
           <img src="data:image/svg+xml;utf8;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCI+PGcgZmlsbD0ibm9uZSIgZmlsbC1ydWxlPSJldmVub2RkIj48cGF0aCBkPSJNOCAxMi4xMDZjMC0uNDcuMTUxLS45NDcuNDUzLTEuNDMuMzAzLS40ODMuNzQzLS44ODMgMS4zMjMtMS4yLjU4LS4zMTcgMS4yNTYtLjQ3NiAyLjAyOS0uNDc2LjcxOCAwIDEuMzUyLjEzMyAxLjkwMi4zOTguNTUuMjY1Ljk3NS42MjUgMS4yNzUgMS4wOC4zLjQ1Ny40NS45NTIuNDUgMS40ODcgMCAuNDIxLS4wODYuNzktLjI1NyAxLjEwN2EzLjM5NCAzLjM5NCAwIDAgMS0uNjEuODIyYy0uMjM1LjIzLS42NTcuNjE4LTEuMjY2IDEuMTYzYTUuMTU4IDUuMTU4IDAgMCAwLS40MDUuNDA1IDEuNjQ1IDEuNjQ1IDAgMCAwLS4yMjcuMzJjLS4wNS4wOTYtLjA4OC4xOTItLjExNS4yODktLjAyOC4wOTctLjA2OC4yNjYtLjEyMy41MDktLjA5NC41MTUtLjM4OS43NzMtLjg4NC43NzNhLjkwNC45MDQgMCAwIDEtLjY1LS4yNTNjLS4xNzYtLjE2OC0uMjY0LS40MTgtLjI2NC0uNzUgMC0uNDE3LjA2NC0uNzc3LjE5My0xLjA4Mi4xMjktLjMwNC4zLS41NzIuNTEzLS44MDIuMjEzLS4yMy41LS41MDQuODYyLS44MjEuMzE3LS4yNzguNTQ2LS40ODcuNjg3LS42MjhhMi4xOCAyLjE4IDAgMCAwIC4zNTctLjQ3MiAxLjE1IDEuMTUgMCAwIDAgLjE0NS0uNTY1YzAtLjM5Ni0uMTQ4LS43My0uNDQyLTEuMDAzLS4yOTUtLjI3My0uNjc1LS40MDktMS4xNDEtLjQwOS0uNTQ1IDAtLjk0Ni4xMzctMS4yMDQuNDEyLS4yNTguMjc1LS40NzYuNjgtLjY1NCAxLjIxNS0uMTY4LjU2LS40ODguODQtLjk1OS44NGEuOTQzLjk0MyAwIDAgMS0uNzAyLS4yOTNjLS4xOS0uMTk2LS4yODYtLjQwOC0uMjg2LS42MzZ6bTMuNjI2IDguMTlhMS4xNyAxLjE3IDAgMCAxLS43OS0uMjkzYy0uMjI2LS4xOTYtLjM0LS40Ny0uMzQtLjgyMSAwLS4zMTIuMTEtLjU3NS4zMjgtLjc4OC4yMTgtLjIxMy40ODUtLjMyLjgwMi0uMzIuMzEzIDAgLjU3NS4xMDcuNzg4LjMyLjIxMy4yMTMuMzIuNDc2LjMyLjc4OCAwIC4zNDYtLjExMi42MTktLjMzNS44MTctLjIyMy4xOTgtLjQ4LjI5Ny0uNzczLjI5N3oiIGZpbGw9IiM0QTRBNEEiLz48cGF0aCBkPSJNNSAxLjVBMS41IDEuNSAwIDAgMCAzLjUgM3YxOEExLjUgMS41IDAgMCAwIDUgMjIuNWgxNGExLjUgMS41IDAgMCAwIDEuNS0xLjVWOC4wMWEuNS41IDAgMCAwLS4xNS0uMzU1bC02LjEwMy02LjAxMWEuNS41IDAgMCAwLS4zNTEtLjE0NEg1eiIgc3Ryb2tlPSIjNEE0QTRBIi8+PHBhdGggZD0ibTE0IDIgLjAwNiA0LjAwM2EyIDIgMCAwIDAgMiAxLjk5N0gyMCIgc3Ryb2tlPSIjNEE0QTRBIi8+PC9nPjwvc3ZnPg==" className="h-8 w-8"/>
       </div>
       <div className="absolute bottom-0">
        <Avatar>
            <AvatarImage src="https://github.com/shadcn.png"/>
            <AvatarFallback>Guest</AvatarFallback>
        </Avatar>
       </div>
    </div> 
</div>
<div>
</div>
</div>
</div>
}