import * as React from 'react';
import { useState, useEffect } from "react";
import TextField from '@mui/material/TextField';
import Autocomplete from '@mui/material/Autocomplete';
import MapGov from "./mapGov"


export default function Location({ setLocation }) {
    const [address, setAddress] = useState("ישראל");
    const [suggestions, setSuggestions] = useState([]);
    const getSuggestions = async () => {
        if (!address) return;
        const response = await fetch('http://localhost:3600/map/autoComplete', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ text: address })
        })
        if (response?.ok) {
            const options = await response.json();
            setSuggestions(options);
        }
    }
    useEffect(() => { getSuggestions() }, [address]);
    return (
        <>
            <Autocomplete
                style={{ margin: "20px", paddingTop: "60px" }}
                id="free-solo-demo"
                freeSolo
                options={suggestions}
                onChange={e => { setLocation(e.target.innerHTML) }}
                renderInput={(params) => <TextField {...params} label="Your location" onChange={e => setAddress(e.target.value)} />}
            />
            <MapGov address={address}></MapGov>
        </>
    );
}
