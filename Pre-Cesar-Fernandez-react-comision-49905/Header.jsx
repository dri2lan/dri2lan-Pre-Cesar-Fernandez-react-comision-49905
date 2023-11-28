
import fuego from '../../assets/img/fuego.jpg'


export const Header = () => {
  return (
    <header className='w-[100px] bg-red-500'>
        <img src={fuego} alt="" />
        <NavBar />
    </header>
  )
}
