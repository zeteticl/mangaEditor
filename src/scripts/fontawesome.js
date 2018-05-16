import fontawesome from '@fortawesome/fontawesome';
import {
  faThList,
  faTags,
  faQuestionCircle,
  faInfo,
  faArrowRight,
  faLanguage,
  faBars,
  faTimes,
  faSearch,
  faAngleDown,
  faPlay,
  faPlayCircle,
  faPause,
  faPauseCircle,
  faCircleNotch,
  faChevronRight,
  faChevronLeft,
  faLongArrowAltRight,
  faLongArrowAltLeft,
  faStopwatch,
  faFilter,
  faTerminal,
  faUndo,
  faRedo,
  faSave,
  faPlusSquare,
  faSearchMinus,
  faSearchPlus,
} from '@fortawesome/fontawesome-free-solid';

import {
  faSquare,
  faCircle,
  faImage,
} from '@fortawesome/fontawesome-free-regular';

fontawesome.config = {
  autoAddCss: false,
};

export default function loadFA() {
  // eslint-disable-next-line max-len
  fontawesome.library.add(faThList, faTags, faQuestionCircle, faInfo, faArrowRight, faLanguage, faBars, faTimes, faSearch, faAngleDown, faPlay, faPlayCircle, faPause, faPauseCircle, faCircleNotch, faChevronRight, faChevronLeft, faLongArrowAltRight, faLongArrowAltLeft, faStopwatch, faFilter, faTerminal, faUndo, faRedo, faSave, faSquare, faPlusSquare, faSearchMinus, faSearchPlus, faCircle, faImage);
}
