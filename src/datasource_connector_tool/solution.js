// Problem 2
// Task: Implement a datasource connector to abstract away data retrieval and manipulation from the `ViewControllers`.  
// Your solution shall use only [Vanilla JavaScript](http://vanilla-js.com).  
class Datasource {

    getPrices() {
        return new Promise((getSuccess, getError) => {
            let results = new XMLHttpRequest();
            results.open("GET", "https://static.ngnrs.io/test/prices", true);
            results.onreadystatechange = function () {
                if (results.readyState === 4) {
                    if (results.status === 200) {
                        let response = JSON.parse(results.response).data.prices;
                        response.forEach(function(ar, index) {
                            response[index].mid = function(){
                                return (this.buy + this.sell) / (2 * 100);
                            }
                            response[index].quote = function(){
                                return this.pair.substring(3, this.pair.length);
                            }
                        });
                        getSuccess(response);
                    } else {
                        getError(results.statusText);
                    }
                }
            };
            results.send();
        });
    }
}

let ds = new Datasource();
ds.getPrices()
    .then(prices => {
        prices.forEach(price => {
            console.log(`Mid price for ${ price.pair } is ${ price.mid() } ${ price.quote() }.`);
        });
    }).catch(error => {
        console.error(error);
    });