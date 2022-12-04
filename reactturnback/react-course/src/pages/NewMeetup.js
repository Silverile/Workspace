import NewMeetupForm from "../components/meetups/NewMeetupForm";
import {useHistory} from 'react-router-dom'

export default function NewMeetup() {
    const history = useHistory();

    function addMeetupHandler(MeetupData){

        fetch(
            'https://react-getting-started-94b88-default-rtdb.firebaseio.com/meetups.json',
            {
                method: 'POST',
                body: JSON.stringify(MeetupData),
                headers: {
                    'Content-Type': 'application/json'
                }
            }
        ).then(() => {
            history.replace('/')
        });

    }

    return(

        <>
            <section>
                <h1>Add New Meetup</h1>
                <NewMeetupForm onAddMeetup={addMeetupHandler}/>
            </section>

        </>

    )

}