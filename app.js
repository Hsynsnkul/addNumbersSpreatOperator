const addNumbersSpreadOperator=(...numbers)=>{
    const sum=numbers.reduce((total,number)=>{
    total+=number;
    return total;
    },0)

    return sum;
}

console.log(addNumbersSpreadOperator(1,2,3,4,5,6,7,8,9));

