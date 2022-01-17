

function Student(props) {

    const score = props.studentData.scores.map((data) => {
        return <p>|{data.score}|</p>
    })

    const date = props.studentData.scores.map((data) => {
        return <p>|{data.date}|</p>
    })

    return (
        <div className="main">
            <h2>Name: {props.studentData.name} </h2>
            <div>
                <h3>Bio:</h3>
                <p id="bio">{props.studentData.bio}</p>
            </div>
            <h3>Scores:</h3>
            <p className="element">{score}</p>
            <h3>Dates:</h3>
            <p className="element">{date}</p>
        </div>
    )
}


export default Student;



