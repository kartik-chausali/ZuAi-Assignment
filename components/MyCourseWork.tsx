import { Badge } from "@/components/ui/badge"

export default function MyCourseWork({file}:{file:any}){
    return <div className="h-fit w-fit">
        <h2 className="p-2 mt-4 font-semibold text-xl text-gray-600 font-">My CourseWork</h2>
    <a href="#" className="flex flex-col items-center bg-white border border-gray-200 rounded-lg shadow md:flex-row md:max-w-xl hover:bg-gray-100 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700">
    <object
      className="rounded-md w-full max-w-md h-full pointer-events-none"
      data={file.file}
      type="image/png" //need to be updated based on type of file
    />
    {/* <img className="object-cover w-full rounded-t-lg h-96 md:h-auto md:w-48 md:rounded-none md:rounded-s-lg" src="/docs/images/blog/image-4.jpg" alt=""/> */}
    <div className="flex flex-col justify-between p-4 leading-normal">
        <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">{file.formData.title}</h5>
        <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">Here are the biggest enterprise technology acquisitions of 2021 so far, in reverse chronological order.</p>
        <div className=" space-x-2 grid grid-cols-2 w-fit">
            <Badge variant={'lavender'} className="m-2">{file.formData.courseType}</Badge>
             <Badge variant={'lavender'} className="m-2">{file.formData.subject}</Badge>
             <Badge variant={'lavender'} className="m-2"><svg xmlns="http://www.w3.org/2000/svg" height="20" width="20" viewBox="0 0 24 24" id="clock">
                    <g>
                        <g>
                        <path fill="none" d="M0 0h24v24H0z"></path>
                        <path fill="#7982ff" d="M1 12C1 4 4 1 12 1s11 3 11 11-3 11-11 11S1 20 1 12"></path>
                        <circle cx="12" cy="12" r="6" fill="#fff"></circle>
                        <path fill="#4e57d6" d="m13.91 13.22-1.43-1.43V7.66a.51.51 0 0 0-.5-.5.5.5 0 0 0-.5.5V12a.5.5 0 0 0 .14.36l1.58 1.58a.5.5 0 0 0 .71-.71Z"></path>
                        </g>
                    </g>
</svg>18 min read</Badge>

            <Badge variant={'lavender'} className="m-2"><svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" id="allignment">
  <path fill="none" stroke="#249fe6" d="M4 4.5h9m-9 2h5m-5 2h9m-9 2h5m-5 2h9"></path>
</svg>233 words</Badge>
       
        </div>
        
    </div>
</a>
    </div>
}