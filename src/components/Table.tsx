"use client"
import Button from "./Button"
import { handleDifficulty,useButtonHandle, handleBonificacao, handleDeduz } from "@/utils/buttonHandle"
export default function Table(){
    const { isLoading, handleExecute } = useButtonHandle();
    return(
        <>
         <div className="overflow-x-auto">
         <h2 className="text-xl font-bold text-center mb-4">Título da Tabela</h2>
            <table className="min-w-full bg-white border border-slate-200 ">
                <thead>
                <tr>
                    <th className="p-0 border-b">
                        <Button text={'Dificuldade'} onClick={() => console.log('Sem click')} onMouseOver={handleDifficulty}/>
                    </th>
                    <th className="p-0 border-b">
                        <Button text={'Execução'} onClick={handleExecute} onMouseOver={() => console.log('Sem onMouserOver')}/>
                        {isLoading && (
        <div
          className="h-12 w-12 mt-4 border-4 skew-y-12 origin-bottom -rotate-12 -translate-y-6
            border-l-gray-200
            border-r-gray-200
            border-b-gray-200
            border-t-blue-700
            animate-spin
            ease-linear
            rounded-full"
        ></div>
      )}
                    </th>
                    {/*<th className="p-0 border-b"> 
                        <Button text={'Dedução'} onClick={handleDeduz} onMouseOver={() => console.log('Sem onMouserOver')}/>
                    </th>
                    <th className="p-0 border-b">
                        <Button text={'Bonificação'} onClick={handleBonificacao} onMouseOver={()=> console.log('Sem onMouserOver')}/>
                    </th>*/}
                </tr>
                </thead>
            </table>
    </div>
        </>
    )
}