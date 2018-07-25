import React from 'react';
import PropTypes from 'prop-types';

const StatusBar = ({ statuses }) => {
   const statusDict = {
      Eye: 'fa-eye',
      Blind: 'fa-eye-slash',
      Blinded: 'fa-low-vision',
      Flying: 'fa-feather-alt',
      Fire: 'fa-fire',
      Drunk: 'fa-glass-martini-alt',
      Exhaused: 'fa-grimace',
      Charmed: 'fa-grin-hearts',
      Healing: 'fa-heart',
      Stunned: 'fa-hourglass-half',
      Heal: 'fa-medkit',
      Silenced: 'fa-meh-blank',
      Fatigued: 'fa-meh',
      Silenced2: 'fa-microphone-slash',
      NotEqual: 'fa-not-equal',
      Square: 'fa-plus-square',
      Poop: 'fa-poop',
      Confused: 'fa-question-circle',
      Sad: 'fa-sad-tear',
      Shield: 'fa-shield-alt',
      Blocking: 'fa-user-shield',
      Incapacitated: 'fa-skull',
      Chilled: 'fa-snowflake',
      Star: 'fa-splotch',
      Protected: 'fa-street-view',
      Radiant: 'fa-sun',
      Stealth: 'fa-theater-masks',
      Petrified: 'fa-tired',
      Water: 'fa-tint',
      Cover: 'fa-umbrella',
      Paralyzed: 'fa-user-clock',
      Poisoned: 'fa-vial',
   };

   return (
      <div className="row align-items-center">
         <div className="col-auto m-1">
            {statuses.map(stat => {
               return (
                  <i
                     key={stat}
                     className={'status-icons m-1 fa ' + statusDict[stat]}
                  />
               );
            })}
         </div>
      </div>
   );
};

StatusBar.propTypes = {
   statuses: PropTypes.array.isRequired,
};

export default StatusBar;
