import { createIconSetFromFontello } from '@expo/vector-icons';

import fontelloConfig from './config.json';

const Icons = createIconSetFromFontello(fontelloConfig, 'cryptator', 'cryptator.ttf');

export default Icons;
