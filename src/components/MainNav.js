import React, { useEffect } from 'react';
import BottomNavigation from '@mui/material/BottomNavigation';
import BottomNavigationAction from '@mui/material/BottomNavigationAction';
import WhatshotIcon from '@mui/icons-material/Whatshot';
import MovieIcon from '@mui/icons-material/Movie';
import TvIcon from '@mui/icons-material/Tv';
import SearchIcon from '@mui/icons-material/Search';
import { useNavigate } from 'react-router-dom';

export default function SimpleBottomNavigation() {
  const [value, setValue] = React.useState(0);
  const navigate = useNavigate();

    useEffect(() => {
        if(value === 0){
            navigate("/");
        }
        else if(value === 1){
            navigate("/movies");
        }
        else if(value === 2){
            navigate("./series");
        }
        else if(value === 3){
            navigate("./search");
        }
    }, [value, navigate])

  return (
      <BottomNavigation
        showLabels
        value={value}
        onChange={(event, newValue) => {
          setValue(newValue);
        }}
        style={{ backgroundColor: "#011a27",
                 position: "fixed", 
                 bottom: 0, 
                 width: "100%", 
                 zIndex: 100 
        }}
      >
        <BottomNavigationAction style={{ color: "#fff" }} label="Trending" icon={<WhatshotIcon />} />
        <BottomNavigationAction style={{ color: "#fff" }} label="Movies" icon={<MovieIcon />} />
        <BottomNavigationAction style={{ color: "#fff" }} label="Web Series" icon={<TvIcon />} />
        <BottomNavigationAction style={{ color: "#fff" }} label="Search" icon={<SearchIcon/>} />
      </BottomNavigation>
  );
}