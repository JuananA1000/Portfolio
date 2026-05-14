import './Button.css';

export default function Button({ children, link, icon }) {
  return (
    <a className='chalk-btn' href={link} target='blank'>
      {icon && <img src={icon} alt='Icon' className='button-icon' width={15} />}
      {children}
    </a>
  );
}
