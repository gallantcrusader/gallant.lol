import * as Moon from 'lunarphase-js';

const phase = Moon.getLunarPhase();
function writePhase(){
  document.write(phase);
}
