//// PERSON 4 REQUEST

var person4Req = new XMLHttpRequest();
person4Req.addEventListener('load', function(data){

    //console.log(data.target.responseText);
    const person4Obj = JSON.parse(data.target.responseText);
    //console.log('person4Obj:', person4Obj);
    
    const getPerson4Name = document.getElementById('person4Name');
    getPerson4Name.innerHTML = person4Obj.name;

    //// NEW REQUEST FOR HOMEWORLD LINK

    var planetReq = new XMLHttpRequest();
    planetReq.addEventListener('load', function(data){
        const homeWorld4 = JSON.parse(data.target.responseText);
    
        //console.log(homeWorld4)

        const getPerson4HomeWorld = document.getElementById('person4HomeWorld');
        getPerson4HomeWorld.innerHTML = homeWorld4.name;
    });

    planetReq.open('GET', "https://swapi.co/api/planets/1/");
    planetReq.send();
    
});

person4Req.open('GET', 'https://swapi.co/api/people/4/');
person4Req.send();


//// PERSON 14 REQUEST

var person14Req = new XMLHttpRequest();
person14Req.addEventListener('load', function(data){

    //console.log(data.target.responseText);
    const person14Obj = JSON.parse(data.target.responseText);
    //console.log('person14Obj:', person14Obj);
    
    const getPerson14Name = document.getElementById('person14Name');
    getPerson14Name.innerHTML = person14Obj.name;

    //// NEW REQUEST FOR HOMEWORLD LINK

    var speciesReq = new XMLHttpRequest();
    speciesReq.addEventListener('load', function(data){
        const species14 = JSON.parse(data.target.responseText);
    
        //console.log(species14.name)

        const getPerson14Species = document.getElementById('person14Species');
        getPerson14Species.innerHTML = species14.name;
    });

    speciesReq.open('GET', "https://swapi.co/api/planets/22/");
    speciesReq.send();
    
});

person14Req.open('GET', 'https://swapi.co/api/people/14/');
person14Req.send();


//// 

const request = (url, callback) => {
    const oReq = new XMLHttpRequest();
    oReq.addEventListener('load', function(data) {
      const resData = JSON.parse(data.target.responseText);
      callback(resData);
    });
    oReq.open('GET', url);
    oReq.send();
  };
  


  const getFilmList = document.getElementById('filmList');
  
  request('https://swapi.co/api/films/', function(data) {
    // console.log('data:', data.results[0].title);
    data.results.forEach((movie) => {
        //return movie.title;
        //console.log(movie.planets)

        const createElem = document.createElement('li');
        getFilmList.appendChild(createElem);
        createElem.innerHTML = movie.title;
        const createPlanetHead = document.createElement('h3');
        createElem.appendChild(createPlanetHead);
        createPlanetHead.innerHTML = 'Planets';
    
        //console.log(movie.planets);
        movie.planets.forEach((planetList) => {
            //console.log(planetList);
            request(planetList, function(data) {
                //console.log(data.name);
                const createPlanetElem = document.createElement('ul');
                createPlanetHead.appendChild(createPlanetElem);
                createPlanetElem.innerHTML = data.name;
                
            });
        });

    });

    //console.log(data)

  });
