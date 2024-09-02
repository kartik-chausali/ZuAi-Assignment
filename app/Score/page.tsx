 "use client"
import Chart from "@/components/Chart";
import CriteriaA from "@/components/CriteriaA";
import { useCurrentFile } from "@/components/Evaluate";
import PdfViewer from "@/components/PdfView";
import  ErrorBoundary  from "@/components/ErrorBoundary";

export default function Score(){
  const currentFile = useCurrentFile((state:any)=> state.currentFile);
  return <div className="flex">
    <ErrorBoundary>
    <PdfViewer pdfUrl={currentFile}/>
    </ErrorBoundary>
    <div className="flex flex-col h-full w-full items-center">
      <Chart/>
      <CriteriaA/>
      <CriteriaA/>
      <CriteriaA/>
    </div>
    
  </div>
}
