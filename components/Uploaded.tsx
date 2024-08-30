"use client"

import { useCurrentFile, useStore } from "./Evaluate"

export default function Uploaded(){
    
    const currentFile = useCurrentFile((state:any)=> state.currentFile);
    const setCurrentFile = useCurrentFile((state:any)=> state.setCurrentFile);

    const uploadedFile = useStore((state:any)=> state.uploadedFile)
    const setUploadedFile = useStore((state:any)=> state.setUploadedFile)
    return <div className="flex flex-col items-center">
    <object
      className="rounded-md w-full max-w-xs h-72"
      data={currentFile}
      type="image/png" //need to be updated based on type of file
    />
    <button
      onClick={() => {
        // setUploadedFile("")
        setCurrentFile("")
        localStorage.removeItem("uploadedFile");
        localStorage.removeItem("fileMetaData")
      }}
      className="px-4 mt-10 uppercase py-2 tracking-widest outline-none bg-red-600 text-white rounded"
    >
      Reset
    </button>
  </div>
}