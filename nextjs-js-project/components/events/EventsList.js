import EventsItem from "./EventsItem";

import classes from './EventList.module.css'
export default function EventsList(props) {
    const { items } = props;

    return(
        <ul className={classes.list}>
            {items.map(event => <EventsItem
                key={event.id}
                id={event.id}
                title={event.title}
                location={event.location}
                date={event.date}
                image={event.image}
            />)}
        </ul>
    )
}