import React from 'react';
import { FaRegFileAlt } from "react-icons/fa";
import { FaDownload } from "react-icons/fa6";
import { IoMdClose } from "react-icons/io";
import { motion } from "framer-motion"
import jsPDF from 'jspdf';
import html2canvas from 'html2canvas';
import { useRef } from 'react';

function Card({data}) {
   const cardRef =useRef(null);

   const downloadAsPDF = () => {
    const input = cardRef.current;
  
    html2canvas(input, { scale: 2 }).then((canvas) => {
      const pdf = new jsPDF('p', 'mm', 'a4');
      pdf.addImage(canvas.toDataURL('image/png'), 'PNG', 0, 0, 210, 297);
      pdf.save('card-content.pdf');
    });
  };
  
  return (
    
      <motion.div drag className='w-60 flex-shrink-0 relative rounded-[45px] overflow-hidden h-72 bg-zinc-900/90 text-white py-10 px-8' ref={cardRef}>
        <FaRegFileAlt />
        <p className='mt-5 text-sm font-semibold leading-tight'>
            {data.desc}
        </p>
        <div className='absolute bottom-0 left-0 w-full footer'>
            <div className='flex items-center justify-between px-8 py-3 mb-3'>
                <h5>{data.filesize}</h5>
                <span className='flex items-center justify-center rounded-full w-7 h-7 bg-zinc-600'>
                   {data.close? <IoMdClose /> : null }

                </span>
                <button className='flex items-center justify-center rounded-full w-7 h-7 bg-zinc-600' onClick={downloadAsPDF}>
                <FaDownload size=".7em" color='#fff' />
                </button>
            </div>
            {data.tag.isOpen && (
                     <div className={`flex items-center justify-center w-full py-4 ${data.tag.tagcolor === 'blue' ? 'bg-blue-600':'bg-green-600'}  tag`}>
                     <h3 className='text-sm font-semibold' >
                       {data.tag.tagtitle}
                       </h3>  
                   </div>
            ) 
            
            }
        
        </div>
      </motion.div>
       
  )
}

export default Card
