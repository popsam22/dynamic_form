import { useState } from "react";

interface InputField {
  name: string;
  age: string;
}

const App = () => {
  const [inputFields, setInputFields] = useState([{ name: "", age: "" }]);

  const handleformChange = (
    index: number,
    e: React.ChangeEvent<HTMLInputElement>
  ) => {
    let data = [...inputFields];
    data[index][e.target.name as keyof InputField] = e.target.value;
    setInputFields(data);
  };

  const addFields = () => {
    let newField = { name: "", age: "" };
    setInputFields([...inputFields, newField]);
  };

  const removeFields = (index: number) => {
    let data = [...inputFields];
    data.splice(index, 1);
    setInputFields(data);
  };

  const submit = (e) => {
    e.preventDefault();
    console.log(inputFields);
  };

  return (
    <div>
      <form onSubmit={submit}>
        {inputFields.map((input, index) => {
          return (
            <div key={index}>
              <input
                name="name"
                placeholder="Name"
                value={input.name}
                onChange={(e) => handleformChange(index, e)}
              />
              <input
                name="age"
                placeholder="Age"
                value={input.age}
                onChange={(e) => handleformChange(index, e)}
              />
              <button onClick={() => removeFields(index)}>Remove</button>
            </div>
          );
        })}
      </form>
      <button onClick={addFields}>Add more</button>
      <button onClick={submit}>Submit</button>
    </div>
  );
};

export default App;
