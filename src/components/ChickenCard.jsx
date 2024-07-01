import "./ChickenCard.css";

function ChickenCard({ photo, job, nom, description }) {
	return (
		<>
			<img src={photo} alt="" />
			<h2>{nom}</h2>
			<h3>{job}</h3>
			<p>{description}</p>
		</>
	);
}

export default ChickenCard;
