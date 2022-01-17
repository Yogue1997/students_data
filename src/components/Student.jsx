

function Student (props) {

    const Yo = props.studentData.scores.map((data) => data.score)

    return(
        <div>
            <h1>Name : {props.studentData.name}  </h1>
            <h3><strong>Bio :</strong> {props.studentData.bio}</h3>
            <p>Dates : {props.studentData.scores.map((data) => data.date)}</p>
            <p>Score : {Yo}</p>
        </div>
    )
}


export default Student;



