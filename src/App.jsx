import { useState } from 'react'

const App = () => {
  const [persons, setPersons] = useState([
    { name: 'Arto Hellas' }
  ]) 
  const [newName, setNewName] = useState('')

  // event handler for handling clicks to submit to create a new note
  const addName = (event) => {
    event.preventDefault()
    // create object that receives state from newName
    const nameObject = {
      name: newName
    }
    setPersons(persons.concat(nameObject))
    // reset the value of the controlled input
    setNewName('')
  }

  // event handler which deals with form inputs
  const handleNameChange = (event) => {
    console.log(event.target.value)
    setNewName(event.target.value)
  }

  return (
    <div>
      <h2>Phonebook</h2>
      <form onSubmit={addName}>
        
        <div>
          name: <input value={newName}
                        onChange={handleNameChange} />
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