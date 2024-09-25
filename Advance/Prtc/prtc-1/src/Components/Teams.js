import '../MyStyle.css';

const data = [
    {name: "India", description: "India is a crazy cricketing nation." },
    {name: "Australia", description: "Australia is most successful cricketing nation."},
    {name: "England", description: "England has just invented cricket and recently they have been playing good cricket."},
    {name: "New Zealand", description:"New Zealand has won the WTC, and they were the deserving winners of WC 2019"},
    {name: "South Africa", description: "They are the entertainers, they have never won a World Cup but they entertain the most."},
    {name: "West Indies" , description: "They are good at T20 cricket, but in past they were a different beast in cricket."},
    {name: "Pakistan", description: "Mauka Makua"}
]

const Teams = () => {
    
    return (
        <div class="team-wrapper">
        <div className="team-container">
            <h2>Team Information</h2>
            <ul className="team-list">
                {data.map((team, index) => (
                    <li key={index} className="team-list-item" >
                        <span className="team-name">{team.name}</span>
                        <p className="team-description">{team.description}</p>
                    </li>
                ))}
            </ul>
        </div>
        </div>
    )

}

export default Teams;