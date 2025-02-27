function showBox(){
    const ip_addr = document.getElementById('ip_addr');
    const box = document.getElementById('search_location');
    box.style.display = 'none';
    ip_addr.style.display = 'block';
}

async function fetchData(){
    const cardDisp = document.getElementById('result-card');
    cardDisp.style.display = 'block';   
    try {
        const ip_addr = document.getElementById('ip_addr').value.toLowerCase();
        const response = await fetch(`https://ipapi.co/${ip_addr}/json/`);
        if(!response.ok){
            alert("Invalid IP Address!");
        }
        else{
            const data = await response.json();
            // console.log(data);
            const orgDisp = document.getElementById('org');
            const ipDisp = document.getElementById('ip');
            const ipverDisp = document.getElementById('ip_ver');
            const countryDisp = document.getElementById('country');
            const regionDisp = document.getElementById('region');
            const cityDisp = document.getElementById('city');
            const latitudeDisp = document.getElementById('latitude');
            const longitudeDisp = document.getElementById('longitude');
             orgDisp.textContent = data.org;
             ipDisp.textContent =data.ip;
             ipverDisp.textContent = data.version;
             countryDisp.textContent =data.country_name;   
             regionDisp.textContent = data.region;   
             cityDisp.textContent = data.city;
             latitudeDisp.textContent =data.latitude;
             longitudeDisp.textContent = data.longitude;
        }

    } catch (error) {
        console.error(error);
    }
}
