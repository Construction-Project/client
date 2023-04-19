address






const response = await fetch('http://localhost:3600/map/autoComplete', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ text: address })
        })