import s from "./Contact.module.css"
import { BiUser } from "react-icons/bi"
import { BiPhone } from "react-icons/bi"
export default function Contact({ name, number, id, onDelete }) {
    return (
        <div className={s.wrapper}>
            <div className={s.contact}>
                <p className={s.text}><BiUser className={s.icon} />{name}</p>
                <p className={s.text}><BiPhone className={s.icon} />{number}</p>
            </div>
            <button type="button" onClick={() => onDelete(id)}>Delete</button>
        </div>
    )
}