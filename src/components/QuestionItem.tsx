
import { Questions } from "@/type/Questions";
import { useState } from "react";

type Props ={
    questao: Questions;
    count: number;
    onAnswer: (answer: number) => void;
}

export const QuestionItem = ({questao, count, onAnswer}: Props) => {

    const [selecteAnswer,setSelecteAnswer] = useState <number | null>(null)

    const checkQuestion =(key:number) => {
            if (selecteAnswer === null) {
                setSelecteAnswer(key)

                setTimeout(()=>{
                    onAnswer(key)
                    setSelecteAnswer(null)
                }, 1500)
                
            }
    }
    return(
        <div>
             <div className="text-2xl font-bold mb-5">{count}. {questao.question}</div>  
             <div>
                {questao.options.map((item,key)=>(
                    <div key={key} 
                    onClick={()=>checkQuestion(key)}
                    className={`border px-3 py-2 rounded-md text-lg mb-4  bg-blue-100 border-blue-300 
                    
                    ${selecteAnswer == null ? 'cursor-pointer hover:opacity-60' :  'cursor-auto' }

                    ${selecteAnswer !== null && selecteAnswer === questao.answer && selecteAnswer === key && 'bg-green-100 border-green-600'}

                    ${selecteAnswer !== null && selecteAnswer !== questao.answer && selecteAnswer === key && 'bg-red-100 border-red-500'}

                    `}>{item}</div>
                ))}    
                
                  
            </div> 
        </div>
    )
}