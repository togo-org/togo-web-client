import Svg from "@/shared/Svg/Svg"
import { SvgProps } from "@/types"




const HomeIcon = ({...props}: SvgProps ) => {
  return (
    <Svg {...props} d='M10 20v-6h4v6h5v-8h3L12 3 2 12h3v8z' />

    
  )
}

export default HomeIcon