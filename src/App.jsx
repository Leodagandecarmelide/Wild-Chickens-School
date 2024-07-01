import ChickenCard from "./components/ChickenCard";
import tableauDePoulets from "../chickenTab.json";
import "./App.css";

function App() {
	const ClasseDePoulets = tableauDePoulets.chickenTab;

	const teachers = ClasseDePoulets.filter((teacher) =>
		teacher.position.includes("Teacher")
	);

	const students = ClasseDePoulets.filter((student) =>
		student.position.includes("Student")
	);

	console.log(ClasseDePoulets);
	return (
		<>
			<section>
				<h2>Profs</h2>
				{teachers.map((elementdutableau) => (
					<ChickenCard
						key={elementdutableau.id}
						photo={elementdutableau.imgSrc}
						nom={elementdutableau.name}
						job={elementdutableau.position}
						description={elementdutableau.biography}
					/>
				))}
			</section>

			<section>
				<h2>Eleves</h2>
				{students.map((elementdutableau) => (
					<ChickenCard
						key={elementdutableau.id}
						photo={elementdutableau.imgSrc}
						nom={elementdutableau.name}
						job={elementdutableau.position}
						description={elementdutableau.biography}
					/>
				))}
			</section>
		</>
	);
}

export default App;
