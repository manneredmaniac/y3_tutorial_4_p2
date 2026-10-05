import { useState } from 'react'

const App = () => {
  const [persons, setPersons] = useState([
    { name: 'Arto Hellas' }
  ]) 
  const [newName, setNewName] = useState('')

  // event handler for handling clicks to submit
  const addName = (event) => {
    event.preventDefault()
    console.log('Button clicked', event.target)
  }

  // event handler 
  const handleNameChange = (event) => {
    console.log(event.target.value)
    setNewName(event.target.value)
  }

  return (
    <div>
      <h2>Phonebook</h2>
      <form onSubmit={addName}>
        
        <div>
          name: <input />
        </div>
        
        <div>
          number: <input />
        </div>

        <div>
          <button type="submit">add</button>
        </div>
      
        <div>debug: {newName} </div>

        <div>
        {persons.map(person => person.name)}
        </div>

      </form>
      <h2>Numbers</h2>
      ...
    </div>
  )
}

export default App