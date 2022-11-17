/**
 * Cryptator icon set component.
 * Usage: <Cryptator name="icon-name" size={20} color="#4F8EF7" />
 */

import { createIconSet } from '@expo/vector-icons';
import glyphMap from './cryptator.json';

const iconSet = createIconSet(glyphMap, 'cryptator', 'cryptator.ttf');

export default iconSet;
export const {
  Button,
  getImageSource,
  getImageSourceSync,
} = iconSet;
