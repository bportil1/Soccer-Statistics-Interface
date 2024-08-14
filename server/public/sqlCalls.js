const {conn} = require("./sqlConnect");
const {server} = require("../stats_server.js");

server.get("/mainTable", function(req, res){
	try{
		const mainTableQuery = "select * from total_table";
		conn.query(mainTableQuery, function(err, rows){
			if(err){
				console.log("ERROR: ", err);
			}
			else{
				res.send(rows);
			}	
		}); 
	}catch(err){
		res.sendStatus(403);
	};
});

server.get("/homeTable", function(req, res){
        try{
                const homeTableQuery = "select * from home_table_sum";
                conn.query(homeTableQuery, function(err, rows){
                        if(err){
                                console.log("ERROR: ", err);
                        }
                        else{
                                res.send(rows);
                        }
                });
        }catch(err){
                res.sendStatus(403);
        };
        return;
});


server.get("/awayTable", function(req, res){
	try{
		const awayTableQuery = "select * from away_table_sum";
		conn.query(awayTableQuery, function(err, rows){
			if(err){
				console.log("ERROR: ", err);
			}
			else{
				res.send(rows);
			}
		});
	}catch(err){
		res.sendStatus(403);
	};
	return;
});

server.get("/clubList", function(req, res){
	try{
                const clubListQuery = "select club_id, club_name from club";
                conn.query(clubListQuery, function(err, rows){
                        if(err){
                                console.log("ERROR: ", err);
                        }
                        else{
                                res.send(rows);
                        }
                });
        }catch(err){
                res.sendStatus(403);
        };
        return;
});

server.get("/matchList", function(req, res){
        try{
                const matchListQuery = "select distinct (select club_name from club where match_home_team = club_id) as home_team, (select club_name from club where match_visiting_team = club_id) as visiting_team, match_ht_goals, match_vt_goals, match_id from matches, club where (match_home_team = ? or match_visiting_team = ?) order by match_id asc";
                conn.query(matchListQuery, [req.query.selectedClub, req.query.selectedClub], function(err, rows){
                        if(err){
                                console.log("ERROR: ", err);
                        }
                        else{
                                res.send(rows);
                        }
                });
        }catch(err){
                res.sendStatus(403);
        };
        return;
});

server.get("/matchElevens", function(req, res){
        try{
                const matchElevensQuery = "select matches.match_id, club_name, club_pers_lname, club_pers_role, match_inv_role, match_min_played from matches, match_inv_pers, club_personnel, club where matches.match_id = match_inv_pers.match_id and match_inv_pers.club_pers_id = club_personnel.club_pers_id and club_personnel.club_id = club.club_id and matches.match_id = ? order by club_name, match_inv_role, case when club_pers_role = 'GOALKEEPER' then 0 when club_pers_role = 'DEFENDER' then 1 when club_pers_role = 'MIDFIELDER' then 2 when club_pers_role = 'FORWARD' then 3 end";
                conn.query(matchElevensQuery, [req.query.selectedMatch], function(err, rows){
                        if(err){
                                console.log("ERROR: ", err);
                        }
                        else{
                                res.send(rows);
                        }
                });
        }catch(err){
                res.sendStatus(403);
        };
        return;
});

server.get("/matchGoals", function(req, res){
        try{
                const matchGoalsQuery = "select matches.match_id, club_name, club_pers_lname, goal_type, event_time, match_event.ev_id from matches, match_inv_pers, club_personnel, club, match_event, match_goal where matches.match_id = match_inv_pers.match_id and match_inv_pers.club_pers_id = club_personnel.club_pers_id and club_personnel.club_id = club.club_id and matches.match_id = match_event.match_id and club_personnel.club_pers_id = match_event.player_id and match_event.ev_id = match_goal.ev_id and match_event.player_id = match_goal.player_id and matches.match_id = ? order by event_time"
                conn.query(matchGoalsQuery, [req.query.selectedMatch], function(err, rows){
                        if(err){
                                console.log("ERROR: ", err);
                        }
                        else{
                                res.send(rows);
                        }
                });
        }catch(err){
                res.sendStatus(403);
        };
        return;
});

server.get("/matchSubs", function(req, res){
        try{
                const matchSubsQuery = "select distinct match_event.match_id, event_time, (select club_name from club where club_id = (select club_id from club_personnel where match_event.player_id = club_personnel.club_pers_id)) as club, (select club_pers_lname from club_personnel where player_in = club_pers_id) as player_subbed_in, (select club_pers_lname from club_personnel where player_out = club_pers_id) as player_subbed_out, match_event.ev_id from club_personnel, match_event, match_sub, club where  match_event.ev_id = match_sub.ev_id and match_event.match_id = ? order by event_time"
                conn.query(matchSubsQuery, [req.query.selectedMatch], function(err, rows){
                        if(err){
                                console.log("ERROR: ", err);
                        }
                        else{
                                res.send(rows);
                        }
                });
        }catch(err){
                res.sendStatus(403);
        };
        return;
});

server.get("/matchDisc", function(req, res){
        try{
                const matchDisciplaryQuery = "select club_name, club_pers_lname, card_type, event_time, match_event.ev_id from matches,  club_personnel, club, match_event, match_card where  club_personnel.club_id = club.club_id and matches.match_id = match_event.match_id and club_personnel.club_pers_id = match_event.player_id and match_event.ev_id = match_card.ev_id and match_event.player_id = match_card.player_id and matches.match_id = ? order by event_time"
                conn.query(matchDisciplaryQuery, [req.query.selectedMatch], function(err, rows){
                        if(err){
                                console.log("ERROR: ", err);
                        }
                        else{
                                res.send(rows);
                        }
                });
        }catch(err){
                res.sendStatus();
        };
        return;
});

server.get("/concEvents", function(req, res){
        try{
                const concEventsQuery = "select match_id, event_type, event_time, ev_id from match_event where match_id = ? order by event_time"
                conn.query(concEventsQuery, [req.query.selectedMatch], function(err, rows){
                        if(err){
                                console.log("ERROR: ", err);
                        }
                        else{
                                res.send(rows);
                        }
                });
        }catch(err){
                res.sendStatus(403);
        };
        return;
});

server.get("/teamStats", function(req, res){
        try{
                const teamAggsQuery = "select club_pers_id as p_id, club_pers_role, concat(club_pers_lname, ', ', club_pers_fname) as player_name, (select count('a') from match_inv_pers where club_pers_id = p_id) as matches_played, (select count('a') from match_event where event_type = 'SUB' and player_id = p_id) as matches_subbed, (select sum(match_min_played) from match_inv_pers where club_pers_id = p_id) as mins_played, (select count('a') from match_goal where player_id = p_id) as goals, (select count('a') from match_card where card_type = 'YELLOW' and player_id = p_id) as yellow_cards, (select count('a') from match_card where card_type = 'RED' and player_id = p_id) as red_cards from club, club_personnel where club.club_id = ? and club_personnel.club_id = ?";

                conn.query(teamAggsQuery, [req.query.selectedClub, req.query.selectedClub], function(err, rows){
                        if(err){
                                console.log("ERROR: ", err);
                        }
                        else{
                                res.send(rows);
                        }
                });
        }catch(err){
                res.sendStatus(403);
        };
        return;
});

server.get("/goalsScored", function(req, res){
        try{
                const aggGoalsQuery = "select club_pers_id as p_id, club_name, concat(club_pers_lname, ', ', club_pers_fname) as player_name, (select count('a') from match_goal where player_id = p_id) as goals from club_personnel, club where club_personnel.club_id = club.club_id order by goals desc limit 30";

                conn.query(aggGoalsQuery, function(err, rows){
                        if(err){
                                console.log("ERROR: ", err);
                        }
                        else{
                                res.send(rows);
                        }
                });
        }catch(err){
                res.sendStatus(403);
        };
        return;
});

server.get("/yellowsGiven", function(req, res){
        try{
                const concYellowsQuery = "select club_pers_id as p_id, club_name, concat(club_pers_lname, ', ', club_pers_fname) as player_name, (select count('a') from match_card where player_id = p_id and card_type = 'YELLOW') as yellow_cards from club_personnel, club where club_personnel.club_id = club.club_id order by yellow_cards desc limit 30";

                conn.query(concYellowsQuery, function(err, rows){
                        if(err){
                                console.log("ERROR: ", err);
                        }
                        else{
                                res.send(rows);
                        }
                });
        }catch(err){
                res.sendStatus(403);
        };
        return;
});

server.get("/redsGiven", function(req, res){
        try{
                const concRedsQuery = "select club_pers_id as p_id, club_name, concat(club_pers_lname, ', ', club_pers_fname) as player_name, (select count('a') from match_card where player_id = p_id and card_type = 'RED') as red_cards from club_personnel, club where club_personnel.club_id = club.club_id order by red_cards desc limit 30";

                conn.query(concRedsQuery, function(err, rows){
                        if(err){
                                console.log("ERROR: ", err);
                        }
                        else{
                                res.send(rows);
                        }
                });
        }catch(err){
                res.sendStatus(403);
        };
        return;
});

server.get("/minutesPlayed", function(req, res){
        try{
                const minPlayedAggQuery = "select club_pers_id as p_id, club_name, concat(club_pers_lname, ', ', club_pers_fname) as player_name, (select sum(match_min_played) from match_inv_pers where club_pers_id = p_id) as mins_played from club_personnel, club where club_personnel.club_id = club.club_id order by mins_played desc limit 30";

                conn.query(minPlayedAggQuery, function(err, rows){
                        if(err){
                                console.log("ERROR: ", err);
                        }
                        else{
                                res.send(rows);
                        }
                });
        }catch(err){
                res.sendStatus(403);
        };
        return;
});

