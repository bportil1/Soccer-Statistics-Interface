'use client'
import React from 'react';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import './PgNavBar.css';
import Home from '../pages/Home.js';
import TablePage from '../pages/SeasonTablePage.js';
import MatchHistoryPg from '../pages/MatchHistoryPg.js';
import PlayerStats from '../pages/PlayerStats.js';
import TeamStats from '../pages/TeamStats.js';
import {HomeButton, MatchHistoryButton, PlayerStatsButton, TablesPageButton, TeamStatsButton} from './NavBarButtons.js';


export default function PgNavBar() {

  const [activeUrl, setActiveUrl] = React.useState('/Home');

  React.useEffect(() => {
     setActiveUrl('/'+window.location.pathname.split( '/' )[1]);
  }, []);

  return (
        <Navbar expand="lg" className="navbar-bg" >
                <Nav className="ms-5 gap-3">
                <HomeButton activeUrl={activeUrl} setActiveUrl={setActiveUrl} />
                <TablesPageButton activeUrl={activeUrl} setActiveUrl={setActiveUrl} />
                <MatchHistoryButton activeUrl={activeUrl} setActiveUrl={setActiveUrl} />
                <PlayerStatsButton activeUrl={activeUrl} setActiveUrl={setActiveUrl} />
                <TeamStatsButton activeUrl={activeUrl} setActiveUrl={setActiveUrl} />
                </Nav>
        </Navbar>
  )}
