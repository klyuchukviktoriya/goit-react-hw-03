import Contact from "../Contact/Contact"
import s from "./ContactList.module.css"

export default function ContactList({ contacts, onDelete }) {
    return (
        <ul className={s.list}>{contacts.map(({ id, name, number }) =>
            <li key={id}>
                <Contact name={name} number={number} id={id} onDelete={onDelete} /></li>
        )}
        </ul>
    )
}