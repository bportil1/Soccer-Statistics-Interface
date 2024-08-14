'use server'
function createData(role, name, matches_played, matches_subbed, mins_played, goals, yellows, reds) {
  return {
          role, name, matches_played, matches_subbed, mins_played, goals, yellows, reds
  };
}

export async function fetchTableData (selectedClub) {
	const tempData = [];
        const mtUrl = `http://192.168.1.114:3100/teamStats?selectedClub=${selectedClub}`;
        const request = await fetch(mtUrl);
        if (request.ok){
        	const rows = await request.json();
                if (rows !== undefined){
                	Object.keys(rows).forEach((row) => {
                                let data = rows[row];
                                tempData.push(createData(data.club_pers_role, data.player_name, data.matches_played, data.matches_subbed, parseInt(data.mins_played), data.goals, data.yellow_cards, data.red_cards));
                        });
                        return tempData;
                }
        }
}

