'use client'
import React from 'react';
import {Button} from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import {useState, useEffect, useRef} from 'react';

import {useRouter} from 'next/navigation';

function HomeButton(props){
	const router = useRouter();
	function handleClick(path){
                router.push(path);
		props.setActiveUrl('/Home');
	}
	return (
		<Button className="nav-button"
			variant="outline-danger"
			size="lg" 
			onClick={() => handleClick("Home")}
			style={{ fontSize : '1.5em', borderWidth : 'medium'}}
			id='hBtn'
			active={props.activeUrl === '/Home' ? 'active' : ''}
		>
		<strong>Home</strong>
		</Button>
	);
}

function MatchHistoryButton(props){
	const router = useRouter();
	function handleClick(path){
        	router.push(path);
		props.setActiveUrl('/MatchHistoryPg');
	}

	return (
                <Button className="nav-button"
			variant="outline-warning"
                        size="lg"
                        onClick={() => handleClick('MatchHistoryPg')}
                        style={{ fontSize: '1.2em', borderWidth: 'medium'}} 
			active=''
			id='mhBtn'
                        active={props.activeUrl === '/MatchHistoryPg' ? 'active' : ''}
		>
                <strong>Match History</strong>
                </Button>
        );
}

function PlayerStatsButton(props){
	const router = useRouter();
	function handleClick(path){
        	router.push(path);
		props.setActiveUrl('/PlayerStats');

	}

	return (
                <Button className="nav-button"
			variant="outline-warning"
                        size="lg"
                        onClick={() => handleClick('PlayerStats')}
			style={{ fontSize: '1.2em', borderWidth: 'medium'}}
			active=''
			id='psBtn'
                        active={props.activeUrl === '/PlayerStats' ? 'active' : ''}
		>
                <strong>Player Stats</strong>
                </Button>
        );
}

function TablesPageButton(props){
        const router = useRouter();
        function handleClick(path){
                router.push(path);
                props.setActiveUrl('/SeasonTablePage');
        }

        return (
                <Button className="nav-button"
                        variant="outline-warning"
                        size="lg"
                        onClick={() => handleClick('SeasonTablePage')}
                        style={{ fontSize: '1.2em', borderWidth: 'medium'}}
			active=''
			id='tpBtn'
                        active={props.activeUrl === '/SeasonTablePage' ? 'active' : ''}
		>
                <strong>Season Tables</strong>
                </Button>
        );
}

function TeamStatsButton(props){
        const router = useRouter();
        function handleClick(path){
                router.push(path);
                props.setActiveUrl('/TeamStats');
        }

        return (
                <Button className="nav-button"
                        variant="outline-warning"
                        size="lg"
                        onClick={() => handleClick('TeamStats')}
                        style={{ fontSize: '1.2em', borderWidth: 'medium'}}
			active=''
			id='tsBtn'
                        active={props.activeUrl === '/TeamStats' ? 'active' : ''}
		>
                <strong>Team Stats</strong>
                </Button>
        );
}

export { HomeButton, MatchHistoryButton, PlayerStatsButton, TablesPageButton, TeamStatsButton};
