let findMatching = (array, name) =>{
    return array.filter((val)=>(val==name)||(val==name.toLowerCase()))
}

let fuzzyMatch = (array, name)=>{
    return array.filter((val)=>val[0]==name[0])
}

let matchName = (array,string)=>{
    return array.filter((obj)=>obj.name==string)

}