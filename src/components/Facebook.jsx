import { useState } from 'react';
import profiles from '../data/berlin.json';

function Facebook() {

    const [ selectedCountry, setSelectedCountry ] = useState('all');
    const [ studentsList, setStudentsList ] = useState(profiles);
    
    const countries = [];
    profiles.forEach(profile => { if( !countries.includes(profile.country) ) { countries.push(profile.country); } });

    const displayStudentInfos = (e) => {
        e.target.nextSibling.classList.toggle('hidden');
    }

    const selectCountry = (e, country) => { 
        const buttons = document.getElementById('buttons').children;
        const profiles = document.getElementById('profiles').children;

        Array.from(buttons).forEach(button => button.classList.remove('selected') );
        e.target.classList.add('selected');
        console.log(country)

        Array.from(profiles).forEach(profile => {
            if (profile.classList.contains('selected')) profile.classList.remove('selected');
            if (profile.getAttribute('role') === country && !profile.classList.contains('selected')) { profile.classList.add('selected');
            } else if ( country === 'all' ) { profile.classList.add('selected'); }
        });

        setSelectedCountry(country)
    }

    const searchStudentsList = () => {
        const searchInput = document.getElementById('search');
        const filteredStudentsList = [...profiles].filter(profile => profile.firstName.toLowerCase().startsWith(searchInput.value.toLowerCase()));
        setStudentsList(filteredStudentsList);
    }

    return(
        <div>
            <input type="text" id="search" onChange={ searchStudentsList } />
            <div id="buttons">
                <button onClick={ (e) => selectCountry(e, 'all')}>All</button>
                { countries.map(country => <button key={ country } onClick={ (e) => selectCountry( e, country ) }>{ country }</button> )}
            </div>
            <div id="profiles">
                { studentsList.map(student => {

                    return <div className="card" key={ student.firstName } role={ student.country }>
                        <img src={ student.img } alt={ `${student.firstName}-${student.lastName}` } className="profile-pic" onClick={ e => displayStudentInfos(e) } />
                        <div className="hidden">
                            <p><b>First name:</b> { student.firstName }</p>
                            <p><b>Last name:</b> { student.lastName }</p>
                            <p><b>Country:</b> { student.country }</p>
                            <p><b>Type:</b> { student.type }</p>
                        </div>
                    </div>

                }) }
            </div>

        </div>
    );

}

export default Facebook;