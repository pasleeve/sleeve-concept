import style from "./Home.module.css"
import img from "../../../assets/imagenes/image.png"

const Home = () => {
  return (
    <div className={style.container}>

    

        <img  className={style.img} src={img}/>

    </div>
  )
}

export default Home
