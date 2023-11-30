import store from '../assets/img/store.svg'

export const CartWidget = () => {
  return (
    <div>
        <img className='cursor-pointer flex' src={store} alt="" />
        <span>
            1
        </span>
    </div>
  )
}

export default CartWidget