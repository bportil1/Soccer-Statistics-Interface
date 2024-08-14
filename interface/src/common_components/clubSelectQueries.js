'use server'

function createData(club_name, club_id){
        return{
                club_name,
                club_id,
        };
}

export async function fetchClubData () {
        const tempData = [];
        const mtUrl = "http://192.168.1.114:3100/clubList";
        const request = await fetch(mtUrl);
        if (request.ok){
        	const rows = await request.json();
                if (rows !== undefined){
                	Object.keys(rows).forEach((row) => {
                                        let data = rows[row];
                                        tempData.push(createData(data.club_name, data.club_id));
                        });
                        return tempData;
                }
        }
}

