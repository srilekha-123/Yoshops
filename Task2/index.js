function check(temp){
    let nameInput = document.getElementById("i1");
    let addressInput = document.getElementById("i2");
    let employerIdInput = document.getElementById("i3");
    let dobInput = document.getElementById("i4");
    let hoursWorkedInput = document.getElementById("i5");
    let netPayableInput = document.getElementById("i6");
    let wagesPerHourInput = document.getElementById("i7");
    let taxPaidInput = document.getElementById("i8");
    let payableInput = document.getElementById("i9");
    if (temp==3){
        let nameCell = document.getElementById('i11');
        let addressCell = document.getElementById('i12');
        let employerIdCell = document.getElementById('i13');
        let dobCell = document.getElementById('i14');
        let hoursWorkedCell = document.getElementById('i15');
        let netPayableCell = document.getElementById('i16');
        let wagesPerHourCell = document.getElementById('i17');
        let taxPaidCell = document.getElementById('i18');
        let payableCell = document.getElementById('i19');
        var m=document.getElementById("date");
        m.innerText=new Date().toLocaleDateString();
        nameCell.innerText = nameInput.value;
        addressCell.innerText = addressInput.value;
        employerIdCell.innerText = employerIdInput.value;
        dobCell.innerText = dobInput.value;
        hoursWorkedCell.innerText = hoursWorkedInput.value;
        netPayableCell.innerText = netPayableInput.value;
        wagesPerHourCell.innerText = wagesPerHourInput.value;
        taxPaidCell.innerText = taxPaidInput.value;
        payableCell.innerText = payableInput.value;
    }
}