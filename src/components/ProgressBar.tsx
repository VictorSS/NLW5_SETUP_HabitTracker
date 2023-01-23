interface ProgressBarProps {
    progress: number
}


export function ProgressBar(props: ProgressBarProps) {
    
    const progressStyles = {
            width: `${props.progress}%`
    }
    
    return(
   
        <div className='rounded-xl h-3 bg-zinc-700 w-full mt-4'>
        <div
            role="progressbar"
            aria-label='progresso de hábitos completados neste dia' 
            aria-aria-valuenow={props.progress}
            className='h-3 rounded-xl bg-violet-600'
            style={progressStyles} />
    </div>
    )
}