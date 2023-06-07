
const Button = ({ className = '', text, color, size }) => {
    const colorVariants = {
        cyan: 'text-white bg-cyan-100',
        black: 'bg-black'
    }
    const sizeVariants = {
        sm: 'px-1 text-sm',
        md: 'h-4 px-2 text-md rounded-full',
        md2: 'px-1 text-md rounded-full'
    }
    const classList = `font-bold focus:outline-none ${colorVariants[color]} ${sizeVariants[size]} ${className}`

    return (
        <button className={classList}>
            {text}
        </button>
    )
}

export { Button }