import loc from '../assets/loc.png'

export const Card = (props) => {
  return (
    <div className="card">
        <img src={props.item.imageUrl} alt="" />
       
        <section className="right">
        <div className="map">
            <img src={loc} alt="" />
            <h3>{(props.item.location).toUpperCase()}</h3>
            <a href={props.item.googleMapsUrl} target='_blank'>View on Google Maps</a>
        </div>
        <h1>{props.item.title}</h1>
        <p><strong>{props.item.startDate}-{props.item.endDate}</strong></p>
        <p>{props.item.description}</p>
        </section>
    </div>
  )
}
