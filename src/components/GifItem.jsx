
export const GifItem = ({title,url}) => {
  return (

    <div className="card">
        <img src={url} alt={title} />
        <a href={url} target="_blank" >{title}</a>                                       
    </div>
  )
}
