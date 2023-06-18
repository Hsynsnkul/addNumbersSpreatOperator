const multiplication=(...numbers)=>{
    const result=numbers.reduce((acc,curr)=>{
        acc*=curr;
        return acc;
    },1)
    return result;
}



module.exports=multiplication;