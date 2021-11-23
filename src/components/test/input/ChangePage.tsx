const ChangePage = (props) => {
    const handleClick = () => {
        window.location.href = `http://localhost:3000/${props.page}`
    }
    return <input type={props.type} value={props.value} onClick={handleClick} />
}

export default ChangePage
