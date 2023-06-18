const addNumbersSpreadOperator=(...numbers)=>{
    const sum=numbers.reduce((total,number)=>{
    total+=number;
    return total;
    },0)

    return sum;
}



module.exports=addNumbersSpreadOperator;