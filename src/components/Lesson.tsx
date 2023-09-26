import { PlayCircle, Video } from 'lucide-react'

interface iLesson {
    title: string,
    duration: string,
    isLessonActive?: boolean,
    onPlay: () => void
}

export const Lesson = ({duration, title, onPlay, isLessonActive = false }: iLesson ) => {

    return (
        <button 
            onClick={onPlay}
            data-active={isLessonActive}
            disabled={isLessonActive}
            className='group group/lesson flex items-center gap-3 text-sm text-zinc-400 data-[active=true]:text-emerald-400 enabled:hover:text-zinc-100'
        >
            {
                isLessonActive ? (
                    <PlayCircle className='w-4 h-4 text-emerald-400 ' />
                ) : (

                    <Video className='w-4 h-4 text-zinc-500 group-hover/lesson:text-zinc-400'/>
                )
            }
            
            <span className=' group-hover/lesson:text-zinc-400'> {title} </span>
            <span className='ml-auto font-mono text-zinc-500 group-data-[active=true]:text-emerald-400 group-hover/lesson:text-zinc-400' > {duration} </span>

        </button>
    )
}