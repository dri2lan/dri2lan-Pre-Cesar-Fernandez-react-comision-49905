import store from '../assets/img/store.svg'

export const CartWidget = () => {
  return (
    <div className='flex'>
        <img className='cursor-pointer' src={store} alt="" />
        <span className='flex justify-start'>
            1
        </span>
    </div>
  )
}

export default CartWidget;