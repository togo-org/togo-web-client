import { SvgIcon } from '@mui/material';
import { SvgProps } from '@/types';

function Svg({ d, color, fontSize = 'inherit', sx }: SvgProps) {
  return (
    <SvgIcon color={color} fontSize={fontSize} sx={sx}>
      <path d={d} />
    </SvgIcon>
  );
}

export default Svg;
