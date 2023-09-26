import { ChevronDown } from 'lucide-react'
import { Lesson } from './Lesson'
import * as Collapsible from '@radix-ui/react-collapsible';
import { useStore } from '../zustand-store';

interface iModulo {
    index: number,
    title: string,
    amountLessons: number,

}

export const Module = ( {index, amountLessons, title }: iModulo ) => {

    const { currentLessonIndex, currentModuleIndex, play, lessons } = useStore(store => {
        return {
            lessons: store.course?.modules[index].lessons,
            currentLessonIndex: store.currentLessonIndex,
            currentModuleIndex: store.currentModuleIndex,
            play: store.play,
        }
    })
    
    return (
        <Collapsible.Root className='group' defaultOpen={index === 0}>
            <Collapsible.Trigger className='flex w-full items-center gap-3 bg-zinc-800 p-4' >
                <div className='flex h-10 w-10 rounded-full items-center justify-center bg-zinc-950 text-xs' >
                    {index + 1}
                </div>
                
                <div className='flex flex-col gap-1 text-left' >
                    <strong className='text-sm' > {title} </strong>
                    <span className='text-xs text-zinc-400' > {amountLessons} aulas </span>
                </div>

                <ChevronDown className='w-5 h-5 ml-auto text-zinc-400 group-data-[state=open]:rotate-180 transition-transform' />
            </Collapsible.Trigger>

            <Collapsible.Content>

                <nav className='realative flex flex-col gap-4 p-6' >

                    {lessons && lessons.map((lesson, lessonIndex) => {
                        const isLessonActive = currentModuleIndex === index && currentLessonIndex === lessonIndex
                        return (
                            <Lesson
                                key={lesson.id} 
                                title={lesson.title} 
                                duration={lesson.duration} 
                                onPlay={() => play([index, lessonIndex])}
                                isLessonActive={isLessonActive}
                            />
                            
                        )
                    })}
                
                </nav>
            </Collapsible.Content>
        </Collapsible.Root>
    )
}