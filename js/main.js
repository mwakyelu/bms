(function () {
    'use strict'
  
    // Fetch all the forms we want to apply custom Bootstrap validation styles to
    var forms = document.querySelectorAll('.needs-validation')
  
    // Loop over them and prevent submission
    Array.prototype.slice.call(forms)
      .forEach(function (form) {
        form.addEventListener('submit', function (event) {
          if (!form.checkValidity()) {
            event.preventDefault()
            event.stopPropagation()
          }
          form.classList.add('was-validated')
        },false)
      })
  })()


// Hospital Class
class Hospital{
  constructor(hospitalName, region, district,street, kata, hospitalType){
    this.hospitalName = hospitalName;
    this.region = region;
    this.district = district;
    this.street = street;
    this.kata = kata;
    this.hospitalType = hospitalType;
  }
}

//UI Class
class UI{
  static displayHospitals(){
    const storedHospitals = [
      {
        hospitalName: 'KIgamboni',
        region: 'Dar es Salaam', 
        district: 'Kigamboni',
        street: 'Kizani', 
        kata: 'Kizani', 
        hospitalType: 'public'
      },
      {
        hospitalName: 'Kingo',
        region: 'Dar es Salaam', 
        district: 'Kinondoni',
        street: 'Mikocheni', 
        kata: 'Kizani', 
        hospitalType: 'public'
      },
      {
        hospitalName: 'Kairuki',
        region: 'Dar es Salaam', 
        district: 'Kinondoni',
        street: 'Mikocheni', 
        kata: 'Kizani', 
        hospitalType: 'private'
      }
    ];

    const hospitals = storedHospitals;
    hospitals.forEach((hospital) => UI.addHospitalList(hospital));
  }

  static addHospitalList(hospital){
    const list = document.querySelector('#hospitalList');

    const row = document.createElement('tr');
    row.innerHTML = `
      <td>${hospital.hospitalName}</td>
      <td>${hospital.hospitalType}</td>
      <td>${hospital.region}</td>
      <td>${hospital.district}</td>
      <td>${hospital.street}</td>
      <td>${hospital.kata}</td>
      <td>
          <button type="button" class="btn btn-outline-success btn-edit" data-bs-toggle="modal" data-bs-target="#editHospital"><i class="fas fa-edit"></i></button>
      </td>
      <td>
          <a type="button" class="delete btn btn-outline-danger" data-bs-toggle="modal" data-bs-target="#deleteHospital"><i class="fas fa-trash-alt"></i></a>
      </td>
    `;

    list.appendChild(row);
  }

  static deleteHospital(el){
    if(el.classList.contains('delete')){
      el.parentElement.parentElement.remove();
    }
    if(el.parentElement.classList.contains('delete')){
      el.parentElement.parentElement.parentElement.remove();
    }
  }
  
  static clearFields(){
    document.querySelector('#hospitalName').value = '';
    document.querySelector('#hospitalType').value = '';
    document.querySelector('#region').value = ''; 
    document.querySelector('#district').value = '';
    document.querySelector('#street').value = '';
    document.querySelector('#kata').value = '';
  }

}

// Event Display HosSpitals
document.addEventListener('DOMContentLoaded', UI.displayHospitals);

// Event Add Hospital
const addHosp = document.querySelector('#hospitalForm').addEventListener('submit', (e) =>
{
  // Prevent DEfault
  e.preventDefault();
  // Get form values
  const hospitalName = document.querySelector('#hospitalName').value;
  const hospitalType = document.querySelector('#hospitalType').value;
  const region = document.querySelector('#region').value; 
  const district = document.querySelector('#district').value;
  const street = document.querySelector('#street').value;
  const kata = document.querySelector('#kata').value;

  // Instatiate A Hospital
  const hospital = new Hospital(hospitalName,region,district,street,kata,hospitalType);

  // Add Book to UI
  UI.addHospitalList(hospital);
  // Clear Fields
  UI.clearFields();
});

// Event Remove Hospital
document.querySelector('#hospitalList').addEventListener('click', (e)=>{
  UI.deleteHospital(e.target);
}
)
