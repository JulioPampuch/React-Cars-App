import { Fragment, useState } from "react"

const initialState = {
  name: '',
  originalidade: '',
  descricao: '',
  image_url: ''
}

const Form = (props) => {

  const [fields, setFields] = useState(
   initialState
  )

  const handleChange = (event) => {
    setFields({
      ...fields,
      [event.target.name]: event.target.value
    })
  }

  const handleSubmit = (event) => {
    event.preventDefault()
    props.addCar(fields)
    setFields(initialState)
  }

  return (
    <div className="px-1 mx-auto w-2/4 flex flex-wrap">
      <h2 className="text-lg pt-2">Adicionar carro:</h2>
      <form className="mb-5 mt-1 py-1 flex items-center" onSubmit={handleSubmit}>
        <div>
          <label htmlFor="name" className="px-2">Nome:</label>
          <input id="name" type="text" name="name" className="border-style: solid border-2 rounded" onChange={handleChange} value={fields.name} />
        </div>
        <div className="">
          <label htmlFor="originalidade" className="px-2">Originalidade:</label>
          <input id="originalidade" type="text" name="originalidade" className="border-style: solid border-2 rounded" onChange={handleChange} value={fields.originalidade} />
        </div>
        <div className="">
          <label htmlFor="descricao" className="px-2">Descrição:</label>
          <input id="descricao" type="text" name="descricao" className="border-style: solid border-2 rounded" onChange={handleChange} value={fields.descricao} />
        </div>
        <div className="">
          <label htmlFor="image_url" className="px-2">Url da imagem:</label>
          <input id="image_url" type="text" name="image_url" className="border-style: solid border-2 rounded" onChange={handleChange} value={fields.image_url} />
        </div>
        <input type="submit" value="Enviar" className="h-2/3 bg-zinc-400 px-2 mt-4 mx-2 rounded hover:bg-zinc-500" />
      </form>
    </div>
  )
}

export default Form