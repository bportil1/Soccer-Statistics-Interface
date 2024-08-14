'use server'
function createMatchData(home_team, visiting_team, ht_goals, vt_goals, match_id){
        return{
                home_team,
                visiting_team,
                ht_goals,
                vt_goals,
                match_id
        };
}

export async function fetchMatchData (selectedClub) {
	const tempData = [];
        const mtUrl = `http://192.168.1.114:3100/matchList?selectedClub=${selectedClub}`;
        const request = await fetch(mtUrl);
        if (request.ok){
        	const rows = await request.json();
                if (rows !== undefined){
                	Object.keys(rows).forEach((row) => {
                        let data = rows[row];
                        tempData.push(createMatchData(data.home_team, data.visiting_team,
                                                      data.match_ht_goals, data.match_vt_goals,
                                                      data.match_id));
                        });
                        return tempData;
                }
        }
}

function createElevensData(club_name, lName, position, role, minPlayed) {
  return { club_name, lName, position, role, minPlayed };
}

export async function fetchElevensData (selectedMatch) {
        const tempData = [];
        const mtUrl = `http://192.168.1.114:3100/matchElevens?selectedMatch=${selectedMatch}`;
        const request = await fetch(mtUrl);
        if (request.ok){
                const rows = await request.json();
                if (rows !== undefined){
                        Object.keys(rows).forEach((row) => {
                        let data = rows[row];
                        tempData.push(createElevensData(data.club_name, data.club_pers_lname,
                                                 data.club_pers_role, data.match_inv_role,
                                                 data.match_min_played));
                        });
			return tempData;
                        //setElevensData(tempData);
                }
        }
}

function createGoalData(club_name, lName, goalType, evTime, evId){
        return{
                club_name,
                lName,
                goalType,
                evTime,
                evId
        };
}

function createSubData(club_name, subInLName, subOutLName, evTime, evId){
        return{
                club_name,
                subInLName,
                subOutLName,
                evTime,
                evId
        };
}

function createDiscData(club_name, lName, cardType, evTime, evId){
        return{
                club_name,
                lName,
                cardType,
                evTime,
                evId
        };
}

function createConcData(eventType, evTime, evId){
        return{
                eventType,
                evTime,
                evId
        };
}

export async function fetchEventsData (selectedMatch){
        const goalUrl = `http://192.168.1.114:3100/matchGoals?selectedMatch=${selectedMatch}`;
        const subUrl = `http://192.168.1.114:3100/matchSubs?selectedMatch=${selectedMatch}`;
        const discUrl = `http://192.168.1.114:3100/matchDisc?selectedMatch=${selectedMatch}`;
        const concUrl = `http://192.168.1.114:3100/concEvents?selectedMatch=${selectedMatch}`;

        let tempGoalData = []
        let tempSubData = []
        let tempDiscData = []
        let tempConcData = []

        await Promise.all([
        	fetch(goalUrl).then(res => res.json()),

                fetch(subUrl).then(res => res.json()),

                fetch(discUrl).then(res => res.json()),

                fetch(concUrl).then(res => res.json())
                ]).then(res => {
                
                Object.keys(res[0]).forEach((row) => {
                                                     	let data = res[0][row];
                                                        tempGoalData.push(createGoalData(data.club_name, data.club_pers_lname, data.goal_type, data.event_time, data.ev_id));
                                                   });

                Object.keys(res[1]).forEach((row) => {
                                                        let data = res[1][row];
                                                        tempSubData.push(createSubData(data.club, data.player_subbed_in, data.player_subbed_out, data.event_time, data.ev_id));
                                                   });

                Object.keys(res[2]).forEach((row) => {
                                                        let data = res[2][row];
                                                        tempDiscData.push(createDiscData(data.club_name, data.club_pers_lname, data.card_type, data.event_time, data.ev_id));
                                                   });

                Object.keys(res[3]).forEach((row) => {
                                                        let data = res[3][row];
                                                        tempConcData.push(createConcData(data.event_type, data.event_time, data.ev_id));
                                                   });
                });
	return [tempGoalData, tempSubData, tempDiscData, tempConcData];
}


