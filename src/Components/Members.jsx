import './Members.css'

function Members( {members, setMembers} ) {

    return (
        <div id='members-container'>
            <p id='dashboard-text'></p>
            <div className='row'>
                <div className='member-avatar' title='View All Dashboard'><p>All</p></div>
                { members.map( member => (
                    <div key={ member.id }className='col'>
                        <div className='member-avatar' title={`View ${member.memberName}'s Dashboard`} ><p>{ member.memberName[0].toUpperCase()}</p></div>
                        {/* <p id='member-name-text'>{ member.memberName }</p> */}
                    </div>
                ))}
                {/* <input type="text" placeholder="Name" id='new-member-input' maxLength="20"/> */}
                <div className='member-avatar' id='add-member-text' title='Add Household Member'><p>+</p></div>
            </div>
        </div>
    )
}

export default Members