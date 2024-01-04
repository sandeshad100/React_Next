import MyPic from '@/public/Mypic.jpg'
import Image from 'next/image'

const Img = () => {
  return (
    <div>Img

        <Image src={MyPic} width={1000} height={1000}/>
    </div>
  )
}

export default Img