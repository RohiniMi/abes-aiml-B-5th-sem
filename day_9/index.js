const root = ReactDOM.createRoot(document.getElementById("root"));
const ChildComponent = ({user}) => {
    // const { name, email, password, section } = props;
    return (<div id="student-container">
        {/* <h1>Name: {name}</h1>
        <h1>Email: {email}</h1>
        <h1>Email: {section}</h1> */}

        {user.map((u) => <div key={u.id}>
            <h1>Name: {u.name}</h1>
            <h2>Email: {u.email}</h2>
            <h3>Section: {u.section}</h3>
            <h3>Subjects: {u.subject}</h3>
        </div>)}

    </div>)
}
const ParentComponent = () => {
    const user = [{
        name: "Evaan",
        email: "evaan@gmail.com",
        password: "abc123",
        section: "cse-aiml-b",
        subject: ["DAA", "DBMS", "AI", "OOPS", "CLOUD COMPUTING","C++"]
    },
    {
        name: "Ananya",
        email: "anaya@gmail.com",
        password: "xyz123",
        section: "cse-aiml-b",
        subject: ["DAA", "DBMS", "AI", "OOPS", "CLOUD COMPUTING","JAVA"]
    },
    {
        name: "Ayush",
        email: "ayush@gmail.com",
        password: "abc123",
        section: "cse-aiml-b",
        subject: ["DAA", "DBMS", "AI", "OOPS", "CLOUD COMPUTING","JAVASCRIPT"]
    },
    {
        name: "Abhishek",
        email: "abhishek@gmail.com",
        password: "xyz123",
        section: "cse-aiml-b",
        subject: ["DAA", "DBMS", "AI", "OOPS", "CLOUD COMPUTING","C++"]
    },
    {
        name: "Chirag",
        email: "chirag@gmail.com",
        password: "abc123",
        section: "cse-aiml-b",
        subject: ["DAA", "DBMS", "AI", "OOPS", "CLOUD COMPUTING","PYTHON"]
    },
    {
        name: "Ankit",
        email: "ankit@gmail.com",
        password: "xyz123",
        section: "cse-aiml-b",
        subject: ["DAA", "DBMS", "AI", "OOPS", "CLOUD COMPUTING","JAVA"]
    }]
    return (<>
        {/* <ChildComponent {...user[0]} section="cse-aiml-c" /> */}
        <ChildComponent  user={user}/>
    </>)
}
const reactElement = <ParentComponent />
root.render(reactElement);