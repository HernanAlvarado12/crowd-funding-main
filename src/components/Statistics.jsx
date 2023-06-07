

const Statistics = ({ className, classTitle, classText, title, text }) => {

    const classListTitle = `text-lg font-bold ${classTitle}`
    const classListText = `text-md font-normal ${classText}`
    return (
        <article className={className}>
            <h2 className={classListTitle}>{title}</h2>
            <p className={classListText}>{text}</p>
        </article>
    )
}

Statistics.defaultProps = {
    className: '',
    classText: '',
    classTitle: '',
}

export { Statistics }