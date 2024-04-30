import { useState } from 'react';
import translate from '../../es.json';

// IMÁGENES
import copyIcon from '../../images/svg/copy.svg';

// LINKS
import { MAIL_LINK } from '../../constants/links';

import './Mailbutton.css';

export default function MailButton() {
  const [clicked, setClicked] = useState(false);

  function copyMail() {
    navigator.clipboard.writeText(MAIL_LINK);
    setClicked(true);
    setTimeout(() => setClicked(false), 1000);
  }

  return (
    <div className='mail-container'>
      <div
        className={`${clicked ? 'mail-copied' : 'mail'}`}
        onClick={copyMail}
        title={translate['description-button-copypaste']}>
        <img src={copyIcon} className='copy-icon' width={15} />
        {MAIL_LINK}
      </div>
      <div className='copy-alert'>{clicked ? translate['description-button-copied'] : ''}</div>
    </div>
  );
}
