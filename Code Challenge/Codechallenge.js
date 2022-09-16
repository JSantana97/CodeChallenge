var targetString = "sdñlfjsadlkjhwoeirfhwef90220f2209h230zsdfsdfsdfwetf92werwef0qfh02322342352452523235423423423423424242424234242346546.67.678.678.768.54645456456435ytry45wrwerwegdsgerhgergwrgwefewrwf56.7,56-7567.,4-36.,356g4ef23fweqfw.3,332049209uw0e9fu0fas9das0fdas9das09d8asd09a8fsa09fa8sfsd098a908fas90f8as09fds8fasd09f8f098fas09fdas8fdsa09f8dsaf09as8das90f8s09aiew9f032r23-.4,23.4,234.23,m4.24m23.42,423.,e324.,2134,.234.,241,.34,123.,12312,.423.,wr,.fr23,.r,r.23.,r2.,r23,r.2.3,r23,e123,4.er2r34t,4.5t,645321.5,6756.786576.,354.,23re.,we";
var rExp1 = /[1-9]/gim;
var rExp2 = /[1|3|5|7|9]/gim;
console.log(targetString.match(rExp1));
var arr = targetString.match(rExp2);
console.log(arr);
var sum = 0;
if (arr) {
    arr.forEach(function (num) {
        sum += Number(num);
    });
}
console.log("Resultado de la suma de los números impares: " + sum);
//by.xpath(//div[contains(@class,'september')]//div[contains(@class,'irritating')]//li)
