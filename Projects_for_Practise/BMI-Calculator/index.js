const form=document.querySelector('form');
//this will give empty value
//const height=parseInt(document.querySelector('#height').value)
form.addEventListener('submit',function(e){
    e.preventDefault();
    const height=parseInt(document.querySelector('#height').value)
    const weight=parseInt(document.querySelector('#weight').value)
    const results=document.querySelector('#results');
    const resultsType=document.querySelector('#resultsType');
    if(height===''||height<0||isNaN(height)){
        results.innerHTML=`Please give a valid height ${height}`;
    }else if(weight ===''|| weight<0 || isNaN(weight)){
        results.innerHTML=`Please give a valid weight${weight}`;

    } else{
        const bmi=(weight/((height*height)/10000)).toFixed(2);
        let bmi_type=``;
        if(bmi){
            if(bmi>=18.0&&bmi<18.6){
                bmi_type=`Under Weight`;
            }
            else if(bmi>=18.6&&bmi<24.9) {
                bmi_type=`Normal Range`;
            }
            else{
                bmi_type=`Overweight`;
            }
        }
    //show the result
    results.innerHTML=`<span> Bmi is :${bmi}</span>`;
    resultsType.innerHTML=`<span>Your Bmi is :${bmi_type}</span>`
    }

});