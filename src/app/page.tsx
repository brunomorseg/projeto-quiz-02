'use client'

import { QuestionItem } from "@/components/QuestionItem";
import { questi } from "@/data/questions";
import { useState } from "react";

const Page = () => {
  const title = 'Quiz de Culinária'

  const [answers, setAnswers] = useState<number[]>([])

  const [currentQuestion, setCurrentQuestion] = useState(0)

  const [showResult,setShowResult] = useState(false)

  const loadNextQuestion = ()=>{
    if(questi[currentQuestion+1]) {
      setCurrentQuestion(currentQuestion+1)
    } else setShowResult(true)
  }
  const handleAnswered = (answer:number) => {
    setAnswers([...answers, answer])
    loadNextQuestion()
  }

  return (
      <div className="w-full h-screen flex justify-center items-center bg-blue-500">
          <div className="w-full max-w-xl rounded-md bg-white text-black shadow shadow-black">
            <div className="p-5 font-bold text-2xl border-b border-gray-300 text-center">{title}</div>
            <div className="p-5">
              {!showResult && 
              <QuestionItem
                questao={questi[currentQuestion]}
                count={currentQuestion+1}
                onAnswer={handleAnswered}
              />
            }
            {showResult && <div className="text-3xl font-bold text-center">Fim do jogo</div>}
         
            </div>
            <div className="p-5 text-center border-t border-gray-300">
              {currentQuestion + 1} de {questi.length} pergunta{questi.length ===1? '':'s'}
            </div>
          </div>

      </div>
  )
}

export default Page;