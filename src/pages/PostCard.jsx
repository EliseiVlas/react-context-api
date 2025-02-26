

const PostCard = (props) => {

    // destructuring dell'oggetto props
    const menu = props;

    return (
        <>
            <div className='pizzaItem'>
                <h2>{menu.title}</h2>
                <img src={menu.image} alt={menu.title} />
                <p>{menu.content}</p>
            </div>

        </>
    )

}

export default PostCard