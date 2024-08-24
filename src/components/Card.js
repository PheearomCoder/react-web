function Card({imageURL, title, price}){
    return(
        <>
            <div className="card h-100 shadow-sm border-0">
                <img 
                    src={imageURL ?? "https://picsum.photos/640/640?r=5369"} 
                    className="card-img-top" alt="card image" 
                />
                <div className="card-body">
                    <h4 className="card-text">{title}</h4>
                </div>
                <div className="card-body">
                    <h4 className="card-text">{price}</h4>
                </div>
            </div>
        </>
    )
}
export default Card