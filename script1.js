var request = new XMLHttpRequest();
request.open('GET', 'https://raw.githubusercontent.com/rvsp/restcountries-json-data/master/res-countries.json', true);
request.send();
request.onload = function() {
    var data = JSON.parse(this.response);
    console.log(data);



    var res = data.filter((item) => item.population < 200000).map((item) => item.name + item.population)
    console.log(res)
}