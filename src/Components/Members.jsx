import './Members.css'

function Members( {members} ) {
    return (
        <div id='members-container'>
            <p id='dashboard-text'>Dashboard</p>
            <div className='row'>
                <div className='member-avatar'><p>All</p></div>
                { members.map( member => (
                    <div className='col'>
                        <div className='member-avatar'><p>{ member.memberName[0].toUpperCase()}</p></div>
                        {/* <p id='member-name-text'>{ member.memberName }</p> */}
                    </div>
                ))}
                <div className='member-avatar' id='add-member-text'><p>+</p></div>
                </div>
        </div>
    )
}

export default Members