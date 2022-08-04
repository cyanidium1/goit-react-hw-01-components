import Stats from 'components/Stats/Stats';
import css from './Profile.module.css'
import PropTypes from "prop-types";

function Profile ({username, tag, location, avatar, stats}) {
    return (
        <div className={css.profile}>
            <div className={css.desc}>
                <img
                    src={avatar}
                    alt="User avatar"
                    className={css.ava}
                />
                <div>
                    <p className={css.profDesc}>{username}</p>
                    <p className={css.profDesc}>{tag}</p>
                    <p className={css.profDesc}>{location}</p>
                </div>
            </div>
            <Stats stats={stats}/>
        </div>
    )
}

Profile.propTypes = {
    username: PropTypes.string.isRequired,
    tag: PropTypes.string.isRequired,
    location: PropTypes.string.isRequired,
    avatar: PropTypes.string.isRequired,

}

export default Profile