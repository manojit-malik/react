function Ex4 () {

    const arr = ["Mumbai", "Bengaluru", "Pune", "Hydrabad", "Chennai", "Bhubaneswar"];

    const city = [
        {
            id:1,
            place: "Mumbai"
        },
        {
            id:2,
            place: "Bengaluru"
        },
        {
            id:3,
            place: "Hyderabad"
        },
        {
            id:4,
            place: "Chennai"
        },
        {
            id:5,
            place: "Kolkata"
        }

    ]

    const filter = arr.filter(arr => arr.includes('B'));

    return(
        <div>
            {
                // arr.map((value, index) => <li>{value}</li>)
            }
            ------------------------------------
            {
                arr.map((value, index) => <li key={index}> {value} </li>)
            }
            ------------------------------------
            {
                city.map((value) => <li key={value.id} > {value.place} </li>)
            }
            ------------------------------------
            {
                filter.map((value, index) => <li key={index} > {value} </li>)
            }
        </div>
    )
}

export default Ex4;