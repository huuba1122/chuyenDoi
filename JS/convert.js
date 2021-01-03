

// Chuyển đổi tiền tệ


    //hàm tính toán đổi tiền từ From > to



function convertFrom(){

    var selectFrom = document.getElementById('select_from').value;
    var selectTo = document.getElementById('select_to').value;
    var inputFrom = +document.getElementById('input_cr_from').value;
    var resultFrom = inputFrom*selectFrom/selectTo;

    if(Number.isInteger(resultFrom)==false){
        document.getElementById('input_cr_to').value = resultFrom.toFixed(2);
    }else {
        document.getElementById('input_cr_to').value = resultFrom;
    }

    // document.getElementById('input_cr_to').value = resultFrom.toFixed(2);

}

function convertTo(){
    var selectFrom = document.getElementById('select_from').value;
    var selectTo = document.getElementById('select_to').value;
    var inputTo = +document.getElementById('input_cr_to').value;

    var resultTo = inputTo*selectTo/selectFrom;

    if(Number.isInteger(resultTo)==false){
        document.getElementById('input_cr_from').value = resultTo.toFixed(2);
    }else {
        document.getElementById('input_cr_from').value = resultTo;
    }


}



//          hàm tích chỉ số BMI

function BMI_function1(){

    var weight = +document.getElementById('input_weight').value;
    var height = +document.getElementById('input_height').value;
    var resultbmi = weight/(height**2);

    if (resultbmi != Infinity){

            if(Number.isInteger(resultbmi)){
                document.getElementById('out_bmi').value = resultbmi;
            }else {
                document.getElementById('out_bmi').value = resultbmi.toFixed(1);
            }

    }else {
        document.getElementById('out_bmi').value = "";
    }

}