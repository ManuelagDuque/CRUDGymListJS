//GlobalVariables

const formUI = document.querySelector("#form");
const activitiesListUI = document.getElementById("activitiesList");
let arrayActivities = [];

//Functions

const createItem = (activity) => {
  let item = {
    activity: activity,
    status: false
  };

  arrayActivities.push(item);

  return item;
};

const saveDB = () => {
  localStorage.setItem("routine", JSON.stringify(arrayActivities));

  showDB()
};

const showDB = () => {
  activitiesListUI.innerHTML = "";
  arrayActivities = JSON.parse(localStorage.getItem("routine"));

  console.log(arrayActivities);

  if (arrayActivities === null) {
    arrayActivities = [];
    return arrayActivities;
  }

  arrayActivities.forEach((element, index) => {
    
    let alertClass = "alert-primary";

    if (element.status == true) {
        alertClass = "alert-success";
    }

    //Podria mejorar con esto: const alertClass2 = element.status ? "alert-success" : "alert-primary"; Es una operacion terniaria

    activitiesListUI.innerHTML += 
    ` <div class="alert ${alertClass}" role="alert">
        <i class="material-icons float-left mr-2"> accessibility</i>
        <b>${element.activity}</b> - ${element.status} 
        <span class="float-right">  
            <i onclick="statusChange(${index})" class="material-icons"> done </i>
            <i class="material-icons"> delete </i>
        </span>
      </div>`;
  });
};

const statusChange = (index) => {

    arrayActivities[index].status = true; /*Podría mejorar con esto: !arrayActivities[indice].status; Es una Operacion de neagación que permite cambiar nuevamente del estatus*/

    console.log(arrayActivities[index].status);

    saveDB();

}

const deleteDB = (activity)=> {



}




//EventListener

formUI.addEventListener("submit", e => {
  e.preventDefault();
  let activitiesListUI = document.querySelector("#activity").value;

  createItem(activitiesListUI);
  saveDB();

  formUI.reset();
});

document.addEventListener("DOMContentLoaded", showDB);
 
activitiesListUI.addEventListener('click', (e)=>{

    e.preventDefault (); 

})
