import PropTypes from 'prop-types'
import css from './Event.module.css'
export const Event =({name, location, speaker,type, start, end})=>{
    console.log(css)
    return (
        
        <div className={css.event}>
            <h2 className={css.title}> Name</h2>
            <p className={css.info}>
                <i className='icon'>
                    Location
                </i>
            </p>
             <p className={css.info}>
                <i>
                    Speaker
                </i>
            </p>
            <p className={css.info}>
                <i>
                    Date
                </i>
            </p>
            <p className={css.info}>
                <i>
                    Duration
                </i>
            </p>
            <span> Event type </span>
        </div>
    )
}
Event.propTypes={
    name: PropTypes.string.isRequired, 
    location: PropTypes.string.isRequired, 
    speaker:PropTypes.string.isRequired,
    type: PropTypes.string.isRequired, 
    start:PropTypes.string.isRequired, 
    end:PropTypes.string.isRequired,
}
    