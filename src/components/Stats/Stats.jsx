import css from './Stats.module.css'
// import PropTypes from "prop-types";

function Stats (stats) {
    const {followers, views, likes} = stats.stats
    return (
        <ul className={css.stats}>
            <li className={css.item}>
                <span>Followers: </span>
                <span>{followers}</span>
            </li>
            <li className={css.item}>
                <span>Views: </span>
                <span>{views}</span>
            </li>
            <li className={css.item}>
                <span>Likes: </span>
                <span>{likes}</span>
            </li>
        </ul>
    )
}

export default Stats