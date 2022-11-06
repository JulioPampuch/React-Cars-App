import { Fragment, useEffect, useState } from "react"
import { useNavigate, useParams } from "react-router-dom"
import Car from "../car/car"
import Form from "../form/formCar"
import Header from "../header/header"

async function getCars(id) {
  let response = await fetch(`http://localhost:3000/api/${id}.json`)
  let data = await response.json()
  return data
}

const Cars = () => {
  const [car, setCars] = useState({})


  let { id } = useParams()
  let navigatePages = useNavigate()

  useEffect(() => {
    getCars(id).then(data => {
      setCars(data['data'])
    })
  }, [])

  const goToHome = () => {
    navigatePages('/')
  }

  return (
    <Fragment>
      <Header />
      <ul>
        <li className="mx-auto w-3/4">
          <Car
            name={car.name}
            originalidade={car.originalidade}
            descricao={car.descricao}
            motor={car.motor}
            torque={car.torque}
            image_url={car.image_url}
            image2_url={car.image2_url}
          />
        </li>
      </ul>
      <button type="button" className="bg-zinc-400 w-full py-1 hover:bg-zinc-500" onClick={goToHome}>Voltar à listagem</button>
    </Fragment>

  )
}

export default Cars