var update , todaydate;
var jsondata , Globalobj , nepalobj;
async function getdata(){
    try {
      var data = await fetch("https://nepalcorona.info/api/v1/data/world?fbclid=IwAR0HMHtkVYdHYgVw28DceOwlgFgc4oAqsUSeGlAbe7HXMqkvoxUfEHRH79c");
      jsondata = await data.json();
      Globalobj =  jsondata[0];
      nepalobj =  getdataofneapl();   
    } catch (error) {
        console.log(error);
    }
}
getdata().then(()=>{
  showGlobaldata();
  showNepaldata();
});

function showGlobaldata(){
  document.getElementById('totalCases').textContent = `${Globalobj.totalCases}`;
  document.getElementById('newCases').textContent = `+${Globalobj.newCases}`;
  document.getElementById('totalDeaths').textContent = `${Globalobj.totalDeaths}`;
  document.getElementById('newDeaths').textContent = `+${Globalobj.newDeaths}`;
  document.getElementById('activeCases').textContent = `${Globalobj.activeCases}`;
  document.getElementById('totalRecovered').textContent = `${Globalobj.totalRecovered}`;
  document.getElementById('criticalCases').textContent = `${Globalobj.criticalCases}`; 
}
function showNepaldata(){
document.getElementById('totalcaseNepa').textContent = `${nepalobj.totalCases}`;
document.getElementById('ncNepal').textContent = `+${nepalobj.newCases}`;
document.getElementById('tdNepal').textContent = `${nepalobj.totalDeaths}`;
document.getElementById('ndNepal').textContent = `+${nepalobj.newDeaths}`;
document.getElementById('acNepal').textContent = `${nepalobj.activeCases}`;
document.getElementById('trNepal').textContent = `${nepalobj.totalRecovered}`;
document.getElementById('ccNepal').textContent = `${nepalobj.criticalCases}`;
// document.getElementById('AcatotalcaseNepase').textContent = `${Globalobj.totalCases}`;
}

function getdataofneapl(){
  var obj;
  jsondata.forEach(element => {
    if(element.country === "Nepal"){
     obj = element;
    }
  });
  return obj;
}


async function getdate(){
  try {
    var data = await fetch("https://nepalcorona.info/api/v1/data/nepal?fbclid=IwAR3IB4y_UIuC7dgsuL8b-DHgH9k2u7kDzCTlCqMJoWCfNYJsyxqnyEF-fP8");
    data  = await data.json();
    return data;    
  } catch (error) {
      console.log(error);
  }
}
getdate().then((data)=>{
console.log(data)
console.log(data.updated_at);
console.log(data.latest_sit_report.date);
document.getElementById('update').textContent = ` आज  :  ${data.latest_sit_report.date}`;
document.getElementById('todaydate').textContent = `नयाँ डाटा  :  ${data.updated_at}`;
});
