import { ImagesSliderCard} from './ImagesSlider.card'
import img12 from '../../assets/img/12.svg'
import img13 from '../../assets/img/13.svg'
function ImagesSlider() {
  return (
    <section className='mt-[80px]'>
      <hr className=' mb-[80px]' />
      <div className='flex gap-4 overflow-scroll lg:-mx-[14%]'>
        <ImagesSliderCard img={img13} title='Waking upin a far away place'/>
        <ImagesSliderCard img={img12} topTitle='Explore the World' title='The adventure starts today'/>
        <ImagesSliderCard img={img13} topTitle='Explore the World' title='The adventure starts today'/>
        <ImagesSliderCard img={img12} title='Waking upin a far away place'/>
        <ImagesSliderCard img={img12} title='Waking upin a far away place'/>
      </div>

    </section>
  )
}

export default ImagesSlider