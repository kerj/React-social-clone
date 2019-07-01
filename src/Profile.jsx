import React from 'react';
import ProfileNav from './ProfileNav';
import Face from '@material-ui/icons/SentimentSatisfiedAlt'
import { makeStyles } from '@material-ui/styles';

const styles = makeStyles({
    profileImg: {
        width: '75px',
        height: '75px',
        border: '2px solid whitesmoke',
        marginTop: '-40px',
        backgroundColor: '#3f51b5'
    },
    profileFrame: {
        backgroundColor: '#3f51b5',
        width: '100%',
        height: '400px',
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'flex-end',
        border: '1px solid darkslategrey'
    },
    profileFrameBottom: {
        height: '70%',
        backgroundColor: 'whitesmoke',
        display: 'flex',
        flexDirection: 'column',
        width: '100%',

    },
    profileFrameName: {
        display: 'flex',
        flexDirection: 'row',
        width: '100%'
    }
})

function Profile() {
    const classes = styles();
    return (
        <div>
            <div className={classes.profileFrame}>
                <div className={classes.profileFrameBottom}>
                    <div className={classes.profileFrameName}>
                        <Face className={classes.profileImg}></Face>
                        <h2>Name</h2>
                    </div>
                    <ProfileNav />
                    <div>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Explicabo, veritatis doloremque!
                 Soluta blanditiis dolorem alias repudiandae voluptates ab amet, fugiat atque? Quaerat corporis blanditiis, autem nulla aliquam dolorem quam repellat?</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Profile;

{/* <i class="material-icons">
sentiment_satisfied_alt
</i> */}

