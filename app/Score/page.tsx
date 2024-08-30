// "use client"
// import { useCurrentFile } from "@/components/Evaluate";
// import { Document , pdfjs, Page} from 'react-pdf'

// pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.js`;
// pdfjs.GlobalWorkerOptions.workerSrc = new URL(
//     'pdfjs-dist/build/pdf.worker.min.mjs',
//     import.meta.url,
//   ).toString();
  
// export default function Score(){
//     const currentFile = useCurrentFile((state:any)=> state.currentFile);
//     return <div>
//       <Document file="https://morth.nic.in/sites/default/files/dd12-13_0.pdf" >
//         <Page pageNumber={1} />
//       </Document>
//     </div>
// }

// "use client"
// import { useEffect, useRef, useState } from "react";
// import { Document, Page, pdfjs } from "react-pdf";
// import { useCurrentFile } from "@/components/Evaluate";
// pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.js`;

// export default function PDFViewer(props: any) {
//   const [numPages, setNumPages] = useState<number>(0);
//   const [pageNumber, setPageNumber] = useState<number>(1); // start on first page
//   const [loading, setLoading] = useState(true);
//   const [pageWidth, setPageWidth] = useState(0);

//   const currentFile = useCurrentFile((state:any)=> state.currentFile);
// useEffect(()=>{
//     console.log(currentFile)
// },[])
//   function onDocumentLoadSuccess({
//     numPages: nextNumPages,
//   }: {
//     numPages: number;
//   }) {
//     setNumPages(nextNumPages);
//   }

//   function onPageLoadSuccess() {
//     setPageWidth(window.innerWidth);
//     setLoading(false);
//   }

//   const options = {
//     cMapUrl: "cmaps/",
//     cMapPacked: true,
//     standardFontDataUrl: "standard_fonts/",
//   };

//   // Go to next page
//   function goToNextPage() {
//     setPageNumber((prevPageNumber) => prevPageNumber + 1);
//   }

//   function goToPreviousPage() {
//     setPageNumber((prevPageNumber) => prevPageNumber - 1);
//   }


//   return (
//     <>
//       <Nav pageNumber={pageNumber} numPages={numPages} />
//       <div
//         hidden={loading}
//         style={{ height: "calc(100vh - 64px)" }}
//         className="flex items-center"
//       >
//         <div
//           className={`flex items-center justify-between w-full absolute z-10 px-2`}
//         >
//           <button
//             onClick={goToPreviousPage}
//             disabled={pageNumber <= 1}
//             className="relative h-[calc(100vh - 64px)] px-2 py-24 text-gray-400 hover:text-gray-50 focus:z-20"
//           >
//             <span className="sr-only">Previous</span>
            
//           </button>
//           <button
//             onClick={goToNextPage}
//             disabled={pageNumber >= numPages!}
//             className="relative h-[calc(100vh - 64px)] px-2 py-24 text-gray-400 hover:text-gray-50 focus:z-20"
//           >
//             <span className="sr-only">Next</span>
            
//           </button>
//         </div>

//         <div className="h-full flex justify-center mx-auto">
//           <Document
//             file={currentFile}
//             onLoadSuccess={onDocumentLoadSuccess}
//             options={options}
//             renderMode="canvas"
//             className=""
//           >
//             <Page
//               className=""
//               key={pageNumber}
//               pageNumber={pageNumber}
//               renderAnnotationLayer={false}
//               renderTextLayer={false}
//               onLoadSuccess={onPageLoadSuccess}
//               onRenderError={() => setLoading(false)}
//               width={Math.max(pageWidth * 0.8, 390)}
//             />
//           </Document>
//         </div>
//       </div>
//     </>
//   );
// }


// function Nav({pageNumber, numPages}: {pageNumber: number, numPages: number}) {
//   return (
//     <nav className="bg-black">
//       <div className="mx-auto px-2 sm:px-6 lg:px-8">
//         <div className="relative flex h-16 items-center justify-between">
//           <div className="flex flex-1 items-center justify-center sm:items-stretch sm:justify-start">
//             <div className="flex flex-shrink-0 items-center">
//               <p className="text-2xl font-bold tracking-tighter text-white">
//                 Papermark
//               </p>
//             </div>
//           </div>
//           <div className="absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0">
//             <div className="bg-gray-900 text-white rounded-md px-3 py-2 text-sm font-medium">
//               <span>{pageNumber}</span>
//               <span className="text-gray-400"> / {numPages}</span>
//             </div>
//           </div>
//         </div>
//       </div>
//     </nav>
//   );
// }

// pages/pdf.js
// "use client"
// import PdfViewer from '../../components/PdfView';

// const PdfPage = () => {
//   const pdfUrl = '/public/path/to/your/your-pdf-file.pdf'; // Replace with your PDF file path

//   return (
//     <div>
//       <h1>PDF Viewer</h1>
//       <PdfViewer pdfUrl={pdfUrl} />
//     </div>
//   );
// };

// export default PdfPage;

export default function Score(){
  return <div>
    
  </div>
}
