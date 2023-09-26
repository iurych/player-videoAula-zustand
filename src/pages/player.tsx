/* eslint-disable react-hooks/exhaustive-deps */
import { MessageCircle } from 'lucide-react'
import { VideoPlayer } from '../components/VideoPlayer'
import { Module } from '../components/Module'
import { Header } from '../components/Header'
import { useEffect } from 'react'
import { useCurrentLesson, useStore } from '../zustand-store'

export const Player = () => {
    const { course, load } = useStore(store => {
        return {
            course: store.course,
            load: store.load,
        }
    })
    const { currentLesson } = useCurrentLesson()

    useEffect(() => {
        load()
    }, [])

    useEffect(() => {
        if(currentLesson) {
            document.title = `Aula: ${currentLesson.title}`
        }
    }, [currentLesson])

    return (
        <div className='h-screen bg-zinc-950 text-zinc-50 flex justify-center items-center' >
            <div className="flex w-[1100px] flex-col gap-6">
                <div className="flex items-center justify-between" >
                    
                     <Header />

                    <button 
                        type='submit' 
                        className='flex items-center gap-2 rounded bg-violet-500 px-3 py-2 text-sm font-medium text-white transition hover:bg-violet-600 duration-300' >
                        
                        <MessageCircle className='w-4 h-4' /> 
                        Deixar feedback

                    </button>

                </div>


                <main className='relative flex overflow-hidden rounded-lg border border-zinc-800 bg-zinc-900 shadow pr-80' >
                   
                    <div className='flex-1' >

                       <VideoPlayer />

                    </div>
                   
                    <aside className='w-80 absolute top-0 bottom-0 right-0 divide-y-2 divide-zinc-900 border-l border-zinc-800 bg-zinc-900 overflow-y-scroll scrollbar-thin scrollbar-track-zinc-950 scrollbar-thumb-zinc-800' >
                         {course?.modules && course?.modules.map((module, index) => {
                            return (
                                <Module 
                                    key={module.id}
                                    index={index} 
                                    title={module.title} 
                                    amountLessons={module.lessons.length}
                                />

                            )
                        })}
                        
                        
                    </aside>
                    
                </main>
            
                
            </div>            
            
        </div>
    )
}