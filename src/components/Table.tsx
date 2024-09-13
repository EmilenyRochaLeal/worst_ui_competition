"use client"
import Button from "./Button"
import { handleDifficulty, useButtonHandle } from "@/utils/buttonHandle"
export default function Table() {
    const { isLoading, handleExecute } = useButtonHandle();
    return (
        <>
            <div className="overflow-x-auto">
                <h2 className="text-xl font-bold text-center mb-4">Pontuação</h2>
                <table className="min-w-full bg-white border border-slate-200 ">
                    <thead>
                        <tr>
                            <th className="px-4 py-2 border border-gray-300">
                                <Button text={'Dificuldade'} onClick={() => console.log('Sem click')} onMouseOver={handleDifficulty} />
                            </th>
                            <th className="px-4 py-2 border border-gray-300">
                                <Button text={'Execução'} onClick={handleExecute} onMouseOver={() => console.log('Sem onMouserOver')} />
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
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td className="px-4 py-2 border border-gray-300"></td>
                            <td className="px-4 py-2 border border-gray-300"></td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </>
    )
}