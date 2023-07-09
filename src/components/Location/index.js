import './index.css'

const Location = props => {
  const {locationData} = props
  const {imageUrl, description, name} = locationData

  return (
    <li className="list-location">
      <div className="locationContainer">
        <img src={imageUrl} alt={name} className="image" />
        <div className="headingdescripton">
          <h1 className="heading">{name}</h1>
          <p className="paragraph">{description}</p>
        </div>
      </div>
    </li>
  )
}
export default Location
