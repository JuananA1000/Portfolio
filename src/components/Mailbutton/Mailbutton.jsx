import copyIcon from '../../images/svg/copy.svg';

import translate from '../../es.json';

import { MAIL_LINK } from '../../constants/links';

import './Mailbutton.css';

export default function MailButton() {
  return (
    <div
      className='mail'
      onClick={() => navigator.clipboard.writeText(MAIL_LINK)}
      title={translate['description-button-copypaste']}>
      <img src={copyIcon} className='copy-icon' width={15} />
      {MAIL_LINK}
    </div>
  );
}
