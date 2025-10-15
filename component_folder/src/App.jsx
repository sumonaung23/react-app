import Button from "./Button"
import Student from "./Student"
import UserGreeting from "./UserGreeting"

function App() {
  return (
    <>
      <div className="flex">
        <UserGreeting isLoggedIn = {true} />
      </div>
    </>
  )
}

export default App
