function BmiCalculator(weight, height)
{
    let Bmi = weight / (height*height);
    if (Bmi < 18.5 )
    {
        console.log("your BMI =" + `${Bmi}` + ", underweight.");
    }
    else if (18.5 <= Bmi < 24.9 )
    {
        console.log("your BMI =" + `${Bmi}` + ", normal weight.");
    }
    else if (25 < Bmi < 29.9 )
    {
        console.log("your BMI =" + `${Bmi}` + ", overweight.");
    }
    else if (30 < Bmi < 34.9 )
    {
        console.log("your BMI =" + `${Bmi}` + ", obese.");
    }
    else
    {
        console.log("your BMI =" + `${Bmi}` + ", extremely obese.");
    }


}

sample1 = BmiCalculator(78,1.8);

