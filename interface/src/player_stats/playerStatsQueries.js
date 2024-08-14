'use server'
function createGoalAggData(club, player, goals) {
  return {
          club, player, goals
  };
}

export async function fetchGoalAggData () {
	const tempData = [];
        const mtUrl = 'http://192.168.1.114:3100/goalsScored';
        const request = await fetch(mtUrl);
        if (request.ok){
        	const rows = await request.json();
                if (rows !== undefined){
                	Object.keys(rows).forEach((row) => {
                        	let data = rows[row];
                                tempData.push(createGoalAggData(data.club_name, data.player_name, data.goals));
                        });
			return tempData;
                }
        }
}

function createYellsAggData(club, player, yellows) {
  return {
          club, player, yellows
  };
}

export async function fetchYellsAggData () {
        const tempData = [];
        const mtUrl = 'http://192.168.1.114:3100/yellowsGiven';
        const request = await fetch(mtUrl);
        if (request.ok){
        	const rows = await request.json();
                if (rows !== undefined){
                	Object.keys(rows).forEach((row) => {
                                let data = rows[row];
                                tempData.push(createYellsAggData(data.club_name, data.player_name, data.yellow_cards));
                        });
                        return tempData;
                }
        }
}

function createRedsAggData(club, player, reds) {
  return {
          club, player, reds
  };
}

export async function fetchRedsAggData () {
        const tempData = [];
        const mtUrl = 'http://192.168.1.114:3100/redsGiven';
        const request = await fetch(mtUrl);
        if (request.ok){
        	const rows = await request.json();
                if (rows !== undefined){
                        Object.keys(rows).forEach((row) => {
                                let data = rows[row];
                                tempData.push(createRedsAggData(data.club_name, data.player_name, data.red_cards));
                        });
                        return tempData;
                }
        }
}

function createMinsAggData(club, player, mins) {
  return {
          club, player, mins
  };
}

export async function fetchMinsAggData () {
        const tempData = [];
        const mtUrl = 'http://192.168.1.114:3100/minutesPlayed';
        const request = await fetch(mtUrl);
        if (request.ok){
                const rows = await request.json();
                if (rows !== undefined){
                	Object.keys(rows).forEach((row) => {
                                let data = rows[row];
                                tempData.push(createMinsAggData(data.club_name, data.player_name, parseInt(data.mins_played)));
                        });
                        return tempData;
                }
        }
}

