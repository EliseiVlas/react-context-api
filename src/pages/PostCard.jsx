const PostCard = (props) => {

    // destructuring dell'oggetto props
    const { piatti } = props;

    return (
        <>
            <div className='pizzaItem'>
                <h2>{piatti.title}</h2>
                <img src={piatti.image} alt={piatti.title} />
                <p>{piatti.content}</p>
            </div>

        </>
    )

}

export default PostCard