import { useState } from 'react'

const AboutMe = () => {
    const title = 'Arsal Kamil';
    const desc = 'Fullstack Learner | Nature Photography';
    // 
    const [count, setCount] = useState(0)

    const countClick = () => {
        setCount(count + 1)
    }


    return ( 
        <div className={'text-center'}>
            <h1 className={'font-bold text-7xl'}>{ title }</h1>
            <h3 className={'font-semibold text-2xl'}>{ desc }</h3>

            <p>{ count }</p>
            <button onClick={countClick} className={''}>Click Add</button>
        </div>
     );
}
 
export default AboutMe;