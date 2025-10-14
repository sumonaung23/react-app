import Button from "./Button"
import Student from "./Student"

function App() {
  return (
    <>
      <div className="flex">
        <Student name = "Spongeboob" age = {23} isStudent = {true} />
        <Student name = "Patric" age = {35} isStudent = {false} />
        <Student name = "James" age = {13} isStudent = {true} />
        <Student name = "Sandy" age = {15} isStudent = {true} />
        <Student />
      </div>
    </>
  )
}

export default App
