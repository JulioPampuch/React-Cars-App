import { Fragment, useEffect, useState } from "react"
import Car from "../car/car"
import Form from "../form/formCar"
import Header from "../header/header"


async function getCars() {
  let response = await fetch("http://localhost:3000/api/cars.json")
  let data = await response.json()
  return data
}

const Cars = () => {
  const [cars, setCars] = useState([])

  useEffect(() => {
    getCars().then(data => {
      setCars(data['cars'])

    })
  }, [])

  const addCar = (newCar) => {
    setCars([
      ...cars,
      newCar
    ])
  }

  return (
    <Fragment>
      <Header />
      <ul className="mx-auto w-4/6">
        <li className="">
          {cars.map((car, index) =>
            <Car
              id={car.id}
              name={car.name}
              originalidade={car.originalidade}
              descricao={car.descricao}
              image_url={car.image_url}
              key={index}
            />
          )}
        </li>
      </ul>
      <section className="bg-gray-200">
        <div>
          <Form addCar={addCar} />
        </div>
      </section>
    </Fragment>

  )
}

export default Cars