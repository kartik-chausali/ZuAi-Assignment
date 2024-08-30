"use client"
import { useEffect, useRef, useState } from "react";
import { Button } from "./ui/button";
import { create } from "zustand";
import { toast } from "sonner";
import { useToast } from "@/components/ui/use-toast"
import Uploaded from "./Uploaded";
import MyCourseWork from "./MyCourseWork";

import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuLabel,
    DropdownMenuSeparator,
    DropdownMenuTrigger,
  } from "@/components/ui/dropdown-menu"
  import { Input } from "@/components/ui/input"
import { Avatar, AvatarFallback, AvatarImage } from "@radix-ui/react-avatar";
import Link from "next/link";


const useFileArray = create((set)=>({
   fileArray: (typeof window !== "undefined" && localStorage.getItem('fileArray')) 
   ? JSON.parse(localStorage.getItem('fileArray') || '[]') 
   : [],
   addFile: (fileObject:any) => set((state:any)=>{
        const newArray = [...state.fileArray, fileObject];
        localStorage.setItem("fileArray", JSON.stringify(newArray));
        return {fileArray: newArray};
   }) 
}))


export const useStore = create((set)=>({
    uploadedFile:null,
    setUploadedFile:(file:any)=> set({uploadedFile: file})
}))

const useMetaDataStore = create((set)=>({
    metaData:null,
    setMetaData: (metaData:any) => set({ metaData }),
}))

const useFileEnter = create((set)=>({
    fileEnter: false,
    setFileEnter: (fileEnter:any) => set({ fileEnter }),
}))

export const useCurrentFile = create((set)=>({
    currentFile: null,
    setCurrentFile: (file:any)=> set({currentFile: file})
}))

export default function Evaluate(){
    
    const inputRef = useRef<HTMLInputElement | null>(null);
    const uploadedFile = useStore((state:any)=> state.uploadedFile)
    const setUploadedFile = useStore((state:any)=> state.setUploadedFile)
    const setMetaData = useMetaDataStore((state:any)=> state.setMetaData)
    const metaData = useMetaDataStore((state:any)=> state.metaData)
    const setFileEnter = useFileEnter((state:any)=> state.setFileEnter)
    const fileEnter = useFileEnter((state:any)=> state.fileEnter)
    const currentFile = useCurrentFile((state:any)=> state.currentFile);
    const setCurrentFile = useCurrentFile((state:any)=> state.setCurrentFile)
    const fileArray = useFileArray((state:any)=>state.fileArray);
    const addFile = useFileArray((state:any)=>state.addFile)

    const [isClient, setIsClient] = useState(false);
    const [courseType, setCourseType] = useState("");
    const [subject , setSubject] = useState("");
    const titleRef = useRef<HTMLInputElement>(null)
    const dropRef = useRef(null);

    const {toast} = useToast();
    console.log("re -render");
    // console.log(uploadedFile);
    
    function handleCourseTypeChange(value:string){
        setCourseType(value)
    }

    function handleSubjectChange(value:string){
        setSubject(value)
    }
    useEffect(()=>{
        // const savedFile = localStorage.getItem('uploadedFile');
        // const savedMetaData = localStorage.getItem('fileMetaData');
       
        // if(savedFile && savedMetaData){
        //     setUploadedFile(savedFile);
        //     setMetaData(savedMetaData)
        // }
        // setFileArray({savedFile, savedMetaData})
        // console.log(fileArray)
        setIsClient(true)
        const savedFiles = localStorage.getItem("fileArray");
        if(savedFiles){
            useFileArray.setState({fileArray: JSON.parse(savedFiles)});
        }
    },[setUploadedFile, setMetaData]);

    function handleFileChange(event : React.ChangeEvent<HTMLInputElement>){
        const file = event.target.files?.[0];
        const maxSizeInBytes =  5*1024*1024 ;
        if(file?.size && file?.size > maxSizeInBytes){
            toast({
                title:"Uh oh! Something went wrong.",
                description:"File size exceeds 5MB, please upload smaller file!",
                variant:"destructive"
            })
            return;
        }
        if(file){
            const reader = new FileReader();
            reader.onload = function(e){
                const base64String = e.target?.result as string;
                const metaData = {
                    name: file.name,
                    type: file.type,
                    size: file.size,
                    date: new Date().toISOString(),
                }

                // Save file and metadata to local storage
        // localStorage.setItem("uploadedFile", base64String);
        // localStorage.setItem("fileMetaData", JSON.stringify(metaData));

        const title = titleRef.current?.value;
        const fileObject = {
            file: base64String,
            metaData,
            formData:{
                courseType,
                subject,
                title
            }
        }

      //  addFile(fileObject)
        setCurrentFile(base64String)
        // setUploadedFile(base64String);
        setMetaData(metaData);
            }   

            reader.readAsDataURL(file);
        }
    }
    function handleClick(){
       
      if(inputRef.current)inputRef.current.click();
    }
    return <div className="flex flex-col justify-start items-start m-44 w-1/2">
      
        <h1>
            <span className="font-bold text-3xl">Hey IB folks! Unsure about quality of your Answers?</span>
            <span className="font-bold text-3xl text-blue-600">We get you.</span>
        </h1>
        <div className="flex flex-col bg-slate-200 rounded-2xl h-full p-8 w-full">
        
            {!currentFile ? (<div className="border-dashed border-2  bg-white  rounded-xl border-gray-400 p-4 w-full h-48 flex justify-center items-center"
                                onDragOver={(e)=>{
                                    e.preventDefault();
                                    setFileEnter(true);
                                }} 
                                onDragLeave={(e)=>{
                                    setFileEnter(false)
                                }}
                                onDragEnd={(e)=>{
                                    e.preventDefault();
                                    setFileEnter(false);
                                }}
                                onDrop={(e)=>{
                                    e.preventDefault();
                                    setFileEnter(false);
                                    if(e.dataTransfer.items){
                                        Array.from(e.dataTransfer.items).forEach((item, i)=>{
                                            if(item.kind === "file" ){
                                                const file = item.getAsFile();
                                                if(file){
                                                    const blobUrl = URL.createObjectURL(file);
                                                    const metaData = {
                                                        name: file.name,
                                                        type: file.type,
                                                        size: file.size,
                                                        date: new Date().toISOString(),
                                                    }
                                                    const title = titleRef.current?.value;
                                                    // localStorage.setItem("uploadedFile", blobUrl);
                                                    // localStorage.setItem("fileMetaData", JSON.stringify(metaData));
                                                    const fileObject = {
                                                        file: blobUrl,
                                                        metaData,
                                                        formData:{
                                                            courseType,
                                                            subject,
                                                            title
                                                        }
                                                    }
                                            
                                                    addFile(fileObject)
                                                    setCurrentFile(blobUrl)
                                                    // setUploadedFile(blobUrl);
                                                    setMetaData(metaData)
                                                }
                                                // console.log(`items file[${i}].name = ${file?.name}`)
                                            }
                                        })
                                    }else{
                                        Array.from(e.dataTransfer.files).forEach((file, i) => {
                                            // console.log(`… file[${i}].name = ${file.name}`);
                                          });
                                    }
                                }}>
                    <div className="flex flex-col justify-center items-center w-full h-full">
                        <div>
                        <svg xmlns="http://www.w3.org/2000/svg" width="80" height="60" fill="none" viewBox="0 0 128 128" id="upload-file"><path stroke="#000" stroke-width="5" d="M35 35C35 30.0294 39.0294 26 44 26H74.0785C75.9108 26 77.6701 26.7184 78.9786 28.0011L88.0509 36.8939L91.1244 40.1967C92.3299 41.4921 93 43.1959 93 44.9654V93C93 97.9706 88.9706 102 84 102H44C39.0294 102 35 97.9706 35 93V35Z"></path><path stroke="#000" stroke-width="5" d="M76 27V41C76 42.6569 77.3431 44 79 44H93"></path><path stroke="#000" stroke-linecap="round" stroke-width="5" d="M54 70L61.9931 62.8062C63.134 61.7794 64.866 61.7794 66.0069 62.8062L74 70M64 71L64 82"></path></svg>
                        </div>
                        <div className="flex flex-col mb-3">
                            <h3>Drag and Drop a PDF</h3>
                            <h4 className="items-center text-sm text-gray-400 flex justify-center">* Limit 25MB per file</h4>
                        </div>
                       
                        <input type="file" onChange={handleFileChange} ref={inputRef} className="hidden"/>
                        <Button onClick={handleClick} variant={'lavender'}>Upload your file</Button>
                        
                    </div>
            </div>) :(<Uploaded/> )}
            <div className="text-gray-500 font-light p-2">
                Select your course & subject*
                <div className="flex space-x-16 mt-2">
                    <div className="bg-white rounded-full p-2" id="course type">
                    <DropdownMenu>
                    <DropdownMenuTrigger className="flex items-center gap-2"><span className="font-normal">Coursework Type</span>
                    <div className="">
                        <svg xmlns="http://www.w3.org/2000/svg" height="20" width="20" xmlSpace="preserve" viewBox="0 0 101 101" id="down">
                        <path d="m80.5 33-30 30-30-30c-.9-.9-2.5-.9-3.4 0s-.9 2.5 0 3.4L48.8 68c.5.5 1.1.7 1.7.7.6 0 1.2-.2 1.7-.7l31.7-31.7c.9-.9.9-2.5 0-3.4s-2.5-.9-3.4.1z"></path>
                        </svg>
                    </div>
                    
                    </DropdownMenuTrigger>
                    <DropdownMenuContent ref={dropRef}>
                        <DropdownMenuItem onClick={()=>{handleCourseTypeChange("Internal Assesment")}}>Internal Assesment</DropdownMenuItem>
                        <DropdownMenuItem onClick={()=>{handleCourseTypeChange("Extended Essay")}}>Extended Essay</DropdownMenuItem>
                        <DropdownMenuItem onClick={()=>{handleCourseTypeChange("Tok Essay")}}>Tok Essay</DropdownMenuItem>
                    </DropdownMenuContent>
                    </DropdownMenu>

                    </div>

                    <div id="subject" className="bg-white rounded-full p-2">
                    <DropdownMenu>
                    <DropdownMenuTrigger className="flex items-center gap-2"><span className="font-normal">Subject</span>
                    <svg xmlns="http://www.w3.org/2000/svg" height ="20" width="20" xmlSpace="preserve" viewBox="0 0 101 101" id="down">
                    <path d="m80.5 33-30 30-30-30c-.9-.9-2.5-.9-3.4 0s-.9 2.5 0 3.4L48.8 68c.5.5 1.1.7 1.7.7.6 0 1.2-.2 1.7-.7l31.7-31.7c.9-.9.9-2.5 0-3.4s-2.5-.9-3.4.1z"></path>
                    </svg>
                    </DropdownMenuTrigger>
                    <DropdownMenuContent>
                        <DropdownMenuItem onClick={()=>{handleSubjectChange("Mathematics")}}>Mathematics </DropdownMenuItem>
                        <DropdownMenuItem onClick={()=>{handleSubjectChange("Physics HL")}}>Physics HL</DropdownMenuItem>
                        <DropdownMenuItem onClick={()=>{handleSubjectChange("English")}}>English</DropdownMenuItem>
                    </DropdownMenuContent>
                    </DropdownMenu>

                    </div>
                </div>
            </div>

            <div>
                <div className="text-gray-500 font-light p-2">
                    Enter your essay title*(Required)
                </div>
                <Input ref={titleRef} className="rounded-full w-fit" placeholder="how nation works..."/>
            </div>
            
            <Link href={`/Score`} >
             <Button variant={'lavender'} className="w-fit p-2 mt-5 gap-2" onClick={()=>{
                const title = titleRef.current?.value;
                const fileObject={
                    file: currentFile,
                    metaData,
                    formData:{
                    courseType,
                    subject,
                    title
            }
            
                }
                addFile(fileObject);
             }}>
                
                <div>
                <svg xmlns="http://www.w3.org/2000/svg" height="20" width="20" viewBox="0 0 64 64" id="stars">
                <polygon fill="#8f7fd3" points="19.64 24.33 19.33 24.26 20.2 20.36 29.03 30.9 42.71 29.6 35.42 41.25 40.88 53.86 38.12 53.17 38.2 52.83 32.95 40.83 38.58 32.11 27.42 33.14 19.64 24.33"></polygon>
                <polygon fill="#ae9aed" points="38.58 32.11 32.95 40.83 38.2 52.83 38.12 53.17 27.55 50.53 17.24 59.62 16.29 45.91 4.46 38.92 17.21 33.78 19.33 24.26 19.64 24.33 27.42 33.14 38.58 32.11"></polygon>
                <ellipse cx="55.76" cy="37.15" fill="#fff" rx="4.62" ry="5.15"></ellipse>
                <polygon fill="#f9db03" points="52.67 11.79 47.7 16 48.35 22.49 42.81 19.06 36.84 21.69 38.39 15.36 34.04 10.5 40.54 10.01 43.82 4.38 46.3 10.41 52.67 11.79"></polygon>
                <path fill="#fff" d="M11.78,14.69a4.607,4.607,0,0,0-4.34,4.85,4.616,4.616,0,0,0-4.36-4.85A4.618,4.618,0,0,0,7.43,9.83,4.624,4.624,0,0,0,11.78,14.69Z"></path>
                <path fill="#35265d" d="M42.619 28.6l-13.161 1.25L20.968 19.72a1 1 0 0 0-1.742.425l-2.879 12.9L4.085 37.991a1 1 0 0 0-.135 1.788L15.332 46.5l.912 13.189a1 1 0 0 0 .618.856 1 1 0 0 0 1.041-.175l9.914-8.747 12.826 3.208a1 1 0 0 0 1.16-1.368L36.548 41.336l7.014-11.2a1 1 0 0 0-.943-1.527zM34.573 40.721a1 1 0 0 0-.07.928L39.162 52.4 27.792 49.56a1 1 0 0 0-.9.22L18.1 57.534l-.809-11.692a1 1 0 0 0-.489-.792L6.712 39.088l10.87-4.382a1 1 0 0 0 .6-.71l2.552-11.438 7.527 8.983a.992.992 0 0 0 .861.354l11.667-1.108zM53.314 12.549a1 1 0 0 0-.434-1.74L47.023 9.54 44.749 4a1 1 0 0 0-1.789-.124L39.943 9.05l-5.974.45a1 1 0 0 0-.671 1.663l3.992 4.469-1.418 5.822a1 1 0 0 0 1.375 1.151l5.482-2.415 5.1 3.148a1 1 0 0 0 1.521-.952l-.6-5.961zM47.052 15.24a1 1 0 0 0-.349.863l.452 4.469-3.822-2.36a1 1 0 0 0-.929-.064L38.3 19.958 39.357 15.6a1 1 0 0 0-.225-.9l-2.992-3.35L40.618 11a1 1 0 0 0 .789-.493L43.668 6.63l1.7 4.155a1 1 0 0 0 .713.6l4.39.951zM60.379 36.15A3.917 3.917 0 0 1 56.756 32a1 1 0 0 0-2 0 3.915 3.915 0 0 1-3.615 4.15 1 1 0 0 0 0 2A3.92 3.92 0 0 1 54.765 42.3a1 1 0 0 0 2 0 3.915 3.915 0 0 1 3.614-4.151 1 1 0 0 0 0-2zM55.764 38.8a5.946 5.946 0 0 0-1.555-1.653 5.967 5.967 0 0 0 1.548-1.65 5.928 5.928 0 0 0 1.554 1.653A5.935 5.935 0 0 0 55.764 38.8zM6.437 19.538a1 1 0 0 0 2 0 3.63 3.63 0 0 1 3.346-3.852 1 1 0 1 0 0-2A3.633 3.633 0 0 1 8.428 9.834a1 1 0 0 0-2 0A3.631 3.631 0 0 1 3.08 13.686a1 1 0 1 0 0 2A3.634 3.634 0 0 1 6.437 19.538zm.992-6.3A5.661 5.661 0 0 0 8.8 14.688a5.651 5.651 0 0 0-1.359 1.447 5.664 5.664 0 0 0-1.367-1.451A5.655 5.655 0 0 0 7.429 13.237z"></path>
                </svg>
                </div>
                Evaluate your score
                </Button>
                </Link>
        </div>
        
    {isClient && fileArray ? (<div>
        {fileArray.map((file: any)=>
           
            <MyCourseWork key={file} file={file}/>
            )}
            
           
        </div>) :""}
        
    </div>
}