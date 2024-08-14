'use server'
function createData(club_name, W, D, L, GF, GA, GD, PTS) {
  return {
    club_name,
    W,
    D,
    L,
    GF,
    GA,
    GD,
    PTS
  };
}

export async function fetchSeasonTableData(){
                const tempData = [];
                const mtUrl = "http://192.168.1.114:3100/mainTable";
                const request = await fetch(mtUrl);
                if (request.ok){
                        const rows = await request.json();
                        if (rows !== undefined){
                                Object.keys(rows).forEach(async (row) => {
                                let data = rows[row];
				createData(data.club_name, data.W, data.D, data.L, data.GF, data.GA, data.GD, data.PTS)
                                tempData.push(createData(data.club_name, data.W, data.D, data.L, data.GF, data.GA, data.GD, data.PTS));
                                });
				return tempData;
                        }
                }
}

export async function fetchHomeTableData () {
                const tempData = [];
                const mtUrl = "http://192.168.1.114:3100/homeTable";
                const request = await fetch(mtUrl);
                if (request.ok){
                        const rows = await request.json();
                        if (rows !== undefined){
                                Object.keys(rows).forEach((row) => {
                                let data = rows[row];
                                tempData.push(createData(data.club_name, data.W, data.D, data.L, data.GF, data.GA, data.GD, data.PTS));
                                });
                                return tempData;
                        }
                }
}

export async function fetchAwayTableData () {
                const tempData = [];
                const mtUrl = "http://192.168.1.114:3100/awayTable";
                const request = await fetch(mtUrl);
                if (request.ok){
                        const rows = await request.json();
                        if (rows !== undefined){
                                Object.keys(rows).forEach((row) => {
                                let data = rows[row];
                                tempData.push(createData(data.club_name, data.W, data.D, data.L, data.GF, data.GA, data.GD, data.PTS));
                                });
                                return tempData;
                        }
                }
}

