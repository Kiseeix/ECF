const APIKEY = '7ac0aa7348b2f1c3d8b392fe5d749346';

// Function pour chercher l'api et afficher les informations
let apiCall = function (city){
    let url = 'https://api.openweathermap.org/data/2.5/weather?q='+city +'&appid=7ac0aa7348b2f1c3d8b392fe5d749346&units=metric&lang=fr';

    fetch(url).then( response => 
        response.json().then ((data) => {
            console.log(data);
            document.querySelector('#city').innerHTML=
            '<i class="fas fa-city"></i>' + data.name;
            document.querySelector('#temp').innerHTML=  
                "<i class='fas fa-thermometer-half'></i>" + data.main.temp +'°';
            document.querySelector('#humidity').innerHTML= 
                "<i class='fas fa-water'></i>" + data.main.humidity + '%';
            document.querySelector('#wind').innerHTML= 
            '<i class="fas fa-wind"></i>' + data.wind.speed + 'km/h';
    
        })

    ).catch(err => console.log('Erreur :' + err));
;}

// Function pour faire fonctionne la recherche de ville
document.querySelector('form').addEventListener('submit', function (e) {
    e.preventDefault();
    let ville = document.querySelector('#inputCity').value;
    
    apiCall(ville);
});

apiCall('Nancy');