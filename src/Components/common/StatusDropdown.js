import React from 'react';
import PropTypes from 'prop-types';

const StatusDropdown = ({ data }) => {
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
    Poisoned: 'fa-vial'
  };

  const statusOptionsToggle = () => {
    let statusList = document.getElementById('status-list');
    let carrot = document.getElementById('collapse-carrot');

    carrot.classList.toggle('active');

    statusList.style.display = statusList.style.display === 'none' ? 'block' : 'none';
  };

  return (
    <div className="col-auto my-1">
      <div className="card">
        <div className="card-header" onClick={statusOptionsToggle} style={{ cursor: 'pointer' }}>
          <h5>
            Status <i id="collapse-carrot" className="fas float-right my-auto" />
          </h5>
        </div>
        <ul className="list-group list-group-flush" id="status-list" style={{ display: 'none' }}>
          <li className="list-group-item">
            {data.options.map(option => {
              return (
                <a href="#" key={option}>
                  <i className={'status-icons m-1 fa ' + statusDict[option]} />
                </a>
              );
            })}
          </li>
        </ul>
      </div>
    </div>
  );
};

StatusDropdown.propTypes = { data: PropTypes.object.isRequired };

export default StatusDropdown;
