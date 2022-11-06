import { Fragment, useState } from "react"
import { Link } from "react-router-dom"

const Car = (props) => {

  return (
    <section className="bg-stone-100 py-5">
      <Link className="text-zinc-200 text-lg pl-20 pr-3 py-1 bg-zinc-900 hover:bg-black hover:text-white" to={`/car/${props.id}`}>{props.name}</Link>
      <div className="w-full px-16 flex flex-col gap-2 ">
        <p>Originalidade: {props.originalidade}</p>
        <p>{props.descricao}</p>
        <p>{props.motor}</p>
        <p>{props.torque}</p>
        <img className="w-2/3 self-center " src={props.image_url} />
        <img className="w-2/3 self-center " src={props.image2_url} />
      </div>
    </section>
  )
}

export default Car