import '../MyStyle.css';

const playerData = [
    { name: "Virat Kohli", country: "India", jerseyNumber: 18 },
    { name: "Steven Smith", country: "Australia", jerseyNumber: 49 },
    { name: "Kane Williamson", country: "New Zealand", jerseyNumber: 22 },
    { name: "Joe Root", country: "England", jerseyNumber: 66 }
];

const Players = () => {

    return (
<div className='players'>
            <h2>Player Information</h2>
            <table>
                <thead>
                    <tr>
                        <th>Name</th>
                        <th>Country</th>
                        <th>Jersey Number</th>
                    </tr>
                </thead>
                <tbody>
                    {playerData.map((player, index) => (
                        <tr key={index}>
                            <td>{player.name}</td>
                            <td>{player.country}</td>
                            <td>{player.jerseyNumber}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    )
    

}

export default Players;