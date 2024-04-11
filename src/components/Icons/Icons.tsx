import { FaHome } from "react-icons/fa";
import { FaUser } from "react-icons/fa";
import { FaCaretDown } from "react-icons/fa";
import { FaMoneyBill } from "react-icons/fa";
import { FaPenSquare } from "react-icons/fa";
import { FaBalanceScale } from "react-icons/fa";

type Props = {
    name:string,
    fillColor?:string,
    className?: string
}

export default function Icons({name, fillColor, className='text-primary'}:Props) {
  return (
    <>
    {name == 'home' ?
    <FaHome className={`text-xl ${className && className}`} />
    :name == 'profile'?
    <FaUser className={`text-xl ${className && className}`} />
    :name == 'verification'?
    <FaPenSquare className={`text-xl ${className && className}`} />
    :name == 'payments'?
    <FaMoneyBill className={`text-xl ${className && className}`} />
    :name == 'legals'?
    <FaBalanceScale className={`text-xl ${className && className}`} />
    :name == 'arrow'?
    <svg width="15" height="15" viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M6.3072 1.05822L7.03885 0.34847C7.34865 0.0479466 7.8496 0.0479466 8.15611 0.34847L14.563 6.56035C14.8728 6.86087 14.8728 7.34682 14.563 7.64415L8.15611 13.8592C7.84631 14.1597 7.34536 14.1597 7.03885 13.8592L6.3072 13.1495C5.9941 12.8458 6.00069 12.3502 6.32038 12.0529L10.2917 8.38267H0.819787C0.381453 8.38267 0.0288086 8.04058 0.0288086 7.61538V6.59232C0.0288086 6.16711 0.381453 5.82503 0.819787 5.82503H10.2917L6.32038 2.15481C5.9974 1.85748 5.99081 1.36194 6.3072 1.05822Z" fill={fillColor ? fillColor : '#FBB700'}/>
    </svg>
    :name == 'greater-than'?
    <FaCaretDown className={`text-xl ${className && className}`} />
    :
    null
    }
    </>
  )
}

