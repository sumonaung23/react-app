
function Student(props) {
    return (
        <div className="font-serif text-2xl p-5 m-3 border-1 border-s-stone-400 w-52 shadow-md shadow-gray-300">
            <p>Name: {props.name} </p>
            <p>Age: {props.age} </p>
            <p>Student: {props.isStudent ? "Yes" : "No"} </p>
        </div>
    );
}

export default Student